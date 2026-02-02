---
sidebar_position: 1
title: Quick Start
---

# Quick Start

Get up and running with Pulsar in under 5 minutes.

## Prerequisites

- A Byte8 account ([sign up here](https://pulsar.byte8.io))
- A Magento store URL to monitor

## Step 1: Log in to Pulsar

Navigate to [pulsar.byte8.io](https://pulsar.byte8.io) and sign in with your Byte8 account.

## Step 2: Add Your First Site

1. Go to **Sites** in the left-hand menu
2. Click **Add Site** button (top right)
3. Fill in the form:
   - **Name** - Give your site a friendly name (e.g., "Production Store")
   - **URL** - Enter your store's URL (e.g., `https://mystore.com`)
   - **Check Interval** - Select how often to check your site (depends on your plan tier)
4. Click **Create**

Pulsar will immediately start monitoring your site with HTTP health checks.

## Step 3: Configure Monitoring

After adding your site, you can configure additional monitoring by clicking on the site:

- **Monitored Pages** - Add additional pages to monitor beyond the homepage
- **Browser checks** - Enable JavaScript error detection
- **Checkout flows** - Set up synthetic checkout testing
- **Basic Auth** - Configure credentials if your site is password-protected

## Step 4: Set Up Notifications

Go to **Settings** (gear icon) to configure how you want to be alerted:

- Email notifications
- Slack integration
- Discord integration
- PagerDuty integration
- Custom webhooks

## What's Next?

- Learn about [HTTP Checks](../monitoring/http-checks) in detail
- Set up [Checkout Flow](../monitoring/checkout-flows) monitoring
- Configure [Slack Integration](../alerts/slack-integration)
- Set up [Basic Auth](../monitoring/basic-auth) for protected sites
