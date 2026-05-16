---
sidebar_position: 99
title: FAQ & Troubleshooting
description: Common questions and solutions for Pulsar health monitoring issues.
keywords: [pulsar faq, troubleshooting, cron flapping, alert flood, magento monitoring]
---

# FAQ & Troubleshooting

## Health Monitoring

### Why does the cron collector keep flapping between degraded and healthy?

The Magento Pulsar extension monitors the number of pending cron jobs. On busy stores with frequent imports (e.g., PlentyONE, ERP integrations), pending jobs naturally build up and then get processed. If the count oscillates around the extension's threshold, the collector toggles between degraded and healthy.

**Solutions:**
- **Mute the cron collector** in Pulsar's Collector Alert Overrides to suppress alerts while keeping data collection active
- **Set to "Critical only"** so you only get alerted if cron actually stops running (critical), not when jobs are temporarily backed up (degraded)
- Verify cron is actually running: check that `cron:run` is in your crontab and jobs are completing successfully in `var/log/cron.log`

### Why is admin_security always showing as degraded?

The admin security collector checks for admin users without Two-Factor Authentication (2FA) enabled. If any admin user lacks 2FA, the collector reports degraded.

**Solutions:**
- Enable 2FA for all admin users in Magento Admin > Stores > Configuration > Security > 2FA
- If 2FA isn't required for your environment, mute the `admin_security` collector in Pulsar

### Why is media_integrity showing as critical?

The media integrity collector checks that your `pub/media/.htaccess` file contains rules to deny PHP execution. This is a security best practice to prevent uploaded malicious files from executing.

**Solution:**
Add PHP execution deny rules to `pub/media/.htaccess`:
```apache
<FilesMatch "\.(?:php[0-9]*|pht|phtml?|phps)$">
    Require all denied
</FilesMatch>
```

### Why does upload_endpoint intermittently show as degraded?

The upload endpoint collector monitors your server's access log for suspicious POST requests to file upload endpoints. If the configured log path is temporarily unreadable or rotated, the collector may report degraded.

**Solutions:**
- Verify the log path in Magento Admin > Stores > Configuration > Byte8 > Pulsar > Upload Endpoint Log Path
- Ensure the web server user has read access to the log file
- If log rotation briefly makes the file unavailable, set the upload_endpoint collector to "Critical only" in Pulsar

### I'm getting too many alert emails. How do I reduce noise?

Pulsar has several mechanisms to control alert volume:

1. **Collector Alert Overrides** - Mute individual collectors or set them to "Critical only"
2. **Confirmation threshold** - Increase the "Consecutive failures before alerting" setting on your site (default: 2). Higher values require more consecutive failures before alerting.
3. **Check interval** - Increase the health check interval to reduce how often checks run
4. **Mute site** - Temporarily mute all alerts during maintenance windows

### The health endpoint returns an error instead of health data

If you see "An error has happened during application run" when calling `/pulsar/health`, check your Magento `var/log/exception.log` for the specific error. Common causes:

- **Third-party module conflicts** - Some modules (e.g., auto language switchers) may interfere with non-standard Magento routes. Check if an observer is calling methods that don't exist on the Pulsar controller.
- **Incorrect API key** - Verify the API key matches between Magento config and Pulsar dashboard
- **Module not enabled** - Run `bin/magento module:status Byte8_Pulsar` to verify

### What does "Site still Degraded despite collectors recovering" mean?

This log message means a specific collector (e.g., cron) recovered to healthy, but the overall site status remains Degraded because other collectors are still failing. Pulsar only sends recovery notifications when ALL collectors are healthy and the overall status is Up.

## HTTP Checks

### My site shows as "Down" but it's actually working

Common causes:
- **Basic Auth** - If your site requires HTTP Basic Authentication, configure it in the site settings
- **IP blocking** - Your server's firewall may block Pulsar's monitoring IPs
- **Cloudflare/WAF** - Web application firewalls may block automated requests. Add Pulsar's User-Agent to your allowlist.
- **Maintenance mode** - Magento maintenance mode returns 503, which triggers a Down alert

### Response times are high but the site feels fast

Pulsar measures server-side response time (Time to First Byte). A high TTFB can indicate:
- Full Page Cache (FPC) misses
- Slow database queries
- High server load
- Geographic distance between Pulsar's monitoring server and your hosting
