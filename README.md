# Kriti Singh — Personal Portfolio

A modern, animated React portfolio built with Vite. The site presents Kriti Singh’s profile, projects, skills, certificates, and contact options in a polished one-page experience.

## Overview

This portfolio currently includes:

- A hero section with a custom profile image, typed intro text, and animated accents.
- An about section with biography and timeline.
- A skills galaxy plus skill cards.
- Project cards for featured work.
- A fresher-focused achievements section with learning-focused cards.
- A certificate wall with a loading card for upcoming certifications.
- Direct contact actions for email and WhatsApp.
- A sticky navbar with theme toggle and a direct WhatsApp CTA.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually http://localhost:5173.

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Project Structure

```
kriti-portfolio/
├── public/
│   └── Portfolio_img.webp
├── src/
│   ├── components/
│   │   ├── Cursor.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── hooks/
│   │   ├── useCursor.js
│   │   └── useReveal.js
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── confetti.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Customize Content

Most content lives in [src/data/portfolio.js](src/data/portfolio.js):

- `PERSONAL` for name, bio, email, WhatsApp, and education details.
- `SOCIALS` for GitHub, LinkedIn, email, and other links.
- `TYPED_STRINGS` for the hero typing animation.
- `PROJECTS` for featured projects.
- `COUNTERS` for the fresher/self-learning cards.
- `CERTIFICATES` for certificate wall entries.
- `TIMELINE` for the about section timeline.

Visual styling and animations are controlled in [src/styles/global.css](src/styles/global.css).

## Contact Flow

- The Contact section uses direct email and WhatsApp buttons instead of a form.
- The navbar Hire Me button opens WhatsApp directly with a prefilled message.

## Deployment

The app is a standard Vite build, so it can be deployed to Vercel, Netlify, or any static hosting provider.

```bash
npm run build
```

Then deploy the generated `dist/` folder.

## Notes

- The project uses React 18 and Vite.
- The design is content-driven, so updating [src/data/portfolio.js](src/data/portfolio.js) will update most of the site.
