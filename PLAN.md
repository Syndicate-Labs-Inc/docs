# Syndicate public docs revamp plan

## Goal

Revamp the Syndicate Mintlify documentation using `syndicate-overview.md` as the source brief. The outcome should be a lightweight, public-facing docs site that helps users understand, set up, and troubleshoot Syndicate without exposing private implementation details.

## Source inputs

- Uploaded source brief: `syndicate-overview.md`
- Docs repo: `C:\Users\allyz\Documents\syndicate-docs`
- Site framework: Mintlify
- Config file: `docs.json`
- Validation command: `mint validate`

## Editorial constraints

- Use "Syndicate" for the app name.
- Use "workspace" for the broad container.
- Use "team" and "solo agent" for specific workspace types.
- Use "provider" for Claude, OpenAI/Codex, and Gemini.
- Use "MCP server" for external tool integrations.
- Write in active voice and second person.
- Keep sentences concise.
- Use sentence case for headings.
- Bold UI labels.
- Format commands, paths, files, and code references with code styling.
- Avoid secrets, private credentials, customer data, unreleased links, and unnecessary implementation details.

## Phase 1: Source audit and content map

Owner: Researcher

Tasks:

- Audit `syndicate-overview.md` for public-docs candidates.
- Separate must-have MVP docs from later nice-to-have docs.
- Identify user-facing concepts, setup paths, core workflows, references, and troubleshooting topics.
- Flag private/internal sections that should not become public docs.
- Produce a content map grouped by reader intent.

Deliverables:

- Content inventory.
- MVP vs later-scope recommendation.
- Risk list for unclear, stale, or private claims.

Acceptance criteria:

- Every proposed page traces back to a user-facing need.
- Private implementation details are either omitted or reframed as user-facing behavior.
- Open questions are explicit.

## Phase 2: Information architecture

Owner: UI Designer

Depends on: Phase 1

Tasks:

- Design the Mintlify navigation structure.
- Define top-level groups such as getting started, workspaces, agents, providers, MCP servers, references, troubleshooting, and FAQ.
- Recommend landing/index flow and cross-linking patterns.
- Keep the docs lightweight and easy to scan.

Deliverables:

- Proposed `docs.json` navigation structure.
- Page hierarchy with short page descriptions.
- Reader paths for first-time setup, team creation, solo agent setup, provider setup, and troubleshooting.

Acceptance criteria:

- Navigation supports both new users and returning users.
- No top-level group is overloaded.
- Public docs do not read like an internal architecture manual.

## Phase 3: Writing templates and first draft

Owner: Technical Writer

Depends on: Phase 2

Tasks:

- Define reusable page templates for tutorials, how-to guides, feature references, troubleshooting, and FAQ.
- Draft the MVP docs from the approved content map.
- Rewrite implementation-heavy content into user-facing language.
- Apply Syndicate terminology and style rules.

Likely MVP pages:

- Overview
- Quickstart
- Install and launch Syndicate
- Connect providers
- Create a team workspace
- Create a solo agent workspace
- Use the Manager
- Add and configure agents
- Use Agent Marketplace
- Attach references
- Configure MCP servers
- Manage tasks and inbox messages
- Troubleshooting provider setup
- Troubleshooting workspace and dispatch issues
- FAQ

Deliverables:

- Draft MDX pages with frontmatter.
- Consistent headings and UI-label formatting.
- Internal links between related pages.

Acceptance criteria:

- Each page has one clear user intent.
- Tutorials include prerequisites and expected outcomes.
- Troubleshooting pages include symptoms, causes, and fixes.
- Claims are grounded in the source brief or marked as questions.

## Phase 4: Mintlify implementation

Owner: Frontend Developer

Depends on: Phase 3

Tasks:

- Implement the approved docs page structure in the repo.
- Update `docs.json` navigation.
- Add or update MDX files.
- Use Mintlify components where useful for cards, callouts, tabs, and steps.
- Keep the implementation maintainable and aligned with existing repo conventions.

Deliverables:

- Updated `docs.json`.
- New or revised MDX pages.
- Reusable Mintlify patterns for key docs surfaces.

Acceptance criteria:

- Pages render in Mintlify.
- Navigation matches the approved IA.
- File names and routes are predictable.
- No private source paths are exposed unless they directly help users solve setup problems.

## Phase 5: Review and validation

Owner: QA Analyst

Depends on: Phase 4

Tasks:

- Review the docs for missing prerequisites, confusing steps, stale claims, broken reader paths, and dead links.
- Validate tutorials, guides, references, troubleshooting, and FAQ against their intended user intents.
- Run or request `mint validate` before publishing structural changes.
- Produce a fix list prioritized by severity.

Deliverables:

- QA review notes.
- Broken-link or navigation issues.
- Required fixes before publish.

Acceptance criteria:

- `mint validate` passes or failures are documented with fixes.
- Critical user flows are covered.
- No known severe documentation issues remain.

## Phase 6: Final polish and ship-readiness

Owners: Technical Writer, UI Designer, Frontend Developer, QA Analyst

Depends on: Phase 5

Tasks:

- Apply QA fixes.
- Tighten page titles, descriptions, links, and callouts.
- Confirm docs follow terminology and style preferences.
- Summarize what changed and what remains for later.

Deliverables:

- Final docs update ready for review or publish.
- Short changelog-style summary.
- Later-scope backlog.

Acceptance criteria:

- MVP docs are coherent end to end.
- Mintlify validation is clean.
- Remaining work is clearly separated from launch scope.

## Current status

- Phase 1 is ready to start after user approval.
- No files beyond this planning document have been changed.

