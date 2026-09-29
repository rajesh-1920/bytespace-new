# 🚀 ByteSpace - Modern EdTech & Learning Platform

ByteSpace is a high-performance, modern online learning platform designed to provide interactive, project-driven education in software engineering, AI, UI/UX design, and digital tech skills.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, based strictly on the [ByteSpace Figma Design System](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website).

---

## 🎨 Design System & Tokens

* **Figma File:** `ByteSpace New Check website` (`26TBgRjmpuxudcErJsHUfy`)
* **Core Brand Colors:**
  * **Primary (Electric Blue):** `#003BE2` (Scales 50–950)
  * **Accent (Electric Lime):** `#D4FB20` (Scales 50–950)
  * **Neutral (Dark / Gray):** `#242528` (Scales 50–950)
* **Typography:**
  * **Headings:** `Poppins` (SemiBold 600)
  * **Body & UI:** `Satoshi` / `Inter` (Regular 400, Medium 500)
* **Layout Grid:** 12-column grid system with 1200px max content width and 40px gutters.

---

## 🏗️ Project Architecture

```
bytespace-new/
├── public/                 # Static assets & public images
├── src/
│   ├── app/                # Next.js App Router (Pages, Layouts, API routes)
│   │   ├── (auth)/         # Split-screen Login & Register pages
│   │   ├── courses/        # Course Catalog, Details, Learning Workspace & Reviews
│   │   ├── creator/        # Instructor / Mentor Profile pages
│   │   ├── globals.css     # Tailwind directives & CSS variables
│   │   ├── layout.tsx      # Root layout & font configuration
│   │   ├── page.tsx        # Home page
│   │   └── not-found.tsx   # Custom 404 error page
│   ├── components/
│   │   ├── layout/         # Shared layout (Navbar, Footer, Sidebar)
│   │   ├── ui/             # Reusable atomic UI (Button, Badge, Container, Icons)
│   │   └── modules/        # Feature-specific components (CourseCard, Reviews, etc.)
│   ├── lib/                # Utilities, helpers, and data models
│   └── types/              # TypeScript interface definitions
├── .editorconfig           # Editor configuration
├── .gitignore              # Git ignore rules
├── .prettierrc             # Code formatting rules
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS design token mappings
└── tsconfig.json           # TypeScript configuration
```

---

## 🛠️ Getting Started

### Prerequisites
* **Node.js**: `v20.x` or later (tested on `v24.x`)
* **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### Installation
```bash
# Clone the repository
git clone https://github.com/rajesh-1920/bytespace-new.git
cd bytespace-new

# Install dependencies
pnpm install
```

### Development Server
```bash
pnpm dev
# Open http://localhost:3000 in your browser
```

### Production Build
```bash
pnpm build
pnpm start
```

---

## 🌿 Git Branching & Implementation Roadmap

| Phase | Branch | Deliverable / Page |
| :--- | :--- | :--- |
| **Phase 0** | `feature/foundation-setup` | Next.js, TS, Tailwind tokens, Navbar, Footer, Button, Badge |
| **Phase 1** | `feature/home-page` | Landing page (Hero, Categories, Tabbed Courses, Testimonials, CTA) |
| **Phase 2** | `feature/404-page` | Custom 404 Not Found error page |
| **Phase 3** | `feature/auth-pages` | Split-screen Login & Register pages |
| **Phase 4** | `feature/search-page` | Course Catalog with multi-criteria filter sidebar & course grid |
| **Phase 5** | `feature/course-details` | Course Details with curriculum accordion & sticky pricing card |
| **Phase 6** | `feature/course-lessons` | Interactive video player workspace & lesson playlist |
| **Phase 7** | `feature/course-reviews` | 5-star rating analytics, reviews list & submission form |
| **Phase 8** | `feature/creator-profile` | Instructor bio, stats, and published courses grid |
| **Phase 9** | `release/v1.0.0` | Final QA, responsiveness audits & production release |

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.