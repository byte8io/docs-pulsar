---
sidebar_position: 2
title: Adding Sites
---

# Adding Sites

Learn how to add and configure sites in Pulsar.

## Creating a New Site

From the Pulsar dashboard, click **Add Site** to open the site creation form.

### Required Fields

| Field | Description |
|-------|-------------|
| **Name** | A friendly name for your site (e.g., "Production Store") |
| **URL** | The base URL of your Magento store |

### Optional Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Check Interval** | How often to run health checks | 1 minute |
| **Browser Checks** | Enable JavaScript error detection | Enabled |
| **Checkout Flows** | Enable synthetic checkout testing | Disabled |

## Site Configuration

After creating a site, you can configure additional settings:

### Pages to Monitor

By default, Pulsar monitors your homepage. You can add additional pages:

1. Go to your site's settings
2. Click **Pages**
3. Add URLs relative to your base URL (e.g., `/checkout/cart`)

### Error Patterns

Configure patterns to ignore known, non-critical errors:

1. Go to **Settings > Error Patterns**
2. Add regex patterns for errors to ignore
3. These patterns apply to both console errors and exceptions

## Managing Sites

### Muting a Site

Temporarily disable alerting for a site (useful during maintenance):

1. Open the site
2. Click **Mute** in the toolbar
3. Alerts will be suppressed until you unmute

### Deleting a Site

1. Go to site settings
2. Scroll to the bottom
3. Click **Delete Site**
4. Confirm the deletion

:::warning
Deleting a site removes all historical check data and cannot be undone.
:::
