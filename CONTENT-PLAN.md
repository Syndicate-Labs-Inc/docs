# Syndicate docs — proposed content plan

## About this document

This is a Phase 3 planning artifact, not a public docs page. It proposes the MVP page set for the Syndicate Mintlify site, grouped by reader intent, and maps each page back to the source sections that should support it. No full pages are drafted here.

## Phase 3 status: blocked pages drafted

Source brief received (2026-06-01). All 5 previously blocked pages have been drafted from the brief and added to navigation:

- `guides/create-a-solo-agent`
- `guides/attach-references`
- `guides/tasks-and-inbox`
- `reference/troubleshooting-workspaces`
- `reference/faq`

### Plan update — team docs shape (2026-06-04)

The Manager scoped a focused team-docs change. Reflected throughout this plan:

- **Nav rename:** sidebar group **Tutorials** → **Guides** (live in `docs.json`). Routes now live under `/guides/*`.
- **Teams** is a Guides sub-group with four pages:
  - Quick start — `guides/create-your-first-team/quick-start`
  - Team hub — `guides/create-your-first-team/team-hub`
  - Creating teams — `guides/create-your-first-team/creating-teams`
  - Atlas: Syndicate's orchestrator — `guides/create-your-first-team/atlas-orchestrator`
- All four pages are drafted in the repo. Source-grounding for the siblings is the brief plus existing `features/workspaces.mdx`, `features/teams.mdx`, `features/chat-and-dispatch.mdx`, `features/tasks.mdx`, and `features/inbox.mdx`.

## Source-material caveat

`PLAN.md` names `syndicate-overview.md` as the source brief, but that file is not currently present in the workspace. Source-section references below trace to two grounded inputs:

- The MVP page list in `PLAN.md`, which itself derives from the brief.
- The existing in-progress drafts under `features/`, `guides/`, and `reference/`, which the team has already produced from the brief.

Each page below carries an explicit **Status** tag:

- **Confirmed** — a draft exists in the repo. Refinement, terminology cleanup, and structure work can proceed without the brief.

## Confirmed at a glance

**Confirmed (existing drafts, brief not required for refinement):**

- Start here: `index`, `getting-started`
- Guides: `install-and-sign-in`, `connect-providers`, `create-your-first-team/quick-start`, `create-your-first-team/team-hub`, `create-your-first-team/creating-teams`, `create-your-first-team/atlas-orchestrator`, `create-a-solo-agent`, `attach-references`, `use-mcp-and-skills`, `tasks-and-inbox`
- Core concepts: `overview`, `workspaces`, `agents`, `teams`, `solo-agents`, `providers-and-models`
- How to: `chat-and-dispatch`, `tasks`, `inbox`, `references-and-context`, `command-palette`, `mcp`, `skills`, `settings`
- Reference: `providers`, `settings`, `auth-flows`, `troubleshooting`, `troubleshooting-workspaces`, `faq`

**Previously blocked, now drafted from brief (5 pages):**

- `guides/create-a-solo-agent`
- `guides/attach-references`
- `guides/tasks-and-inbox`
- `reference/troubleshooting-workspaces`
- `reference/faq`

**Also brief-dependent (open questions on confirmed pages):** the per-page "Open questions" sections below flag spots where existing drafts may be off until verified against the brief.

## Terminology baseline (applied across all pages)

- "Syndicate" — app name
- "workspace" — broad container
- "team" / "solo agent" — workspace types
- "provider" — Claude, OpenAI/Codex, Gemini
- "MCP server" — external tool integration

## Reader paths the plan supports

1. First-time setup — index → getting-started → install-and-sign-in → connect-providers → Quick start → Team hub → Creating teams → Atlas: Syndicate's orchestrator
2. Solo-first setup — index → getting-started → install-and-sign-in → connect-providers → create-a-solo-agent
3. Concept learning — features/overview → workspaces → teams / solo-agents → chat-and-dispatch
4. Extending agents — agent-marketplace → use-mcp-and-skills → references
5. Recovery — reference/troubleshooting → reference/providers → FAQ

---

## Group 1: Start here

### Overview (landing)

- **Route:** `/index`
- **Reader intent:** "What is Syndicate, why would I use it, and where do I go first?"
- **Summary:** Positioning page. Frames Syndicate as a coordinated agent team for local project work, contrasts it with a single chat box, points to the quickstart and the two workspace shapes (team and solo agent), and sets the beta-access expectation.
- **Source sections:** Brief positioning/intro. Existing draft: `index.mdx`.

### Getting started (quickstart)

- **Route:** `/getting-started`
- **Reader intent:** "Give me the shortest path from approved access to a working first agent."
- **Summary:** Five-step launchpad — install, sign in, connect one provider, choose a workspace (team or solo agent), give a first task. Each step links to the deeper guide. Includes the team-vs-solo decision card and "good first tasks."
- **Source sections:** Brief quickstart / first-run flow. Existing draft: `getting-started.mdx`.

---

## Group 2: Guides (task-oriented, step-by-step)

> Nav rename: the sidebar group is **Guides**, not **Tutorials**. File routes now live under `/guides/*`.

### Install and sign in

- **Route:** `/guides/install-and-sign-in`
- **Reader intent:** "How do I request beta access, install the desktop app, and create my Syndicate account?"
- **Summary:** Walkthrough of the request-access form, the invite email, installer download per OS, first launch, and account creation against the approved beta email. Includes multi-machine sign-in and confirmation-email recovery.
- **Source sections:** Brief — beta access, installation, account creation, sign-in. Existing draft: `guides/install-and-sign-in.mdx`.

### Connect providers

- **Route:** `/guides/connect-providers`
- **Reader intent:** "How do I get Claude, OpenAI Codex, or Gemini ready so my agents can run?"
- **Summary:** Opens provider setup, runs **Check**, installs the provider CLI when needed, completes the auth flow per provider (Claude OAuth, Codex browser handoff, Gemini in-app terminal), and confirms the **Connected** state. Includes the status legend (Not checked / Not installed / Not signed in / Connected).
- **Source sections:** Brief — provider connection, CLI install, auth flows, readiness verification. Existing draft: `guides/connect-providers.mdx`.

### Teams

Sidebar sub-group with four guide pages. Reader path: Quick start → Team hub → Creating teams → Atlas: Syndicate's orchestrator.

#### Quick start

- **Route:** `/guides/create-your-first-team/quick-start`
- **Page title (frontmatter):** `Quick start`
- **Reader intent:** "How do I set up a Manager-led team for a real local project folder and run a first sanity-check task?"
- **Summary:** Closely preserves the previous "Create your first team" flow: **Create Team**, **Template**, **Guided description**, **Build Your Team**, project folder selection, Manager control mode, and a first sanity-check task. Ends with a next-step CardGroup linking to Team hub, Creating teams, and Atlas.
- **Source sections:** Brief — team creation flows, working directory selection, Manager control modes. Existing draft: `guides/create-your-first-team/quick-start.mdx`.

#### Team Hub

- **Route:** `/guides/create-your-first-team/team-hub`
- **Page title (frontmatter):** `Team hub`
- **Reader intent:** "Where do I go to see every team I have and switch between them?"
- **Summary:** Frames Team Hub as the cross-team landing view. Covers when to open it vs the sidebar, visible team details, provider state, recent activity, workspace shortcuts, and creating a new team from the hub. Closes with cards to Quick start, Creating teams, and the Teams concept page.
- **Source sections:** Existing drafts — `guides/create-your-first-team/team-hub.mdx`, `features/workspaces.mdx` (hub region), `features/teams.mdx`.
- **Notes:** Use **Team Hub** as the UI label in rendered copy.

#### Creating teams

- **Route:** `/guides/create-your-first-team/creating-teams`
- **Page title (frontmatter):** `Creating teams`
- **Reader intent:** "Which team creation path should I use, and what setup choices should I review?"
- **Summary:** Deeper guide to **Template**, **Guided description**, and **Build Your Team**. Covers project folder selection, roster review, provider and model choices, Manager control mode, and what to check after creation.
- **Source sections:** Existing drafts — `guides/create-your-first-team/creating-teams.mdx`, `features/teams.mdx`, `features/providers-and-models.mdx`.

#### Atlas: Syndicate's orchestrator

- **Route:** `/guides/create-your-first-team/atlas-orchestrator`
- **Page title (frontmatter):** `Atlas: Syndicate's orchestrator`
- **Reader intent:** "What does Atlas coordinate in a team, and what details are still pending?"
- **Summary:** Scoped placeholder outline only. Lists the Atlas workflow areas to document later: planning, delegation, task progress, blockers, approvals, and summaries. Flags open product details that need user input before full documentation.
- **Source sections:** Placeholder page only; awaiting product-confirmed Atlas details.

### Create a solo agent workspace

- **Status:** Drafted and listed in `docs.json`.
- **Route:** `/guides/create-a-solo-agent`
- **Reader intent:** "How do I set up a single specialist for 1:1 work without a Manager?"
- **Summary:** Walks through the solo workspace creation flow — choosing **Solo Agent**, picking a specialization, picking a model, attaching a project folder, and sending a first message. Closes with the signal that tells you to graduate to a team.
- **Source sections:** Existing drafts: `guides/create-a-solo-agent.mdx`, `features/solo-agents.mdx`.

### Add and configure agents

- **Route:** `/guides/add-and-configure-agents`
- **Reader intent:** "How do I add a specialist to an existing team and give it the right job, model, and instructions?"
- **Summary:** Adds an agent to an existing team, names it, picks role/provider/model, writes useful instructions (responsibilities, scope, tools, reporting), and confirms it appears in the roster.
- **Source sections:** Brief — agent creation, agent anatomy (identity, soul, tools, skills, model). Existing draft: `guides/add-and-configure-agents.mdx`.

### Use MCP servers and skills

- **Route:** `/guides/use-mcp-and-skills`
- **Reader intent:** "How do I extend an agent with a specialized workflow or an external tool?"
- **Summary:** Two parallel walkthroughs — adding a skill to an agent, and installing/enabling an MCP server for an agent. Closes with the "when to add a capability" decision rule.
- **Source sections:** Brief — skills, MCP servers, per-agent enablement. Existing draft: `guides/use-mcp-and-skills.mdx`.
- **Note:** Page title uses "MCP servers" per terminology rule; current draft title says "MCP and Skills."

### Attach references to a workspace

- **Status:** Drafted and listed in `docs.json`.
- **Route:** `/guides/attach-references`
- **Reader intent:** "How do I give my agents the right project docs without flooding their context?"
- **Summary:** Walks through attaching files or folders at global, team, and agent scope; setting priority; and verifying that the reference shows up in an agent run.
- **Source sections:** Existing drafts: `guides/attach-references.mdx`, `features/references-and-context.mdx`.

### Manage tasks and inbox messages

- **Status:** Drafted and listed in `docs.json`.
- **Route:** `/guides/tasks-and-inbox`
- **Reader intent:** "How do I track what the team is doing and respond to agent messages?"
- **Summary:** How tasks get created (manually or via dispatch), how to interpret task statuses, how to read agent-to-agent inbox messages, and how to handle "needs user attention" items.
- **Source sections:** Existing drafts: `guides/tasks-and-inbox.mdx`, `features/tasks.mdx`, `features/inbox.mdx`.

---

## Group 3: Features (concept reference, scannable)

### Feature overview

- **Route:** `/features/overview`
- **Reader intent:** "Give me a one-screen map of how Syndicate's pieces fit together."
- **Summary:** Tour of the main product areas — teams, solo agents, agent marketplace, providers/models, MCP servers, tasks and dispatch — plus a diagram of how workspace, team, Manager, agents, tasks, inbox, tools, and project folder connect.
- **Source sections:** Brief — product architecture overview. Existing draft: `features/overview.mdx`.

### Workspaces

- **Route:** `/features/workspaces`
- **Reader intent:** "What is a workspace, and how do team and solo differ?"
- **Summary:** Defines workspace, contrasts team vs solo, explains the role of the project folder, introduces the Team Hub and Solo Hub, and shows how to change the working directory.
- **Source sections:** Brief — workspaces, hubs, project folder. Existing draft: `features/workspaces.mdx`.

### Agents

- **Route:** `/features/agents`
- **Reader intent:** "What is an agent made of, and what can I configure?"
- **Summary:** Agent anatomy (identity, soul, tools, skills, MCP servers, model), built-in specializations, and the role of the Soul instruction file.
- **Source sections:** Brief — agent model, specializations, soul. Existing draft: `features/agents.mdx`.

### Teams

- **Route:** `/features/teams`
- **Reader intent:** "When and how do I use a team, and what controls do I have over the Manager?"
- **Summary:** When to choose a team, the three creation paths (template, guided description, build-your-team), Manager control modes (Autopilot, Approve New Work, Approve Each Step), and hard pause.
- **Source sections:** Brief — team creation, Manager autonomy, hard pause. Existing draft: `features/teams.mdx`.

### Solo agents

- **Route:** `/features/solo-agents`
- **Reader intent:** "When and how should I use a single agent without a Manager?"
- **Summary:** When to choose solo, example solo agent jobs, the solo setup flow at a glance, and the signal for graduating to a team.
- **Source sections:** Brief — solo agent workspace. Existing draft: `features/solo-agents.mdx`.

### Chat and dispatch

- **Route:** `/features/chat-and-dispatch`
- **Reader intent:** "How do I actually send work to an agent, and what is happening during a run?"
- **Summary:** The chat flow, manual vs automatic dispatch, inter-agent messages, what shows during a run (status, streaming text, tool activity, summaries), and how to stop work.
- **Source sections:** Brief — chat, dispatch system, inter-agent messages, run telemetry. Existing draft: `features/chat-and-dispatch.mdx`.

### Tasks

- **Route:** `/features/tasks`
- **Reader intent:** "How do I read task status and use tasks to coordinate?"
- **Summary:** Task statuses (Todo, In Progress, Blocked, Done), how tasks are created, task summaries on completion, and best practices.
- **Source sections:** Brief — task model. Existing draft: `features/tasks.mdx`.

### Inbox

- **Route:** `/features/inbox`
- **Reader intent:** "What are inbox messages and when do I need to act on them?"
- **Summary:** Why agents send each other inbox messages, unread badges, user-attention escalation, and how to clear confusion when the team stalls.
- **Source sections:** Brief — inbox, agent-to-agent messages, user attention. Existing draft: `features/inbox.mdx`.

### References and context

- **Route:** `/features/references-and-context`
- **Reader intent:** "How do I give agents the right project information?"
- **Summary:** What references are, the three scopes (global, team, agent), why less context is often better, and how Syndicate trims context.
- **Source sections:** Brief — references, scopes, context budget. Existing draft: `features/references-and-context.mdx`.

### Command palette

- **Route:** `/features/command-palette`
- **Reader intent:** "How do I move around the app quickly once I have many teams?"
- **Summary:** What the command palette searches, the common actions it exposes, and tips for high-team workflows.
- **Source sections:** Brief — command palette. Existing draft: `features/command-palette.mdx`.

### Providers and models

- **Route:** `/features/providers-and-models`
- **Reader intent:** "How do I manage provider connections and choose models per agent?"
- **Summary:** Provider setup entry point, typical auth behavior per provider, model defaults (workspace-wide, per-agent, per-Manager), and why provider verification matters.
- **Source sections:** Brief — providers, models, defaults, verification. Existing draft: `features/providers-and-models.mdx`.

### MCP servers

- **Route:** `/features/mcp`
- **Reader intent:** "What is an MCP server in Syndicate and when should I add one?"
- **Summary:** Where MCP lives in settings, ready vs docs-only catalog entries, per-agent enablement, good use cases, and safety tips.
- **Source sections:** Brief — MCP catalog, per-agent enablement. Existing draft: `features/mcp.mdx`.
- **Note:** Per terminology rule, body text consistently uses "MCP server"; existing nav label is "MCP" — confirm whether the nav label should also become "MCP servers."

### Skills

- **Route:** `/features/skills`
- **Reader intent:** "What is a skill, and how does it shape agent behavior?"
- **Summary:** What a skill defines (when to use it, context, steps, output, quality checks), example skills per agent type, and when to add one.
- **Source sections:** Brief — skills, skill bundles per specialization. Existing draft: `features/skills.mdx`.

### Settings

- **Route:** `/features/settings`
- **Reader intent:** "What can I configure at the app, team, and agent level?"
- **Summary:** Account settings, general settings (app data path, default provider/model, theme), providers, MCP, and team settings.
- **Source sections:** Brief — settings layout. Existing draft: `features/settings.mdx`.

---

## Group 4: Reference (look-it-up)

### Providers reference

- **Route:** `/reference/providers`
- **Reader intent:** "What does 'connected' actually mean per provider, and what signals does Syndicate trust?"
- **Summary:** Readiness signals per provider, provider-specific behavior (Claude OAuth, Codex CLI capability check, Gemini OAuth/API key/probe).
- **Source sections:** Brief — provider auth model. Existing draft: `reference/providers.mdx`.

### Settings reference

- **Route:** `/reference/settings`
- **Reader intent:** "What are the discrete settings areas and what do they control?"
- **Summary:** Provider, team, and agent settings as a flat reference list.
- **Source sections:** Brief — settings surfaces. Existing draft: `reference/settings.mdx`.

### Auth flows reference

- **Route:** `/reference/auth-flows`
- **Reader intent:** "What is the exact auth behavior per provider and which surfaces does each one use?"
- **Summary:** Per-provider auth detail (Claude OAuth, Codex CLI auth file plus capability check, Gemini OAuth/API key/probe) and the terminal-UI rule.
- **Source sections:** Brief — auth flows, terminal-UI rule. Existing draft: `reference/auth-flows.mdx`.

### Troubleshooting — provider setup

- **Route:** `/reference/troubleshooting`
- **Reader intent:** "Something is broken in provider setup. What is the likely cause and fix?"
- **Summary:** Common provider-side symptoms — Codex verification failure, stale terminal output during Codex, Gemini auth not finishing, Claude rate limits — each with causes and fixes.
- **Source sections:** Brief — provider troubleshooting. Existing draft: `reference/troubleshooting.mdx`.

### Troubleshooting — workspaces and dispatch

- **Status:** Drafted and listed in `docs.json`.
- **Route:** `/reference/troubleshooting-workspaces`
- **Reader intent:** "My team or dispatch is misbehaving. What do I check?"
- **Summary:** Symptoms and fixes for team-side issues — Manager not delegating, agent stuck in Blocked, automatic dispatch not firing, inbox pile-up, wrong working directory, hard pause not resuming agents.
- **Source sections:** Existing draft: `reference/troubleshooting-workspaces.mdx`.

### FAQ

- **Status:** Drafted and listed in `docs.json`.
- **Route:** `/reference/faq`
- **Reader intent:** "Quick answers to the most common questions I have before contacting support."
- **Summary:** Short Q&A covering beta access, supported OSes, supported providers, local-only credentials, team vs solo, model defaults, MCP scope, and where data lives. Each entry links to the deeper page.
- **Source sections:** Existing draft: `reference/faq.mdx`.

---

## Gaps from PLAN.md MVP list

| MVP page (PLAN.md)              | Status              | Plan position                                |
| ------------------------------- | ------------------- | -------------------------------------------- |
| Overview                        | Drafted             | index + features/overview                    |
| Quickstart                      | Drafted             | getting-started                              |
| Install and launch Syndicate    | Drafted             | guides/install-and-sign-in                   |
| Connect providers               | Drafted             | guides/connect-providers                     |
| Create a team workspace         | Drafted             | guides/create-your-first-team/quick-start + team-hub + creating-teams |
| Use Atlas                       | Placeholder         | guides/create-your-first-team/atlas-orchestrator |
| Create a solo agent workspace   | Drafted             | guides/create-a-solo-agent                   |
| Add and configure agents        | Drafted             | guides/add-and-configure-agents              |
| Use Agent Marketplace           | Partial             | Covered in features/agents + features/overview; confirm whether a dedicated marketplace page is needed |
| Attach references               | Drafted             | guides/attach-references                     |
| Configure MCP servers           | Drafted             | guides/use-mcp-and-skills                    |
| Manage tasks and inbox messages | Drafted             | guides/tasks-and-inbox                       |
| Troubleshooting provider setup  | Drafted             | reference/troubleshooting                    |
| Troubleshooting workspace + dispatch | Drafted         | reference/troubleshooting-workspaces         |
| FAQ                             | Drafted             | reference/faq                                |

## Open questions for the Manager

1. Is the source brief (`syndicate-overview.md`) accessible elsewhere? If yes, the source-section mappings above should be tightened against actual brief headings.
2. No MVP page-scope confirmation remains for the previously missing guides and reference pages; they are drafted and listed in `docs.json`.
3. Does the brief warrant a standalone page for **Use Agent Marketplace**, or are the current cross-feature references sufficient?
4. Should the **MCP** feature page nav label switch from "MCP" to "MCP servers" to match the terminology rule?

---

## Decision list for the user

These decisions track remaining content-plan questions after the previously blocked pages were drafted.

### Decision 1 - MVP page scope: resolved

`PLAN.md` listed five pages that had no draft. All five now exist and are listed in `docs.json`:

| Proposed page                            | Current state |
| ---------------------------------------- | ------------- |
| `guides/create-a-solo-agent`             | Drafted       |
| `guides/attach-references`               | Drafted       |
| `guides/tasks-and-inbox`                 | Drafted       |
| `reference/troubleshooting-workspaces`   | Drafted       |
| `reference/faq`                          | Drafted       |

No Manager action remains for this decision.

### Decision 2 — Does **Use Agent Marketplace** need a standalone page?

`PLAN.md` lists **Use Agent Marketplace** as a likely MVP page, but its content is currently distributed. Atlas now has a scoped placeholder at `guides/create-your-first-team/atlas-orchestrator`.

- **Agent Marketplace** material lives in `features/agents.mdx` and `features/overview.mdx`.

| Option | What you get | What you lose |
| ------ | ------------ | ------------- |
| **A. No standalone Agent Marketplace page (recommended)** | Flatter nav, less duplication; readers learn Marketplace in context of agents. | No single anchor URL to link to from external marketing. |
| **B. Standalone Agent Marketplace page** | Direct discoverability and external linking; cleaner mental model for newcomers. | Risk of two sources of truth that drift; needs maintenance. |

**Ask of you:** Approve **Option A** (fold into existing pages), or approve **Option B** (add `features/agent-marketplace`, which would be **blocked on source brief**).

### Decision 3 — Nav label: "MCP" vs "MCP servers"

The terminology baseline in `PLAN.md` says **"MCP server"** is the canonical term. Body copy across the docs already uses "MCP server." The current nav label is **"MCP."**

| Option | Pros | Cons |
| ------ | ---- | ---- |
| **A. Rename to "MCP servers" (recommended)** | Matches terminology rule; reads as a concrete noun, not an acronym. | One extra word in the sidebar; existing deep links to `/features/mcp` still work — the route does not need to change. |
| **B. Keep "MCP"** | Slightly shorter sidebar entry. | Inconsistent with body copy and terminology rule. |

**Ask of you:** Approve **Option A** to rename the nav label only. The route `/features/mcp` stays the same.

### Bonus decision — Proceed without the brief?

`syndicate-overview.md` is not in the workspace. Two paths:

- **A. Wait for the brief.** Drafting stays paused; doc-map work continues on Confirmed pages only.
- **B. Authorize drafting from current artifacts.** Phase 3 proceeds using the existing `features/` and `guides/` drafts as the source of truth; brief-dependent open questions get drafted as best-effort and flagged in-line for QA review.

**Recommendation:** **B** if the existing drafts are trusted as faithful to product behavior. Otherwise **A**.
