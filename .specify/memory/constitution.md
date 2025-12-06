<!-- Sync Impact Report:
Version change:  → 1.0.0
List of modified principles:
  - PRINCIPLE_1_NAME → Content Quality & Accuracy
  - PRINCIPLE_2_NAME → Writing Style & Formatting
  - PRINCIPLE_3_NAME → AI Agent Workflow
  - PRINCIPLE_4_NAME → Modularity & Maintainability
  - PRINCIPLE_5_NAME → Testing & Validation
Added sections: None
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ updated
  - .specify/templates/spec-template.md: ✅ updated
  - .specify/templates/tasks-template.md: ✅ updated
  - .specify/templates/commands/*.md: ✅ updated
Follow-up TODOs: None
-->
# Physical AI & Humanoid Robotics Project Constitution

## Core Principles

### I. Content Quality & Accuracy
All AI/robotics knowledge presented in the book, RAG chatbot, and related workflows MUST be correct, factually verified, and reflect current understanding in the field. Speculative ideas or future projections MUST be clearly marked as such. Consistent terminology for key concepts such as sensors, actuators, ROS, Isaac, and LLMs MUST be maintained across all content to ensure clarity and avoid confusion.

### II. Writing Style & Formatting
The writing style for all content, including the book, RAG chatbot responses, and documentation, MUST match the tone and clarity of ai-native.panaversity.org: simple, clear, and technically accurate. Content MUST utilize short paragraphs, bullet points, callouts, and code blocks for enhanced readability. All outputs intended for the book MUST be in Docusaurus-compatible MDX format. Each chapter, or equivalent content unit, MUST include clearly defined Key Takeaways and RAG Questions to facilitate understanding and information retrieval.

### III. AI Agent Workflow
All AI subagents operating within the project's workflows (content generation, translation, personalization, coding) MUST strictly adhere to the rules and principles defined in this Constitution. There MUST be a clear separation between the specification phase (what needs to be done) and the implementation phase (how it is done). Human review checkpoints ARE required at critical junctures of all AI-driven workflows, especially before publishing content or deploying code, to ensure quality and compliance.

### IV. Modularity & Maintainability
The project components, including book chapters, translation services, personalization features, and the RAG chatbot, MUST be designed and implemented as independent, loosely coupled modules. Updates or modifications to one module SHOULD NOT introduce breaking changes or inconsistencies in other modules. This principle ensures the long-term maintainability and scalability of the entire system.

### V. Testing & Validation
All content (book chapters, RAG responses, translations) MUST undergo rigorous testing for clarity, correctness, and readability. This includes verification against factual sources and grammar checks. All generated or modified code MUST include basic tests and sanity checks to ensure functionality and prevent regressions. Automated testing frameworks SHOULD be utilized where feasible to enforce these standards.

## Governance

This Constitution serves as the foundational document for the "Physical AI & Humanoid Robotics" project, superseding all other informal practices. Amendments to this Constitution MUST follow a documented procedure, require explicit approval from designated stakeholders, and include a migration plan for any affected processes or artifacts. All pull requests and code reviews MUST explicitly verify compliance with the principles outlined herein. Any increase in complexity MUST be rigorously justified and documented.

**Version**: 1.0.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-06
