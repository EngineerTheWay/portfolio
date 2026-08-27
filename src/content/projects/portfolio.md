---
title: "Professional Portfolio"
description: "Rebuilt an Astro template into a content-driven portfolio site for sharing projects, insights, and my career background. Hosted on Cloudflare Pages."
techStack:
  - Astro
  - TypeScript
  - Tailwind CSS
  - Cloudflare
priority: 3
icon: ../../assets/icons/Astro-logo.svg
ctaText: "View Project →"
sourceLink: "https://github.com/EngineerTheWay/portfolio"
---

A customized Astro portfolio and blog for case studies, professional insights, and ongoing projects. The template shipped with a working blog but handled projects as a hardcoded array with no detail pages, so most of the work went into replacing that with a real content collection, then building the reading, navigation, and UI/UX pieces around it.

> Forked from [guihubie's Astro template](https://github.com/guihubie/free-astro-template).

<br>

---

<br>

### Highlights

- Projects hub with slug-based case studies, tech-stack badges, and optional repo links
- Auto-generated table of contents on case studies and blog posts, with scroll tracking
- Sticky header with a slide-out mobile menu
- Light and dark themes, contrast-checked against WCAG AA
- Homepage that leads with the work, then the career narrative
- Dedicated About page with a photo-led layout
- Improved blog system with cleaner navigation and pagination <br><br>

### Deployment

- Hosted on **Cloudflare** via the Astro Cloudflare adapter
- Automated builds triggered from GitHub `main`
- Upgraded Astro 5.12 → 5.18 along with the MDX, RSS, and sitemap integrations <br><br>

### Key Updates

**Projects system**

- Replaced `data/projects.ts` (a static array with placeholder `#` links) with a `projects` content collection
- Added a Zod schema: `techStack` as an array instead of a delimited string, `icon` through Astro's image helper, plus optional `sourceLink` and `priority`
- New `ProjectCard` component for the index and a `ProjectsPost` layout for long-form case studies
- New `/projects` index and `/projects/[slug]` routes; removed the old single `portfolio.astro` page
- Renamed "Solutions" to "Projects" throughout, since a *solution* means something specific in the Power Platform

**Reading and navigation**

- New `TableOfContents` component, built from Astro's build-time headings, used on both case studies and blog posts. Highlights the current section while scrolling, sits in the right margin, and hides below 1366px
- Header is now sticky, with `scroll-padding-top` so anchor links don't land under it
- Mobile menu rebuilt as a right-side drawer (75% width, 320px max) with a scrim, scroll lock, and close on Escape, scrim, or link
- Nav links reserve their bold width so the active page doesn't shift the row

**Homepage**

- Added a Featured Projects section showing the top two case studies by `priority`, so the work appears before the résumé
- Moved the tool carousel to lead that section, putting the logos directly above the projects built with them
- Skills expanded to six cards in three columns, with one-line descriptions
- Experience timeline gained a year column in a widened rail

**About page**

- New standalone page with three deliberately different layouts: photo beside the intro, prose across two columns with photos in the third, and a photo grid for the personal section
- Both grids stack early rather than squeezing, moving photos above or below the text

**Theming**

- Reworked the light theme: off-white page background, softened text tokens, and darker borders
- Fixed badges failing WCAG AA contrast, and a card shadow written for dark mode that was rendering in light mode
- Header sits a shade off the page background in both themes, with a soft shadow beneath

**Blog and content**

- Added a `featured` flag to the blog schema
- Added a `priority` flag to project cards to control card presentation order
- Consistent "← All Insights" back-navigation on post layouts
- Replaced all template sample content and removed the leftover component demo page

**Housekeeping**

- Pointed `robots.txt` at this site's sitemap rather than the upstream template's
- Removed four favicon references to files that did not exist

<br>

<details>
<summary>📂 File Tree (Changes & Additions)</summary>

```bash
src/
├── content.config.ts                    # Added projects collection + schema
├── consts.ts                            # Site title/description
├── assets/
│   ├── icons/                           # Custom SVGs for tech/tool badges
│   └── images/
│       ├── about/                       # New — About page photography
│       ├── blog/                        # Post hero images
│       └── projects/                    # Case study screenshots, per project
├── components/
│   ├── BaseHead.astro                   # OpenGraph image, favicon cleanup
│   ├── sections/
│   │   ├── Header.astro                 # Sticky bar, drawer menu, socials
│   │   ├── HeaderLink.astro             # Active state without layout shift
│   │   ├── Footer.astro                 # Trimmed + simplified
│   │   ├── Projects.astro               # Reads the collection, not an array
│   │   ├── SkillsSection.astro          # Six cards, three columns
│   │   ├── WorkExperience.astro         # Timeline wrapper
│   │   └── Studies.astro
│   └── ui/
│       ├── badge/Badge.astro            # Contrast-fixed tech badges
│       ├── card/ProjectCard.astro       # New — project card layout
│       ├── carousel/Carousel.astro      # Tool logo strip
│       ├── timeline/Timeline.astro      # Year column in a widened rail
│       └── toc/TableOfContents.astro    # New — auto table of contents
├── content/
│   ├── blog/                            # Real posts (template samples removed)
│   └── projects/                        # New — case studies (MD/MDX)
├── data/
│   ├── projects.ts                      # Removed — replaced by the collection
│   ├── skills.ts                        # Six capabilities
│   └── work.ts                          # Roles with start years
├── layouts/
│   ├── BlogPost.astro                   # Back-nav + table of contents
│   └── ProjectsPost.astro               # New — case study layout
├── pages/
│   ├── 404.astro                        # Added "View Projects" button
│   ├── about.astro                      # New — About page
│   ├── demo.astro                       # Removed — template showcase
│   ├── portfolio.astro                  # Removed — superseded by /projects
│   ├── blog/
│   │   ├── [...slug].astro              # Consistent back-navigation
│   │   ├── category/[category].astro
│   │   ├── tag/[tag].astro
│   │   └── page/[page].astro
│   └── projects/
│       ├── index.astro                  # New — projects index
│       └── [slug].astro                 # New — individual case studies
└── styles/
    ├── tokens.css                       # Shared tokens (header height, accents)
    ├── utilities.css                    # Card surfaces, header, badges
    ├── global.css                       # Anchor offset for the sticky header
    └── themes/
        ├── dark.css                     # Accent + surface updates
        └── light.css                    # Reworked backgrounds, text, borders
```

</details>
