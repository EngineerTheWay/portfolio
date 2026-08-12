---
title: "Career Copilot"
description: "Built a Copilot Studio agent that connects career data in Dataverse with Microsoft 365 tools to support networking, job search, and follow-up workflows."
techStack:
  - Copilot Studio
  - Dataverse
  - Microsoft 365

priority: 2
icon: ../../assets/logos/Copilot_Studio.svg
ctaText: "View Solution →"
---

<br>

## Overview

Career Copilot is an AI agent I built to extend my Career Development Hub beyond a traditional application interface.

The underlying Career Development Hub stores job applications, networking contacts, companies, business groups, and follow-up activity in Dataverse. Career Copilot provides a conversational layer over that data while connecting it with Microsoft 365 services such as Outlook and Calendar.

Instead of simply answering questions about career data, the agent can help carry out workflows across systems. It can retrieve current information from Dataverse, combine it with Microsoft 365 context, recommend next actions, and perform tasks such as drafting or sending follow-up emails and scheduling calendar events.

> **Career Development Hub:** [Explore the Career Development Hub →](../career-development-hub)

<br>

---

<br>

## From System of Record to Agentic Workflow

Career Development Hub provided a structured system of record for managing my job search, but many of the actions resulting from that data still occurred elsewhere.

For example, a networking follow-up might require me to:

- Find the contact and review previous notes
- Determine what follow-up was due
- Draft an appropriate message
- Open Outlook and send the email
- Update or complete the follow-up
- Schedule another reminder or calendar event

The individual steps are simple, but the workflow crosses multiple applications and requires context from each.

I wanted to explore whether an agent could operate across those boundaries while keeping Dataverse as the authoritative source for career data.

<br>

---

<br>

## Solution

I built Career Copilot in Copilot Studio as a conversational assistant for the Career Development Hub.

The agent uses Dataverse as its system of record and Microsoft 365 capabilities to interact with the productivity tools where career activity actually happens.

This allows a user to interact with the broader career-management system through natural language rather than navigating each application independently.

Example requests include:

- "What follow-ups do I have today?"
- "What applications currently need my attention?"
- "Summarize my history with this contact."
- "Draft a follow-up email to this networking contact."
- "Send the follow-up."
- "Schedule time on my calendar for this interview."
- "Create a calendar event from this follow-up."
- "What follow-ups and calendar events do I have today?"
- "Create a new follow-up for this contact."

The goal was not to replace the structured application. Career Copilot provides another interface into the same system and is particularly useful for workflows that span multiple services.

<br>

#### Career Copilot

> ![Career Copilot](../../assets/images/projects/cdh/cdh-careercopilot.png)

<br>

---

<br>

## Agent Architecture

Career Copilot combines structured business data with Microsoft 365 context and actions.

At a high level:

> **Architecture diagram placeholder**
>
> User  
> ↓  
> Career Copilot / Copilot Studio  
> ↓  
> Agent Instructions & Skills  
> ↓  
> Dataverse MCP + Microsoft 365 / Work IQ MCP  
> ↓  
> Career Development Hub Data + Outlook + Calendar + Teams

<br>

### Dataverse as the System of Record

Career Copilot connects to the same Dataverse environment used by Career Development Hub.

The agent can work with five primary entities:

- Job Applications
- Networking Contacts
- Follow-ups
- Companies
- Business Groups

Rather than maintaining a separate copy of career information within the agent, Career Copilot retrieves current records from Dataverse when that information is needed.

This keeps the structured application and conversational experience operating against the same underlying data.

<br>

### Microsoft 365 Integration

Microsoft 365 capabilities extend the agent beyond the Dataverse application.

Through Microsoft's MCP-based integrations, Career Copilot can interact with services including:

- Outlook Mail
- Outlook Calendar
- Microsoft Teams

This allows Dataverse context to become part of broader workflows.

A networking contact stored in Career Development Hub, for example, can provide the context needed to generate an outreach message. The agent can then use Outlook capabilities to send the message and schedule future activity.

Similarly, follow-up records can be combined with calendar information to provide a consolidated view of upcoming career activity.

<br>

---

<br>

## Example Workflow: Networking Follow-Up

One of the primary scenarios I designed around was professional networking.

A typical interaction can begin with a simple request:

> "Who do I need to follow up with today?"

Career Copilot retrieves current follow-up records from Dataverse and identifies the associated contacts.

From there, the same conversation can continue:

> "What do I know about this contact?"

The agent can retrieve the associated contact and relationship context from the Career Development Hub.

The user can then ask:

> "Draft a follow-up email."

Career Copilot uses the retrieved career context to assist with the message while Outlook provides the communication layer.

The workflow can continue into actions such as sending the message, completing the existing follow-up, or scheduling the next interaction.

This allows one conversational workflow to span structured Dataverse records and Microsoft 365 productivity services without manually moving context between applications.

<br>

#### Example Agent Interaction

> ![Career Copilot Chat](../../assets/images/projects/cdh/cdh-chat1.png)
> ![Career Copilot Chat](../../assets/images/projects/cdh/cdh-chat2.png)
> ![Career Copilot Chat](../../assets/images/projects/cdh/cdh-chat3.png)
> ![Career Copilot Chat](../../assets/images/projects/cdh/cdh-chat4.png)
> ![Career Copilot Chat](../../assets/images/projects/cdh/cdh-chat5.png)

#### Example Outlook Draft

> ![Career Copilot Email Draft](../../assets/images/projects/cdh/cdh-outlook.png)

#### Example Follow-up Edit

> ![Career Copilot Followup Before](../../assets/images/projects/cdh/cdh-follow-up.png)
>
> ![Career Copilot Followup After](../../assets/images/projects/cdh/cdh-follow-up-edit.png)


<br>

---

<br>

## Agent Instructions & Guardrails

Because the agent can retrieve and modify business data, I defined explicit instructions around how it should interact with the Career Development Hub.

Dataverse remains the authoritative source for structured career information. The agent is instructed to retrieve current records before summarizing or updating them rather than relying on information from previous interactions.

The agent is also instructed to:

- Stay scoped to the Career Development Hub tables
- Avoid inventing records, relationships, statuses, or dates
- Distinguish retrieved data from executable instructions
- Verify sufficient information exists before creating or updating records
- Preserve relationships between contacts, applications, companies, business groups, and follow-ups

I also created a reusable skill to provide additional guidance for record lookup, association, and safe interaction with the underlying data.

Because the current solution runs in a single-user development tenant, the project does not attempt to demonstrate an enterprise authorization model. In a multi-user implementation, identity, permissions, data access, action authorization, and governance would become explicit architecture requirements.

<br>

---

<br>

## Why an Agent Instead of More Application Features?

Career Copilot helped me explore where an agent adds value compared with adding another screen or workflow to a traditional application.

Career Development Hub remains better suited for structured activities such as reviewing the complete application pipeline, browsing networking contacts, maintaining records, and visually reviewing follow-up activity.

Career Copilot is better suited for tasks that are:

- Conversational
- Context dependent
- Spread across multiple systems
- Based on a user's immediate intent
- Easier to describe than navigate manually

The two approaches complement each other.

The application provides the structured experience and system of record. The agent provides a conversational interface capable of reasoning across that information and connecting it to other services.

<br>

---

<br>

## What I Learned

### Agents Become More Useful When Connected to Real Systems

The most useful part of the project was not creating a chatbot.

Connecting the agent to Dataverse and Microsoft 365 allowed it to operate against the same information and tools I was already using, turning conversational requests into useful workflows.

<br>

### Existing Platform Capabilities Reduce Integration Work

The Microsoft 365 and MCP capabilities required relatively little custom integration work.

Rather than recreating APIs for email, calendar, and collaboration services, I could focus more heavily on defining the agent's role, data boundaries, behavior, and workflows.

That changed where the implementation effort was spent and reinforced the importance of understanding available platform capabilities before building custom integrations.

<br>

### Structured Applications and Agents Solve Different Problems

Building Career Copilot alongside Career Development Hub reinforced that an agent does not necessarily need to replace an existing application.

The structured application remains useful when users need predictable navigation, visual information density, or direct record management.

The agent becomes valuable when the workflow depends on context, spans multiple systems, or can be expressed more efficiently through natural language.

<br>

---

<br>

## Next Steps

### Embed Career Copilot in Career Development Hub

The next major iteration is to embed the agent directly into the Career Development Hub experience.

This would combine the application's structured interface and the agent's conversational capabilities within a single experience rather than requiring users to move between them.

### Expand Microsoft 365 Workflows

Additional workflows could more tightly connect Dataverse activity with Outlook, Calendar, and Teams, including automatically maintaining follow-up context as communication and meetings occur.

### Multi-User Security & Governance

The current project runs in a personal Microsoft tenant with a single user.

A production implementation would require additional consideration around:

- Dataverse security roles and record access
- User identity and authorization
- Agent action permissions
- Environment strategy
- Data loss prevention policies
- Connector and MCP governance
- Auditing and monitoring

Rather than artificially implementing enterprise controls for a single-user project, these represent the primary architecture considerations I would address when moving the pattern into a multi-user organizational environment.

<br>

---

<br>

## Project Takeaway

Career Copilot gave me a practical environment to explore how agents can extend an existing business application rather than exist as standalone chat experiences.

By connecting structured Dataverse data with Microsoft 365 capabilities, I was able to build workflows that move between career records, communication, scheduling, and follow-up activity through a conversational interface.

The project also changed how I think about solution architecture for agents: much of the value comes not from making the agent itself increasingly complex, but from giving it the right data, tools, boundaries, and context to perform useful work.