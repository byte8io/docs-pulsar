---
sidebar_position: 1
title: HTTP Checks
description: Monitor your Magento store's availability with HTTP health checks. Track response times, status codes, and content verification.
keywords: [http monitoring, uptime checks, magento health check, response time monitoring]
---

# HTTP Checks

HTTP checks are the foundation of Pulsar monitoring. They verify that your site is accessible and responding correctly.

## How It Works

Every check interval, Pulsar sends an HTTP request to your site and measures:

- **Response Time** - How long the server takes to respond
- **Status Code** - The HTTP status code returned
- **Availability** - Whether the request succeeded or failed

## Check Types

### Health Check

A simple HTTP GET request to verify your site is responding. This is enabled by default for all sites.

**Monitored:**
- HTTP status code (expects 2xx)
- Response time
- Connection errors

### Content Check

Verify that specific content appears on the page. Useful for detecting deployment issues or content changes.

```
Expected content: "Add to Cart"
```

## Status Determination

| Condition | Status |
|-----------|--------|
| HTTP 2xx response | **Up** |
| HTTP 4xx/5xx response | **Down** |
| Connection timeout | **Down** |
| DNS resolution failure | **Down** |
| SSL certificate error | **Down** |

## Response Time Thresholds

Pulsar tracks response times to help identify performance issues:

| Response Time | Indicator |
|--------------|-----------|
| < 500ms | Excellent |
| 500ms - 1s | Good |
| 1s - 2s | Slow |
| > 2s | Critical |

## Best Practices

1. **Monitor critical pages** - Add checks for your homepage, category pages, and checkout
2. **Set appropriate timeouts** - Allow enough time for legitimate slow responses
3. **Use content checks** - Verify key elements render correctly
4. **Review failed checks** - Investigate patterns in failures

## Troubleshooting

### False Positives

If you're seeing intermittent failures:

- Check if your CDN or WAF is blocking monitoring requests
- Verify DNS resolution is consistent
- Review server logs for the failed request times

### Slow Response Times

If response times are consistently high:

- Check server resource utilization
- Review database query performance
- Consider CDN or caching configuration
