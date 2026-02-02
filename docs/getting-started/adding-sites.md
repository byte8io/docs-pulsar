---
sidebar_position: 2
title: Adding Sites
description: Learn how to add and configure Magento sites in Pulsar. Set up monitored pages, browser checks, checkout flows, and basic authentication.
keywords: [add site, site configuration, magento monitoring, monitored pages, site settings]
---

# Adding Sites

Learn how to add and configure sites in Pulsar.

## Creating a New Site

1. Go to **Sites** in the left-hand menu
2. Click **Add Site** button (top right)
3. Fill in the required fields and click **Create**

### Required Fields

| Field | Description |
|-------|-------------|
| **Name** | A friendly name for your site (e.g., "Production Store") |
| **URL** | The base URL of your Magento store |
| **Check Interval** | How often to run health checks (depends on your plan tier) |

### Optional Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Browser Checks** | Enable JavaScript error detection | Disabled |
| **Checkout Flows** | Enable synthetic checkout testing | Disabled |
| **Basic Auth** | Username/password for protected sites | None |

## Site Configuration

After creating a site, click on it to access the site detail page where you can configure additional settings.

### Monitored Pages

By default, Pulsar monitors your homepage. You can add additional pages to monitor:

1. In the site detail page, find the **Monitored Pages** section
2. Click **Add Page**
3. Fill in the form:
   - **Page Name** - A descriptive name for the page
   - **Path** - The URL path relative to your site (e.g., `/checkout/cart`)
   - **Check Interval** - How often to check this page
   - **Use Browser Check** - Enable to detect JavaScript errors
4. Click **Save**

### Basic Auth Configuration

If your site is protected behind HTTP Basic Authentication:

1. In the site settings, find the **Basic Auth** section
2. Enter the **Username** and **Password**
3. Save the configuration

See [Basic Auth](../monitoring/basic-auth) for more details.

## Managing Sites

### Pause Monitoring

Temporarily stop all checks for a site:

1. Open the site detail page
2. Click **Pause Monitoring**
3. Checks will stop until you resume

This is useful during planned maintenance or migrations.

### Muting Alerts

Temporarily disable alerting while keeping checks running:

1. Open the site detail page
2. Click **Mute**
3. Checks continue but alerts are suppressed
4. Click **Unmute** when ready to receive alerts again

:::tip
Use **Mute** during deployments when you expect brief downtime. Use **Pause Monitoring** for extended maintenance.
:::

### Deleting a Site

1. Open the site detail page
2. Go to site settings
3. Scroll to the bottom
4. Click **Delete Site**
5. Confirm the deletion

:::warning
Deleting a site removes all historical check data and cannot be undone.
:::
