# Sweet Marilyn — Music & Bees (`sweetmarilyn.org`)

Static website redesign for **Sweet Marilyn** (Tacoma, WA songwriter and sustainable urban beekeeper **Jade Monroe**), built with [Astro 7](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## Highlights

- **Brand Typography & Assets:** Preserves Jade's custom **`Black Rock`** display typeface (`src/assets/fonts/black-rock.woff2`) paired with **`PT Serif`** and **`Inter`**, plus responsive WebP-optimized photography via `astro:assets`.
- **Calm, Streamlined Layout:** Inspired by [bradymccowan.com](https://bradymccowan.com), balancing original Pacific Northwest art rock with small-batch urban honey and hive experiences.
- **Integrations:**
  - **Bandsintown** live tour dates widget (`id_15656870`)
  - **Bandcamp** embedded album players (*Hidden Springs* & *Live at Cider and Cedar*)
  - **Direct HTML5 Audio** master recordings with mutual-exclusion playback
  - **Square** checkout links for honey drops, seasonal bee boxes, and apiary workshops
- **4 Initial Design Options:**
  - `/idea-1` — **Dual-Pillar Architecture** (Brady McCowan 2-column split)
  - `/idea-2` — **Hive & Stage Mode Switcher** (interactive Harmonized / Music / Honey filter)
  - `/idea-3` — **Resonance & Nectar** (unified 4-part editorial narrative)
  - `/idea-4` — **Sleek Minimal** (menu-free full-bleed hero with Music & Honey actions and QR-ready section anchors)
  - Includes an optional **"Show on subpages"** slider toggle in the presentation bar so subpages stay distraction-free by default.

## Local Development

Requires **Node.js 24+**.

```bash
npm ci
npm run dev       # Start local dev server at http://localhost:4321
npm run build     # Build production static site into ./dist
npm run preview   # Preview built ./dist locally
```

To test the GitHub Pages subpath (`/sm-music-and-bees`) locally:

```powershell
$env:GITHUB_PAGES="true"; npm run build
```

## Environments & Deployment

- **Staging (`GitHub Pages`):** Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and publishes to `https://aaronfilson.github.io/sm-music-and-bees/`.
- **Production (`AWS`):** Static `./dist` build (with `GITHUB_PAGES` unset so `base` is `/`) targets Amazon S3 + CloudFront + ACM SSL for `https://www.sweetmarilyn.org/`.
