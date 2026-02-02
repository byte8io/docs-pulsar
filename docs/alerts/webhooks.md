---
sidebar_position: 6
title: Webhooks
description: Integrate Pulsar with any system using webhooks. Receive JSON payloads for alerts with signature verification for secure custom integrations.
keywords: [webhooks, custom integration, api callbacks, alert webhooks, monitoring webhooks]
---

# Webhooks

Webhooks allow you to integrate Pulsar with any system that accepts HTTP callbacks.

## Setup

1. Go to **Settings > Notifications**
2. Under **Webhooks**, click **Add Webhook**
3. Enter your endpoint URL
4. Optionally add a secret for signature verification
5. Click **Save**

## Payload Format

Pulsar sends JSON payloads to your webhook endpoint:

```json
{
  "event": "alert.created",
  "timestamp": "2024-01-15T14:32:00Z",
  "alert": {
    "id": "alert_abc123",
    "type": "down",
    "status": "open",
    "site": {
      "id": "site_xyz789",
      "name": "mystore.com",
      "url": "https://mystore.com"
    },
    "check": {
      "id": "check_def456",
      "type": "http",
      "response_time_ms": 2340,
      "status_code": 503,
      "error_message": "HTTP 503 Service Unavailable"
    }
  }
}
```

## Event Types

| Event | Description |
|-------|-------------|
| `alert.created` | New alert detected |
| `alert.resolved` | Alert auto-resolved |
| `alert.acknowledged` | Alert manually acknowledged |

## Request Details

| Property | Value |
|----------|-------|
| Method | `POST` |
| Content-Type | `application/json` |
| Timeout | 30 seconds |
| Retries | 3 attempts with exponential backoff |

## Signature Verification

If you configure a webhook secret, Pulsar includes a signature header:

```
X-Pulsar-Signature: sha256=abc123...
```

Verify the signature in your endpoint:

```javascript
const crypto = require('crypto');

function verifySignature(payload, signature, secret) {
  const expected = 'sha256=' + crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}
```

## Integration Examples

### PagerDuty

Use PagerDuty's Events API v2:

```
Webhook URL: https://events.pagerduty.com/v2/enqueue
```

Transform the payload in your middleware to match PagerDuty's format.

### OpsGenie

Use OpsGenie's Alert API:

```
Webhook URL: https://api.opsgenie.com/v2/alerts
```

### Custom Scripts

Create a simple endpoint to process alerts:

```python
from flask import Flask, request

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def handle_webhook():
    data = request.json

    if data['event'] == 'alert.created':
        # Handle new alert
        send_sms(data['alert']['site']['name'])

    return 'OK', 200
```

## Best Practices

1. **Respond quickly** - Return 2xx within 5 seconds
2. **Process async** - Queue webhook payloads for processing
3. **Use secrets** - Always verify webhook signatures
4. **Handle retries** - Make your endpoint idempotent
5. **Monitor failures** - Log failed webhook deliveries

## Troubleshooting

### Webhook Not Firing

1. Verify the URL is publicly accessible
2. Check firewall rules
3. Review Pulsar's webhook delivery logs

### Invalid Signature

1. Ensure you're using the raw request body for verification
2. Check the secret matches what's configured
3. Verify no proxy is modifying the request
