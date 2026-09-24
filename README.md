# Mudd Habitat LLC — website

Static one-page site. No build step: plain HTML, images, and two JSX files transpiled in the browser.

```
index.html        page shell, SEO meta, LocalBusiness schema, React mount
js/shared.jsx     brand tokens, contact info, project data, SVG helpers
js/site.jsx       the page itself (hero, mission, stats, work, contact, footer)
style.css         form styling + mobile breakpoints (1000 / 820 / 560px)
assets/           logos + photography
.nojekyll         tells GitHub Pages to serve files as-is
```

## Publish on GitHub Pages

1. Create a **public** repo (e.g. `muddhabitat-site`). Upload the *contents* of this folder so `index.html` sits at the repo root — not inside a `site/` subfolder. (Upload via "Add file → Upload files" skips hidden files; also create an empty file named `.nojekyll` at the root.)
2. Repo → Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. For the custom domain, add `muddhabitat.com` under Settings → Pages → Custom domain, then at your DNS host point the apex `A` records to GitHub's IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and `www` `CNAME` to `<username>.github.io`. GitHub writes a `CNAME` file into the repo when you save the domain. At Porkbun, delete the default `ALIAS`/`CNAME` records pointing to `pixie.porkbun.com` first. Once the DNS check passes, tick **Enforce HTTPS**.

## Editing content

Copy, contact info, and the project list live at the top of `js/shared.jsx`. Section copy is inline in `js/site.jsx`.

## Known gaps

- **The contact form sends via `mailto:`.** Submitting opens the visitor's email client with the fields pre-filled, addressed to cole@muddhabitat.com. It needs no server, but visitors without a configured mail app will see nothing happen — swap in Formspree or Netlify Forms if that becomes a problem. To change the recipient, edit `email` in `js/shared.jsx`.
- Testimonials are written but hidden (`showTestimonials: false` in `js/shared.jsx`) pending real client quotes.
- React and Babel load from unpkg, so the page needs a network connection and pays a short transpile cost on load. If that becomes a concern, precompile the JSX and drop the Babel script.
