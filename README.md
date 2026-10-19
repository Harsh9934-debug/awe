# Wonderful.ai - Native Next.js Frontend

A complete, high-fidelity frontend clone of **[wonderful.ai](https://www.wonderful.ai/)** running natively in **Next.js 16 (App Router)** with **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Running the Project

Start the local development server:

```bash
npm run dev
```

Open **`http://localhost:3000`** (or `http://localhost:3001` if port 3000 is occupied).

To build and run in production mode:
```bash
npm run build
npm run start
```

---

## 📁 Clean Next.js Architecture

```text
ai-training/
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # RootLayout (Fonts, metadata, styling)
│   │   ├── globals.css                    # Tailwind CSS v4 design system & visibility rules
│   │   ├── not-found.tsx                  # 404 handler
│   │   ├── page.tsx                       # Homepage route
│   │   ├── about-us/page.tsx              # About Us route
│   │   ├── systems/page.tsx               # Systems route
│   │   ├── ai-os/page.tsx                 # AI OS route
│   │   ├── deployment/page.tsx            # Deployment route
│   │   └── contact/page.tsx               # Contact route
│   ├── components/
│   │   └── PageView.tsx                   # Type-safe page renderer component
│   └── data/
│       ├── types.ts                       # Page TypeScript definitions
│       └── pages/                         # Native TypeScript page data modules
├── public/
│   ├── fonts/                             # 127 local fonts (Google Sans, Inter, Mono, Favorit)
│   ├── images/                            # 330 local images, logos, UI cards, and screenshots
│   ├── assets/                            # Local static icons, metadata, and search indices
│   └── sites/                             # Local Framer interactive runtime script modules
└── package.json, next.config.ts, tsconfig.json
```

---

## 🎯 Key Pages (100% Native TypeScript / TSX)

- **Exact 1:1 UI, Typography, Layout, and Animations** from `https://www.wonderful.ai/`.
- **Core Routes Supported**:
  - Home: `/`
  - Products: `/ai-os`, `/systems`
  - Strategic Model: `/deployment`
  - Company: `/about-us`, `/contact`
- **Completely Clean Frontend**:
  - Zero `.html` files anywhere in the project.
  - Every page is a first-class Next.js App Router route (`.tsx`).
  - Pre-rendered statically with Turbopack in ~1s.
- **Completely Self-Contained**:
  - 330 localized images in `public/images/`
  - 127 localized fonts in `public/fonts/`
  - Zero external tracking scripts or analytics bloat.
