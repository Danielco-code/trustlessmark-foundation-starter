/**
 * update-discovery.js
 * --------------------------------------------------------
 * Scans /public/verify/ for verification JSONs, computes
 * SHA3-256 integrity hashes, and builds a unified
 * /.well-known/trustlessmark.json discovery file.
 * --------------------------------------------------------
 */

import fs from "fs-extra";
import path from "path";
import crypto from "crypto";

const VERIFY_DIR = path.resolve("public/verify");
const OUTPUT_PATH = path.resolve("public/.well-known/trustlessmark.json");
const BASE_DOMAIN = "https://verify.trustlessmark.org";

const discovery = {
  $schema: `${BASE_DOMAIN}/verify/schema/verification.schema.json`,
  canonical_domain: "trustlessmark.org",
  organization: {
    name: "TrustlessMark Foundation",
    url: "https://trustlessmark.org",
    description:
      "A public registry for verifiable product certifications and transparency proofs."
  },
  entities: [],
  version: "1.0.0",
  last_updated: new Date().toISOString().split("T")[0]
};

// Helper: recursively find JSON files (excluding schema)
function findJsonFiles(dir) {
  const files = fs.readdirSync(dir);
  let results = [];

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(findJsonFiles(fullPath));
    } else if (file.endsWith(".json") && !file.includes("schema")) {
      results.push(fullPath);
    }
  }

  return results;
}

// Compute SHA3-256 hash of a file's contents
function computeHash(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const hash = crypto.createHash("sha3-256");
  hash.update(content);
  return hash.digest("hex");
}

// Extract metadata from path
function extractMeta(filePath) {
  const relPath = path.relative(VERIFY_DIR, filePath).replace(/\\/g, "/");
  const parts = relPath.split("/");
  return {
    entity: parts[0] || "unknown",
    productType: parts[1] || null,
    product: parts[2] || null,
    lot: parts.find((p) => p.startsWith("lot-")) || null,
    filename: parts[parts.length - 1],
    url: `${BASE_DOMAIN}/verify/${relPath}`
  };
}

// Build discovery object
const files = findJsonFiles(VERIFY_DIR);
const entityMap = {};

files.forEach((filePath) => {
  try {
    const meta = extractMeta(filePath);
    const rawContent = fs.readFileSync(filePath, "utf8");
    if (!rawContent.trim()) throw new Error("File is empty");

    const json = JSON.parse(rawContent);
    const hash = computeHash(filePath);
    const { entity, productType, product, lot, url } = meta;

    if (!entityMap[entity]) {
      entityMap[entity] = { code: entity, name: entity.toUpperCase(), categories: [] };
    }

    const e = entityMap[entity];
    const category = e.categories.find((c) => c.type === productType) || {
      type: productType || "uncategorized",
      products: []
    };

    const productEntry = {
      code: product || json.entity?.name || "unknown",
      claim_type: json.claim_type,
      latest_lot: lot,
      verification_url: url,
      integrity: {
        algorithm: "SHA3-256",
        hash
      }
    };

    if (!category.products.find((p) => p.verification_url === url)) {
      category.products.push(productEntry);
    }

    if (!e.categories.find((c) => c.type === category.type)) {
      e.categories.push(category);
    }
  } catch (err) {
    console.warn(`⚠️  Skipped ${filePath}: ${err.message}`);
  }
});

discovery.entities = Object.values(entityMap);

// Write final discovery file
fs.ensureDirSync(path.dirname(OUTPUT_PATH));
fs.writeJsonSync(OUTPUT_PATH, discovery, { spaces: 2 });

console.log(`✅ Discovery file updated with integrity hashes: ${OUTPUT_PATH}`);
