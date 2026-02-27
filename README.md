# Bill Portfolio

Source code for my personal portfolio website (React + i18n).

Live site: [https://itwascache.com](https://itwascache.com)

## Overview

This project is a personal website for showcasing:

- Home introduction and social links
- About page (background, skills, tools, GitHub contributions)
- Projects page (project cards + experience tip section)
- Contact page (email and response tips)

## Current Features

- Multi-page routing (`/`, `/about`, `/project`, `/email`)
- Language switcher with 7 languages:
  - English (`en`)
  - Chinese (`zh`)
  - German (`de`)
  - French (`fr`)
  - Arabic (`ar`)
  - Russian (`ru`)
  - Hindi (`hi`)
- Language preference persisted in `localStorage`
- Automatic RTL support for Arabic
- Privacy modal on selected project cards (GitHub/Demo clicks)
- Responsive layout for desktop and mobile

## Tech Stack

- React 17
- React Router 6
- React Bootstrap + Bootstrap 5
- i18next + react-i18next
- React Icons
- react-github-calendar
- CSS3

## Local Development

Requirements:

- Node.js 16+
- npm 8+

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Default URL:

- `http://localhost:3000`

## Build and Checks

Create a production build:

```bash
npm run build
```

Validate i18n key consistency across locales:

```bash
npm run i18n:check
```

## i18n Files

- `src/i18n.js`: i18n initialization and language behavior
- `src/locales/en/translation.json`
- `src/locales/zh/translation.json`
- `src/locales/de/translation.json`
- `src/locales/fr/translation.json`
- `src/locales/ar/translation.json`
- `src/locales/ru/translation.json`
- `src/locales/hi/translation.json`

## Project Structure

- `src/components/Home/`: home page
- `src/components/About/`: about page
- `src/components/Projects/`: projects page
- `src/components/Email/`: contact page
- `src/components/Navbar.js`: top navigation + language switcher
- `src/components/Footer.js`: footer
- `src/style.css`: global styles and theme colors
- `public/`: static assets (avatars, icons)

## Common Customization Points

- Personal profile and intro text:
  - `src/locales/*/translation.json` -> `home`, `home2`, `about`
- Project titles/descriptions:
  - `src/locales/*/translation.json` -> `projects.items`
- Project privacy modal message:
  - `src/locales/*/translation.json` -> `projects.privacyNotice`
- Contact page copy:
  - `src/locales/*/translation.json` -> `email`
- Theme colors:
  - `src/style.css`

## Maintenance Notes

- The project is based on Create React App. Build logs may include upstream dependency warnings from CRA.
- After adding or changing translation keys, run `npm run i18n:check` to ensure all locale files stay in sync.

## Acknowledgement

Credits to [Soumyajit4419 Portfolio](https://github.com/soumyajit4419/Portfolio).
