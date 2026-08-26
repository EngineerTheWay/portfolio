---
title: "Professional Portfolio"
description: "Started from an Astro template and rebuilt its projects system as a typed content collection, adding the slug-based routing, case study layout, and Cloudflare deployment it did not have."
techStack:
  - Astro
  - TypeScript
  - Tailwind CSS
  - Cloudflare
priority: 3
icon: ../../assets/icons/Astro-logo.svg
ctaText: "View Solution →"
sourceLink: "https://github.com/EngineerTheWay/portfolio"
---

<br>

## Overview

This site started as a fork of an open-source Astro template. I want to be direct about that, because the interesting part of the project is what happened next: deciding which parts of the template were worth keeping and which ones did not hold up.

The template had a well-built blog. Posts lived in an Astro content collection with a validated schema, slug-based routing, pagination, categories, and tags. It was the right architecture.

Its projects system was nothing like that. Projects were a hardcoded array in a TypeScript file, rendered inline into a single static page, with no detail pages at all.

That mismatch is what this project is about. I rebuilt projects to match the standard the template had already set for its blog, then built the routing and layout layer that neither section had.

<br>

---

<br>

## Problem

The template shipped projects as a static array in `src/data/projects.ts`:

```ts
export const projects = [
  {
    title: "Workflow Automation Orchestrator (n8n)",
    techStack: "n8n • Node.js • TypeScript • PostgreSQL",
    description: "Event-driven workflows for data sync, notifications...",
    ctaText: "View Repo →",
    ctaLink: "#",
    icon: N8nIcon
  },
  // ...
];
```

A `Projects.astro` section mapped over that array and rendered the card markup inline. `src/pages/portfolio.astro` displayed the grid. That was the entire system.

Four things about it did not work for case studies:

- **`techStack` was a single delimited string.** Rendering it as individual badges meant splitting on a bullet character at display time.
- **`ctaLink` pointed at `#`.** The template's sample projects had nowhere to go, because there were no project pages to link to.
- **Icons were imported as raw SVG strings** and injected with `set:html`, which skips Astro's asset handling entirely.
- **There were no detail pages.** A project was a card and nothing more. I needed long-form writeups with images, tables, and headings.

The template already demonstrated the correct pattern one directory over, in its blog collection. Projects just had not been built that way.

<br>

---

<br>

## Solution

I replaced the array with a content collection, so a project became a Markdown file validated at build time rather than an object in a TypeScript file.

```ts
const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      techStack: z.array(z.string()).optional(),
      icon: image().optional(),
      ctaText: z.string().optional(),
      sourceLink: z.string().optional(),
      priority: z.number().optional(),
    }),
});
```

Then deleted `src/data/projects.ts` and `src/pages/portfolio.astro`.

<br>

### What Changed in the Schema

Each field was a deliberate departure from how the template modeled the same data.

| | **Template** | **This site** | **Why** |
|---|---|---|---|
| `techStack` | One string, bullet-delimited | `z.array(z.string())` | Each entry renders as its own badge without parsing a display string |
| `icon` | Raw SVG via `?raw` import | Astro's `image()` helper | Paths resolve at build time, so a bad reference fails the build instead of rendering nothing |
| Link out | `ctaLink: "#"` | `sourceLink` optional | Present renders a source button, absent renders nothing — no dead placeholder links |
| Ordering | Array position | `priority: z.number()` | Order is a property of the content, not of where it sits in a file |

`sourceLink` is the one I use most as a test of whether the model is right. It is a single optional key, and it controls a button in two separate places: the card on the projects index and the header of the case study page. Adding a repository link to a project is one line of frontmatter, and both surfaces update. Nothing renders when it is absent.

<br>

### Routing and Layout

The template had no project detail pages, so this part was new construction rather than a rewrite:

- **`src/pages/projects/[slug].astro`** — dynamic routes generated from the collection
- **`src/pages/projects/index.astro`** — the projects index, replacing the old static page
- **`src/layouts/ProjectsPost.astro`** — the case study layout, with the title block, tech-stack badges, icon, and source link in the header

I also pulled the card markup out of `Projects.astro`, where it had been written inline, into its own **`ProjectCard.astro`** component. The card and the case study layout now read from the same frontmatter and present it differently — the card shows the description and CTAs, the layout shows badges and the full body.

The template's `Button` component already took `variant` and `size` props, which meant the primary CTA and the secondary source-code link needed no new component. That one I kept as-is.

<br>

### Deployment

The template was configured for a static build with `site: 'https://example.com'`. I added the Cloudflare adapter and pointed it at the real domain:

```js
export default defineConfig({
  adapter: cloudflare(),
  site: 'https://calebway.io',
  integrations: [mdx(), sitemap()],
});
```

Builds trigger from `main`. The adapter is the part worth noting — almost everything on the site is prerendered today, which is the right default, but running on an adapter rather than a pure static build means a page that needs to run server-side can, without migrating the site first.

I also moved the project from Astro 5.12 to 5.18 and updated the MDX, RSS, and sitemap integrations along with it.

<br>

### Content and Trimming

The template shipped with eight example posts, a Markdown style guide, sample project entries, and a demo page. Beyond the architecture work, making the site my own meant removing all of it and replacing it with real writing — four blog posts and the case studies in this section.

Smaller changes in the same direction:

- Header and footer trimmed to LinkedIn, GitHub, and email
- Accent colors in the dark and light themes updated to match my branding
- Custom SVG icons added for the Microsoft tooling my other projects use
- A `featured` flag added to the blog schema for surfacing a lead post

<br>

---

<br>

## What I Took Away

The useful skill here was not writing an Astro site from scratch. It was reading someone else's codebase closely enough to tell which parts were well-built and which were placeholder scaffolding — and being willing to delete the second kind.

The template's blog collection was the model to follow. Recognizing that the projects system should look like it, rather than inventing a third approach, made the rebuild straightforward and left the codebase more internally consistent than I found it.

That is the same instinct behind the typed workflow contracts in my Copilot Studio work: define the shape of the data first, then let the platform enforce it. A build that fails on a bad image path is telling me something before a visitor ever sees the page.

<br>

---

<br>

> **Starting point:** [guihubie's free Astro template](https://github.com/guihubie/free-astro-template), which provided the blog system, base component library, and design tokens this site builds on.
