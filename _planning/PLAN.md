# Syndicate docs phase plan

## Current phase: Team view alignment for all non-Atlas pages

Source input:

- Uploaded Team view reference: `team-view.md`
- Docs repo: `C:\Users\allyz\Documents\syndicate-docs`
- Site framework: Mintlify
- Validation command: `mint validate`

## Goal

Update every documentation page except the Atlas-specific page so the public docs reflect the current Team view model: Team Hub, Team Workspace, Agent Comms, User Tasks, Agent Tasks, Task Health, Assign Task, Interruption Level, hard pause, soft pause, bottom tray, file/upload browsing, and project preview.

## Editorial constraints

- Use "Syndicate" for the app name.
- Use "workspace" for the broad container and "team" or "solo agent" for specific workspace types.
- Use "provider" for Claude, OpenAI/Codex, and Gemini.
- Use "MCP server" for external tool integrations.
- Use active voice and second person.
- Keep sentences concise.
- Use sentence case for headings.
- Bold UI labels.
- Format file names, commands, paths, and code references with code styling.
- Keep private implementation details out of public docs unless they help users solve a real setup problem.

## Scope

Included:

- All existing MDX pages except the Atlas orchestrator page.
- `docs.json` only if navigation labels or page sequencing need updates.
- User-facing explanations, tutorials, feature references, troubleshooting, and FAQ content that mention teams, agents, tasks, inbox, preview, files, uploads, settings, skills, MCP servers, providers, or workspace controls.

Excluded:

- The Atlas-specific page: `guides/create-your-first-team/atlas-orchestrator.mdx`.
- Private implementation details from the source reference, including internal source file paths, IPC names, persistence file names, and backend parsing mechanics unless needed for troubleshooting.

## Phase 1: Audit non-Atlas docs

Owner: Technical Writer

Supporting agents:

- Frontend Developer checks page inventory, routes, and `docs.json`.
- AI Engineer flags AI-agent terminology or workflow claims that need technical validation.

Tasks:

- Inventory all MDX pages except `guides/create-your-first-team/atlas-orchestrator.mdx`.
- Identify pages that must change based on the Team view reference.
- Mark pages that should receive only terminology or cross-link updates.
- Find stale labels such as Manager Control, chat approval cards, or old task-board language.

Deliverables:

- Page-by-page update map.
- List of terms and concepts to standardize.
- Any content gaps that require user clarification.

Status: In progress.

## Phase 2: Rewrite and add content

Owner: Technical Writer

Supporting agents:

- AI Engineer validates coordination, interruption, User Task, task lifecycle, and agent workflow descriptions.
- Backend Developer validates user-facing provider, MCP server, file, upload, preview, and troubleshooting claims when backend behavior is mentioned.

Tasks:

- Update feature pages for Team Hub, Team Workspace, agents, tasks, inbox, workspaces, settings, references/context, MCP servers, skills, providers, and solo-agent contrasts.
- Update guides for creating teams, using tasks and inbox, adding agents, attaching references, MCP/skills, provider setup, and marketplace-related workflows when Team view context matters.
- Update troubleshooting and FAQ pages for hard pause, soft pause, User Tasks, preview, large histories, file browsing, uploads, and dispatch issues.
- Keep the Atlas page untouched.

Deliverables:

- Revised MDX pages.
- Consistent terminology and links.
- Public-facing descriptions of current Team view workflows.

Status: Pending.

## Phase 3: Mintlify implementation pass

Owner: Frontend Developer

Tasks:

- Ensure page structure, frontmatter, headings, callouts, steps, tabs, and cards render cleanly in Mintlify.
- Update `docs.json` only where navigation needs to match revised page content.
- Keep routes stable unless a route change is necessary.
- Confirm the Atlas page remains unchanged.

Deliverables:

- Mintlify-ready docs implementation.
- Navigation updates if needed.

Status: Pending.

## Phase 4: Specialist accuracy review

Owners: AI Engineer and Backend Developer

Tasks:

- Review rewritten pages for inaccurate descriptions of orchestration, interruption levels, task routing, Agent Comms, user approvals, hard pause, soft pause, provider setup, MCP servers, preview, files, and uploads.
- Flag internal-only details that should be removed or reframed.
- Confirm terminology follows project rules.

Deliverables:

- Accuracy review notes.
- Required corrections before final validation.

Status: Pending.

## Phase 5: Final review and validation

Owner: Review Agent

Supporting agent:

- Frontend Developer runs or coordinates `mint validate`.

Tasks:

- Review all changed pages for gaps, ambiguity, broken assumptions, inconsistent terminology, and missing setup or usage steps.
- Check links and navigation.
- Confirm `mint validate` passes, or document failures and required fixes.

Deliverables:

- Final review notes.
- Validation result.
- Fix list, if any.

Status: Pending.

## Phase 6: Phase closeout

Owner: Atlas

Tasks:

- Summarize what changed.
- Update this plan with completed statuses.
- Report any open questions or next-phase recommendations.

Deliverables:

- Human-facing phase summary.
- Updated `PLAN.md`.

Status: Pending.
