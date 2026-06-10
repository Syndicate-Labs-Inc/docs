# Create your first team subpages draft

## Notes for implementation

This draft follows the Manager request for four subpages under **Create your first team**:

- Quick guide
- Team Hub
- Team workspace
- Manager

Current repo state uses `tutorials/create-your-first-team.mdx` as the parent Quick guide page and has sibling pages for `team-hub`, `team-workspace`, and `manager`.

- Keep Quick guide at `tutorials/create-your-first-team`.
- Use `tutorials/create-your-first-team/team-workspace` for Team workspace.
- Use `tutorials/create-your-first-team/manager` for Manager.

Terminology applied:

- Use "workspace" for the broad container.
- Use "team" and "solo agent" for specific workspace types.
- Use "provider" for Claude, OpenAI/Codex, and Gemini.
- Use "MCP server" for external tool integrations.

---

## Quick guide

### Purpose

Help a new user create a Manager-led team, connect it to a local project folder, choose an appropriate control mode, and run one small first task.

### Outline

1. What this page helps you do
2. Before you start
3. Create the team
4. Choose the working folder
5. Pick a Manager control mode
6. Send a first task
7. Verify the team is working
8. Next steps

### MDX-ready draft

```mdx
---
title: "Quick guide"
description: "Create your first Syndicate team and send it a small first task."
---

A team is a [workspace](/features/workspaces) where a Manager coordinates specialists against one local project folder. Use this guide when you want a team to inspect, edit, test, review, or document a real project.

{/* Hero media: 20-30 second clip creating a team, selecting a folder, reviewing the roster, choosing a Manager control mode, and landing in the team workspace.
Capture list:
- Create Team entry point.
- Manual and guided setup options.
- Local folder picker.
- Manager control mode selector.
- Finished team workspace with Manager and specialists visible.
*/}

## Before you start

Make sure you have:

- Installed Syndicate and signed in.
- Connected at least one [provider](/tutorials/connect-providers).
- Picked the local project folder the team should use.

## Create the team

<Steps>
  <Step title="Start team creation">
    Click **Create Team**.
  </Step>
  <Step title="Choose a setup path">
    Select **Build Your Team** if you want to choose the roster yourself. Select the guided setup option if you want Syndicate to suggest a Manager and specialists from a project description.
  </Step>
  <Step title="Review the roster">
    Confirm the Manager and specialists. Edit agent names, roles, or instructions before you create the team.
  </Step>
  <Step title="Create the team">
    Finish setup to open the new team workspace.
  </Step>
</Steps>

## Choose the working folder

The working folder is the local project folder the team can use during runs. Agents use it when they read files, edit code, run commands, and gather project context.

Choose the folder that contains the project you want the team to work on. Avoid selecting a parent folder that contains unrelated projects.

<Tip>
Start with one focused project folder. You can create another workspace later if you need a different project context.
</Tip>

## Pick a Manager control mode

The control mode decides how much the Manager can do before asking you.

| Mode | Use when |
| --- | --- |
| **Autopilot** | You trust the Manager to plan, delegate, and follow up without routine approval. |
| **Approve New Work** | You want the Manager to coordinate existing work, but ask before expanding scope. |
| **Approve Each Step** | You want to approve every delegation, reroute, or follow-up. |

Start with **Approve New Work** for a new team. It keeps the team moving while giving you a chance to catch scope changes.

## Send a first task

Keep the first task small. Ask the Manager to inspect the project before you assign implementation work.

For example:

```text
Inspect this project and summarize:
- What the app does.
- How to run it locally.
- Which files are most important.
- What you would improve first.
```

## Verify the team is working

After you send the task, check that:

- The Manager responds with a plan or dispatches a specialist.
- At least one task appears or updates.
- The assigned agent moves out of idle state.
- The inbox shows any agent messages that need your attention.

If nothing starts, check that the team has a connected provider and that the working folder is available.

## Next steps

<CardGroup cols={3}>
  <Card title="Team workspace" icon="layout" href="/tutorials/create-your-first-team/team-workspace">
    Learn the main areas inside a single team workspace.
  </Card>
  <Card title="Team Hub" icon="grid" href="/tutorials/create-your-first-team/team-hub">
    See every team and jump back into recent work.
  </Card>
  <Card title="Manager" icon="route" href="/tutorials/create-your-first-team/manager">
    Learn how the Manager plans, delegates, and asks for approval.
  </Card>
</CardGroup>
```

---

## Team Hub

### Purpose

Explain the cross-team landing view so users know where to see all teams, check provider readiness, create a new team, and reopen a recent team workspace.

### Outline

1. What Team Hub is
2. When to use Team Hub
3. What appears on the landing page
4. Create a team from Team Hub
5. Jump back into recent work
6. Next steps

### MDX-ready draft

```mdx
---
title: "Team Hub"
description: "Use Team Hub to see every team, check provider readiness, and jump back into recent work."
---

**Team Hub** is the landing view for multi-agent work. Open it when you want to scan your teams before entering a specific team workspace.

{/* Hero media: 15-20 second clip opening Team Hub from the sidebar, scanning teams, checking provider state, and opening one team workspace.
Capture list:
- Sidebar with Team Hub selected.
- Team Hub list with several teams.
- Provider readiness indicator on a team.
- Create Team entry point.
- Click into one team workspace.
*/}

<Frame>
  ![Syndicate Team Hub landing page listing team workspaces with provider readiness indicators and a Create Team entry point.](/assets/screenshots/teams/Landing%20Page.png)
</Frame>

## When to use Team Hub

Use **Team Hub** when you want to:

- See every team in one place.
- Check which teams have a connected provider.
- Reopen a team you used recently.
- Create a new team without staying inside another workspace.

If you already know which workspace you need, use the sidebar. Use **Team Hub** when you want the broader team view.

## What you see

**Team Hub** can show:

- **Your teams**: multi-agent workspaces you have created.
- **Provider state**: whether each team has a provider ready to run.
- **Recent activity**: teams that have run work recently.
- **Create Team**: the entry point for creating another team.

Provider state matters because agents cannot run until the selected provider is connected.

## Create a team from Team Hub

Click **Create Team** to start the same setup flow covered in [Quick guide](/tutorials/create-your-first-team). Choose a setup path, select the working folder, review the Manager and specialists, and create the team.

## Jump back into recent work

Open a team from **Team Hub** when you want to continue where you left off. After the team workspace opens, check:

- The latest Manager message.
- Active or blocked tasks.
- Inbox messages that need your response.
- The current provider state.

## Next steps

<CardGroup cols={2}>
  <Card title="Team workspace" icon="layout" href="/tutorials/create-your-first-team/team-workspace">
    Learn the layout inside one team workspace.
  </Card>
  <Card title="Teams" icon="users" href="/features/teams">
    Learn when to use a team and how teams coordinate work.
  </Card>
</CardGroup>
```

---

## Team workspace

### Purpose

Orient users inside a single team workspace after they create or open a team, with clear explanations of the sidebar, chat, tasks, inbox, and references.

### Outline

1. What a team workspace contains
2. Layout at a glance
3. Use chat to give the Manager an outcome
4. Track work in tasks
5. Respond through the inbox
6. Add context with references and MCP servers
7. First moves in a new workspace
8. Next steps

### MDX-ready draft

```mdx
---
title: "Team workspace"
description: "Get oriented inside one team workspace: Manager, specialists, chat, tasks, and inbox."
---

The team workspace is where one team does its work. You use it to message the Manager, watch specialists run, track tasks, answer inbox messages, and keep project context close to the work.

{/* Hero media: 20-25 second clip walking through a team workspace: Manager and specialists, chat, task list, inbox badge, and a dispatch starting.
Capture list:
- Team workspace open with Manager and specialists visible.
- Chat message to the Manager.
- Manager dispatch to a specialist.
- Task status update.
- Inbox badge or message.
*/}

## Layout at a glance

A team workspace usually includes:

- **Sidebar**: the Manager and specialists on the team.
- **Chat**: where you message the Manager or a specific agent.
- **Tasks**: the work the Manager has planned, assigned, or completed.
- **Inbox**: messages from agents that you may need to read or answer.
- **References**: project context attached to the workspace or agents.

The layout may shift as Syndicate evolves, but these areas are the ones to learn first.

## Use chat to give an outcome

Start by giving the Manager a clear outcome. Avoid assigning every step unless you want tight control.

Good first requests include:

- "Inspect the project and summarize the main files."
- "Find the setup steps and tell me how to run the app."
- "Review the current changes and identify risks."
- "Draft a small plan before making edits."

The Manager can respond directly, create tasks, or dispatch a specialist.

## Track work in tasks

Tasks show what the team is doing and who owns each piece of work.

| Status | Meaning |
| --- | --- |
| **Todo** | Planned or queued. |
| **In Progress** | An agent is actively working. |
| **Blocked** | The agent needs input, access, or a decision. |
| **Done** | The work is complete. |

Read task summaries before starting follow-up work. They often explain what changed and what still needs attention.

## Respond through the inbox

Agents use inbox messages to hand off work, report back, and ask for help. Open the inbox when:

- A badge shows unread messages.
- A task is blocked.
- The Manager asks for a decision.
- You want to understand how agents are coordinating.

Reply with a concrete instruction so the Manager can continue cleanly.

## Add context with references and MCP servers

Use references when the team needs stable project context, such as docs, requirements, or design notes. Use an MCP server when an agent needs access to an external tool integration.

Keep context focused. Attach only the files, folders, or integrations the team needs for the current work.

## First moves in a new workspace

After you create a team:

1. Send the Manager one small inspection task.
2. Watch whether the Manager dispatches a specialist.
3. Open **Tasks** and check the status.
4. Open **Inbox** if an agent asks for input.
5. Review the result before assigning implementation work.

<Tip>
Small first tasks help you confirm that the working folder, provider, Manager, and specialists are set up correctly.
</Tip>

## Next steps

<CardGroup cols={3}>
  <Card title="Manager" icon="route" href="/tutorials/create-your-first-team/manager">
    Learn how the Manager coordinates specialists.
  </Card>
  <Card title="Tasks and inbox" icon="inbox" href="/tutorials/tasks-and-inbox">
    Learn how to track team work and answer agent messages.
  </Card>
  <Card title="References and context" icon="paperclip" href="/features/references-and-context">
    Learn how to give agents useful project context.
  </Card>
</CardGroup>
```

---

## Manager

### Purpose

Explain the Manager's role in a team, what users should ask it to do, how dispatch works at a user-facing level, and how control modes affect approval.

### Outline

1. What the Manager does
2. What to ask the Manager
3. How delegation works
4. Choose the right control mode
5. Review or stop work
6. When to message a specialist directly
7. Next steps

### MDX-ready draft

```mdx
---
title: "Manager"
description: "Use the Manager to plan work, delegate to specialists, and keep a team moving."
---

The Manager is the coordinating agent in a team. You give it an outcome, and it decides which specialist should handle each step.

Use the Manager when you want the team to plan, delegate, follow up, and report back without making you route every message yourself.

{/* Hero media: 20-25 second clip sending the Manager an outcome, seeing a plan, approving new work, and watching a specialist receive a dispatch.
Capture list:
- Message to the Manager.
- Manager response with a short plan.
- Approval prompt or control-mode-dependent action.
- Specialist run starting from dispatch.
- Task or inbox update after the dispatch.
*/}

## What the Manager does

The Manager can:

- Break an outcome into smaller tasks.
- Delegate tasks to specialists.
- Follow up when an agent finishes or gets blocked.
- Route messages between agents.
- Escalate decisions that need you.
- Summarize progress across the team.

Every team has one Manager. If you want to work with one agent directly, use a [solo agent](/features/solo-agents) or message a specialist directly inside the team workspace.

## What to ask the Manager

Ask for outcomes, not busywork.

Good Manager requests:

- "Inspect this repo and create a short implementation plan."
- "Have the frontend specialist build the settings view, then send it to review."
- "Find why provider setup fails and ask me before changing files."
- "Coordinate a docs pass for the onboarding guides."

Weak Manager requests:

- "Do stuff."
- "Fix everything."
- "Tell everyone to work."

Clear outcomes help the Manager choose the right specialist and stop at the right point.

## How delegation works

When the Manager delegates, Syndicate starts a dispatch on the selected specialist. A dispatch is the run that carries the task, context, and instructions to that agent.

You can usually see delegation through:

- A Manager message.
- A new or updated task.
- A specialist status change.
- An inbox message or follow-up summary.

See [chat and dispatch](/features/chat-and-dispatch) for more detail about how runs appear in the app.

## Choose the right control mode

The Manager's control mode decides when it must ask you before acting.

| Mode | Best for | What to expect |
| --- | --- | --- |
| **Autopilot** | Trusted teams and routine workflows. | The Manager keeps planning, delegating, and following up without routine approval. |
| **Approve New Work** | Most new teams. | The Manager coordinates current work, but asks before expanding scope. |
| **Approve Each Step** | Sensitive work or first-time setup. | The Manager asks before each delegation or follow-up. |

Use stricter control when the team is new, the project is sensitive, or the task is ambiguous. Loosen control when the workflow is proven.

## Review or stop work

Review the Manager's work through chat, tasks, and inbox messages. If the team is moving in the wrong direction:

1. Stop the active run if one agent is doing the wrong task.
2. Send the Manager a clearer outcome or constraint.
3. Use **Hard pause** if the whole team needs to stop.
4. Resume with one concrete next instruction.

**Hard pause** stops in-flight team dispatches and prevents new automatic dispatches until you resume.

## When to message a specialist directly

Message a specialist directly when you already know who should do the work and do not need the Manager to coordinate.

Use direct messages for:

- A focused review.
- A narrow code or docs task.
- A quick question about that agent's specialty.

Use the Manager when the work has multiple steps, multiple specialists, or unclear ownership.

## Next steps

<CardGroup cols={3}>
  <Card title="Team workspace" icon="layout" href="/tutorials/create-your-first-team/team-workspace">
    See where Manager messages, tasks, and inbox updates appear.
  </Card>
  <Card title="Chat and dispatch" icon="messages" href="/features/chat-and-dispatch">
    Learn how dispatch starts and how runs show progress.
  </Card>
  <Card title="Teams" icon="users" href="/features/teams">
    Learn when to use a team and how control modes work.
  </Card>
</CardGroup>
```
