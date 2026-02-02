---
sidebar_position: 2
title: Authentication
---

# API Authentication

Learn how to authenticate with the Pulsar API.

## Authentication Methods

### Session Cookies (Web)

When using Pulsar through the web interface, authentication is handled automatically via session cookies set by `auth.byte8.io`.

### Personal Access Tokens (API)

For programmatic access, use Personal Access Tokens (PATs).

## Creating a Personal Access Token

1. Log in to [pulsar.byte8.io](https://pulsar.byte8.io)
2. Go to **Settings > API Tokens**
3. Click **Create Token**
4. Give it a descriptive name
5. Select the scopes you need
6. Click **Create**
7. Copy the token immediately (it won't be shown again)

## Using Tokens

Include the token in the Authorization header:

```bash
curl -X POST https://api.pulsar.byte8.io/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer pat_abc123..." \
  -d '{"query": "{ sites { id name } }"}'
```

### In Code

```javascript
const response = await fetch('https://api.pulsar.byte8.io/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.PULSAR_TOKEN}`,
  },
  body: JSON.stringify({
    query: `{ sites { id name status } }`,
  }),
});
```

## Token Scopes

| Scope | Access |
|-------|--------|
| `read:sites` | Read site information |
| `write:sites` | Create, update, delete sites |
| `read:checks` | Read check history |
| `read:alerts` | Read alerts |
| `write:alerts` | Resolve/acknowledge alerts |

## Token Security

:::warning
Treat API tokens like passwords. Never commit them to version control or share them publicly.
:::

Best practices:

1. **Use environment variables** - Store tokens in `.env` files
2. **Rotate regularly** - Create new tokens periodically
3. **Minimal scopes** - Only request the scopes you need
4. **Delete unused tokens** - Revoke tokens you no longer use

## Revoking Tokens

1. Go to **Settings > API Tokens**
2. Find the token to revoke
3. Click **Revoke**
4. Confirm the action

Revoked tokens are immediately invalid.

## Token Limits

| Plan | Max Tokens |
|------|------------|
| Free | 2 |
| Pro | 10 |
| Enterprise | Unlimited |

## Troubleshooting

### 401 Unauthorized

- Verify the token is correct
- Check the token hasn't been revoked
- Ensure the `Authorization` header is properly formatted

### 403 Forbidden

- Check the token has the required scopes
- Verify you have access to the requested resource

### Token Not Working

1. Verify the token hasn't expired
2. Check for extra whitespace in the header
3. Ensure you're using `Bearer` authentication
4. Try creating a new token
