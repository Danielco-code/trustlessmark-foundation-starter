/**
 * audit-live.js
 * --------------------------------------------------------
 * Fetches the live discovery file from the production site
 * if missing, then re-hashes all proof files listed in it
 * to confirm on-chain integrity.
 * --------------------------------------------------------
 */

import fs from "fs";
import crypto from "crypto";
import https from "https";

const LIVE_DISCOVERY_URL =
  "https://verify.trustlessmark.org/.well-known/trustlessmark.json";
const LOCAL_DISCOVERY_PATH = "live-trustlessmark.json";

function sha3(content) {
  const h = crypto.createHash("sha3-256");
  h.update(content);
  return h.digest("hex");
}

function fetch(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

async function ensureDiscoveryFile() {
  if (fs.existsSync(LOCAL_DISCOVERY_PATH)) {
    console.log(`📄 Using existing ${LOCAL_DISCOVERY_PATH}`);
    return fs.readFileSync(LOCAL_DISCOVERY_PATH, "utf8");
  }

  console.log(`🌐 Fetching live discovery file from ${LIVE_DISCOVERY_URL}`);
  const data = await fetch(LIVE_DISCOVERY_URL);
  fs.writeFileSync(LOCAL_DISCOVERY_PATH, data);
  console.log(`✅ Saved ${LOCAL_DISCOVERY_PATH}`);
  return data;
}

async function main() {
  try {
    const discoveryData = await ensureDiscoveryFile();
    const discovery = JSON.parse(discoveryData);
    let total = 0,
      ok = 0;

    for (const entity of discovery.entities || []) {
      for (const cat of entity.categories || []) {
        for (const prod of cat.products || []) {
          total++;
          const url = prod.verification_url;
          const expected = prod.integrity?.hash;
          if (!expected) {
            console.log(`⚠️  No integrity hash for ${url}`);
            continue;
          }
          try {
            const proofData = await fetch(url);
            const actual = sha3(proofData);
            if (actual === expected) {
              console.log(`✅  OK  ${url}`);
              ok++;
            } else {
              console.error(
                `❌  MISMATCH  ${url}\n   expected: ${expected}\n   actual:   ${actual}`
              );
            }
          } catch (err) {
            console.error(`⚠️  Error fetching ${url}: ${err.message}`);
          }
        }
      }
    }

    console.log(`\nSummary: ${ok}/${total} proofs verified successfully.`);
    if (ok !== total) process.exit(1);
  } catch (err) {
    console.error(`❌ Audit failed: ${err.message}`);
    process.exit(1);
  }
}

main();

