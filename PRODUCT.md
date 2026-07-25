# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is employers and recruiters evaluating Esaú Lechuga for software engineering roles. The portfolio serves as a professional credential and showcase of technical capability.

## Product Purpose

A personal portfolio website that presents Esaú Lechuga's skills, projects, and professional identity to potential employers. Success means the visitor forms a clear, positive impression of the candidate's technical competence and decides to reach out.

## Positioning

Personal portfolio — differentiated by the quality of the presentation (dark cosmic theme, animated laptop hero, clean layout) rather than by a unique product mechanism.

## Operating Context

Viewed on desktop and mobile browsers. Visitors typically arrive from a resume, LinkedIn, job application, or referral link. They scan quickly for skill relevance, project quality, and contact options.

## Capabilities and Constraints

- **Pages:** Home (hero + laptop animation), About Me, Projects, Skills (tabbed: Frontend/Backend/Tools), Contact
- **Tech stack:** Vanilla HTML, CSS, JavaScript. No build tools, no framework. Static site.
- **Styling:** Google Fonts (Inter), Font Awesome icons, CSS custom properties for theming
- **Responsive:** Breakpoints at 1200px, 1024px, 768px; sidebar collapses to icon-only then off-canvas
- **Interactivity:** Scroll-reveal animations, skills tab switching, mobile menu toggle, page-loading spinner
- **Content status:** Project entries, about page copy, and project images are placeholder content to be replaced. Contact email (`hello@example.com`) and social links are placeholders. CV download link is a placeholder.
- **Lang:** Spanish (`lang="es"`) — though copy is in English. Noted but undecided whether this is intentional.

## Brand Commitments

- **Name:** Esaú Lechuga
- **Role:** Software Engineer / Software Engineering Student
- **Availability:** Available for Freelance / Full-time
- **Voice:** Professional, direct, skill-focused
- **Platform:** No existing brand guidelines, logo, or design system beyond the current CSS

## Evidence on Hand

- Real content: Name, role, availability status, skill names and proficiency levels (bars), section structure
- Placeholder content: Projects (Nexus Analytics, E-Flow Marketplace, Smart Inventory), about page narrative ("5 years in San Francisco"), project images (Unsplash), contact email, social link URLs, CV PDF
- The `img/About-me-img.jpeg` file exists — appears to be a real profile image

## Product Principles

1. **Employer-first:** Every element should help a recruiter quickly assess fit — clarity over cleverness.
2. **Authenticity first:** Placeholder content must be replaced with real work before the site serves its purpose; no fabricated testimonials or claims.
3. **Performance matters:** As a static site, it should load instantly on any connection — no unnecessary dependencies.
4. **Responsive by default:** The portfolio must look deliberate on every device a recruiter might use.
5. **Maintainable simplicity:** Vanilla HTML/CSS/JS keeps the site easy to update without tooling overhead.

## Accessibility & Inclusion

No product-specific accessibility standard has been established. Current markup uses semantic HTML and aria-labels on the mobile menu button.
