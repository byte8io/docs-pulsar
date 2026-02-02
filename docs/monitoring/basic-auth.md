---
sidebar_position: 4
title: Basic Authentication
description: Configure HTTP Basic Authentication for monitoring password-protected Magento staging and development environments.
keywords: [basic auth, http authentication, staging monitoring, password protected, magento staging]
---

# Basic Authentication

Configure HTTP Basic Authentication for monitoring sites that are password-protected.

## Overview

Many staging and development environments use HTTP Basic Authentication to restrict access. Pulsar supports Basic Auth credentials so you can monitor these protected sites.

## When to Use Basic Auth

- Staging environments with password protection
- Development sites behind HTTP authentication
- Pre-launch sites with restricted access
- Password-protected admin areas

## Configuration

### Setting Up Basic Auth for a Site

1. Go to **Sites** in the left-hand menu
2. Click on the site you want to configure
3. Find the **Basic Auth** section in site settings
4. Enter your credentials:
   - **Username** - The Basic Auth username
   - **Password** - The Basic Auth password
5. Click **Save**

Pulsar will include these credentials in all HTTP requests to your site.

### Testing the Configuration

After saving:

1. Pulsar will attempt a check with the new credentials
2. If successful, the site status will update
3. If credentials are incorrect, you'll see a 401 Unauthorized error

## Security

:::warning
Basic Auth credentials are stored securely but transmitted with every request. Only use this for sites you own and trust.
:::

### Best Practices

1. **Use unique credentials** - Don't reuse passwords from production
2. **Rotate regularly** - Update credentials periodically
3. **Limit scope** - Only add Basic Auth to sites that require it
4. **Remove when not needed** - Clear credentials when protection is removed

## Troubleshooting

### 401 Unauthorized Errors

If you see 401 errors after configuring Basic Auth:

- Verify the username and password are correct
- Check for typos or extra whitespace
- Confirm the site actually uses Basic Auth (not form-based login)
- Try the credentials in a browser to verify they work

### Still Getting Blocked

Some servers have additional security:

- IP allowlisting may be blocking Pulsar's servers
- The site may use a different authentication method
- Check if there's a WAF or CDN blocking requests

## Limitations

- Basic Auth only - Form-based logins are not supported
- Credentials apply to the entire site (all monitored pages)
- Cannot use different credentials for different pages on the same site
