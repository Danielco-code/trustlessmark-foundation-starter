#!/usr/bin/env node

/**
 * TrustlessMark Manifest Signer (CommonJS)
 * Usage:
 *   node scripts/sign-manifest.cjs --manifest ./public/proofs/fcc_cert_manifest.json --private ./secrets/fcc_signing_key.pem --out ./public/proofs/fcc_cert_manifest.sig
 */

const fs = require("fs");
const crypto = require("crypto");

// CLI arg parser
const args = process.argv.slice(2);
const getArg = (flag) => {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : null;
};

const manifestPath = getArg("--manifest");
const privateKeyPath = getArg("--private");
const outputPath = getArg("--out") || "./public/proofs/manifest.sig";

if (!manifestPath || !privateKeyPath) {
  console.error("Usage: --manifest <file> --private <pem> [--out <sigfile>]");
  process.exit(1);
}

try {
  const manifest = fs.readFileSync(manifestPath, "utf8");
  const privateKey = fs.readFileSync(privateKeyPath, "utf8");

  const sign = crypto.createSign("RSA-SHA256");
  sign.update(manifest);
  sign.end();

  const signature = sign.sign(privateKey);
  fs.writeFileSync(outputPath, signature);

  console.log("✔ Manifest signed successfully");
  console.log(`Manifest: ${manifestPath}`);
  console.log(`Signature written: ${outputPath}`);
} catch (err) {
  console.error("❌ Error during signing:", err.message);
  process.exit(1);
}
