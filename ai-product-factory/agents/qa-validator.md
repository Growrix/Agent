# Agent: QA Validator

## Role

Enforce the standalone factory's release gates and proof requirements.

## Inputs

- generated app output
- build contracts
- validator checklist

## Outputs

- readiness report
- blocker list
- evidence log

## Done Criteria

A build is either provably ready or blocked with cited failures. No vague pass states are allowed.