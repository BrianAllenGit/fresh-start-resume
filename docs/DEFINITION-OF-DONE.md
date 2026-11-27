# Definition of done: evidence

Checked 2026-11-27 against the website definition of done. All tools ran in Docker (`mcr.microsoft.com/playwright:v1.49.1-noble`, axe-core, Lighthouse 12, mobile emulation). Screenshots are in `docs/evidence/`. Status: pass, partial, n/a, or by hand (a machine cannot verify it).

## 1. Accessibility

| Item | Status | Evidence |
|---|---|---|
| WCAG 2.2 AA, axe 0 violations, both languages, 375 and 1280 | pass | axe (tags wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa, best-practice): 44 page states (7 steps empty, filled final, Simple, Modern, other resume language) x EN/ES x 375/1280, 0 violations in every one. |
| Keyboard end to end, focus, skip link, no traps | pass | Tab walk: 12 stops at 1280 and 13 at 375, every stop has a 3 px outline, none covered, no trap. Skip link lands on `#form-area`. |
| Headings, landmarks, labels, alt | pass | One `h1`, `header`, `main`, `footer`, labelled sections; the new About block is an `h2` with a `dl`. No meaningful images. axe clean. |
| Contrast, target size | pass | axe color-contrast clean. No interactive element under 24 px at 375 or 1280 (buttons and inputs 44 to 48 px). |
| Reduced motion, forced colors, JS off | pass | `prefers-reduced-motion` and `forced-colors` blocks in `style.css`. JS off shows a bilingual `noscript` message (the app is JS only); head, About text and JSON-LD are static. |
| Honest note of machine limits | pass | See "Not verified by a machine" below. |

## 2. Phone first

| Item | Status | Evidence |
|---|---|---|
| No horizontal scroll or overlap at 320, 375, 768, 1280, both languages | pass | `scrollWidth - clientWidth` is 0 at 320, 375, 640, 768 and 1280, EN and ES, empty and filled form. Screenshots `docs/evidence/{en,es}-{320,375,768,1280}.png`. |
| 200 percent zoom, text spacing | pass | 200 percent zoom of a 1280 window is a 640 px viewport: no overflow, EN and ES (`*-640-200pct-zoom.png`). WCAG 1.4.12 overrides (line-height 1.5, letter-spacing .12em, word-spacing .16em, paragraph spacing 2em): no overflow at 320, 375, 640, 768, 1280 (`*-375-text-spacing.png`). |

## 3. Languages

| Item | Status | Evidence |
|---|---|---|
| EN and ES, visible switch, `lang` updates, `hreflang` | pass | `#lang-en` and `#lang-es` buttons; `<html lang>` changes (checked `en` to `es`). `hreflang` `es`, `en`, `x-default` are in the head and all point to the one canonical URL. |

Why one URL: the language switch happens in the same page with JavaScript, so there is no separate Spanish URL. Alternates that all name the same URL tell search engines the page serves both languages without creating duplicate pages (same approach as conoce-tus-derechos-az). If separate `/es/` URLs are ever added, these should be split.

## 4. Search

| Item | Status | Evidence |
|---|---|---|
| Title 50 to 60, description 150 to 160, canonical | pass | EN title 51, description 156. ES title 56, description 159. The language switch updates `<title>`, description, `og:title`, `og:description`, `twitter:title`, `twitter:description`, `og:locale` and `og:locale:alternate`. On step 1 the title is the search title; on later steps it is "Step n of 7" so the title still says where you are. Canonical `https://brianallengit.github.io/fresh-start-resume/`. `robots` meta `index,follow,max-image-preview:large`. |
| `robots.txt`, `sitemap.xml` | pass | Both serve 200 in the test server; sitemap lists the one public page with the three hreflang alternates; `lastmod` 2026-11-27. XML parsed. |
| JSON-LD matching visible content | partial | `WebSite` and `WebApplication` (`isAccessibleForFree`, price 0, `inLanguage` en and es, requires JavaScript) in one `@graph`, parsed as valid JSON; text matches the visible About block. No `Organization` or `Person` on purpose (no link to the maker's identity). Not run through the Rich Results Test (by hand). No FAQ or HowTo markup: no such visible content. |
| Static HTML for crawlers | pass | Title, description, canonical, About text, privacy text and JSON-LD are in the served HTML. The form itself is JS built (a tool, not content). |

## 5. Link previews

| Item | Status | Evidence |
|---|---|---|
| Open Graph complete | pass | `og:site_name`, `og:title`, `og:description`, `og:type`, `og:url`, `og:image` (1200x630 PNG, 80 KB, absolute https), `og:image:type`, `og:image:alt`, `og:locale` `en_US`, `og:locale:alternate` `es_US` (swap in Spanish). |
| Twitter complete | pass | `twitter:card=summary_large_image`, title, description, image, image alt. |
| Preview checked by parsing | pass (parse) / by hand (platforms) | Values read back from the live DOM in both languages. Facebook, X, LinkedIn and Discord debuggers by hand after merge. |

## 6. AI answers

| Item | Status | Evidence |
|---|---|---|
| What / who / how text near the top | pass | New "About this tool" block under the privacy note, EN and ES, three short factual lines. No FAQ added: the block already answers the three questions and the page is one task. |
| `llms.txt` | pass | Factual summary, privacy facts, links, limits. No "best" claims. |

## 7. App polish

| Item | Status | Evidence |
|---|---|---|
| Favicon svg and png, apple-touch-icon, theme-color, manifest | pass | `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` (180), `icon-192.png`, `icon-512.png`, `manifest.webmanifest`, `theme-color #0b4f8a`. CSP gained `manifest-src 'self'`. All serve 200. |
| Print styles | pass | Print output compared with the PR #2 head with the same input, EN and ES: `pdftotext` identical, 1 page each, page raster pixel identical. The About block is `no-print`. |
| Lighthouse mobile | pass | 100 / 100 / 100 / 100 (Performance / Accessibility / Best Practices / SEO), three runs. Before (PR #2 head): 81 to 100 / 100 / 96 / 100, with a layout shift of 0.427 in two of four runs. |

Best Practices went from 96 to 100 because the favicon 404 is gone. Layout shift was caused by the static privacy sentence being shorter than the JavaScript one; the static HTML now carries the same sentence, so nothing moves when the script runs.

## 8. Trust and safety

| Item | Status | Evidence |
|---|---|---|
| Zero tracking, storage, ads; strict CSP; says so on page | pass | Page loads only `index.html`, `style.css`, `app.js` (request log). `localStorage` 0, `sessionStorage` 0, no cookies, zero console errors. CSP: `default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:; manifest-src 'self'; base-uri 'none'; form-action 'none'`. Privacy block and footer say so. `frame-ancestors` cannot be set by a meta tag. |
| Facts from official sources | n/a | No legal or benefit facts. |
| No link to the maker's identity or the clan | pass | No names or clan references in the new files. |

## Not verified by a machine

- A real screen reader (NVDA, JAWS, VoiceOver, TalkBack) was not run. axe and the keyboard walk do not replace it.
- The Spanish copy, including the new About block, title and description, was not read by a native speaker. It needs that read.
- Facebook, X, LinkedIn and Discord link-preview debuggers and Google's Rich Results Test were not run.
- The zoom check is a 640 px viewport, not a real browser zoom on a device.
