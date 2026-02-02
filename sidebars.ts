import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Pulsar Documentation Sidebar Configuration
 *
 * Organized by functionality:
 * - Getting Started (intro, setup)
 * - Monitoring (HTTP checks, browser checks, checkout flows)
 * - Alerts (configuration, notifications)
 * - API (GraphQL reference)
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["getting-started/quick-start", "getting-started/adding-sites"],
    },
    {
      type: "category",
      label: "Monitoring",
      collapsed: false,
      items: [
        "monitoring/http-checks",
        "monitoring/browser-checks",
        "monitoring/checkout-flows",
        "monitoring/error-patterns",
      ],
    },
    {
      type: "category",
      label: "Alerts & Notifications",
      items: [
        "alerts/overview",
        "alerts/email-notifications",
        "alerts/slack-integration",
        "alerts/webhooks",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: ["api/graphql", "api/authentication"],
    },
  ],
};

export default sidebars;
