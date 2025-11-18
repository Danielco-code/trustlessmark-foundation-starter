## trustlessmark-foundation — Cloudflare Build Config Snapshot
**Version:** 2025-11-06  
**Maintainer:** Daniel Collins  
**Repository:** `Danielco-code/trustlessmark-foundation`  
**Deployment Platform:** Cloudflare Pages  
**Custom Domains:**  
- `https://trustlessmark.org`  
- `https://www.trustlessmark.org`

---

### 🧱 Build Settings

| Setting | Value |
|----------|--------|
| **Build Command** | `npm ci && npm run build` |
| **Build Output Directory** | `dist` |
| **Root Directory** | *(leave blank)* |
| **Production Branch** | `main` |
| **Build System Version** | `3` |
| **Automatic Deployments** | Enabled |
| **Build Watch Paths** | `*` |

---

### ⚙️ Environment Variables (Cloudflare Pages → Settings → Environment Variables)

| Variable | Value | Description |
|-----------|--------|-------------|
| **NODE_VERSION** | `20` | Match local Node version (v20.19.5). |
| **CI** | `true` | Enables non-interactive npm mode. |
| **NODE_ENV** | `production` | Optimizes build output. |
| **VITE_BASE_URL** | `/` | Ensures correct routing in Vite single-page apps. |
| **TZ** | `America/Chicago` | Optional: Ensures consistent timestamp logging. |
| **NPM_FLAGS** | `--legacy-peer-deps` | Avoids peer-dependency conflicts during install. |
| **CLOUDFLARE_PAGES_CACHE_DISABLED** | `true` *(optional)* | Forces fresh dependency install if caching issues appear. |

---

### 🌍 DNS & Domain Records

| Record Type | Name | Value / Target | Proxy | Purpose |
|--------------|------|----------------|--------|----------|
| **A / AAAA (managed by Cloudflare)** | `trustlessmark.org` | *Auto-managed via Cloudflare Pages (apex flattening)* | ☁️ Orange | Root domain |
| **CNAME** | `www` | `trustlessmark-foundation.pages.dev` | ☁️ Orange | Redirect to Pages project |

> ⚠️ If you previously had `trustlessmark-foundation-starter.pages.dev` in your DNS, delete it before re-adding the correct record.

---

### 🧾 Optional Verification Steps (post-deploy)

After your first deployment:
1. Visit [https://trustlessmark-foundation.pages.dev](https://trustlessmark-foundation.pages.dev)  
   → Confirm that the site builds and loads successfully.
2. Add your custom domain (`trustlessmark.org`) under **Custom domains** in Cloudflare Pages.
3. Wait for SSL certificate issuance (≈ 5 min).  
   Confirm HTTPS lock icon is visible.
4. Test both:  
   - `https://trustlessmark.org`  
   - `https://www.trustlessmark.org`
5. Run `nslookup trustlessmark.org` and `nslookup www.trustlessmark.org`  
   → Confirm both resolve to Cloudflare IPs (`172.67.xxx.xxx` / `104.21.xxx.xxx`).

---

### 📦 Local Repository Notes

| Local Path | Remote Repo | Purpose |
|-------------|--------------|----------|
| `C:\Projects\trustlessmark-foundation` | `https://github.com/Danielco-code/trustlessmark-foundation` | Primary build + Pages deploy |
| `C:\Projects\trustlessmark-cdn` | `cdn.trustlessmark.org` (Cloudflare Pages / static proofs) | Cryptographic proof store |
| `C:\Projects\trustlessmark-protect-worker` | *Separate Worker deployment* | Token signing / hash validation |

---

### 📂 Suggested Repository Structure

```
trustlessmark-foundation/
├── public/
│   ├── docs/
│   ├── verify/
│   ├── proofs/
│   └── .well-known/
├── src/
│   ├── pages/
│   ├── components/
│   └── lib/
├── scripts/
│   ├── hash-manifest.cjs
│   ├── sign-manifest.cjs
│   └── verify-integrity.js
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

---

### 🧠 Deployment Checklist

- [x] GitHub repo renamed → **trustlessmark-foundation**  
- [x] Local remote updated (`git remote set-url origin`)  
- [ ] New Cloudflare Pages project created from renamed repo  
- [ ] Build command = `npm ci && npm run build`  
- [ ] Custom domains re-attached (`trustlessmark.org`, `www.trustlessmark.org`)  
- [ ] Old project `trustlessmark-foundation-starter` deleted  

---

### 🪪 JSON Snapshot (for CI/automation)

```json
{
  "project": "trustlessmark-foundation",
  "repo": "https://github.com/Danielco-code/trustlessmark-foundation",
  "build": {
    "command": "npm ci && npm run build",
    "output_dir": "dist",
    "root_dir": "",
    "branch": "main",
    "system_version": 3
  },
  "env": {
    "NODE_VERSION": "20",
    "CI": "true",
    "NODE_ENV": "production",
    "VITE_BASE_URL": "/",
    "TZ": "America/Chicago",
    "NPM_FLAGS": "--legacy-peer-deps",
    "CLOUDFLARE_PAGES_CACHE_DISABLED": "true"
  },
  "domains": [
    "trustlessmark.org",
    "www.trustlessmark.org"
  ]
}
```

---

## 🧩 Appendix A — Disaster Recovery / Re-deploy from Scratch

Use this process if Cloudflare loses GitHub connection, the Pages project breaks, or you’re cloning a fresh environment.

### 🔁 1. Reconnect Repository
- Go to **Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git**
- Select `Danielco-code/trustlessmark-foundation`
- Confirm build settings:
  - Build command: `npm ci && npm run build`
  - Output directory: `dist`
  - Root directory: *(blank)*
  - Branch: `main`

### ⚙️ 2. Recreate Environment Variables
Paste the following exactly under **Settings → Environment Variables:**
```
NODE_VERSION=20
CI=true
NODE_ENV=production
VITE_BASE_URL=/
TZ=America/Chicago
NPM_FLAGS=--legacy-peer-deps
CLOUDFLARE_PAGES_CACHE_DISABLED=true
```

### 🌍 3. Reattach Domains
Under **Custom Domains:**
- Add `trustlessmark.org`
- Add `www.trustlessmark.org` → CNAME → `trustlessmark-foundation.pages.dev`
- Confirm SSL certificate issues successfully.

### 🧱 4. Verify Build
- Trigger a manual deployment ("Retry Deployment")
- Visit:  
  - [https://trustlessmark-foundation.pages.dev](https://trustlessmark-foundation.pages.dev)  
  - [https://trustlessmark.org](https://trustlessmark.org)

### 💾 5. Optional Local Re-clone
```bash
cd C:\Projects
rm -rf trustlessmark-foundation
mkdir trustlessmark-foundation && cd trustlessmark-foundation
git clone https://github.com/Danielco-code/trustlessmark-foundation.git .
npm ci && npm run build
```

Once confirmed, commit the new deployment metadata and verify `dist/` output matches Cloudflare build logs.

---

## 🧩 Appendix B — trustlessmark-cdn Recovery & Static Proof Redeploy

This CDN hosts verified proofs, manifests, and hash scripts for Flying Circus Coffee product claims.

### 🔁 1. Reconnect Repository
- In Cloudflare Dashboard → Workers & Pages → **Create Application → Pages → Connect to Git**
- Select `Danielco-code/trustlessmark-cdn`
- Build settings:
  - **Build Command:** `echo "CDN static deploy"`
  - **Output Directory:** `public`
  - **Root Directory:** *(blank)*
  - **Branch:** `main`

### ⚙️ 2. Environment Variables (optional)
| Variable | Value | Purpose |
|-----------|--------|----------|
| `NODE_VERSION` | `20` | Ensures compatibility for hash scripts |
| `CI` | `true` | Consistent non-interactive build mode |
| `TZ` | `America/Chicago` | Time alignment with verification logs |

### 📁 3. Expected Directory Structure
```
trustlessmark-cdn/
├── public/
│   ├── proofs/
│   │   ├── F001/
│   │   │   ├── registry.json
│   │   │   └── manifest.json
│   │   ├── F002/
│   │   └── map.json
│   ├── fcc_cert_manifest.json
│   └── .well-known/
├── scripts/
│   ├── hash-manifest.cjs
│   ├── sign-manifest.cjs
│   └── verify-hashes.mjs
└── package.json
```

### 🔐 4. Re-run Manifest Hashing
In PowerShell:
```powershell
cd C:\Projects\trustlessmark-cdn
node .\scripts\hash-manifest.cjs
```
Output example:
```
? F001: sha256-8htFARN5Zcik4G5F72HPT9yzelr5V5/1ABtdyQgo/fU=
? F002: sha256-cnJvIrin6KspOc+CjeBfHt7pnWZA/gQK7PmWq8IE844=
? F003: sha256-kQllQrSWxhBeIo7CQ6txnGpPSrGKPJExCnVaxJvooY0=
```
Confirm `fcc_cert_manifest.json` updates successfully.

### 🌍 5. Cloudflare Custom Domain Setup
| Record Type | Name | Target | Proxy | Purpose |
|--------------|------|---------|--------|----------|
| **CNAME** | `cdn.trustlessmark.org` | `trustlessmark-cdn.pages.dev` | ☁️ Orange | Public proofs host |

After propagation, verify:  
`https://cdn.trustlessmark.org/proofs/F001/registry.json`

### 💾 6. Local Re-clone Recovery
```bash
cd C:\Projects
rm -rf trustlessmark-cdn
git clone https://github.com/Danielco-code/trustlessmark-cdn.git .
```
Then regenerate hashes and re-deploy via Cloudflare Pages build trigger.

