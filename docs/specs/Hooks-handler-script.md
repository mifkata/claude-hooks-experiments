# Hooks handler script

## Overview

Handles Claude Code even lifecycle events using [hooks](https://code.claude.com/docs/en/hooks). The script is located in `.claude/hooks/handle.js`

## Event types

- `SessionStart` - When a session begins or resumes
- `UserPromptSubmit` - When you submit a prompt, before Claude processes it
- `PreToolUse` - Before a tool call executes. Can block it
- `PermissionRequest` - When a permission dialog appears
- `PostToolUse` - After a tool call succeeds
- `PostToolUseFailure` - After a tool call fails
- `Notification` - When Claude Code sends a notification
- `SubagentStart` - When a subagent is spawned
- `SubagentStop` - When a subagent finishes
- `Stop` - When Claude finishes responding
- `TeammateIdle` - When an agent team teammate is about to go idle
- `TaskCompleted` - When a task is being marked as completed
- `PreCompact` - Before context compaction
- `SessionEnd` - When a session terminates

# Logger

When handle.js is executed with anyoutput, the whole ouput should be logged to `.claude/hooks/events.log`

# Execution pattern

Executed as: 

```sh
handle.js [hook-name] [args]

# Examples (non-existing hooks, demo only):
handle.js EnforceBeadsId
handle.js EnforceWorktreeBranch
handle.js PreToolUseTask
```

# Quality

Package should include `eslint`, `prettier` and `husky` for linting, formatting and pre-commit checks. Use `pnpm` to manage packages and run scripts.