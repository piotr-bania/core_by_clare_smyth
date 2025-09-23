# Core by Clare Smyth – Demo Website

This repository is a **mini-project** built with the [Bespoke Core Starter Kit](https://github.com/piotr-bania/bespoke_core) to demonstrate how the starter can be adapted into a real-world, fine dining restaurant website.

The project takes inspiration from **Core by Clare Smyth** (3 Michelin-starred, Notting Hill, London).  
It is not affiliated with or commissioned by the restaurant — it exists purely as a **portfolio showcase** to highlight design, animations, and development workflow.

---

## 🎯 Goal

- Showcase an **awwwards-level web experience** for restaurants and hospitality.
- Demonstrate how the Bespoke Core Starter Kit accelerates builds:
  - Config-driven content (`/content/config.json`)
  - Centralised helpers (`/lib/config.js`)
  - Brand palette managed via `_tokens.scss` and `hero.mjs`
  - Reusable animated transitions (Enter/Leave clip-path system)
- Create a **convincing client-facing demo** to share in outreach (email, LinkedIn, DM).

---

## ✨ Features

- **Page Transitions**  
  Smooth clip-path animations on route changes.

- **Config-Driven Setup**  
  Navigation, business info, booking links, social media, policies, awards, menus, and private dining can all be managed from a single JSON file.

- **Restaurant-Specific Components**
  - Navigation & footer with booking CTA.
  - Menu list (PDF or dynamic).
  - Private dining CTA.
  - Policies (cancellation, allergies, dress code).
  - Map embed & contact info.
  - Awards strip.

- **Responsive Typography**  
  Heading/body fonts defined once in `fonts.js` and applied globally.

- **Modern Tech Stack**
  - [Next.js 15](https://nextjs.org/) App Router
  - [React 19](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [HeroUI](https://heroui.dev/) for UI primitives
  - SCSS tokens for brand palette
  - Framer Motion for animations

---

## 🗂 Project Structure

- `app/` – Next.js app router pages and layouts
- `components/` – reusable UI & transitions
- `content/config.json` – **single source of truth** for site content
- `lib/config.js` – safe getters for config values
- `styles/_tokens.scss` – brand colors, radii, typography scale
- `app/hero.mjs` – HeroUI theme setup
- `public/` – static assets

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/piotr-bania/core_by_clare_smyth.git
cd core_by_clare_smyth
pnpm install   # or npm install / yarn install
pnpm dev
