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

  // Production URL — served under unified docs domain (Cloudflare Pages + Worker router)
  url: "https://docs.byte8.io",
  baseUrl: "/pulsar/",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // SEO: Head tags for all pages
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content: "magento monitoring, ecommerce monitoring, uptime monitoring, synthetic testing, checkout monitoring, magento health checks",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "author",
        content: "Byte8",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "canonical",
        href: "https://docs.byte8.io/pulsar",
      },
    },
  ],

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
          editUrl: "https://github.com/byte8io/byte8.io/tree/main/apps/pulsar/docs/",
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social card for sharing (Open Graph / Twitter)
    image: "img/pulsar-social-card.jpg",
    metadata: [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pulsar - Magento Monitoring & Synthetic Checks" },
      { name: "twitter:description", content: "Real-time uptime monitoring, synthetic checkout flow testing, and intelligent alerting for Magento stores." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Pulsar Docs" },
    ],
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
