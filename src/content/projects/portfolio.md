---
title: "Professional Portfolio"
description: "A customized Astro-based portfolio & blog showcasing selected projects, professional insights, and case studies. Deployed with Cloudflare Pages."
techStack:
  - HTML
  - CSS
  - Cloudflare
icon: ../../assets/icons/cloudflare.svg
ctaText: "Documentation →"
sourceLink: "https://github.com/EngineerTheWay/portfolio"
---

> Based on [guihubie’s Astro template](https://github.com/guihubie/free-astro-template), extended with new layouts, sections, and branding.

A custom-built Astro portfolio and blog designed to highlight case studies, technical insights, and ongoing projects. It includes new content types, updated layouts, refined navigation, and a simplified overall look aligned with my professional brand.

### ✨ Highlights  
- Projects hub with slug-based case studies, tech-stack badges, and optional repo links  
- Improved blog system with cleaner navigation + pagination  
- Minimal header/footer featuring only LinkedIn, GitHub, and email  
- Updated themes, icons, and color palette to match personal branding  <br><br> 

### 🚀 Deployment  
- Hosted on **Cloudflare Pages**  
- Automated builds triggered from GitHub `main`  <br><br> 

### 💼 Key Updates  
- New `projects` content collection with long-form case study layout  
- Custom `ProjectCard` system for the projects index  
- Blog post layouts updated with consistent “← All Blog Posts” navigation  
- Streamlined global header and footer  
- Added custom SVG icons for tools like Azure, M365, Excel, SharePoint, Power Automate, Jira, etc <br><br> 

### 📂 File Tree (Changes & Additions)
```bash
src/
├── content.config.ts                 # Added projects collection + schema updates
├── assets/
│   └── icons/                        # Custom SVGs for tech/tool badges
├── components/
│   ├── BaseHead.astro                # Updated OpenGraph image
│   ├── badge/Badge.astro             # New tech badge component
│   ├── button/Button.astro           # Extended with size/variant props
│   ├── ui/
│   │   └── card/ProjectCard.astro    # New project card layout
│   └── sections/
│       ├── Projects.astro            # New projects grid section
│       ├── Header.astro              # Trimmed to core socials
│       └── Footer.astro              # Trimmed + simplified
├── content/
│   ├── blog/                         # Existing posts
│   └── projects/                     # New case studies (MD/MDX)
├── data/
│   └── projects.ts                   # Removed (replaced by content collection)
├── layouts/
│   ├── BlogPost.astro                # Added “← All Blog Posts” nav
│   └── ProjectsPost.astro            # New layout for case studies
└── styles/
    └── themes/
        ├── dark.css                  # Updated accent colors
        └── light.css                 # Updated accent colors
└── pages/
    ├── 404.astro                     # Added “View Projects” button
    ├── portfolio.astro               # Removed (superseded by slug-based pages)
    ├── blog/
    │   ├── [slug].astro              # Added consistent back-navigation
    │   ├── category/[category].astro # Same navigation update
    │   └── page/[page].astro
    └── projects/
        ├── index.astro               # Projects index
        └── [slug].astro              # Individual project pages


```
