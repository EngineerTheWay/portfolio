---
title: "Workflow Automations"
description: "Designed workflow automations with Power Platform and Microsoft 365, replacing manual processes across numerous military training organizations."
techStack:
  - Power Platform
  - Power Automate
  - Microsoft 365
icon: ../../assets/logos/Power_Automate.svg
ctaText: "View Case Study →"
---

# Projects

A selection of systems I've built using Microsoft Power Platform to streamline workflows, reduce manual workload, and improve organizational compliance and visibility.
<br>

---

<br>

## Student Status & Administrative Actions Automation

**Problem**  
Multiple SharePoint lists tracked students who were undergoing administrative review or being removed from training for academic, disciplinary, or emergency reasons. These processes were disconnected and required:

- Manually recreating entries in a second list after decisions were made  
- Re-entering the same data multiple times  
- Tracking follow-up tasks in spreadsheets or email chains  
- Sharing updates through emailed Excel files that became outdated instantly  

This created real risk: students could be mis-tracked, steps could be missed, and leadership lacked visibility.

**Solution**  
I standardized both SharePoint lists and built an automated workflow that connected the entire review → status change pipeline:

- When a decision was recorded, the automation:  
  - Archived the review record  
  - Automatically generated a new “not in training” record with the correct details  
- Created a checklist of all required follow-up actions (emails, system updates, coordination steps)  
- Sent Teams messages + email receipts to the responsible teams each time a required step was completed  
- Allowed staff and leadership to view all student statuses directly in SharePoint, in real time  
- Eliminated the need for emailed spreadsheets entirely  

**Impact**  
- Reached **100% compliance** in tracking students temporarily removed from training  
- Prevented lost cases and ensured every required action was completed  
- Reduced administrative workload by eliminating duplicate data entry  
- Gave instructors, managers, and senior leaders real-time visibility  
- Removed reliance on manual Excel trackers  

> **Tools:** Power Automate, SharePoint, Microsoft Planner, Microsoft Teams, Outlook

<br>

---

<br>

## Annual Training Compliance System  

**Problem**  
Annual training records were tracked manually in Excel by one manager. Reminders, updates, and certificate logging consumed 5+ hours weekly and leadership lacked real-time visibility.

**Solution**  
- Built an automated SharePoint + Power Automate system running weekly compliance checks  
- Sent personalized emails listing upcoming or overdue trainings  
- Added Power BI dashboards showing compliance rates and outstanding requirements  
- Enabled members to upload certificates directly for automated logging  

**Impact**  
- Saved 5+ hours weekly in administrative workload  
- Delivered real-time visibility for leadership  
- Increased compliance through proactive communication  

> **Tools:** Power Automate, SharePoint, Power BI

<br>

---

<br>

## Leave & Absence Tracker  

**Problem**  
Students submitted dozens of absence requests daily across email and Teams messages. Requests were lost in inboxes, approval loops were slow, and irrelevant personnel were frequently copied.

**Solution**  
- Designed an automated workflow that routed requests only to the correct approvers  
- Enabled Teams + email notifications for visibility  
- Centralized approvals and status tracking in SharePoint  

**Impact**  
- Reduced inbox clutter by hundreds of messages monthly  
- Saved ~20 hours per week across three teams  
- Reduced response times from days to minutes  

> **Tools:** Power Automate, SharePoint, Microsoft Teams, Outlook

<br>

---

<br>

## Onboarding Automation 

**Problem**  
Onboarding dozens of students and staff required manually sending multiple emails with dates, links, attachments, and IT requests. This led to missed details and inconsistent communication.

**Solution**  
- Built a Power Automate flow triggered from SharePoint  
- Sent tailored onboarding emails using over two dozen SharePoint fields  
- Attached branch- or program-specific documents automatically  
- Sent provisioning requests to IT and updated onboarding status fields  

**Impact**  
- Standardized onboarding across departments  
- Eliminated dozens of manual emails per onboarding cycle  
- Ensured attachments and IT requests were never missed  

> **Tools:** Power Automate, SharePoint, Microsoft Teams, Outlook

<br>

---

<br>

## Dorm Inspection System  

**Problem**  
Dorm inspections for several hundred airmen were completed on paper, requiring hours of manual collation and delaying identification of issues.

**Solution**  
- Rebuilt inspection forms in Microsoft Forms  
- Automated compilation of results into a timestamped Excel report  
- Sent automated Teams + email notifications to inspection teams  

**Impact**  
- Eliminated manual data entry  
- Identified issues faster  
- Streamlined weekly inspections across several hundred personnel  

> **Tools:** Power Automate, Microsoft Forms, Excel, Microsoft Teams
