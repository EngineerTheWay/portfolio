---
title: "PT Assessment Calculator"
description: "Used AI-assisted development to translate new Air Force fitness scoring standards into an automated Excel calculator, eliminating manual score calculations."
techStack:
  - Microsoft Excel
  - AI-Assisted Development
  - ChatGPT
priority: 3
icon: ../../assets/icons/Excel-icon.svg
ctaText: "View Case Study →"
---

<br>

## Air Force Fitness Assessment Calculator  <br><br>

### Context
This project started because we needed to process the results of over 600 fitness assessments. Just days before, new Air Force PT standards had been released, and there were no official calculators available online or distributed internally to automate scoring.

Normally, each score would have to be calculated manually by referencing printed scoring charts and cross-checking results against the correct age and gender category or using an online calculator.

At that volume, manual scoring would have taken up to two days for the testing team and significantly increased the chance of mistakenly miscalculating a score.

I built the initial version of this calculator to automate the scoring process and eliminate manual chart lookups.

After the testing event, I expanded the tool into a reusable version that supports all authorized test components so it could be used by our organization and shared with other units.

Students in our training pipeline are restricted to the traditional components (pushups, situps, and the 2-mile run), while staff and other personnel may take alternate components such as the HAMR shuttle, cross-leg crunch, or forearm plank. The calculator was expanded to support all of these modalities.

The calculator was later expanded to support all of these modalities so the same tool could be used across the organization.<br><br>

### Problem
Air Force Physical Fitness Assessments are scored using multiple official charts based on age, gender, and the specific test components completed. Each component has its own scoring table.

In practice, this usually means referencing printed charts and manually calculating scores during testing events. This introduces several issues:

- Manual lookups slow down scoring at high volumes
- Scoring errors can occur when reading charts or applying thresholds  
- Alternate test components require entirely different tables  
- Verifying scores or exploring alternate test combinations is time-consuming<br><br>

### Solution
I built an automated Excel calculator that replicates the official scoring charts and dynamically calculates component and total scores.

AI was used during development to help rapidly generate the initial table structures and formulas. From there, I iteratively refined and validated the logic against the official scoring charts until the outputs matched the standards exactly.

- Converted official scoring charts into structured Excel lookup tables  
- Used data validation to create dropdown menus for selecting test components
- Built formulas that dynamically switch scoring tables based on selected components  
- Implemented support for alternate strength, core, and cardio test options  
- Standardized time-based inputs so run and plank events evaluate correctly<br><br>

### Impact
- Eliminated manual scoring lookups during high-volume testing events  
- Reduced risk of calculation errors  
- Enabled rapid evaluation of 600+ assessments in a single week
- Created a reusable tool supporting both student and staff fitness assessment modalities<br><br>

> Tools: Microsoft Excel, AI-assisted Development, ChatGPT, Gemini

<br>

### Initial Operational Version

![Calculator v1](../../assets/images/projects/calculatorv1.png)

<br>

### Expanded Multi-Component Version

![Calculator v2](../../assets/images/projects/calculatorv2.png)

<br>

<details>
<summary>⚙️ Technical Notes</summary>

The main challenge in this project was translating the official scoring charts into reliable lookup logic.

Each component uses different data types and scoring thresholds. Some are repetition-based (pushups, situps), some are count-based (HAMR shuttles), and others are time-based (run and forearm plank).

AI was used to generate initial table structures and candidate formulas, but the results required iterative refinement. During testing, several edge cases had to be addressed, including:

- rounding behavior differences  
- Excel time formatting issues  
- lookup thresholds returning incorrect rows  
- handling failing component scores correctly  

The final implementation organizes each scoring chart as a structured table and uses conditional logic to dynamically apply the correct lookup formula depending on which test component is selected. This modular structure makes the calculator easier to maintain if scoring standards change in the future.

![Component Formula](../../assets/images/projects/calculator-table.png)

![Component Formula](../../assets/images/projects/calculator-formulas.png)

![Component Formula](../../assets/images/projects/calculator-formulas2.png)

</details>

<br>