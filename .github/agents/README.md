# Agent Prompts

This folder intentionally contains only two entrypoint agents for Copilot selection.

## Recommended Entry Points
- master_planner.agent.md: end-to-end planning orchestrator
- execution_orchestrator.agent.md: post-plan execution orchestrator

## Workflow
1. Start with master_planner.agent.md for planning and validation.
2. Move to execution_orchestrator.agent.md after LOCKED + passed validation.

Sub-agent files stay in DOC/agents and are orchestrated internally by the entrypoints.

## Specialized Agent
- system_architect.agent.md: out-of-band system manager for DESIGN, AUDIT, FIX, SMOKE, and DETERMINISM of the agentic OS itself.

Use this specialized agent for system-level wiring and quality hardening, not for normal planning/execution runs.
