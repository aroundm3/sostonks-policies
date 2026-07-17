# SoStonks Policies

Source for the SoStonks legal site: Privacy Policy, hosted on GitHub Pages and linked from the App Store IAP flow.

**Live site:** https://aroundm3.github.io/sostonk-policies/

## Structure

Built with Jekyll. Content lives in per-language directories; English is at the repo root and each other language has its own folder (`ja/`, `ko/`, `ru/`, `vi/`, `zh-hans/`), mirroring the same two pages:

- `privacy.md` — Privacy Policy
- `index.md` — legal center landing page

Every page carries front matter (`lang`, `doc`, `permalink`, ...) that the layouts and includes use to resolve the correct localized equivalent of a page at build time — nav links, the language switcher, and the footer's "Available in" list are all computed from `site.pages`, not hardcoded, so adding a language only means adding content, not touching templates.

```
_config.yml          # site config, language list, defaults
_data/i18n/*.yml      # UI chrome strings (nav, footer, theme labels) per language
_includes/            # head, header (nav + language/theme switchers), footer
_layouts/              # default (HTML shell), legal, home
assets/css/style.css   # design system: light/dark theme via CSS custom properties
assets/js/theme.js      # theme <select> persistence (localStorage)
privacy.md, index.md             # English (default language)
ja/ ko/ ru/ vi/ zh-hans/          # translated pages + matching i18n data file
```

## Supported languages

English, Japanese, Korean, Russian, Vietnamese, Chinese (Simplified) — matches the languages shipped in the SoStonks iOS app.

## Theming

Light/dark theme is CSS-variable driven (`:root` / `:root[data-theme="dark"]`) with a `prefers-color-scheme` fallback for "system" mode, persisted to `localStorage`, and applied before first paint via an inline script in `<head>` to avoid a flash of the wrong theme.

## Local development

```bash
gem install jekyll bundler   # if not already installed
jekyll serve --port 8932
```

Then open `http://localhost:8932/sostonk-policies/` (the `baseurl` prefix is required locally, matching how GitHub Pages serves a project site).

## Adding or editing content

- Anchor ids on headings (`{: #section-slug}`) must stay identical across every language — they're used for same-page TOC links.
- New UI chrome strings go in `_data/i18n/en.yml` first, then get mirrored (translated) into every other `_data/i18n/{code}.yml`.

## Deployment

GitHub Pages, served from the `main` branch (Settings → Pages → Source: Deploy from a branch). `jekyll-seo-tag` and `jekyll-sitemap` are both GitHub-Pages-whitelisted plugins, so no custom CI build is required.

---

Questions: gnoud17@icloud.com
