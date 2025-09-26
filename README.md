#### This project was forked from [guihubies](https://github.com/guihubie/free-astro-template) free Astro project.

> You can visit my portfolio live at https://calebway.io

I started with that foundation and then customized it to fit my needs — updating the design and adding features that make the site meet the needs of my brand. Examples of custom work include:  

- A slugified **Projects section** with case study pages, featuring tech stack badges, project icons, and optional GitHub source code buttons.  
- A streamlined **blog system** with a “← All Blog Posts” button for easier navigation.  
- Simplified **header and footer**, keeping only GitHub and LinkedIn for a cleaner professional focus.  
- A **brand-aligned color scheme and custom icons** to match my personal identity.  

A full breakdown of all customizations can be found below. 

---

###  ✨ Branding & Design
- Custom **brand-aligned dark theme** with accent gradients.
- Added custom **SVG logos** for Power Automate, Excel, SharePoint, Jira, etc.
- Integrated icons directly into **project cards** and **project detail pages**.
- Improved **button spacing & margins** for aesthetics.  <br><br>

---

### 📚 Added Blog Features
- Added `← All Blog Posts` button:
  - Inside each blog post
  - In paginated views for quick navigation <br><br>

---

### 💼 Projects Features <br>
#### Content Collection
- New `projects` collection in `src/content/projects/`
- Schema fields:
  - `title`
  - `description`
  - `techStack` (array → rendered as individual **badges**)
  - `icon` (imported SVG or image → displayed top-right)
  - `ctaText` (default: *View Case Study*)
  - `sourceLink` (optional GitHub link)   <br><br>

---

#### Projects Index Page
- Gradient **hero section** with title + subtitle.
- Grid of **ProjectCard** components:
  - Title
  - Tech stack badges
  - Description
  - Primary button: `View Case Study` (can be changed by declaring ctaText in md)
  - Secondary button: `< Source Code >` (opens in new tab if provided in md)   <br><br>

#### Projects Slug Pages (`/projects/[slug]`)
- Long-form **case study layout** (via `ProjectsPost.astro`).
- **Tech stack badges** prominently displayed, replacing string.
- Optional **icon** shown alongside tech stack for visibility.
- `← Back to Projects` button for easy navigation.   <br><br>


### 🧭 Header & Footer
- Removed extra socials — **kept GitHub + LinkedIn only**.
- Customized **Connect on LinkedIn** button with improved margins for readability.
- Consistent footer cleanup.   <br><br>


### 🎨 Styling Improvements
- Projects Tech Stack now formats with **badges** on the projects section.
- Aligned **button spacing** in project cards (centered at bottom, margin between buttons).
- Added **separator bars** between tech badges and icons where relevant.
- Refined **dark theme** for better balance with my brand.
- Added a **view projects** button to the 404 page for easier nav.   <br><br>

---

### 📂 Example Blog Post (Markdown) <br>
```html
---
title: "How I Passed Security+"
description: "A description of the blog"
pubDate: 2025-09-20
updatedDate: 2025-09-21
author: "Blog Author"
tags: ["tag1", "tag2"]
category: "Learning"
heroImage: "../../assets/blog/security-plus.png"
---

Blog Content...
```
---
### 📂 Example Project or Case Study  (Markdown) <br>
```html
---
title: "Project/Case Study"
description: "A description of the project or case study"
techStack:
  - Python
  - HTML
  - CSS
icon: "../../assets/icons/Excel-icon.svg"
ctaText: "View Documentation"
sourceLink: "https://github.com/calebway/case-study" (optional)
---

Case Study Content...
```
---
### 📂 File Tree (Changes & Additions) <br>
```bash
src/
├── assets/                     # Logos, icons, hero images
│   └── logos/, icons/          # Added custom SVGs for tech stack
├── components/
├── badge/BaseHead.astro        # MODIFIED: Updated open graph image
├── badge/Badge.astro           # NEW: renders tech stack badges
│   ├── button/Button.astro     # MODIFIED: supports size/variant system
│   ├── ui/
│   │   └── card/ProjectCard.astro   # NEW: custom card for projects
│   └── sections/
│       ├── Projects.astro           # NEW: grid renderer for project cards
│       ├── Header.astro             # MODIFIED: socials trimmed, LinkedIn added
│       └── Footer.astro             # MODIFIED: socials trimmed
├── content/
│   ├── blog/                   # Existing blog posts
│   └── projects/               # NEW: project case studies (Markdown/MDX)
├── data/
│   └── projects.ts             # ❌ REMOVED: removed as this was replaced with the slugified projects.
├── layouts/
│   ├── BlogPost.astro          # MODIFIED: added "← All Blog Posts" button
│   └── ProjectsPost.astro      # NEW: layout for project detail pages, more attuned to case study write-ups
└── pages/
    ├── 404.astro               # MODIFIED: Added a "View Projects" button 
    ├── portfolio.astro         # ❌ REMOVED: removed as this was replaced with the slugified projects.
    ├── blog/
    │   ├── index.astro                # MODIFIED: added "← All Blog Posts" button for easier nav
    │   ├── [slug].astro               # MODIFIED: added "← All Blog Posts" button for easier nav
    │   └── category/[category].astro  # MODIFIED: added "← All Blog Posts" button for easier nav
    │   └── tag/[tag].astro            # MODIFIED: added "← All Blog Posts" button for easier nav
    └── projects/
        ├── index.astro          # NEW: projects index page
        └── [slug].astro         # NEW: slug-based project detail pages

content.config.ts                # MODIFIED: added projects collection schema
```
<br><br>

### </> Planned Modifications <br>
```bash
src/
Blog System: Add category sort buttons at the top of paginated view. Currently the cateogory system is there be unused.

Projects System: Make tech stack badges an interactive UI component. Add a feature to paginate by tech stack.

```
