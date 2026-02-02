---
sidebar_position: 1
title: Alerts Overview
---

# Alerts Overview

Pulsar's alerting system notifies you when issues are detected with your monitored sites.

## How Alerts Work

1. A check detects an issue (HTTP failure, JS error, checkout failure)
2. Pulsar creates an alert record
3. Notifications are sent through configured channels
4. Alert remains open until the issue is resolved or manually acknowledged

## Alert Types

| Type | Trigger |
|------|---------|
| **Down** | Site is unreachable or returns error status |
| **Degraded** | Response time exceeds threshold |
| **JS Error** | JavaScript error detected |
| **Checkout Failed** | Checkout flow step failed |

## Alert Lifecycle

```
Created → Notified → Resolved/Acknowledged
```

### Created
When an issue is first detected, an alert is created.

### Notified
Notifications are sent through all configured channels (email, Slack, webhooks).

### Resolved
The alert auto-resolves when:
- The site returns to healthy status
- The error no longer occurs for 3 consecutive checks

### Acknowledged
Manually acknowledge an alert to stop notifications while investigating.

## Alert Deduplication

Pulsar prevents alert fatigue through intelligent deduplication:

- Multiple failures of the same type are grouped
- Notifications are only sent for new issues
- Resolved alerts include downtime duration

## Notification Channels

Configure how you receive alerts:

| Channel | Use Case |
|---------|----------|
| [Email](/alerts/email-notifications) | Default, always-on alerting |
| [Slack](/alerts/slack-integration) | Team visibility, quick response |
| [Webhooks](/alerts/webhooks) | Custom integrations, PagerDuty, etc. |

## Muting Alerts

During maintenance windows, you can mute alerts:

1. Open the site in Pulsar
2. Click **Mute** in the toolbar
3. Checks continue but alerts are suppressed
4. Click **Unmute** when maintenance is complete

:::tip
Muting is per-site. Use it during deployments or known maintenance.
:::

## Alert History

View past alerts for a site:

1. Navigate to the site
2. Click **Alerts** tab
3. Filter by date range or status

Historical data is retained for 90 days.
