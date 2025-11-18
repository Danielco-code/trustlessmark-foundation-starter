# TrustlessMark — System Topology (Updated)

> **Goal:** Clear view of how domains, repos, and Cloudflare components interconnect — with corrected final structure using trustlessmark‑foundation as the primary deployed site.

---

## Final Three‑Tier Architecture

```mermaid
graph TD
  %% Domains
  subgraph Domains
    A1[trustlessmark.org\n→ Pages: trustlessmark‑foundation]
    A2[cdn.trustlessmark.org\n→ Pages: trustlessmark‑cdn]
    A3[verify.trustlessmark.org\n→ Worker: trustlessmark‑protect‑worker]
    A4[shop.flyingcircus.coffee\n→ Shopify Hydrogen]
  end

  %% Repositories
  subgraph GitHub Repos
    R1[flying‑circus‑coffee‑hydrogen]
    R2[trustlessmark‑foundation]
    R3[trustlessmark‑cdn]
    R4[trustlessmark‑protect‑worker]
  end

  %% Cloudflare
  subgraph Cloudflare
    subgraph Pages
      P1[trustlessmark‑foundation\n(main site + verify UI)]
      P2[trustlessmark‑cdn\n(public proofs + badge.js)]
    end
    subgraph Workers
      W1[trustlessmark‑protect‑worker\n(signing + validation endpoint)]
    end
  end

  %% Build mappings
  R2 -->|npm ci && npm run build| P1
  R3 -->|vite build (static)| P2
  R4 -->|wrangler publish| W1
  R1 -->|Oxygen deploy| A4

  %% DNS & routing
  A1 --> P1
  A2 --> P2
  A3 --> W1
  A4 --> R1

  %% Runtime Flow (Hydrogen → CDN → Foundation)
  subgraph Product Flow
    U[Shopper @ Flying Circus Coffee]
    S1[Hydrogen product page]
    B1[badge.js fetch from cdn.trustlessmark.org]
    M1[map.json → registry.json → manifest.json]
    V1[trustlessmark.org/verify.html]
  end

  U --> S1
  S1 --> B1
  B1 -->|GET /proofs/map.json| P2
  B1 -->|GET /proofs/F00x/registry.json| P2
  B1 -->|GET /proofs/F00x/manifest.json| P2
  S1 -. opens verify link .-> V1
  V1 --> P1

  %% Optional validation
  B1 -. optional call .-> W1
  W1 -. verify response .-> P2
```

---

## Roles & Responsibilities

| Layer | Repository | Hosting | Purpose |
|--------|-------------|----------|----------|
| **Foundation** | `trustlessmark-foundation` | Cloudflare Pages | Main documentation and verification UI (`trustlessmark.org`) |
| **CDN** | `trustlessmark-cdn` | Cloudflare Pages | Static proofs, badge.js, registry manifests (`cdn.trustlessmark.org`) |
| **Worker** | `trustlessmark-protect-worker` | Cloudflare Workers | Optional signed verification layer (`verify.trustlessmark.org`) |
| **Storefront** | `flying-circus-coffee-hydrogen` | Shopify (Oxygen) | Customer‑facing shop with badge.js injection |

---

## Data Flow Summary
1. **Hydrogen** displays a product → checks tags/type → injects badge.js.
2. **badge.js** loads `map.json` from CDN → identifies proof folder (F001, F002…)
3. Fetches `registry.json` and `manifest.json` from CDN → renders verification badge.
4. When a user clicks *View Proof*, browser opens `trustlessmark.org/verify.html?url=…` (served by Foundation site).
5. (Optional) `verify.trustlessmark.org` Worker can validate digital signature headers or forward requests securely.

---

## DNS / Domain Configuration
| Domain | Cloudflare Target | Type | Proxy | Purpose |
|---------|--------------------|-------|--------|----------|
| `trustlessmark.org` | trustlessmark‑foundation.pages.dev | CNAME / Apex flattening | ☁️ | Public docs + Verify UI |
| `cdn.trustlessmark.org` | trustlessmark‑cdn.pages.dev | CNAME | ☁️ | Static proofs / badges |
| `verify.trustlessmark.org` | Cloudflare Worker route | Worker binding | ☁️ | Signature verification |
| `shop.flyingcircus.coffee` | Shopify Hydrogen | External | — | Flying Circus Coffee storefront |

> Cloudflare automatically issues TLS certs for all proxied domains. Ensure all previous `foundation‑starter` references are removed to avoid cross‑account CNAME errors (1014).

---

## Best Practices
- Keep `trustlessmark-foundation` as the **primary** domain for public docs and verification.
- Keep all proofs immutable under `trustlessmark-cdn/public/proofs/F00x`.
- Never store `.pem` or secret keys in repos — local only under `/secrets/`.
- Add simple `/status.json` to both Foundation and CDN for health checks.

---

## Next Steps
1. Validate that all repo remotes point to correct GitHub URLs (`trustlessmark-foundation`, `trustlessmark-cdn`, `trustlessmark-protect-worker`).
2. In Cloudflare, ensure:
   - **Pages project:** trustlessmark-foundation → trustlessmark.org
   - **Pages project:** trustlessmark-cdn → cdn.trustlessmark.org
   - **Worker:** trustlessmark-protect-worker → verify.trustlessmark.org
3. Confirm badge.js references now point to **cdn.trustlessmark.org** instead of `foundation`.
4. Run a full proof verification test from Hydrogen → CDN → Foundation → Worker.

---

**Result:**  
Your entire TrustlessMark ecosystem is now cleanly organized:
- Stable core site (`trustlessmark.org`)
- Isolated proof CDN (`cdn.trustlessmark.org`)
- Optional secure validation worker (`verify.trustlessmark.org`)
- Shopify storefront integration ready.

