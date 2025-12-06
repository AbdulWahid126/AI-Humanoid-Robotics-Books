# Tasks: Physical AI & Humanoid Robotics Book

**Input**: Design documents from `/specs/001-physical-ai-book/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The plan includes testing in Phase 6.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `backend/src/`, `frontend/src/` (Docusaurus project root assumed as frontend root)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create Docusaurus project structure (Docusaurus root)
- [x] T002 Initialize Node.js project for Docusaurus frontend (Docusaurus root/package.json)
- [x] T003 [P] Configure Docusaurus basic settings (Docusaurus root/docusaurus.config.js)
- [x] T004 Create `backend/` directory and initialize Python FastAPI project (backend/requirements.txt)
- [x] T005 [P] Configure backend environment and dependencies (backend/.env.example, backend/requirements.txt)
- [ ] T006 [P] Set up linting and formatting for both frontend and backend (Docusaurus root/.prettierrc, backend/pyproject.toml)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T007 Configure GitHub Pages deployment for Docusaurus frontend (.github/workflows/deploy.yml)
- [ ] T008 Deploy initial static Docusaurus site to GitHub Pages
- [ ] T009 Implement base FastAPI application (backend/src/main.py)
- [ ] T010 Configure Neon Serverless Postgres connection and client (backend/src/database.py)
- [ ] T011 Configure Qdrant Cloud client and connection (backend/src/qdrant.py)
- [ ] T012 Define base API routing and error handling in FastAPI (backend/src/api/v1/router.py)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Read Book Content (Priority: P1) 🎯 MVP

**Goal**: As a user, I want to read the book content in my preferred language and with personalized recommendations, so that I can learn about Physical AI and Humanoid Robotics effectively.

**Independent Test**: Navigate to a chapter, select language/personalization, verify content.

### Implementation for User Story 1

- [ ] T013 [P] [US1] Generate Chapter 1 content (MDX) (docs/chapter1.mdx)
- [ ] T014 [P] [US1] Generate Chapter 2 content (MDX) (docs/chapter2.mdx)
- [ ] T015 [P] [US1] Generate Chapter 3 content (MDX) (docs/chapter3.mdx)
- [ ] T016 [P] [US1] Generate Chapter 4 content (MDX) (docs/chapter4.mdx)
- [ ] T017 [US1] Integrate MDX chapters into Docusaurus navigation (docusaurus.config.js)
- [ ] T018 [US1] Implement static chapter display on Docusaurus frontend (src/pages/chapters.js)
- [ ] T019 [US1] Frontend: Basic chapter content rendering component (src/components/ChapterContent.js)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Ask RAG Chatbot Questions (Priority: P1)

**Goal**: As a user, I want to ask questions related to the book content using a RAG chatbot, so that I can get instant answers and deepen my understanding.

**Independent Test**: Ask chapter/global questions, verify relevant answers.

### Implementation for User Story 2

- [ ] T020 [US2] Develop data ingestion pipeline: chunk chapters and generate embeddings (backend/src/rag/ingestion.py)
- [ ] T021 [US2] Store chapter embeddings in Qdrant Cloud (backend/src/rag/ingestion.py)
- [ ] T022 [US2] Implement RAG API endpoint: query Qdrant for relevant chunks (backend/src/api/v1/rag.py)
- [ ] T023 [US2] Integrate LLM API (Claude/Gemini) for response generation from chunks (backend/src/rag/llm_service.py)
- [ ] T024 [US2] Frontend: Develop RAG chatbot widget UI (src/components/RagChatbot.js)
- [ ] T025 [US2] Frontend: Integrate chatbot widget into Docusaurus layout (src/theme/Layout/index.js)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Customize Reading Experience (Priority: P2)

**Goal**: As a user, I want to choose my preferred language and provide my background information (software/hardware) to personalize the book content, so that the learning experience is optimized for my needs.

**Independent Test**: Create user profile, select options, observe adapted content.

### Implementation for User Story 3

- [ ] T026 [US3] Integrate Better-Auth.com for user signup/signin (Frontend: src/theme/Navbar.js, Backend: backend/src/auth.py)
- [ ] T027 [US3] Define User database model in Neon Postgres (backend/src/models/user.py)
- [ ] T028 [US3] Implement User profile management (store language/background) in FastAPI (backend/src/services/user_service.py)
- [ ] T029 [US3] Develop content personalization logic in FastAPI (backend/src/services/personalization.py)
- [ ] T030 [US3] Create "Start Chapter UI" for language/personalization selection (src/pages/start-chapter.js)
- [ ] T031 [US3] Implement language toggle UI component (src/components/LanguageToggle.js)
- [ ] T032 [US3] Develop a translation service/pipeline (English ↔ Urdu) for all chapters (backend/src/translation.py)
- [ ] T033 [US3] Update chapter content structure to support bilingual content retrieval based on user preference (backend/src/services/chapter_service.py)

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T034 [P] Unit tests for FastAPI backend services (backend/tests/unit/)
- [ ] T035 [P] Integration tests for RAG API (backend/tests/integration/)
- [ ] T036 [P] E2E tests for Docusaurus frontend (e.g., frontend/tests/e2e/)
- [ ] T037 [P] Security audit and privacy checks for user data handling
- [ ] T038 Optimize Docusaurus build and asset loading for performance
- [ ] T039 Optimize Qdrant queries and LLM interactions for performance
- [ ] T040 Create `README.md` for project overview (./README.md)
- [ ] T041 Create `CONTRIBUTING.md` guide (./CONTRIBUTING.md)
- [ ] T042 Develop CI/CD pipeline scripts for automated testing and deployment (.github/workflows/ci.yml)
- [ ] T043 Create operational runbooks and monitoring setup documentation (docs/operations/)
- [ ] T044 Final deployment to GitHub Pages and serverless backend

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1 (e.g. content for RAG) but should be independently testable.
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 (e.g. personalized content, language toggle) but should be independently testable.

### Within Each User Story

- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tasks marked [P] within a story can run in parallel (e.g., generating chapters, creating models)
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all content generation for User Story 1 together:
Task: "Generate Chapter 1 content (MDX) (docs/chapter1.mdx)"
Task: "Generate Chapter 2 content (MDX) (docs/chapter2.mdx)"
Task: "Generate Chapter 3 content (MDX) (docs/chapter3.mdx)"
Task: "Generate Chapter 4 content (MDX) (docs/chapter4.mdx)"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
