---
sidebar_position: 3
title: Slack Integration
description: Connect Pulsar to Slack for real-time Magento monitoring alerts. Set up webhooks, configure channels, and receive instant downtime notifications.
keywords: [slack integration, slack alerts, slack webhooks, team notifications, slack monitoring]
---

# Slack Integration

Connect Pulsar to Slack for real-time alerts in your team's workspace.

## Setup

### Step 1: Create a Slack Webhook

1. Go to [Slack API Apps](https://api.slack.com/apps)
2. Create a new app or select an existing one
3. Enable **Incoming Webhooks**
4. Click **Add New Webhook to Workspace**
5. Select the channel for alerts
6. Copy the webhook URL

### Step 2: Add to Pulsar

1. Go to **Settings > Notifications**
2. Under **Slack**, click **Configure**
3. Paste your webhook URL
4. Click **Test** to verify
5. Click **Save**

## Message Format

Pulsar sends rich Slack messages with:

- Color-coded status (red for down, green for up)
- Site name and URL
- Error details
- Direct link to Pulsar dashboard

### Example Alert Message

```
:red_circle: mystore.com is DOWN

Error: HTTP 503 Service Unavailable
Time: 2024-01-15 14:32:00 UTC

<https://pulsar.byte8.io/sites/abc123|View in Pulsar>
```

### Example Recovery Message

```
:large_green_circle: mystore.com is UP

Downtime: 13 minutes
Time: 2024-01-15 14:45:00 UTC

<https://pulsar.byte8.io/sites/abc123|View in Pulsar>
```

## Channel Recommendations

| Channel | Use Case |
|---------|----------|
| `#alerts` | All Pulsar notifications |
| `#oncall` | Critical alerts only |
| `#dev-team` | Development-related issues |

## Multiple Channels

Send different alert types to different channels:

1. Create webhooks for each channel
2. Configure routing in Pulsar:
   - Critical alerts → `#oncall`
   - JS errors → `#frontend-team`
   - All alerts → `#monitoring`

## Best Practices

1. **Dedicated channel** - Keep alerts separate from general chat
2. **Enable notifications** - Configure Slack to notify for alert channels
3. **Pin important links** - Pin Pulsar dashboard link in the channel
4. **Use threads** - Enable threading for related alerts

## Troubleshooting

### Webhook Not Working

1. Verify the webhook URL is correct
2. Check if the Slack app is still installed
3. Ensure the channel still exists
4. Test with the **Test** button in settings

### Rate Limiting

Slack has rate limits on incoming webhooks. If you're hitting limits:

- Consider using digest mode
- Filter which alerts go to Slack
- Spread alerts across multiple channels/apps
