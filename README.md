# Pulsar Documentation

Public documentation site for Pulsar - Magento Monitoring & Synthetic Checks.

**URL:** https://docs.byte8.io/pulsar/

Built with [Docusaurus](https://docusaurus.io/). Served under the unified Byte8 docs domain via Cloudflare Pages + a path-based Worker router.

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

Deployed via **Cloudflare Pages**, built directly from this monorepo on every push to `main` that touches `apps/pulsar/docs/`.

- **Cloudflare Pages project:** `pulsar-docs`
- **Build command:** `pnpm install --frozen-lockfile && pnpm --filter @byte8/pulsar-docs build`
- **Build output directory:** `apps/pulsar/docs/build`
- **Preview URL:** `https://pulsar-docs.pages.dev/pulsar/`
- **Production URL:** `https://docs.byte8.io/pulsar/` (via Worker router)

The Worker at `docs.byte8.io/*` routes `/pulsar/*` to this Pages project. Each product's docs follow the same pattern.

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
