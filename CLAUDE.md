# TrickyClick hooks

## Description

Node.js application for experimenting with Claude Code hooks. Main script should be `.claude/hooks/handler.js`.

# Node

- Use `pnpm` to manage packages and run scripts.

# Specs

- Specs are described in `docs/specs` as `*.md` and `**/*.md` files

# Git

- Never commit or push without being explicitly asked
- When asked to commit, push automatically unless told not to
- Do not commit author/co-author information
- Use conventional commit messages (e.g., `feat: add random forest training script`)

# Pull Requests

- Pushing a branch for the first time, should open a Draft PR automatically. Use `gh` CLI tool for GitHub operations.
- Automatically assign the current `gh` user to newly created PRs.
- PR description should include only information about specific changes with no actionable items.
- PR description should be updated when new commits are pushed, if a previously defined change was rolled back or modified, it should be only 1 record for the current state of a change (examples: deleted func(), restored func() in 2 commits should cleanup any reference to func() being changed, as it was rolled back to previous change; if a value was changed from 3 to 5 to 7, only 1 record for the change should be in the PR description - latest value: 7).
- Do not add any generation/co-authoring references in PR description.
- Do not add test plans to PR descriptions.


# Agent Instructions

# Issue Tracking

This project uses **bd (beads)** for issue tracking. When commit changes, they should belong to a `bead` (issue) that is tracked in `bd`. Each bead has a status (e.g., `ready`, `in_progress`, `closed`) that reflects its current state in the workflow.

Run `bd prime` for workflow context/details, or install hooks (`bd hooks install`) for auto-injection.

## Quick Reference

```bash
bd ready              # Find available work
bd create "Title" --type task --priority 2  # Create new issue
bd show <id>          # View issue details
bd update <id> --status in_progress  # Claim work
bd close <id>         # Complete work
bd sync               # Sync with git
```

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds

# Sanity Check
Output "CLAUDE.md loaded!"