import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Pulsar Docs",
  tagline: "Magento Monitoring & Synthetic Checks",
  favicon: "img/favicon.ico",

  // Future flags for Docusaurus v4 compatibility
  future: {
    v4: true,
  },

  // Production URL - custom domain
  url: "https://docs.pulsar.byte8.io",
  baseUrl: "/",

  // GitHub Pages deployment config
  organizationName: "byte8", // GitHub org
  projectName: "pulsar-docs", // GitHub repo name
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/docs",
          editUrl: "https://github.com/byte8/pulsar-docs/tree/main/",
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/pulsar-social-card.png",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Pulsar",
      logo: {
        alt: "Pulsar Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://pulsar.byte8.io",
          label: "Dashboard",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/docs",
            },
            {
              label: "HTTP Monitoring",
              to: "/docs/monitoring/http-checks",
            },
            {
              label: "Checkout Flows",
              to: "/docs/monitoring/checkout-flows",
            },
          ],
        },
        {
          title: "Product",
          items: [
            {
              label: "Pulsar Dashboard",
              href: "https://pulsar.byte8.io",
            },
            {
              label: "Status",
              href: "https://pulsar.byte8.io/status",
            },
            {
              label: "Pricing",
              href: "https://byte8.io/pulsar/pricing",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Byte8",
              href: "https://byte8.io",
            },
            {
              label: "Contact",
              href: "mailto:support@byte8.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Byte8. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "yaml", "php", "rust"],
    },
    // Algolia DocSearch (configure later)
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'pulsar-docs',
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
