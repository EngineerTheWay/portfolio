---
title: "Academic Performance Reporting Tools"
description: "Developed modular Excel tools that centralized grade tracking, highlighted at-risk students, and standardized academic reporting across the schoolhouse"
techStack:
  - Excel
  - SharePoint
  - Microsoft 365
icon: ../../assets/icons/Excel-icon.svg
ctaText: "View Case Study →"
---

### 🎯 Problem
When I joined the team, academic performance tracking was **painfully manual** at my schoolhouse. Instructors were:
- Typing student grades **by hand** into PowerPoint slides every two weeks.  
- Manually color-coding failing vs marginal grades (yellow/red) with **no standardization**.  
- Producing separate, inconsistent reports for each department and class.  
- Entering grades into **PDF memos** for commanders, making reporting slow and error-prone.  

While there was a database in place, its **web portal and export files weren’t useful** to the people doing the work or making decisions. For attrition purposes, leadership only needed to see **performance on major unit tests**, but the system buried that data alongside homework and minor grades that had little impact on whether a student remained in the course or not.

There was also no centralized place for leadership to view current student statuses. Every department (and even each class) tracked progress differently.  <br><br>

### 💡 Solution
I designed and deployed a **schoolhouse-wide Excel dashboard**, shared via **SharePoint and Teams**, that transformed raw grade database outputs into standardized, centralized reports with **automated conditional formatting**.  The system included two core tools:  <br><br>

#### 1. Schoolhouse Dashboard  
- One workbook with **separate color-coded sheets for each department**.  
- Built-in **navigation buttons** for quick switching during leadership meetings.  
- Instructors pasted raw grade exports, and the system auto-formatted results.  
- **Conditional formatting** automatically flagged marginal and failing scores, ensuring consistency across all departments.  
- A dropdown selector displayed each class’s current results across the three testing modalities (**listening, reading, speaking**).  
- Leadership could review **all departments from one place**, giving real-time visibility.  <br><br>

> Under the hood, the dashboard used VLOOKUPs and dropdown selectors to match raw database outputs to student names and automatically pull the correct class data into the view.

<br>

#### 2. Class Reports  
- Designed around **10 unit tests** in the year-long course.  
- **Conditional formatting** highlighted students meeting criteria for academic probation, special assistance, or attrition board review.  
- Displayed performance trends in a **linear, test-by-test format** (“failed 2 tests in a row” or “3/5 poor performances”).  
- Generated **individual student reports** with letter grades for each modality across all tests—commander-ready at a glance.  <br><br>

> This reporting system relied on the same modular VLOOKUP structure, linking raw test scores to each student and compiling results into standardized reports.

<br>

### 🚀 Impact
- **Eliminated manual grade entry** into PowerPoints, memos, and slides.  
- **Standardized reporting** across the entire schoolhouse.  
- Made performance data **instantly accessible** in Teams/SharePoint.  
- Dramatically improved speed and accuracy of academic intervention and attrition boards.  
- Tool was adopted not only at my schoolhouse but pushed by the **Provost of DLI** to other schoolhouses as a stopgap solution until Canvas was fully adopted.  
- The **modular, navigable design with conditional formatting** made it adaptable to multiple departments and curriculums.  <br><br>

### 📸 Screenshots  <br>

#### 📊 Raw Database Export  
Modular location for instructors to paste raw data as exported from the database.

![Raw Database Export](../../assets/images/projects/database-output.jpeg)  <br><br>

#### 🏫 Schoolhouse Dashboard View  
Centralized dashboard with color-coded departments and service identifiers for quick visibility.  

![Schoolhouse Dashboard View](../../assets/images/projects/class-view.jpeg)  <br><br>

#### 📑 Formatted Class Report  
Conditional formatting highlights marginal/failing scores on a particular test. 

![Formatted Class Report](../../assets/images/projects/formatted-view.jpeg)<br><br>

#### 👤 Individual Student Report  
Student-level report displaying grades across all unit tests and modalities for commander review.  
![Individual Student Report](../../assets/images/projects/student-report.jpeg)<br><br>

### 📌 Key Takeaways
This project replaced fragmented manual processes with a centralized, modular system that gave leadership clearer visibility into student performance, streamlined interventions, and influenced updates to academic reporting practices across the institute.
