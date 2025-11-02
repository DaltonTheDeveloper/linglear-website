# Linglear Website

This repository contains the static marketing and app concept site for **Linglear**, covering all
public marketing screens plus authenticated dashboard explorations described in the product outline.

## Structure

All assets live in the `public/` directory so they can be served by any static host (S3, Cloudflare
Pages, GitHub Pages, etc.).

```
public/
  assets/
    css/style.css    # global glassmorphism theme, typography, layout utilities
    js/main.js       # hero ripple, animated counters, lightweight parallax helpers
  *.html             # individual pages for public + logged-in experiences
```

The HTML files map directly to the master outline:

- `index.html` — Home / landing page
- `alpha-signup.html` — Alpha waitlist and referral program
- `features.html` — Feature deep dive
- `pricing.html` — Membership tiers
- `community.html` — Public community hub
- `how-it-works.html` — Transparent product walkthrough
- `faq.html` — Frequently asked questions
- `contact.html` — Contact form
- `dashboard.html` — Authenticated dashboard concept
- `watchlist.html` — Authenticated watchlist concept
- `word-bank.html` — Authenticated vocabulary center
- `community-logged-in.html` — Authenticated community hub
- `settings.html` — Account management concept
- `privacy.html` / `terms.html` — Legal placeholders referenced in the footer

## Running locally

Because the site is pure HTML/CSS/JS, you can use any static server. For example:

```bash
python -m http.server --directory public 3000
```

Then visit `http://localhost:3000/index.html`.

## Fonts & assets

Fonts are loaded from Google Fonts (Playfair Display + Inter). Logo placements for AWS, Cloudflare,
Stripe, and Discord are rendered as accessible text placeholders so the site remains lightweight.
