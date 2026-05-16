---
sidebar_position: 5
title: Health Monitoring
description: Monitor your Magento store's internal health with the Pulsar extension. Track cron jobs, indexers, cache, database, security, and more.
keywords: [magento health monitoring, cron monitoring, indexer status, cache monitoring, pulsar extension]
---

# Health Monitoring

Health monitoring gives you deep visibility into your Magento store's internal systems. Unlike HTTP checks that only verify your site is responding, health monitoring tracks the status of critical subsystems like cron jobs, indexers, cache, search engine, and more.

## How It Works

1. Install the **Byte8_Pulsar** Magento 2 extension on your store
2. Configure the API key in Magento Admin > Stores > Configuration > Byte8 > Pulsar
3. Enter the same API key in your Pulsar dashboard under Health Endpoint settings
4. Pulsar periodically calls your store's `/pulsar/health` endpoint and evaluates the response

Each health check returns data from up to 19 **collectors**, each monitoring a different subsystem.

## Collectors

| Collector | What It Monitors |
|-----------|-----------------|
| **Cron** | Cron job execution, pending/stuck/failed jobs, heartbeat |
| **Indexer** | Index status (valid, invalid, working), stuck indexers |
| **Cache** | Cache types (config, layout, FPC, block_html), invalidation status, Varnish |
| **Database** | Connection health, thread count, uptime |
| **Database Size** | Total database size, largest tables |
| **System** | PHP version, disk space, memory limits, Magento version |
| **Search** | OpenSearch/Elasticsearch cluster health, index count, shards |
| **Queue** | Message queue status (pending, in-progress, errors) |
| **Deploy** | Deployment mode (production/developer), compilation, maintenance mode |
| **Redis** | Redis instances (cache, session, page_cache), memory, evictions |
| **Log** | Log file sizes, debug logging status, report count |
| **Admin Security** | Admin users, 2FA enrollment, failed logins, locked accounts |
| **Config Hygiene** | JS/CSS merge settings, async email, configuration best practices |
| **SSL** | Certificate validity, expiry date, issuer |
| **Orders** | Order volume (24h), failed/canceled orders, stuck payments |
| **Integrations** | Third-party integration status |
| **PHP-FPM** | PHP-FPM process pool status |
| **Media Integrity** | Media directory security (.htaccess rules, executable files) |
| **Upload Endpoint** | Suspicious upload activity in access logs |

Each collector reports one of three statuses:

- **Healthy** - Operating normally
- **Degraded** - Partial issues, may need attention
- **Critical** - Immediate attention required

## Collector Overrides

You can configure per-collector alert behavior directly in Pulsar, without changing your Magento extension settings. This is useful when:

- A collector is noisy (e.g., cron flapping between degraded/healthy)
- You want to acknowledge a known issue without receiving repeated alerts
- You only care about critical failures for certain collectors

### Mute a Collector

Muting a collector suppresses all alerts for it. The collector data is still collected and displayed, but no alerts or notifications are generated.

### Minimum Severity

Set the minimum severity threshold per collector:

- **Any issue** (default) - Alert on both degraded and critical
- **Critical only** - Only alert when the collector reaches critical status

### How to Configure

1. Navigate to your site's detail page in the Pulsar dashboard
2. Find the **Collector Alert Overrides** card (visible when health monitoring is enabled)
3. Click **Configure**
4. Toggle mute or set severity thresholds for individual collectors
5. Click **Save Overrides**

## Alert Logic

Health monitoring uses a confirmation-based system to prevent false alerts:

1. **Confirmation threshold** - A health check must fail consecutively (default: 2 times) before an alert is created
2. **Per-collector tracking** - New collector failures generate alerts even if the site is already degraded
3. **Flapping detection** - If a collector keeps toggling between healthy and degraded, Pulsar detects the pattern and avoids duplicate alerts
4. **Recovery confirmation** - The site must be fully healthy for consecutive checks before a recovery notification is sent

### Alert Types

| Alert Type | Trigger |
|-----------|---------|
| `health_degraded` | One or more collectors degraded |
| `health_critical` | One or more collectors critical |
| Recovery | All collectors healthy, confirmed |

## Enabling/Disabling Collectors

Collectors can be enabled or disabled at two levels:

1. **Magento extension** (in Magento Admin) - Controls whether the collector runs and reports data
2. **Pulsar dashboard** (Collector Overrides) - Controls whether Pulsar generates alerts for the collector

If a collector is disabled in Magento, it won't appear in health check results. If it's muted in Pulsar, data is still collected but alerts are suppressed.
