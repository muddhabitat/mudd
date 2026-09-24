# Mudd Habitat LLC — website

Static one-page site: plain HTML, CSS, images, and one precompiled JavaScript file. React loads from unpkg; nothing is compiled in the browser.

```
index.html        page shell, SEO meta, LocalBusiness schema, React mount
js/site.js        compiled page code — this is what the browser runs (don't hand-edit)
src/shared.jsx    source: brand tokens, contact info, project data, logo reveal
src/site.jsx      source: the page itself (hero, mission, stats, work, contact, footer)
style.css         form styling + mobile breakpoints (1000 / 820 / 560px)
assets/           logos + photography
.nojekyll         tells GitHub Pages to serve files as-is
```

## Publish on GitHub Pages

1. Create a **public** repo (e.g. `muddhabitat-site`). Upload the *contents* of this folder so `index.html` sits at the repo root — not inside a `site/` subfolder. (Upload via "Add file → Upload files" skips hidden files; also create an empty file named `.nojekyll` at the root.)
2. Repo → Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. For the custom domain, add `muddhabitat.com` under Settings → Pages → Custom domain, then at your DNS host point the apex `A` records to GitHub's IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and `www` `CNAME` to `<username>.github.io`. GitHub writes a `CNAME` file into the repo when you save the domain. At Porkbun, delete the default `ALIAS`/`CNAME` records pointing to `pixie.porkbun.com` first. Once the DNS check passes, tick **Enforce HTTPS**.

## Editing content

The `src/` JSX files are the source of truth. After editing them, `js/site.js` must be recompiled (e.g. `npx babel src/shared.jsx src/site.jsx --presets @babel/preset-react -o js/site.js`, then append the two mount lines from the end of the current `js/site.js`). Editing `src/` alone will not change the live site.


Copy, contact info, and the project list live at the top of `src/shared.jsx`. Section copy is inline in `src/site.jsx`.

## Known gaps

- **The contact form sends via `mailto:`.** Submitting opens the visitor's email client with the fields pre-filled, addressed to cole@muddhabitat.com. It needs no server, but visitors without a configured mail app will see nothing happen — swap in Formspree or Netlify Forms if that becomes a problem. To change the recipient, edit `email` in `src/shared.jsx`.
- Testimonials are written but hidden (`showTestimonials: false` in `src/shared.jsx`) pending real client quotes.
