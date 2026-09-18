# ashokbatakala.github.io

My personal website, built with [Hugo](https://gohugo.io/) using a small
custom theme (no external theme dependency) in `layouts/` and
`static/css/style.css`.

Deployed automatically via GitHub Actions on every push to `main`
(see `.github/workflows/hugo.yml`).

## Local development

```sh
hugo server
```

Then open http://localhost:1313.

## Editing content

- Homepage (photo, name, role, links, bio): `content/_index.md`
- News/updates list on the homepage: `data/news.yaml`
- Projects page: `content/projects.md`
- CV page: `content/cv.md`
- Blog posts: `content/blogs/`

Search for `TODO` across these files for placeholders that still need
real content.
