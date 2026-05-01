# Copilot Workspace Instructions

Use the agent definitions under .github/agents as selectable agent prompts in Copilot Chat.

## Source Of Truth
- Canonical planning framework lives in DOC/.
- Agent prompt files are mirrored from DOC/agents into .github/agents.

## Operating Rules
- Start planning with master_planner.agent.md.
- Block on failed validation from reviewer.agent.md.
- Use execution_orchestrator.agent.md only after plan is LOCKED and validation passes.
- Do not invent integrations, routes, env vars, or schema fields that are absent from DOC knowledge files.

## Artifact Output
Write generated artifacts under DOC/output/runs/<timestamp>/ with subfolders:
- planning/
- specs/
- reports/
- codegen/
