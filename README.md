# raphboulat.github.io

Source for [raphboulat.github.io](https://raphboulat.github.io) — Raphaël Boulat's academic website. Plain HTML + CSS + vanilla JS, no build step.

---

## Local preview

This site uses `fetch()` to load the sidebar and nav partials, so it must be served over HTTP (not opened as a `file://` URL directly). To preview locally:

```bash
cd /path/to/raphboulat.github.io
python3 -m http.server
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## How to update content

All editable sections are wrapped in clearly labelled `<!-- EDIT: ... -->` comments. Find the right file, locate the comment, and edit the content inside.

### `index.html` — Home

- **Bio**: Edit the two `<p>` tags inside `<!-- EDIT: BIO -->`.
- **News items**: Add or remove `<div class="news-item">` blocks inside `<!-- EDIT: NEWS ITEMS -->`. A commented-out template is included for reference.

### `research.html` — Research

- **Papers**: Each paper is a `<div class="paper">` block wrapped in an `<!-- EDIT: PAPER N -->` comment. Update the title, coauthor line, abstract, and button links. A commented-out `<a>` template is included beside each paper for adding a paper link later.

### `resources.html` — Resources

- **Resource sections**: Each resource is a `<div class="resource-block">`. A commented-out template at the bottom shows how to copy-paste a new block.

### `football.html` — Football

- **Description**: Edit the paragraph inside `<!-- EDIT: FOOTBALL DESCRIPTION -->`.
- **YouTube video**: Change the video ID (`mgahirWMVaU`) in the iframe `src` inside `<!-- EDIT: YOUTUBE VIDEO -->`.
- **Photos**: Add `<figure class="photo">` blocks inside `<!-- EDIT: PHOTOS -->`. A template comment shows the format.

### `partials/sidebar.html`

- Update your name, role, or institution link here.
- To add the LinkedIn URL, replace `[PLACEHOLDER LINK]` with your profile URL.

---

## CV workflow

The CV PDF is compiled automatically from LaTeX source:

1. Edit `source/cv/cv.tex` in VS Code.
2. Save — the `.vscode/settings.json` setup compiles it on save and writes the output to `assets/cv.pdf`.
3. Commit and push `assets/cv.pdf`.

Do **not** manually edit `assets/cv.pdf`; always compile from source.

---

## Manual PDFs

These files are not auto-generated and must be replaced manually when updated:

| File | Purpose |
|------|---------|
| `assets/econometrics-notes.pdf` | Econometrics notes (Resources page) |
| `assets/papers/criminal-representation-slides.pdf` | Slides for paper 1 (Research + News) |

To update: replace the file, then `git add assets/... && git commit -m "Update slides" && git push`.

---

## Adding news items

Open `index.html`, find `<!-- EDIT: NEWS ITEMS -->`, and add:

```html
<div class="news-item">
  <div class="news-date">Apr 2026</div>
  <div class="news-content">Your news text here.</div>
</div>
```

A commented-out template is already there — just uncomment and fill it in.

## Adding a paper

Open `research.html`, find the last `<!-- END EDIT: PAPER N -->` block, and add after it:

```html
<div class="paper">
  <div class="paper-title">Your Paper Title</div>
  <div class="paper-coauthors">with Coauthor Name</div>
  <p class="paper-abstract">Your abstract here.</p>
  <div class="btn-row">
    <a href="assets/papers/your-file.pdf" class="btn" target="_blank" rel="noopener">paper ↗</a>
  </div>
</div>
```

## Adding a photo (Football page)

Open `football.html`, find `<!-- EDIT: PHOTOS -->`, and add:

```html
<figure class="photo">
  <img src="assets/football/your-image.jpg" alt="Brief description">
  <figcaption>Your caption here.</figcaption>
</figure>
```

Place the image file in `assets/football/`.

---

## Deployment

Any push to `main` updates the live site at [raphboulat.github.io](https://raphboulat.github.io) within ~1 minute via GitHub Pages (source: branch `master`, root `/`).

Verify in **repo Settings → Pages** that the source is set to: **Branch: master / root (/)**.
