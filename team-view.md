# Team View Feature And Workflow Reference

This document describes the current Team view in Syndicate as implemented in the React UI and Electron backend. It is meant for product planning, QA, agent onboarding, and future implementation work.

Last reviewed: 2026-06-06

## Scope

"Team view" currently spans three related surfaces:

1. Team Hub: the all-teams overview where users browse teams, open a team, see unread updates, and start common team-level actions.
2. Team Workspace: the drilled-in view for a single team, with the agent network, selected agent rail, and bottom tray.
3. Manager Operations: Atlas-specific tabs and workflows inside the Team Workspace, including User Tasks, Agent Tasks, and Task Health.

Solo workspaces reuse portions of this surface, but this document focuses on managed multi-agent teams. Solo-specific behavior is called out where it changes the workflow.

## Primary Source Files

- `src/App.jsx`: application state, routing between hub/workspace modes, message dispatch, preview controls, stop controls, modals, and top-level IPC calls.
- `src/components/TeamGrid.jsx`: Team Hub, all-team overview, selected-team header, team cards, inbox summary, and simple Team Hub drill-in.
- `src/components/TeamDashboard.jsx`: drilled-in Team Workspace, agent network, manager operations, right rail, bottom tray, task health, and activity surfaces.
- `src/components/ChatPanel.jsx`: compact chat and Agent Comms rendering used by the right rail.
- `src/components/AssignTaskModal.jsx`: direct task assignment form.
- `src/components/AgentConfigPanel.jsx`: agent settings and context controls.
- `src/components/TeamConfigPanel.jsx`: team settings, interruption level, hard pause, working directory, and deletion.
- `electron/preload.cjs`: renderer-facing `window.electronAPI` bridge.
- `electron/projects.cjs`: team, agent, inbox, task, user task, decision, reference, and persistence operations.
- `electron/dispatch.cjs`: Atlas and agent dispatch loop, task parsing, interruption routing, auto-dispatch, and send-tag handling.
- `electron/servers.cjs`: team dev-server lifecycle and preview status.

## Mental Model

A team is a persistent workspace with:

- a working folder
- one Manager agent, usually Atlas
- one or more specialist agents
- shared task state
- shared inbox messages
- optional references, uploads, connectors, MCP servers, and dev servers

The Team view is both a control room and a conversation surface. Users can chat with Atlas, inspect specialist agents, assign tracked work, respond to pending decisions, watch activity, browse files, and run a project preview without leaving the workspace.

## Entry Points

### From Team Hub

The user can enter Team view by selecting a team card or using an "Open Team" / "Open Team Chat" action. In managed teams, the default selected agent is the Manager when available.

Typical path:

1. User opens Team Hub.
2. User selects a team.
3. The app stores the selected team id and selected agent id.
4. The Team Workspace opens with Atlas selected if the team has a Manager.

### From Advanced Drill-In

Advanced mode can drill directly into a team workspace. The workspace header exposes team switching, preview, settings, and stop/restart actions.

### From Inbox Alerts

Inbox/user-attention alerts can navigate directly to the relevant team and agent. The app selects the team, selects the agent, and can open Agent Comms so the user sees the relevant inter-agent message.

## Team Hub

Team Hub is the overview for all team workspaces.

### Team Cards

Each team card shows:

- team name
- working folder label when present
- agent count
- agent avatars or status summary
- team status derived from agent statuses
- settings access
- open/drill action

Team status is derived from agents:

- working agents make the team appear active
- waiting/error/idle states influence the summary
- hard-paused teams show pause state in team-level controls

### Selected Team Preview

When a team is selected in the Team Hub overview, the focused preview shows:

- team name
- folder label
- agent roster
- active status
- a primary action to open the team chat/workspace
- team settings access
- focused inbox panel for that team

### Add Team

The hub exposes an Add Team action that starts team creation through the top-level wizard in `App.jsx`. Team creation can be blank, template-based, or suggested from a brief depending on the path used.

### Inbox Summary

The hub-level inbox panel aggregates unread and recent inbox messages, scoped either to all teams or to the focused team. It prioritizes user-attention messages and lets the user navigate to the related agent.

## Team Workspace Layout

The drilled-in Team Workspace has three primary regions:

- Left/main canvas: the agent network or board/timeline area.
- Right rail: selected agent chat, Agent Comms, Manager Operations, and agent settings entry.
- Bottom tray: activity, files, uploads, and file preview.

The layout supports resizing:

- the right rail width can be adjusted
- the bottom tray height can be adjusted
- the bottom tray can be collapsed and expanded

## Workspace Header

Depending on the mode and selected team, the workspace header can expose:

- team switcher
- selected team name
- selected agent switcher
- Preview action
- Team Settings action
- Stop Team / Restart Team action
- navigation back to hub

### Preview Button

Preview attempts to use an existing running server for the team. If none exists, it starts a default dev server for the team working folder and opens a preview window once a URL or port is available.

### Stop Team / Restart Team

Stop Team performs a hard pause:

- stops current team dispatches
- blocks new auto-dispatch
- persists `hardPaused` on the team

Restart Team clears the hard pause. It does not automatically restart all agents; agents wake only when prompted or messaged again.

There is also a hidden soft pause concept used by User Tasks. Soft pause is controlled by backend interruption logic and releases when the user responds.

## Agent Network Canvas

The Team Workspace visual canvas shows the Manager and specialist agents as an interactive network.

### Manager Center

Atlas appears as the central coordinator when a Manager exists. Specialist agents orbit around the Manager.

### Agent Nodes

Agent nodes show:

- agent identity
- role/specialization
- model/provider indicator
- status
- visual alerts when messages need attention
- task/activity hints

Selecting an agent updates the right rail.

### Manager-Agent Edges

Lines between Atlas and agents are shown when messages have been exchanged. This makes real coordination visible instead of rendering every theoretical team relationship.

### Filtering And Selection

The canvas supports selecting agents and can filter/spotlight agents by status or alert context. Background click clears focus where applicable.

### Interruption Level Control

The network includes the team execution/interruption mode control. Current modes are:

- Minimal: Atlas interrupts only for true blockers, explicit user attention, missing access, high-risk work, or required approval.
- Balanced: Atlas coordinates routine work and interrupts for unclear scope, meaningful new workstreams, medium/high risk, or completion approvals.
- Hands-on: Atlas interrupts before major assignments, broad follow-ups, risky decisions, and completion reviews.
- Manual: Atlas turns most delegations, follow-ups, and re-routes into User Task approval prompts.

Legacy mode names are normalized:

- `auto` / `autopilot` -> `minimal`
- `phased`, `approve_launch`, `approve_new_work` -> `balanced`
- `approve_each_step` -> `manual`

## Right Rail

The right rail changes based on the selected agent.

### Shared Header

The rail header shows:

- selected agent title
- selected tab name
- Assign Task button
- Agent Settings button

Assign Task is hidden for solo-only contexts where there is no meaningful team assignment.

### Agent Chat

Chat is the direct user-to-agent conversation.

Features:

- direct text messages
- optimistic local rendering while the message persists
- file attachments
- image paste and drag/drop
- image lightbox
- slash-command menu from the selected agent's installed skills
- stop current response
- interrupt/answer-now while an agent is streaming
- load older messages
- streaming status and tool event display
- automatic chat scroll when near bottom

Manager chat can also show Quick Atlas requests.

### Quick Atlas Requests

When Atlas is selected, quick prompts can open a modal with canned requests such as status, blockers, and next steps. Selecting a prompt sends a structured instruction to Atlas while displaying a short user-facing label in chat.

### Slash Commands

The slash-command menu lists skills that match the selected agent specialization. Selecting a command inserts `/{skill-name}` into the chat input.

### Attachments

The chat input supports:

- picking files through the OS picker
- dragging files onto the input
- pasting images
- inline thumbnail display for images
- removal before send

Attachments are saved through chat upload APIs and can later appear in the Uploads tray.

### Agent Comms

Agent Comms shows inter-agent dispatch messages for the selected agent. It is separate from Chat so coordination traffic does not pollute the direct user conversation.

For a selected specialist, Agent Comms shows:

- messages received from Atlas or other agents
- messages sent by that specialist
- sender/recipient context
- dispatch-only rendering

For Atlas, Agent Comms shows the broader team dispatch stream.

### Message Sanitization

Chat and Agent Comms hide system/control tags that should not be user-visible:

- `<send>`
- `<tasks>`
- `<task>`
- `<task-update>`
- `<task-done>`
- `<decision>`
- `<manager-decision>`
- coordination rationale blocks

Human-directed `<send to="You">` content is rendered as normal user-facing content.

## Manager Operations

When Atlas is selected, the right rail exposes additional tabs:

- User Tasks
- Agent Tasks
- Task Health

These tabs replace approval cards in chat. Decisions, approvals, and blockers should route through User Tasks instead of appearing as chat approval cards.

### User Tasks

User Tasks are decisions, approvals, and roadblocks that require human input.

User Tasks can come from:

- team tasks with `requiresHumanDecision`
- blocked team tasks
- inbox messages sent to the user
- manager interruption requests
- derived pending user-attention messages

Each User Task shows:

- title
- description
- requester
- source
- related team task or message
- impact
- updated timestamp

Impact levels:

- blocking
- high
- medium
- low

Actions:

- Reply: opens a modal that sends an answer to Atlas.
- Resolve: marks the user task resolved without a reply.
- Allow: approves a manager interruption/new-work step.
- Dismiss: rejects/dismisses a manager interruption/new-work step.

Reply workflow:

1. User opens User Tasks.
2. User clicks Reply.
3. The modal quotes the original request.
4. User writes an answer.
5. The app marks the User Task resolved.
6. The app sends Atlas an inbox message with the answer and instructions to follow up or relay it.
7. Atlas can wake even if the team was soft-paused for user input.

Approval workflow:

1. Atlas generates an interruption requiring user approval.
2. The backend stores it as a User Task with `source: manager-interruption`.
3. User clicks Allow or Dismiss.
4. The app calls `dispatch:approve-manager-step`.
5. Approved sends/tasks are delivered; rejected work is not delivered.

### Agent Tasks

Agent Tasks is the Manager-facing task state panel. It shows Manager-created or directly-created tasks, excluding auto-dispatch bookkeeping tasks.

Features:

- status filter
- task title
- description
- assignee
- risk
- phase
- task age/update time
- requires-human-decision indicator
- cancel individual task
- abort all abortable tasks

Task statuses:

- todo
- in-progress
- blocked
- done
- canceled

Cancel workflow:

1. User cancels a task from Agent Tasks.
2. The task is removed from active tasks and archived as canceled.
3. Atlas gets a user-authored receipt in chat.
4. Atlas also gets an inbox notice instructing it not to resume, recreate, or reassign the task unless explicitly asked.
5. If the task had an assignee, the assignee can receive a stand-down message.

Abort-all workflow:

1. User chooses the bulk abort action.
2. All abortable visible tasks are canceled.
3. Atlas receives a summary.
4. Relevant agents receive stand-down instructions.

### Task Health

Task Health surfaces task quality and risk signals. It is meant as a watchlist, not a second task board.

Signals include:

- blocked tasks
- tasks requiring human decision
- high-risk tasks
- medium-risk tasks
- unassigned tasks
- low-quality task definitions

Task quality checks look for:

- assigned owner
- deliverable
- acceptance criteria
- done condition

Each risk item shows:

- severity
- task title
- assignee
- explanation
- suggested next step
- user guidance

Nudge Manager workflow:

1. User clicks Nudge Manager on a risk item.
2. The app appends a user-visible note to Atlas chat.
3. The app sends Atlas an inbox message with the exact task, severity, reason, and requested next step.
4. Atlas should address that specific risk item instead of doing a broad status pass.

## Assign Task Workflow

The Assign Task modal creates a tracked task directly from the Team view.

Fields:

- Agent
- Title
- Instructions
- Deliverable
- Done Condition
- Acceptance Criteria
- Phase
- Risk
- Requires human decision before completion
- Notify and start agent

Validation:

- Agent is required.
- Title is required.

Submit workflow:

1. User opens Assign Task from the right rail.
2. User fills task details.
3. The app calls `tasks:create`.
4. If `requiresHumanDecision` is true, a User Task is also created or updated.
5. If Notify and start agent is enabled, the app sends an inbox message to the assignee.
6. The inbox message includes deliverable, acceptance criteria, done condition, and human-decision requirement.
7. The assignee wakes through normal dispatch if not paused.
8. The assignee reports back to Atlas when complete or blocked.

Important behavior:

- If the target is Atlas, the message is sent from the user.
- If the target is a specialist, the message is sent from Atlas when available.
- Notification messages set `suppressAutoTask` so they do not create duplicate bookkeeping tasks.
- Direct task creation now routes human-gated completion through User Tasks rather than blocking chat input.

## Task Lifecycle

Tasks live in `_TASKS.json` for the team while active. Done and canceled tasks are archived into task history.

Creation sources:

- structured `<tasks>` output from Atlas
- direct Assign Task modal
- fallback manager send-to-agent task creation
- manual task creation from older TaskBoard paths

Update sources:

- `<task-update>` tags from Atlas
- `<task-done>` tags from assigned agents
- user cancellation
- backend reconciliation for completion proof waiting on human confirmation

Human decision behavior:

- tasks with `requiresHumanDecision` create User Tasks
- blocked tasks create blocking User Tasks
- non-blocked decision-needed tasks use high impact unless they are blocked
- completion proof plus "waiting on human confirmation" blocks the task and routes confirmation to User Tasks

## Dispatch And Coordination Workflow

Agents communicate through a team inbox. Messages are persisted and can trigger auto-dispatch.

Basic flow:

1. Atlas sends a message to a specialist using `<send to="AgentName">`.
2. The backend parses send tags.
3. The message is written to the inbox.
4. If the target agent is idle and the team is not paused, the target agent wakes.
5. The target receives prompt context including relevant tasks, inbox messages, references, and team context.
6. The target responds in chat and/or sends messages back.
7. Atlas processes pending agent updates and either updates tasks, sends next instructions, asks the user, or stands down.

Manager safeguards:

- Atlas cannot execute implementation tools in manager mode.
- Atlas should delegate specialist work instead of doing it directly.
- Atlas uses Manager State as source of truth for active work.
- Atlas should not infer active work from old conversation history.
- Fresh unhandled agent events are processed once.
- Completion proof waiting on human confirmation suppresses repeat pings to the same agent.

## Interruption Workflow

Interruption level controls how often Atlas prompts the user.

Backend behavior:

- Minimal: only true blockers, explicit user attention, missing access, high-risk or required approval.
- Balanced: meaningful new work and completion approvals can become User Tasks.
- Hands-on: major new assignments, broad follow-ups, risky decisions, and completion reviews become User Tasks.
- Manual: most delegations and re-routes require approval through User Tasks.

No approval cards should appear in chat. User approval and decision work routes to User Tasks.

## Hard Pause And Soft Pause

### Hard Pause

Hard pause is user-controlled through Stop Team / Pause Team.

Effects:

- stops current dispatches for that team
- blocks auto-dispatch
- persists on the team
- visible in team settings and workspace controls

Hard pause is for intentionally stopping team automation.

### Soft Pause For User Tasks

Soft pause is backend-controlled when the team is waiting on user input.

Effects:

- prevents the team from continuing while an unresolved user task is open
- releases when the user replies or resolves relevant user tasks
- should feel invisible except that the team waits instead of looping

Soft pause is for decision gating, not for forcing users to manually unlock the team.

## Agent Settings

Agent Settings opens from the right rail.

Sections:

- Identity
- Soul
- Context
- Skills
- MCP Servers
- Danger Zone

### Identity

Users can rename non-manager agents. Manager names are locked.

Specialization is displayed as a badge. Specialization drives the skill list and slash commands.

### Soul

Displays the agent's SOUL markdown. It can be expanded/collapsed for longer agent definitions.

### Context

Context controls determine how much prompt context the agent receives.

Displayed summary:

- preset label
- history lookback
- max characters per message
- token budget
- enabled sections
- last estimated token count

Context editor controls:

- quick presets: Lean, Balanced, Rich
- history lookback
- max chars per message
- role filter
- inbox lookback
- reference max
- token budget
- include team context
- include connectors
- include tasks
- include inbox
- include references

Prompt analytics:

- prompt size
- estimated tokens
- history injected vs available
- section character breakdown

### Skills

Shows slash-invocable skills associated with the agent specialization.

### MCP Servers

Lists installed MCP servers and lets the user toggle servers for the selected agent.

### Delete Agent

Deletes the agent and its configuration after confirmation.

## Team Settings

Team Settings opens from the Team Hub, workspace header, or team card.

Sections:

- Project Name
- Working Directory
- Interruption Level
- Team Hard Pause
- Danger Zone

### Project Name

Renames the team.

### Working Directory

Shows the current working directory and lets the user browse/relink a new folder.

### Interruption Level

Controls Atlas prompting frequency using Minimal, Balanced, Hands-on, and Manual modes.

### Team Hard Pause

Pauses or resumes the team. Pausing stops current dispatches and blocks new auto-dispatch. Resuming does not restart agents automatically.

### Delete Team

Deletes the team and all its agents after confirmation.

## Bottom Tray

The bottom tray provides supporting operational context.

Visible tabs:

- Activity
- Files
- Uploads

There is also legacy/in-progress code for Tasks, References, and Preview tab behavior. Preview is also exposed through header controls.

### Activity

Activity shows recent tool and context events for the team or selected agent.

Activity can include:

- Read
- Write
- Edit
- Bash
- Glob
- Grep
- WebSearch
- WebFetch
- SendMessage
- Skill
- Thought
- Context

Features:

- selected-agent scoping
- team-wide activity when no agent is selected
- latest events first
- "Load more" pagination in batches of 100
- normalized tool names
- compact detail formatting
- context snapshot summaries

### Files

Files shows the working directory tree.

Features:

- loads when Files tab is active
- refreshes periodically
- reads up to configured depth
- supports previewable files
- opens a split preview pane
- supports Escape to close file preview

Preview can render:

- code/text files through markdown code blocks
- supported office/spreadsheet-derived previews when returned by the backend
- images or data URLs when available
- error states for unreadable files

### Uploads

Uploads lists files attached through team chat.

Features:

- loads when Uploads tab is active
- refreshes every 10 seconds
- image lightbox for image uploads
- empty and loading states

### Dev Preview

The dev preview workflow is implemented through `electron/servers.cjs` and is available through the header Preview action. The bottom tray also contains a preview tab implementation path.

Preview features:

- start default `npm run dev`
- start custom command/name/cwd/port from the tray form path
- detect URL/port from server logs
- show server status: starting, running, stopped, error
- embedded webview for running server
- refresh webview
- open URL externally
- stop server
- restart server
- show console logs

## Chat Input And Running Agent Controls

When an agent is running, the chat input area can show:

- Answer Now: interrupts the current run and asks the agent to respond with what it has so far.
- Stop: cancels the current response for that agent.
- Send/Steer: sends a new message. During streaming, this can steer the active run through the app-level send path.

The full Stop Team action is separate from stopping a single response.

## Performance Diagnostics

The Team view includes timing instrumentation for slow paths:

- app state refresh and startup
- team view agent switch settling
- chat panel message preparation
- TeamDashboard activity extraction
- TeamDashboard timeline merge

The agent switch diagnostic includes:

- team id
- agent id
- raw message count
- renderable message count
- visible message count
- visible character count
- maximum visible message size

This is directly relevant to cases where switching agents becomes slow because an agent has many messages.

## Data And Persistence

Team data is persisted in the local store under the active user.

Important stores:

- team registry: team metadata, working folder, pause state, execution mode
- agent JSON files: agent metadata, messages, attachments, runtime, status
- `_TASKS.json`: active team tasks
- task history: completed/canceled task history
- `_USER_TASKS.json`: open/resolved user tasks
- inbox `{teamId}.json`: inter-agent and user-targeted messages
- references: global, team, and agent reference records
- uploads: saved chat attachments
- server registry: running dev servers in process memory plus emitted status events

## Backend IPC Surface Used By Team View

Team and workspace:

- `app:get-state`
- `team:create`
- `team:create-with-agents`
- `team:rename`
- `team:delete`
- `team:relink-folder`
- `team:open-folder`
- `team:set-runtime`
- `team:set-execution-mode`
- `team:set-hard-paused`

Agents:

- `agent:create`
- `agent:delete`
- `agent:rename`
- `agent:append-message`
- `agent:append-message-and-idle`
- `agent:set-runtime`
- `agent:set-status`
- `agent:set-context-settings`
- `agent:read-md`
- `agent:write-md`

Tasks:

- `tasks:list`
- `tasks:create`
- `tasks:update`
- `tasks:delete`
- `user-tasks:list`
- `user-tasks:upsert`
- `user-tasks:update`
- `decisions:list`
- `delegation-stats:list`

Inbox and dispatch:

- `inbox:send-message`
- `inbox:get-messages`
- `inbox:get-all-messages`
- `inbox:mark-read`
- `inbox:get-unread-counts`
- `dispatch:start`
- `dispatch:stop-agent`
- `dispatch:interrupt-reply`
- `dispatch:stop-all`
- `dispatch:approve-manager-step`

Files and references:

- `fs:list-tree`
- `fs:read-file`
- `file:open-preview`
- `refs:resolve`
- `refs:team:add`
- `refs:team:remove`
- `refs:agent:add`
- `refs:agent:remove`

Uploads:

- `chat:pick-files`
- `chat:process-paths`
- `chat:process-clipboard-image`
- `chat:save-uploads`
- `chat:list-uploads`

Servers and preview:

- `server:start`
- `server:stop`
- `server:list`
- `server:logs`
- `server:open-preview`
- `server:refresh-preview`

Connectors, MCP, and skills:

- `skills:list-all`
- `skills:get-content`
- `connector:set-agent-connectors`
- `mcp:set-agent-servers`
- `mcp:list`

## Core User Workflows

### Create And Open A Team

1. Start from Team Hub.
2. Click Add Team or use onboarding/template flow.
3. Choose team name and working folder.
4. Add or accept generated agents.
5. The app creates agent files and manager context.
6. The new team is selected.
7. The workspace opens with Atlas selected.

### Ask Atlas To Coordinate Work

1. Open team workspace.
2. Select Atlas.
3. Use Chat or Quick Atlas request.
4. Atlas responds directly, creates tasks, sends work to agents, or creates User Tasks.
5. Specialist agents wake from inbox messages.
6. Atlas reconciles updates when specialists reply.

### Assign Work Directly

1. Select any agent or Atlas.
2. Click Assign Task.
3. Fill in title, instructions, deliverable, done condition, criteria, phase, risk, and human-decision flag.
4. Submit.
5. The task is persisted.
6. The assignee is optionally notified and started.
7. The task appears in Agent Tasks and Task Health if relevant.

### Respond To A Blocker

1. Select Atlas.
2. Open User Tasks.
3. Review blocking/high-impact item.
4. Click Reply.
5. Answer the question.
6. Atlas receives the answer and decides whether to continue, relay it, or ask a follow-up.

### Approve Or Reject Manager Interruption

1. Select Atlas.
2. Open User Tasks.
3. Find an Interruption item.
4. Click Allow or Dismiss.
5. The backend either delivers the pending manager sends/tasks or rejects them.

### Investigate Team Health

1. Select Atlas.
2. Open Task Health.
3. Review blocked, decision-needed, risky, stale, unassigned, or low-quality task items.
4. Click Nudge Manager on a specific item.
5. Atlas receives a targeted notice and should address that item.

### Stop A Loop Or Cancel Work

1. For a single active response, click Stop in the chat input.
2. For a whole team, click Stop Team or pause in Team Settings.
3. To cancel tracked work, open Atlas -> Agent Tasks and cancel the specific task.
4. For broad task cleanup, use abort-all in Agent Tasks.

### Inspect What Agents Are Doing

1. Select the relevant agent.
2. Open Agent Comms to see inter-agent messages.
3. Open Activity to see tools, thoughts, context snapshots, and commands.
4. Open Agent Settings -> Context for prompt-size and section breakdown.

### Preview The Project

1. Ensure the team has a working directory.
2. Click Preview from the workspace header.
3. The app starts or reuses a dev server.
4. The preview window opens to the detected URL or port.
5. Use server controls to refresh, stop, restart, open externally, or inspect logs.

### Browse Files And Uploads

1. Open the bottom tray.
2. Use Files to browse the working directory.
3. Click a previewable file to open the split preview pane.
4. Use Uploads to review chat-attached files and images.

## Edge Cases And Important Behaviors

- Teams without a Manager behave closer to solo/direct agent mode.
- Solo workspaces hide Agent Comms and expose the solo mode switch.
- Manager name is locked in agent settings.
- Hard-paused teams block auto-dispatch, but direct UI state may still show existing messages/tasks.
- User Task soft pause should prevent loops while waiting on human input.
- Manager-generated pure `<send>` responses are hidden from My Chat unless there is user-facing text.
- Agent Comms intentionally shows dispatch traffic that My Chat hides.
- Very large message histories are windowed in chat rendering with "Load older messages."
- The app records performance diagnostics for agent switching and chat message preparation.
- Dev server state refreshes periodically and through server status events.
- File tree and upload tabs load only when active to reduce unnecessary work.

## Current Product Direction Notes

- Manager Control has been reframed as Interruption Level.
- User approvals should route through User Tasks, not chat approval cards.
- Stop Team should feel like a deliberate hard pause, not a periodic unlock requirement.
- Completion proof waiting on human confirmation should become a User Task and should not trigger repeat pings to the same agent.
- Agent Tasks should show real work, not auto-dispatch bookkeeping tasks.

## QA Checklist

- Open Team Hub with no teams.
- Create a team and confirm it drills into the workspace.
- Select each agent and confirm right rail updates.
- Send a direct message to Atlas.
- Send a direct message to a specialist.
- Attach a file and an image to chat.
- Use a slash command for a specialized agent.
- Open Agent Comms and confirm inter-agent messages show separately from My Chat.
- Assign a direct task with Notify enabled.
- Assign a direct task requiring human decision and confirm User Task creation.
- Reply to a User Task and confirm Atlas receives the answer.
- Approve and dismiss a manager interruption.
- Cancel a task from Agent Tasks.
- Nudge a Task Health item.
- Change Interruption Level in Team Settings.
- Hard pause and resume a team.
- Browse the working directory in Files.
- Preview a file and close with Escape.
- Start Preview for a repo with `npm run dev`.
- Stop and restart a dev server.
- Open Agent Settings and change context settings.
- Delete a non-manager agent after confirmation.
- Delete a team after confirmation.

## Glossary

- Agent Comms: the inter-agent inbox conversation view for a selected agent.
- Atlas: the default Manager agent for a managed team.
- Hard Pause: user-controlled pause that stops current team dispatches and blocks auto-dispatch.
- Interruption Level: team setting controlling when Atlas asks the user for input.
- Soft Pause: backend pause while waiting on User Tasks.
- Task Health: risk and quality watchlist for active tasks.
- User Task: user-facing decision, approval, blocker, or interruption item.
- Team Hub: overview of all teams.
- Team Workspace: drilled-in single-team working view.
