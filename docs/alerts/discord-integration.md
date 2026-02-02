---
sidebar_position: 4
title: Discord Integration
description: Connect Pulsar to Discord for real-time Magento monitoring alerts. Configure webhooks and receive instant notifications in your Discord server.
keywords: [discord integration, discord alerts, discord webhooks, discord notifications, monitoring discord]
---

# Discord Integration

Connect Pulsar to Discord for real-time alerts in your server.

## Setup

### Step 1: Create a Discord Webhook

1. Open your Discord server
2. Go to **Server Settings** → **Integrations** → **Webhooks**
3. Click **New Webhook**
4. Give it a name (e.g., "Pulsar Alerts")
5. Select the channel for alerts
6. Click **Copy Webhook URL**

### Step 2: Add to Pulsar

1. Go to **Settings** in Pulsar
2. Find the **Discord** section
3. Paste your webhook URL
4. Click **Test** to verify
5. Click **Save**

## Message Format

Pulsar sends embedded messages with:

- Color-coded status (red for down, green for up)
- Site name and URL
- Error details
- Timestamp

### Example Alert Message

```
🔴 mystore.com is DOWN

Error: HTTP 503 Service Unavailable
Time: 2024-01-15 14:32:00 UTC

View in Pulsar →
```

### Example Recovery Message

```
🟢 mystore.com is UP

Downtime: 13 minutes
Time: 2024-01-15 14:45:00 UTC

View in Pulsar →
```

## Channel Recommendations

| Channel | Use Case |
|---------|----------|
| `#alerts` | All Pulsar notifications |
| `#ops` | Operations team alerts |
| `#dev` | Development-related issues |

## Best Practices

1. **Dedicated channel** - Keep alerts separate from general chat
2. **Enable notifications** - Configure Discord to notify for alert channels
3. **Use threads** - Enable threading for related alerts
4. **Pin dashboard link** - Pin the Pulsar dashboard URL in the channel

## Troubleshooting

### Webhook Not Working

1. Verify the webhook URL is correct and complete
2. Check if the webhook was deleted in Discord
3. Ensure the channel still exists
4. Test with the **Test** button in settings

### Rate Limiting

Discord has rate limits on webhooks. If you're hitting limits:

- Consider using digest mode for non-critical alerts
- Spread alerts across multiple channels/webhooks
