---
title: "Personal Portfolio & Blog"
description: "A fully customized Astro-based portfolio & blog showcasing selected projects, professional insights, and case studies. Forked from guihubie."
techStack:
  - HTML
  - CSS
  - Astro
icon: ../../assets/logos/Astro-logo.svg
ctaText: "Documentation →"
sourceLink: "https://github.com/EngineerTheWay/portfolio"
---

> This project was forked from [guihubie’s Astro template](https://github.com/guihubie/free-astro-template).

I started with guihubie's Astro template and expanded on that design, integrating a few new sections and and design elements:

- Projects section with slugged case study pages, tech stack badges, and optional source links
- Blog system updates with navigation and pagination improvements
- Clean header/footer with LinkedIn + GitHub + email only
- Custom themes, icons, and color scheme aligned with my professional branding  <br><br>


### 🚀 Deployment & Hosting
- Deployed to **Cloudflare Pages** with GitHub integration  
- Automated builds on each push to `main`  
- Global CDN caching for fast updates and reliable uptime  <br><br>

### 💼 Key Repo Changes
- New `projects` collection and long-form case study layout  
- Custom `ProjectCard` grid for the projects index  
- Blog layouts updated with “← All Blog Posts” navigation  
- Trimmed header/footer for a simpler professional look  
- Added custom SVGs for tool logos (Excel, SharePoint, Power Automate, Jira, etc.)  <br><br>

### 📂 File Tree (Changes & Additions)
```bash
src/
├── assets/                     
│   └── icons/                  # Added custom SVGs for tech stack
├── components/
│   ├── BaseHead.astro          # MODIFIED: changed Opengraph image
│   ├── badge/Badge.astro       # NEW: renders tech stack badges
│   ├── button/Button.astro     # MODIFIED: supports size/variant system
│   ├── ui/
│   │   └── card/ProjectCard.astro   # NEW: custom card for projects
│   └── sections/
│       ├── Projects.astro           # NEW: grid renderer for project cards
│       ├── Header.astro             # MODIFIED: socials trimmed
│       └── Footer.astro             # MODIFIED: socials trimmed
├── content/
│   ├── blog/                   # Existing blog posts
│   └── projects/               # NEW: project case studies (Markdown/MDX)
├── data/
│   └── projects.ts             # ❌ REMOVED: removed as this was replaced with the slugified projects.
├── layouts/
│   ├── BlogPost.astro          # MODIFIED: added "← All Blog Posts" button
│   └── ProjectsPost.astro      # NEW: layout for project detail pages
└── pages/
    ├── 404.astro               # MODIFIED: Added a "View Projects" button 
    ├── portfolio.astro         # ❌ REMOVED: removed as this was replaced with the slugified projects.
    ├── blog/
    │   ├── [slug].astro                # MODIFIED: added "← All Blog Posts" button
    │   ├── category/[category].astro   # MODIFIED: added "← All Blog Posts" button
    │   └── page/[page].astro           
    └── projects/
        ├── index.astro          # NEW: projects index page
        └── [slug].astro         # NEW: slug-based project detail pages

content.config.ts                # MODIFIED: added projects collection schema
```
