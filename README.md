# Pulsar Documentation

Public documentation site for Pulsar - Magento Monitoring & Synthetic Checks.

**URL:** https://docs.pulsar.byte8.io

Built with [Docusaurus](https://docusaurus.io/).

## Development

```bash
# Install dependencies
pnpm install

# Start development server (port 3006)
pnpm start

# Build for production
pnpm build

# Serve production build locally
pnpm serve
```

## Deployment

This site will be deployed to GitHub Pages at `docs.pulsar.byte8.io` via a separate repository.

```bash
# Deploy to GitHub Pages
GIT_USER=<username> pnpm deploy
```

## Structure

```
docs/
├── intro.md                    # Landing page (/)
├── getting-started/
│   ├── quick-start.md
│   └── adding-sites.md
├── monitoring/
│   ├── http-checks.md
│   ├── browser-checks.md
│   ├── checkout-flows.md
│   └── error-patterns.md
├── alerts/
│   ├── overview.md
│   ├── email-notifications.md
│   ├── slack-integration.md
│   └── webhooks.md
└── api/
    ├── graphql.md
    └── authentication.md
```

## Theme

Custom CSS in `src/css/custom.css` matches the Pulsar web app color palette:

- **Primary:** `#8B5CF6` (purple)
- **Background:** `#0A0A0B` (dark mode)
- **Paper:** `#18181B`
- **Border:** `#27272A`
