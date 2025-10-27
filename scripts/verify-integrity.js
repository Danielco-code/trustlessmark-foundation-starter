/**
 * verify-integrity.js
 * --------------------------------------------------------
 * Validates hashes in /.well-known/trustlessmark.json
 * against the actual verification JSON files.
 * Usage:
 *   npm run verify-integrity
 * --------------------------------------------------------
 */

import fs from "fs-extra";
import path from "path";
import crypto from "crypto";

const BASE_DIR = path.resolve("public");
const VERIFY_DIR = path.join(BASE_DIR, "verify");
const DISCOVERY_PATH = path.join(BASE_DIR, ".well-known", "trustlessmark.json");

function computeHash(content) {
  const hash = crypto.createHash("sha3-256");
  hash.update(content);
  return hash.digest("hex");
}

function verifyFile(entry) {
  const url = new URL(entry.verification_url);
  const relPath = url.pathname.replace(/^\/verify\//, "");
  const filePath = path.join(VERIFY_DIR, relPath);
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const actual = computeHash(content);
    const expected = entry.integrity?.hash;
    const ok = actual === expected;
    console.log(
      ok
        ? `✅  ${relPath} verified (${entry.integrity.algorithm})`
        : `❌  ${relPath} mismatch!\n     expected: ${expected}\n     actual:   ${actual}`
    );
    return ok;
  } catch (err) {
    console.warn(`⚠️  Could not read ${relPath}: ${err.message}`);
    return false;
  }
}

function main() {
  if (!fs.existsSync(DISCOVERY_PATH)) {
    console.error("❌  trustlessmark.json not found. Run npm run update-discovery first.");
    process.exit(1);
  }

  const discovery = fs.readJsonSync(DISCOVERY_PATH);
  console.log(`🔍  Verifying integrity for ${discovery.entities.length} entities...\n`);

  let total = 0;
  let okCount = 0;

  discovery.entities.forEach((entity) => {
    entity.categories?.forEach((cat) => {
      cat.products?.forEach((p) => {
        total++;
        if (verifyFile(p)) okCount++;
      });
    });
  });

  console.log(`\nSummary: ${okCount}/${total} files verified successfully.`);
}

main();
