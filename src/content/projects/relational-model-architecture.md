---
title: "Relational Data Architecture"
description: "Designed and normalized a relational data model for an LMS to demonstrate ER modeling, role-based structure, and many-to-many relationship resolution."
techStack:
  - SQL
  - ER Modeling
  - Data Normalization
priority: 8
icon: ../../assets/icons/sql.svg
ctaText: "View Case Study →"
---

<br>

## Overview

This project serves as a focused ER modeling exercise, applying normalization and relational design principles within a realistic LMS scenario. It was designed to demonstrate structured data modeling concepts, not to implement a production-ready system.<br><br>

---

<br>

## Problem Context

A structured LMS requires:

- Role-based user participation (students, faculty, staff)
- Controlled enrollment and teaching assignments
- Section-based organization of coursework
- Secure grade storage and access controls
- Efficient query performance for operational reporting

The system needed to prevent improper associations (e.g., non-students enrolling in courses) while maintaining flexibility and performance. <br><br>

---

<br>

## Architecture Approach <br>

### Supertype / Subtype Model

Implemented a supertype/subtype structure:

- **User** (supertype)
  - Student
  - Faculty
  - Staff

All authentication occurs through the `User` entity.  
Subtype membership determines participation in system operations.

This design enforces role integrity at the data model level. <br><br>


### Relationship Design

Resolved many-to-many relationships using associative entities:

- `StudentEnrollment` (Student ↔ Section)
- `TeacherAssignment` (Faculty ↔ Section)
- `Submission` (Assignment ↔ Student)
- `ExamAttempt` (Exam ↔ Student)
- `DiscussionPost` (Discussion ↔ User)

This approach:

- Preserves normalization
- Prevents data duplication
- Maintains referential integrity <br><br>

---

<br>

### Section-Centric Structure

The `Section` entity serves as the operational hub.

Most system activity (assignments, exams, discussions, grading) occurs within the context of a section.

Anchoring related entities to `Section` enables:

- Clear lifecycle management
- Efficient querying
- Logical grouping of coursework <br><br>

---

<br>

## Data Model

![Raw Database Input](../../assets/images/projects/er-diagram.png)

Key Entities:

- User
- Student
- Faculty
- Staff
- Course
- Section
- StudentEnrollment
- TeacherAssignment
- Assignment
- Exam
- Discussion
- Submission
- ExamAttempt
- DiscussionPost <br><br>

---

<br>

## Performance Considerations

- Indexed primary keys (UserID, CourseID, SectionID).
- Indexed foreign keys for join efficiency.
- Applied composite indexes on associative entities to optimize many-to-many queries.
- Used SectionID as a central indexing anchor due to section-based activity patterns.
- Considered subtype indexing for role-based filtering (Student vs Faculty queries). <br><br>

---

<br>

## Security & Governance Controls

- Password storage designed using salted + hashed values.
- Implemented role-based access control (RBAC) to prevent grade manipulation.
- Enforced referential integrity via foreign key constraints.
- Designed archival strategy for end-of-term grade storage.
- Scheduled regular database backups for resilience. <br><br>