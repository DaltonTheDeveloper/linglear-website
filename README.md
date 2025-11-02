# Linglear Website

Static prototype of the Linglear web experience following the glass-morphism outline.

## Structure

- `index.html` – public landing page
- `alpha-signup.html` – alpha onboarding form
- `features.html`, `pricing.html`, `community.html`, `how-it-works.html`, `faq.html`, `contact.html` – supporting public pages
- `dashboard.html`, `watchlist.html`, `learning.html`, `community-logged.html`, `settings.html` – authenticated experience mockups
- `assets/css/style.css` – global theme styles and layout utilities
- `assets/js/main.js` – hero ripple, counters, parallax, and accordion behavior

Serve locally with any static server, e.g.:

```bash
python -m http.server 3000
```

Then open `http://localhost:3000/index.html` in a browser.
