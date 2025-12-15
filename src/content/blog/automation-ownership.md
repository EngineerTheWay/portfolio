---
title: 'Who Owns the Automation?'
description: 'Why workflow automations fail—and how ownership and documentation are key to its success.'
pubDate: 'Feb 8 2026'
heroImage: '../../assets/images/automation.png'
category: 'Showcase'
tags: ['automation', 'systems-thinking', 'power-platform', 'process-design']
---
<br>

### The problem isn’t technical

Automation is usually framed as a technical problem. In practice, it fails for organizational reasons: unclear ownership, fragile access, and systems that don’t survive turnover.

I’ve built workflow automations that delivered real value by reducing manual work, improving visibility, and standardizing processes across teams. I documented them thoroughly, trained the receiving teams, and handed everything off before rotating out of the role. From a delivery standpoint, everything went right, yet some of those automations quietly died.

### When good handoff still fails

Just two months after I left, the team needed to make small updates. Turnover had happened faster than expected, and the people I had trained were no longer there. The documentation still existed, but no one felt confident modifying the system. Usage tapered off, and the automation stopped being used entirely. Eventually, they reached back out to me, but by that point the value had already eroded.

That experience forced a realization: documentation and training are not the same thing as ownership.

### The hidden dependency nobody plans for

I encountered a similar version of the same issue later on. I had transferred several automations to a team as shared solutions, but authentication for those workflows was tied to a single team member’s account. When that person was laid off and their account was deactivated, the automations immediately stopped working.

Nothing about the logic changed, and nothing technically “broke.” The system failed because a hidden operational dependency disappeared. The solution appeared shared, but in reality it depended on a single user account.

### Designing under real constraints

In an ideal environment, this would be solved with dedicated service accounts. In a government setting, that option wasn’t available. That constraint made the risk unavoidable and forced me to rethink how I approach automation design.

Instead of focusing purely on uptime, I started designing for survivability. I centralized automations into managed Power Platform solutions and created unauthenticated backups that could be restored or reassigned if access was lost. 

### What this changed in my thinking

These experiences changed how I think about automation. People leaving isn’t a risk to plan around; it’s a certainty. Identity and access are part of the system, not implementation details. Ownership has to be intentional, and resilience matters more than clever design.

Ownership isn’t just documentation, training a single champion, or transferring a flow between folders. It’s durable access, clear responsibility, and the ability for a system to continue functioning (and/or be easily recovered) after the original builder is gone.

### The real measure of success

Automation should survive people leaving. If it doesn’t, the failure was designed in from the start.