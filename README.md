# het-joshi.github.io

Personal site — **Shilpa Shastra Blueprint** direction.
An architectural drafting aesthetic applied to a security researcher's portfolio.

```
├── index.html      # the entire site — one page, seven plates
├── styles.css      # design tokens, plate patterns, responsive rules
├── script.js       # active-nav highlight + reveal-on-scroll
├── favicon.svg     # shikhara silhouette
├── portrait.svg    # placeholder — replace with portrait.jpg
├── .nojekyll       # disables GitHub Pages' Jekyll processing
└── README.md       # you are here
```

Zero build step. Drop these files in a repo, enable Pages, done.

---

## 1 — Deploy to GitHub Pages

```bash
# From this folder
git init
git add .
git commit -m "Plate 01 — elevation."
git branch -M main
git remote add origin git@github.com:Het-Joshi/het-joshi.github.io.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build from branch → `main` / `/ (root)`** → Save.
Your site goes live at `https://het-joshi.github.io/` within a minute.

If you want it on a custom domain (e.g. `hetjoshi.dev`):

1. Add a `CNAME` file containing just the bare domain (no `https://`, no path).
2. Point an `ALIAS`/`ANAME` or four `A` records at GitHub's Pages IPs (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`).
3. Enable **Enforce HTTPS** once the cert is provisioned.

---

## 2 — Replace the portrait

The site ships with a placeholder. Two options:

**Option A — Keep the filename.** Save your headshot as `portrait.jpg` in the root. The HTML already points there; the placeholder SVG loads only if the JPG is missing.

**Option B — Use any format.** Edit `index.html`, find the `<img>` inside `.portrait`, and change the `src`. WEBP is smaller if your photo is a recent one — `portrait.webp` works fine.

A round crop looks best (the CSS applies a circular mask) — roughly 400×400, anything larger is wasted bytes.

---

## 3 — Customize

**Content** lives entirely in `index.html`. Each section is commented with its plate number:

- `PLATE 01 — HERO ELEVATION` — wordmark, lead paragraph, stats, shikhara
- `PLATE 02 — ORIGINS` — Chapter I, Mukti, philosophy
- `PLATE 03 — RESEARCH` — ISRO + IIT Bombay pillars, book chapter, patent
- `PLATE 04 — PRESENT` — Northeastern + Ramaiah pillars
- `PLATE 05 — HONORS` — 4-card grid
- `PLATE 06 — ARSENAL` — Kavaach detail plate + three compact plates
- `PLATE 07 — CONTACT` — 5-cell contact grid
- Footer colophon

**Design tokens** — everything visual comes out of the `:root` block at the top of `styles.css`:

```css
--paper:     #F2EDDE;   /* drafting ivory */
--ink:       #1E2B3C;   /* text + rules */
--accent:    #B8391C;   /* vermillion — emphasis + callouts */
```

Change those three and the entire site re-skins. The rest of the palette (`--ink-70`, `--ink-25`, etc.) derives from `--ink` via opacity, so you only need to touch the top three to shift mood.

**Fonts** are Cormorant Garamond (serif) and IBM Plex Mono (mono), loaded from Google Fonts in `index.html`. Tiro Devanagari Hindi is loaded for the `हेत` in the nav. If you want to self-host later for performance, download the WOFF2s into a `fonts/` folder and swap the `<link>` for `@font-face` declarations in `styles.css`.

**Typography scale** is in the `:root` block — `--t-display` through `--t-caption`. All `clamp()`-based, so it fluid-scales from mobile to desktop automatically.

---

## 4 — Adding a new project

In PLATE 06, copy one of the existing `<article class="compact-plate">` blocks and edit. The structure is:

```html
<article class="compact-plate">
  <header class="compact-head">
    <div>
      <div class="mono-label muted">project NN · slug</div>
      <h3>Name <em>· tagline.</em></h3>
    </div>
    <div class="mono-label">badge</div>
  </header>
  <p>Description.</p>
  <div class="tb-strip small">
    <div><div class="tb-key mono-label muted">topic</div><div class="tb-val">...</div></div>
    <div><div class="tb-key mono-label muted">stack</div><div class="tb-val">...</div></div>
    <div><div class="tb-key mono-label muted">year</div><div class="tb-val">...</div></div>
    <div><div class="tb-key mono-label muted">status</div><div class="tb-val accent-strong">...</div></div>
  </div>
</article>
```

For a project that deserves a schematic like Kavaach's, copy the `<article class="detail-plate">` block instead and redraw the SVG.

---

## 5 — Adding a new research role

In PLATE 03 or PLATE 04, copy a `<article class="pillar-card">`. The only thing that should change visually between roles is the **capital** of the pillar SVG — the shaft and base stay identical. The existing ones:

| Role | Capital | Meaning |
|------|---------|---------|
| ISRO | Stepped rectangles | Stable, protective foundation |
| IIT Bombay | Inverted trapezoid | Convergence, research |
| Northeastern | Circle on plinth | Open inquiry |
| Ramaiah | Half-dome | Shelter, teaching |

If you add a fifth, give it a new capital that says something about the role. Don't reuse capitals — the variation is the point.

---

## 6 — Design discipline (worth keeping)

Three rules prevent this from drifting into ornament:

1. **Vermillion is reserved.** Only italic emphasis words, callout leader lines, annotation text, ref bubbles, and the sheet number. Never a full sentence, never a button fill, never a divider.

2. **Every plate closes the same way.** The hero has a full 5-row title block. The Kavaach detail plate has a 4-cell strip. The compact plates have a 4-cell strip. That repetition is what makes the metaphor cohere — if you invent new closing patterns per section, the system falls apart.

3. **Devanagari stays personal.** The `हेत` in the nav works because it's your actual name. Resist adding Sanskrit shlokas as divider ornaments; they instantly read as costume rather than architecture.

---

## 7 — Checklist before shipping

- [ ] Replace `portrait.jpg` with your real headshot
- [ ] Update the Open Graph meta tags in `<head>` (title, description, add `og:image`)
- [ ] Verify every external link (pillars, honors, arsenal)
- [ ] Check on mobile — the blueprint grid should be visible, the title block stacks below the shikhara under ~720px
- [ ] Run Lighthouse — should be green across the board out of the box; if not, the culprit is almost certainly unoptimized portrait image
- [ ] Add a `robots.txt` and `sitemap.xml` if you want search engines to index it cleanly

---

© 2026 Het Rutul Joshi · Compiled from the terminal.
