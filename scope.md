# Syndicate docs scope

## Project overview

This repo is the public Mintlify documentation site for Syndicate. The docs are MDX pages with YAML frontmatter. Site configuration, navigation, branding, and global links live in `docs.json`.

The current docs are mid-revamp. They already cover first-time setup, provider connection, team and solo agent workflows, Agent Marketplace flows, MCP servers, skills, references, tasks, inbox, settings, troubleshooting, and FAQ.

The repo also includes planning artifacts that are not public docs:

- `PLAN.md`
- `CONTENT-PLAN.md`
- `TEAM-SUBPAGES-DRAFT.md`

Those plans reference a source brief named `syndicate-overview.md`, but that file is not present in the workspace. Future factual changes should either use the existing published drafts or reintroduce the source brief.

## Current file and component inventory

### Root files

- `docs.json`: Mintlify config, navigation, colors, logo, favicon, global anchors, navbar button, contextual actions, SEO canonical URL, and footer social link.
- `index.mdx`: Landing page.
- `getting-started.mdx`: Quick launch path.
- `style.css`: Global typography polish for Mintlify-rendered MDX content.
- `.mintignore`: Mintlify ignore rules.
- `.gitignore`: Git ignore rules.
- `AGENTS.md`: Local documentation instructions.
- `PLAN.md`: Revamp plan.
- `CONTENT-PLAN.md`: Content plan and status notes.
- `TEAM-SUBPAGES-DRAFT.md`: Draft source for the team guide subpages.

### Published page directories

- `features/`: Concept and how-to pages.
- `tutorials/`: Step-by-step guides.
- `tutorials/create-your-first-team/`: Team guide subpages.
- `tutorials/agent-marketplace/`: Agent Marketplace subpages.
- `reference/`: Provider, settings, auth, troubleshooting, and FAQ references.

### Assets

- `assets/syndicate-icon.png`
- `assets/syndicate-logo-dark.png`
- `assets/syndicate-logo-white.png`
- `assets/README.md`
- `assets/screenshots/install/create_account.png`
- `assets/screenshots/install/sign_in.png`
- `assets/screenshots/teams/Landing Page.png`
- `assets/screenshots/teams/Create Team Modal.png`
- `assets/screenshots/agents/agent_marketplace_syndicate.png`
- `assets/screenshots/agents/agent_marketplace_manager.png`
- `assets/screenshots/agents/agent_marketplace_options.png`
- `assets/screenshots/agents/agent_marketplace_custom_input.png`
- `assets/screenshots/agents/agent_marketplace_custom_docs_example.png`
- `assets/screenshots/agents/agent_marketplace_custom_input_results.png`

Current MDX pages reference install, Team Hub, and Agent Marketplace screenshots. No referenced asset was obviously missing during inspection.

### Mintlify components in use

The docs use standard Mintlify MDX components:

- `Card`
- `CardGroup`
- `Steps`
- `Step`
- `Note`
- `Tip`
- `Warning`
- `Frame`

Many pages also include MDX comments for planned hero media or screenshots. These comments do not render as content, but they show where visual assets are still planned.

## Existing documentation structure

The current `docs.json` navigation has five main groups.

### Start here

- `index`
- `getting-started`

### Guides

- `tutorials/install-and-sign-in`
- `tutorials/connect-providers`
- The Marketplace
  - `tutorials/agent-marketplace`
  - `tutorials/agent-marketplace/built-in-syndicate-agents`
  - `tutorials/agent-marketplace/community-agents`
  - `tutorials/agent-marketplace/agent-maker`
- Create your first team
  - `tutorials/create-your-first-team`
  - `tutorials/create-your-first-team/team-hub`
  - `tutorials/create-your-first-team/team-workspace`
  - `tutorials/create-your-first-team/manager`
- `tutorials/create-a-solo-agent`
- `tutorials/attach-references`
- `tutorials/use-mcp-and-skills`
- `tutorials/tasks-and-inbox`

### Core concepts

- `features/overview`
- `features/workspaces`
- `features/agents`
- `features/teams`
- `features/solo-agents`
- `features/providers-and-models`

### How to

- `features/chat-and-dispatch`
- `features/tasks`
- `features/inbox`
- `features/references-and-context`
- `features/command-palette`
- `features/mcp`
- `features/skills`
- `features/settings`

### Reference

- `reference/providers`
- `reference/settings`
- `reference/auth-flows`
- Troubleshooting
  - `reference/troubleshooting`
  - `reference/troubleshooting-workspaces`
- `reference/faq`

Every route listed in `docs.json` has a matching MDX file.

One MDX page is not in navigation:

- `tutorials/add-and-configure-agents.mdx`

## Content coverage summary

### Setup and onboarding

The docs cover beta access, installation, sign-in, first launch, and account creation through `tutorials/install-and-sign-in`. `getting-started` gives a short path from install to first useful work.

### Providers and models

The docs cover Claude, OpenAI/Codex, and Gemini setup in `tutorials/connect-providers`, `features/providers-and-models`, `reference/providers`, and `reference/auth-flows`. They explain provider readiness states, local CLI dependencies, sign-in expectations, and model selection.

### Workspaces

The docs consistently frame workspace as the broad container, with team and solo agent as the specific workspace shapes. `features/workspaces` explains workspace types, hubs, project folders, working directories, and lifecycle.

### Teams and Manager workflows

The team path is well represented. The docs cover team creation, Team Hub, team workspace layout, Manager behavior, dispatch, control modes, hard pause, task tracking, and inbox handling.

### Solo agents

Solo agent setup and concept pages exist. The docs explain when to use a solo agent, how to create one, and when to move to a team.

### Agent Marketplace

The Marketplace section is one of the more complete areas. It covers built-in Syndicate agents, community agents, Agent Maker, install methods, package credentials, custom agent creation, and adding agents to a team or solo agent workspace.

### References and context

The docs cover attaching references, reference scopes, context focus, and context budgets. The relationship between references and the project folder is explained in both tutorial and concept pages.

### MCP servers and skills

The docs cover MCP server setup, per-agent enablement, good use cases, safety tips, and skills as reusable workflows. Coverage is split between `tutorials/use-mcp-and-skills`, `features/mcp`, `features/skills`, and related references.

### Troubleshooting

Troubleshooting covers provider setup, OpenAI/Codex terminal behavior, Gemini auth, Claude rate limits, Manager delegation, blocked agents, automatic dispatch, inbox pileups, working directory issues, hard pause, runaway work, and MCP server availability.

## Gaps and risks

- `mint validate` could not run because the `mint` command is not installed or not on `PATH`. Structural validation remains unverified locally.
- `tutorials/add-and-configure-agents.mdx` exists but is not listed in `docs.json`. Decide whether to publish it, merge it into the Agent Marketplace section, or delete it if obsolete.
- Many MDX pages contain comments for planned hero media or screenshots. The docs may feel visually incomplete until those assets are captured and inserted.
- Some public copy uses "AI provider" even though the terminology rule says to use "provider." Examples appear in `index.mdx`, `getting-started.mdx`, `features/providers-and-models.mdx`, `features/settings.mdx`, and `tutorials/install-and-sign-in.mdx`.
- Some UI labels use **Solo Workspace** while terminology says "solo agent" for the workspace type. This may be accurate if the app UI label is **Solo Workspace**, but the docs should explain that mapping once and avoid mixed naming elsewhere.
- The docs mention beta access and invite-based use. Confirm whether that is still true before publishing.
- `CONTENT-PLAN.md` contains mojibake characters in several places. It is a draft artifact, not a public page, but it can confuse future editors.
- `docs.json` labels the route `features/mcp` as "MCP" by file title through the page, while the page title is "MCP servers." The route can stay stable, but navigation and link labels should consistently say "MCP servers" where visible.
- The source brief named in `PLAN.md` is missing. This creates verification risk for claims about auth behavior, storage, provider readiness, model defaults, and Agent Marketplace install methods.
- Some routes under `/tutorials/*` are labeled "Guides" in navigation. This is acceptable, but editors should know that route names and sidebar labels intentionally differ.
- No package manifest was visible in the repo root. New contributors may need explicit instructions for installing Mintlify CLI before running `mint dev` or `mint validate`.

## Recommended documentation build sequence

1. Confirm source truth and product status.
   Verify beta access status, supported providers, provider auth behavior, local credential/storage claims, supported install paths, and Agent Marketplace behavior.

2. Run structural validation.
   Install or expose the Mintlify CLI, then run `mint validate`. Fix any missing pages, invalid components, or broken references before editing content at scale.

3. Resolve navigation and orphan content.
   Decide what to do with `tutorials/add-and-configure-agents.mdx`. If it stays, place it in Guides or fold it into The Marketplace.

4. Standardize terminology.
   Replace generic "AI provider" with "provider" unless the phrase is part of a UI label. Decide how to handle **Solo Workspace** as a UI label versus "solo agent" as docs terminology.

5. Finish the first-time setup path.
   Tighten `index`, `getting-started`, `install-and-sign-in`, `connect-providers`, and `create-your-first-team` so a new user can move end to end without ambiguity.

6. Polish the team workflow path.
   Review the Team Hub, team workspace, Manager, chat and dispatch, tasks, and inbox pages together. Ensure the sequence matches the current app UI.

7. Polish the extension path.
   Review Agent Marketplace, built-in Syndicate agents, community agents, Agent Maker, MCP servers, skills, and references as one connected path.

8. Review troubleshooting against real failure states.
   Confirm symptoms, causes, and fixes for provider setup, dispatch, working directory, hard pause, and MCP server availability.

9. Add or update screenshots.
   Replace placeholder media comments with current, cropped screenshots that avoid emails, tokens, file paths, customer data, and private credentials.

10. Do final style and link QA.
    Check sentence case headings, concise second-person copy, bold UI labels, code formatting, route consistency, and internal links.

## Questions or decisions needed from the human

- Is Syndicate still invite-only, and should public docs continue to mention beta access?
- Should the orphaned `tutorials/add-and-configure-agents.mdx` page be published, merged, or removed?
- Is **Solo Workspace** the exact UI label? If yes, should docs define it as the UI label for creating a solo agent workspace?
- Should visible navigation and link labels always say "MCP servers" instead of "MCP"?
- Can the team provide the missing `syndicate-overview.md` source brief or another current product source of truth?
- Which screenshots are approved for public use, and do any existing screenshots need redaction or replacement?
- Should the docs include explicit supported OS information and install commands, or should install details stay behind the main website download flow?
- Who owns ongoing validation, and how should contributors install the Mintlify CLI before running `mint dev` or `mint validate`?
