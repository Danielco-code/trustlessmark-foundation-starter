#!/usr/bin/env node
// hash-manifest.cjs
// Scans ./public/proofs/*/registry.json and computes SHA-256 digests,
// inserting them into ./public/proofs/fcc_cert_manifest.json.

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const proofsDir = path.resolve("./public/proofs");
const manifestPath = path.join(proofsDir, "fcc_cert_manifest.json");

// Load manifest
if (!fs.existsSync(manifestPath)) {
  console.error(`❌ Manifest not found at ${manifestPath}`);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
manifest.hashes = manifest.hashes || {};
manifest.proofs = manifest.proofs || {};

const productDirs = fs
  .readdirSync(proofsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory());

for (const dir of productDirs) {
  const registryFile = path.join(proofsDir, dir.name, "registry.json");
  if (!fs.existsSync(registryFile)) {
    console.warn(`⚠️ Skipping ${dir.name} — no registry.json`);
    continue;
  }

  const buf = fs.readFileSync(registryFile);
  const hash = crypto.createHash("sha256").update(buf).digest("base64");

  manifest.proofs[dir.name] = `proofs/${dir.name}/registry.json`;
  manifest.hashes[dir.name] = `sha256-${hash}`;

  console.log(`✅ ${dir.name}: ${manifest.hashes[dir.name]}`);
}

// Update timestamp
manifest.issued = new Date().toISOString();

// Save updated manifest
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");

console.log(`\n✨ Manifest updated successfully:\n${manifestPath}`);
