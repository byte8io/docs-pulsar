---
sidebar_position: 2
title: Authentication
---

# API Authentication

Learn how to authenticate with the Pulsar API.

## Authentication Methods

### Session Cookies (Web)

When using Pulsar through the web interface, authentication is handled automatically via session cookies set by `auth.byte8.io`.

All API requests from the Pulsar dashboard use this method automatically.

## Current Limitations

:::info Coming Soon
**Personal Access Tokens (PATs)** for programmatic API access are planned for a future release. Currently, API access is limited to authenticated web sessions.
:::

## Session-Based API Access

For now, API access is available through the web interface:

1. Log in to [pulsar.byte8.io](https://pulsar.byte8.io)
2. Use the browser's developer tools to inspect GraphQL requests
3. The session cookie is automatically included

### How Sessions Work

1. You authenticate via `auth.byte8.io`
2. A secure session cookie is set for `*.byte8.io`
3. All requests to `pulsar.byte8.io` include this cookie
4. The Pulsar API validates the session on each request

## Security

### Session Security

- Sessions are HTTP-only and secure
- Sessions expire after inactivity
- Logging out invalidates the session immediately

### Best Practices

1. **Don't share sessions** - Each user should have their own account
2. **Log out when done** - Especially on shared computers
3. **Use strong passwords** - Protect your Byte8 account
4. **Enable 2FA** - When available, enable two-factor authentication

## Future: API Tokens

When API tokens are available, you'll be able to:

- Create tokens with specific scopes
- Use tokens for CI/CD integration
- Build custom integrations
- Access the API programmatically

Stay tuned for updates on this feature.

## Troubleshooting

### 401 Unauthorized

- Your session may have expired - log in again
- Cookies may be blocked - check browser settings
- Try clearing cookies and logging in fresh

### 403 Forbidden

- You may not have access to the requested resource
- Check that you own the site you're trying to access
