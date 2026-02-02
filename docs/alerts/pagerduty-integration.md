---
sidebar_position: 5
title: PagerDuty Integration
---

# PagerDuty Integration

Connect Pulsar to PagerDuty for on-call alerting and incident management.

## Setup

### Step 1: Create a PagerDuty Service

1. Log in to PagerDuty
2. Go to **Services** → **Service Directory**
3. Click **New Service**
4. Configure the service:
   - Name: "Pulsar Monitoring"
   - Integration: Select **Events API v2**
5. Copy the **Integration Key**

### Step 2: Add to Pulsar

1. Go to **Settings** in Pulsar
2. Find the **PagerDuty** section
3. Paste your Integration Key
4. Click **Test** to verify
5. Click **Save**

## How It Works

Pulsar integrates with PagerDuty Events API v2:

| Pulsar Event | PagerDuty Action |
|--------------|------------------|
| Site goes down | Creates incident (trigger) |
| Site recovers | Resolves incident |
| Alert acknowledged | Updates incident |

## Incident Details

When Pulsar creates a PagerDuty incident, it includes:

- **Summary** - Site name and error type
- **Severity** - Based on alert type (critical for down, warning for degraded)
- **Source** - Pulsar monitoring
- **Custom details** - Response time, status code, error message

## Escalation Policies

PagerDuty handles escalation based on your configured policies:

1. Initial notification to on-call responder
2. Escalation if not acknowledged
3. Additional escalations as configured

## Best Practices

### Service Configuration

1. **Dedicated service** - Create a separate service for Pulsar alerts
2. **Appropriate urgency** - Set urgency based on site criticality
3. **Escalation policy** - Configure escalation for unacknowledged alerts

### Alert Routing

Consider creating multiple services for different severity levels:

| Service | Alert Types |
|---------|-------------|
| Pulsar Critical | Site down, checkout failures |
| Pulsar Warning | Degraded performance, JS errors |

## Troubleshooting

### Incidents Not Creating

1. Verify the Integration Key is correct
2. Check PagerDuty service is active
3. Ensure the service isn't in maintenance mode
4. Test with the **Test** button in Pulsar settings

### Incidents Not Resolving

1. Check that the same Integration Key is used
2. Verify PagerDuty's Events API is receiving resolve events
3. Check for deduplication key mismatches

## Rate Limits

PagerDuty has rate limits on the Events API:

- 120 events per minute per integration key
- Pulsar batches events to stay within limits
