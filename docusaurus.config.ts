import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Byte8 Pulsar",
  tagline:
    "24/7 uptime + checkout monitoring for any ecommerce platform. Smart alerting on the channels you already use. Optional Magento extension adds 15+ health collectors.",
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
          editUrl: "https://github.com/byte8io/docs.pulsar.byte8.io/edit/main/",
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Changelog & updates",
          blogDescription: "Release notes for Byte8 Pulsar",
          postsPerPage: 10,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/byte8io/docs.pulsar.byte8.io/edit/main/",
        },
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
      title: "Byte8 Pulsar",
      logo: {
        alt: "Byte8 Pulsar",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
        width: 32,
        height: 32,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Changelog", position: "left" },
        {
          href: "https://byte8.io/products/pulsar#pricing",
          label: "Pricing",
          position: "left",
        },
        {
          href: "https://github.com/byte8io/module-pulsar",
          position: "right",
          className: "header-github-link",
          "aria-label": "Pulsar Magento extension on GitHub",
        },
        {
          href: "https://pulsar.byte8.io",
          label: "Dashboard",
          position: "right",
          className: "navbar-cta-button",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Byte8",
        src: "img/logo.svg",
        href: "https://byte8.io",
        width: 32,
        height: 32,
      },
      links: [
        {
          title: "Docs",
          items: [
            { label: "Quick start", to: "/docs/getting-started/quick-start" },
            { label: "HTTP checks", to: "/docs/monitoring/http-checks" },
            { label: "Checkout flows", to: "/docs/monitoring/checkout-flows" },
            { label: "Alerts", to: "/docs/alerts/overview" },
          ],
        },
        {
          title: "Resources",
          items: [
            { label: "Changelog", to: "/blog" },
            { label: "Dashboard", href: "https://pulsar.byte8.io" },
            { label: "Pricing", href: "https://byte8.io/products/pulsar#pricing" },
            { label: "Magento extension", href: "https://github.com/byte8io/module-pulsar" },
          ],
        },
        {
          title: "Byte8",
          items: [
            { label: "byte8.io", href: "https://byte8.io" },
            { label: "Pulsar product", href: "https://byte8.io/products/pulsar" },
            { label: "Orbit (zero-downtime deploys)", href: "https://docs.byte8.io/orbit/" },
            { label: "Contact", href: "mailto:helo@byte8.io" },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Byte8 Ltd.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ["bash", "json", "yaml", "toml", "php", "rust", "graphql", "nginx", "diff"],
    },
    // Algolia DocSearch — cross-product search across every docs.byte8.io/* site.
    // Public Search-Only credentials (designed to ship in client JS, restricted to
    // read-only queries on this index). Safe to commit.
    algolia: {
      appId: "VWO679B1LI",
      apiKey: "b3f3b5b76b0d684e50796c9e045b41e5",
      indexName: "Byte8 Documentation Site",
      contextualSearch: false,
      searchPagePath: "search",
      // Force full-page navigation for any docs.byte8.io URL. Search hits span
      // different Pages projects (each product is its own Docusaurus site,
      // routed by the docs-router Worker). Without this the DocSearch modal
      // does React Router SPA navigation, which 404s because the destination
      // route doesn't exist in the current site's bundle.
      externalUrlRegex: "docs\\.byte8\\.io",
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
