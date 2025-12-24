```terminal
$ PROJECT: BizEdge Dashboard
$ TYPE: Responsive Admin Dashboard UI
$ STACK: HTML • Tailwind CSS • Vanilla JavaScript
$ AUTHOR: WebSync360
$ STATUS: Production‑ready (Frontend)
```

---

##  PROJECT OVERVIEW

BizEdge Dashboard is a **premium, responsive admin dashboard UI** designed for business coaches, consultants, professionals, and service‑based businesses.

The goal of this project is to provide:

* A **conversion‑focused business overview**
* A **clean, modern SaaS‑style interface**
* A **mobile‑first responsive layout** with smooth sidebar behavior

This project is **frontend‑only**, intentionally lightweight, and built for:

* Fast customization
* Reusability
* Easy integration with any backend (Laravel, Node, Firebase, etc.)

---

## TECH STACK

```terminal
✔ HTML5          → Semantic structure
✔ Tailwind CSS   → Utility‑first styling & responsive design
✔ Vanilla JS     → Sidebar toggle & UI interactions
✔ SVG Icons      → Heroicons (inline SVG)
```

No frameworks. No dependencies. No bloat.

---

## PROJECT STRUCTURE

```terminal
BizEdge-Dashboard/
├── dist/
│   └── output.css          # Compiled Tailwind CSS
│
├── src/
│   ├── input.css           # Tailwind source styles
│   └── script.js           # Sidebar toggle logic
│
├── index.html               # Main dashboard layout
├── tailwind.config.js       # Tailwind configuration
└── README.md                # Project documentation
```

---

##  CORE FEATURES

```terminal
✓ Fully responsive layout (mobile → desktop)
✓ Fixed sidebar with smooth slide‑in animation
✓ Mobile hamburger navigation
✓ KPI cards with visual hierarchy
✓ Performance charts (UI‑only placeholders)
✓ Funnel visualization (desktop + mobile versions)
✓ Recent activity & messages panels
✓ Revenue breakdown & monthly overview
✓ Clean typography & spacing system
```

---

## RESPONSIVE BEHAVIOR

### Desktop (lg and above)

```terminal
• Sidebar is permanently visible
• Main content offset with `lg:ml-64`
• Hamburger button hidden
```

### Mobile & Tablet

```terminal
• Sidebar is hidden by default
• Hamburger button appears (top‑left)
• Sidebar slides over content when opened
• Click outside / toggle hides sidebar
```

This behavior is intentional and mirrors modern SaaS dashboards.

---

## SIDEBAR TOGGLE LOGIC

```terminal
• Sidebar uses transform: translateX
• Hidden state: -translate-x-full
• Visible state: translate-x-0
• Controlled via JavaScript toggle
```

Expected behavior:

* Sidebar overlays hamburger when open
* Hamburger becomes inactive while sidebar is visible
* Sidebar closes cleanly when toggled again

✔ This is correct UX and matches industry patterns.

---

## DESIGN PRINCIPLES

```terminal
• Minimal UI, maximum clarity
• Strong visual hierarchy
• Consistent spacing & radius
• Soft shadows, subtle borders
• SaaS‑grade typography
```

The dashboard is intentionally neutral so it can be re‑branded for:

* Business consultants
* Agencies
* SaaS MVPs
* Fitness coaches

---

## BACKEND INTEGRATION

This UI is backend‑agnostic.

You can plug it into:

```terminal
• Laravel / PHP
• Node.js / Express
• Firebase
• Supabase
• REST / GraphQL APIs
```

Dynamic data can replace:

* KPI values
* Charts
* Messages
* Revenue metrics

---

## FUTURE ENHANCEMENTS (OPTIONAL)

```terminal
◻ Dark mode toggle
◻ Mini / collapsed sidebar
◻ Real charts (Chart.js / ApexCharts)
◻ Authentication pages
◻ Role‑based navigation
◻ Animations (Framer Motion / GSAP)
```

---

## LICENSE

```terminal
MIT License
Free to use, modify, and commercialize.
Attribution appreciated but not required.
```

---

## AUTHOR

```terminal
WebSync360
Web Integrator & Automator
Focused on high‑conversion UI systems
```

---

```terminal
$ Build clean.
$ Ship fast.
$ Optimize for users.
```
