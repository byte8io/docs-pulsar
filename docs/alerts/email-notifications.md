---
sidebar_position: 2
title: Email Notifications
description: Configure email alerts for your Magento store monitoring. Set up multiple recipients, customize notification frequency, and manage alert types.
keywords: [email alerts, email notifications, monitoring emails, alert recipients, downtime email]
---

# Email Notifications

Email is the default notification channel in Pulsar. Configure who receives alerts and when.

## Setup

Email notifications are enabled by default using your account email.

### Adding Recipients

1. Go to **Settings > Notifications**
2. Under **Email**, click **Add Recipient**
3. Enter the email address
4. Click **Save**

### Multiple Recipients

Add multiple email addresses to notify your entire team:

- Primary on-call: `oncall@company.com`
- Development lead: `dev-lead@company.com`
- External monitoring: `alerts@pagerduty.com`

## Email Content

Alert emails include:

| Field | Description |
|-------|-------------|
| Subject | Site name and alert type |
| Status | Current site status (Down/Up) |
| URL | Direct link to the site in Pulsar |
| Details | Error message or failure reason |
| Timestamp | When the issue was detected |

### Example Alert Email

```
Subject: [PULSAR] mystore.com is DOWN

Site: mystore.com
Status: DOWN
Time: 2024-01-15 14:32:00 UTC

Error: HTTP 503 Service Unavailable

Response time: 2,340ms

View in Pulsar: https://pulsar.byte8.io/sites/abc123
```

### Example Recovery Email

```
Subject: [PULSAR] mystore.com is UP

Site: mystore.com
Status: UP
Time: 2024-01-15 14:45:00 UTC

Downtime duration: 13 minutes

View in Pulsar: https://pulsar.byte8.io/sites/abc123
```

## Configuration Options

### Notification Frequency

Control how often you receive emails:

| Setting | Description |
|---------|-------------|
| **Immediate** | Send as soon as issue is detected |
| **Digest** | Hourly summary of all alerts |

### Alert Types

Choose which alert types trigger emails:

- [x] Site down
- [x] JavaScript errors
- [x] Checkout failures
- [ ] Performance degradation

## Best Practices

1. **Use team aliases** - Send to `team@company.com` instead of individuals
2. **Configure routing** - Set up email rules to prioritize Pulsar alerts
3. **Add backup recipients** - Ensure coverage during vacations
4. **Test delivery** - Use the test notification feature to verify setup

## Troubleshooting

### Not Receiving Emails

1. Check spam/junk folders
2. Verify email address is correct
3. Check for email filtering rules
4. Whitelist `alerts@byte8.io`

### Delayed Emails

Email delivery depends on your email provider. For time-critical alerts, consider adding [Slack](./slack-integration) or [webhooks](./webhooks) as backup channels.
