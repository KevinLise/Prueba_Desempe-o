# Link & Park – World Tour Landing Page

A responsive landing page for **Link & Park**, a tribute and informational site for the "From Zero World Tour 2026", featuring event schedules, band history, and a multimedia gallery.

## Description
Single-page frontend built with semantic HTML5 and CSS3. Dark, industrial, and modern design reflecting the band's rock identity. Fully responsive: mobile (hamburger menu), tablet, and desktop layouts via media queries.

## Technologies Used
*   **HTML5** (semantic tags: `header`, `main`, `section`, `article`, `nav`, `footer`, `table`)
*   **CSS3** (custom properties, Flexbox, Grid, media queries, transitions)
*   **JavaScript** (hamburger menu toggle for mobile navigation)
*   **Google Fonts:** Cormorant Garamond + Lato
*   **Linkin Park Custom Font:** Integrated via CDN fonts
*   **Font Awesome 6** (brand icons for Spotify, Instagram, etc.)

## Project Structure
```text
link-park-tour/
├── index.html
├── style.css
├── script.js
├── README.md
└── img/
    ├── link.png
    ├── fondo9.jpg
    ├── fondo13.jpg
    └── (other gallery images...)
```

## Sections

| Section | Tag used |
| :--- | :--- |
| **Navigation** | `<header>` + `<nav>` |
| **Hero (In the End)** | `<section class="hero">` |
| **Tour Schedule** | `<section class="events">` + `<table>` with `<thead>` / `<tbody>` |
| **Band History** | `<section class="about">` + `<article>` (semantic album list) |
| **Multimedia** | `<section class="multimedia">` + CSS Grid + Video Links |
| **Brand Partnerships** | `<div class="sponsors">` + `<ul>` |
| **Contact & Social** | `<footer>` + Font Awesome Icons |

## Responsive Design

| Breakpoint | Layout |
| :--- | :--- |
| **Desktop > 1024px** | 2-column About, Grid Gallery, full horizontal nav |
| **Tablet ≤ 1024px** | 1-column About, 2-column Gallery |
| **Mobile ≤ 768px** | Hamburger menu active, stacked layouts |
| **Small mobile ≤ 480px** | Single column, adjusted typography and table scrolling |

## How to Run Locally
1. Download all files keeping the same folder structure.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge).
3. **# Optional: run a local server**
   ```bash
   npx serve .
   ```
*Note: Visual assets like icons and fonts require an internet connection to load via CDN.*

## License
© 2025 Linkin Park under exclusive license to Warner Records Inc. All rights reserved. 
*Project created for educational and tribute purposes.*
