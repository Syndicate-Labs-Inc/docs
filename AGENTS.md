# Documentation project instructions

## About this project

- This is the public documentation site for Syndicate.
- The site is built on [Mintlify](https://mintlify.com).
- Pages are MDX files with YAML frontmatter.
- Configuration lives in `docs.json`.
- Run `mint dev` to preview locally.
- Run `mint validate` before publishing structural changes.

## Terminology

- Use "Syndicate" for the app name.
- Use "workspace" for the broad container and "team" or "solo agent" for specific workspace types.
- Use "provider" for Claude, OpenAI/Codex, and Gemini.
- Use "MCP server" when referring to external tool integrations.

## Style preferences

- Use active voice and second person ("you").
- Keep sentences concise.
- Use sentence case for headings.
- Bold UI labels, for example: Click **Settings**.
- Use code formatting for file names, commands, paths, and code references.

## Content boundaries

- Public docs should focus on user-facing setup, features, tutorials, and troubleshooting.
- Do not document private implementation details unless they help users solve a real setup problem.
- Do not include secrets, private credentials, customer data, or unreleased download links.
