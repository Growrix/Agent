# RUNBOOK: Chat Route Latency Spike

Runbook ID: RB-001
Severity: P2
Service: AI assistant
Alert Name: chat_route_latency_p95
Last Updated: 2026-05-04
Owner: web-platform-oncall

## SYMPTOMS
- [ ] p95 latency on /api/chat exceeds 4000ms
- [ ] users report delayed or stuck AI assistant replies
- [ ] elevated 5xx from chat endpoint

## IMPACT
affected_users: all
affected_features: ai_chat
data_loss_risk: no
revenue_impact: yes
estimated_mttr: 30 minutes

## IMMEDIATE ACTIONS (< 5 minutes)
1. Check health endpoint: curl https://<domain>/api/health
2. Check model usage dashboard and rate-limit metrics
3. Check provider status page and recent deployment logs
4. Temporarily reduce chat model complexity/fallback message if required

## DIAGNOSIS
Step 1
What to check: endpoint logs for timeout/retry patterns
What to look for: increased upstream latency from LLM provider

Step 2
What to check: rate limiter and abuse traffic spikes
Expected: steady request profile
Action if unexpected: tighten per-IP/per-session limits

## REMEDIATION
Option A: Rollback recent deployment if regression introduced
Option B: switch to lower-latency model in env and redeploy
Option C: activate graceful fallback mode and keep call/WhatsApp CTAs prominent

## VERIFICATION
- [ ] /api/health returns 200
- [ ] p95 latency returns below threshold
- [ ] no active error spike in logs
- [ ] assistant widget responds normally in smoke test

## POST-INCIDENT ACTIONS
- [ ] create incident ticket with root cause and fix
- [ ] update prompt/context limits for assistant
- [ ] tune alert thresholds if needed

## ESCALATION PATH
| Level | Contact | When |
|-------|---------|------|
| L1 | On-call engineer | First 15 minutes |
| L2 | Tech lead | After 15 minutes unresolved |
| L3 | Engineering manager | Over 30 minutes with customer impact |
