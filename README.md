# Qisa Studio — Official Flagship Digital Presence

<p align="center">
  <img src="public/og-image.png" alt="Qisa Studio Banner" width="100%" />
</p>

<p align="center">
  <strong>Absolute Digital Perfection. Elite UI/UX & Full-Stack Engineering.</strong>
</p>

<p align="center">
  <a href="https://qisa.studio"><img src="https://img.shields.io/badge/Website-qisa.studio-FF3B30?style=for-the-badge&logo=vercel&logoColor=white" alt="Website" /></a>
  <img src="https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Motion-Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

## Overview

This repository houses the official company landing website for **[Qisa Studio](https://qisa.studio)** — an elite digital product studio dedicated to architecting scalable, high-performance systems and turning complex concepts into production-grade digital applications.

Designed under the design philosophy of **Kinetic Brutalism**, this platform merges bold typography, reactive micro-interactions, smooth kinetic scrolling, and rigorous full-stack architecture to deliver an uncompromising digital showcase for visionary brands.

---

## Core Capabilities & Features

- **Kinetic Brutalism Design System**: Bold editorial typography (`Archivo` & `Space Grotesk`), subtle analog grain overlay, responsive viewport scaling, and refined dark-mode aesthetic.
- **Fluid Motion & Scroll Choreography**: Powered by **Lenis** smooth scroll and **Framer Motion v12**, delivering hardware-accelerated transitions and scroll-triggered animations.
- **Bilingual Localization (i18n)**: Instant, zero-reload internationalization engine supporting **English (EN)** and **Bahasa Indonesia (ID)** with persistent state.
- **Curated Work Showcase**: Dynamic portfolio presentation displaying verified case studies (Fintech, E-Commerce, SaaS, and Digital Media) with impact metrics.
- **Dynamic Leadership & Arsenal Section**: Dual-view founder showcase with interactive card switching for mobile/desktop, coupled with a transparent engineering tech stack breakdown.
- **Lead Capture & Inquiries Pipeline**: Fully validated contact mechanism powered by **React Hook Form** and **Zod** schema enforcement.
- **Next-Gen Web Standards**: App Router architecture in Next.js 16 with React 19 compiler support, zero layout shift (CLS), and SEO optimization.

---

## Technical Arsenal (Evidence-Based)

All technologies listed below are directly integrated and utilized within this codebase:

| Category | Technology | Purpose in Project |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | Core application framework, server-side rendering, metadata generation |
| **Core Library** | [React 19](https://react.dev/) | Component architecture, modern React actions & hooks |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | End-to-end type safety, strict interface contracts |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS | Next-generation utility-first styling with modern CSS variables |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Orchestrated page transitions, card hovers, layout morphing |
| **Kinetic Scroll** | [Lenis](https://github.com/darkroomengineering/lenis) | Smooth inertial scrolling for desktop and mobile viewports |
| **Form & Validation** | [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) | Client-side form management with type-safe schema validation |
| **Iconography** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) | Crisp, lightweight SVG iconography |
| **Typography** | `next/font/google` (`Archivo`, `Space Grotesk`) | Self-hosted, zero-layout-shift font optimization |

---

## Architecture & Directory Structure

```plaintext
qisalanding/
├── public/                     # Static assets, OpenGraph images, favicons
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── layout.tsx          # Root layout, metadata, font imports, providers
│   │   ├── page.tsx            # Flagship landing page assembly
│   │   ├── globals.css         # Tailwind v4 theme tokens & custom animations
│   │   ├── privacy-policy/     # Legal & privacy documentation
│   │   ├── terms-of-service/   # Terms of service page
│   │   └── work/[slug]/        # Dynamic case study route
│   ├── components/
│   │   ├── layout/             # Navigation bar, mobile drawer, footer
│   │   ├── providers/          # Lenis smooth scroll provider
│   │   ├── sections/           # Modular page sections (Hero, Founders, Services, TechStack, Projects, Contact, FAQ)
│   │   └── ui/                 # Atomic UI (CustomCursor, Grain overlay, ScrollToTop)
│   └── lib/
│       ├── data/               # Structured case study & showcase datasets
│       ├── translations/       # i18n dictionaries (en.json, id.json)
│       ├── LanguageContext.tsx # Localization state provider & custom hook
│       └── utils.ts            # Class merge utilities (clsx + tailwind-merge)
├── tailwind.config.ts          # Extended styling tokens and color definitions
├── next.config.ts              # Next.js build and optimization configuration
└── tsconfig.json               # TypeScript strict configuration
```

---

## Getting Started

### Prerequisites

- **Node.js**: v20.x or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SukemaruMomo666/qisalanding.git
   cd qisalanding
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000) to inspect the live local environment.

### Production Build

To test and compile the production build:

```bash
npm run build
npm run start
```

---

## Developed Under Qisa Studio

This project is an official internal release developed and maintained under **Qisa Studio**.

### Qisa Studio

**Founded by:** Prabu Alam Tian Try Suherman  
**Focus:** Website Development · Application Development · Digitalization · Digital Product Development · Custom Digital Solutions

> *Qisa Studio is a digital product studio founded by Prabu Alam Tian Try Suherman, focusing on website development, application development, and digitalization.*

---

## Project Contribution Identity

### Prabu's Role

**Prabu Alam Tian Try Suherman**  
*Lead Architect & Full-Stack Master*  
*Founder — Qisa Studio*

**Verified Project Contributions:**
- **System & Application Architecture:** Engineered the scalable Next.js 16 App Router foundation with performant separation of Client and Server boundaries.
- **Technical Direction & Full-Stack Engineering:** Developed core interactive modules, state synchronization, and strict TypeScript data contracts.
- **UI/UX Direction & Kinetic Brutalism:** Conceptualized and executed the brutalist aesthetic, responsive layout proportions, typography hierarchy, and dark color tokens.
- **Motion & Kinetic Scroll Integration:** Implemented hardware-accelerated animations using Framer Motion and integrated the Lenis smooth scroll engine.
- **Internationalization (i18n) Engine:** Designed the custom bilingual context provider (`LanguageContext`) enabling instant client-side language switching between English and Indonesian.
- **Form Architecture & Validation Pipeline:** Built the contact and discovery inquiry form with strict schema validation via React Hook Form and Zod.
- **Deployment & Documentation:** Configured GitHub Actions deployment automation and authored comprehensive technical documentation.

### Core Studio Team & Collaborators

- **Prabu Alam Tian Try Suherman** — Lead Architect & Full-Stack Master (Founder)
- **Qisty Sauva** — Elite UI/UX & Full-Stack Engineer (Co-Founder)

---

## About the Creator

### Prabu Alam Tian Try Suherman

**Lead Architect & Full-Stack Master**  
*Founder of Qisa Studio, a digital product studio focused on website development, application development, and digitalization.*

Prabu focuses on architecting scalable, high-performance systems and executing complex end-to-end applications — from system analysis and architecture to UI/UX, development, database design, testing, deployment, and optimization.

#### Areas of Focus:
- System Architecture
- Full-Stack Development
- Web Applications
- Digitalization
- UI/UX
- Digital Product Development
- Scalable System Design

---

### Built & Architected by

**Prabu Alam Tian Try Suherman**  
Lead Architect & Full-Stack Master  
Founder — Qisa Studio  

*Architecting scalable systems. Building high-performance digital products. Turning complex ideas into working applications.*
