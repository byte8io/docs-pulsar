import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

interface FeatureCardProps {
  href: string;
  icon: string;
  title: string;
  body: string;
  cta: string;
}

function FeatureCard({ href, icon, title, body, cta }: FeatureCardProps) {
  return (
    <Link to={href} className={styles.featureCard}>
      <span className={styles.featureIcon} aria-hidden>{icon}</span>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureBody}>{body}</p>
      <span className={styles.featureFooter}>{cta} ↘</span>
    </Link>
  );
}

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Byte8 Pulsar — Uptime + checkout monitoring for ecommerce"
      description="24/7 uptime monitoring, page checks, and smart alerting for any commerce platform. Optional Magento extension adds 15+ health collectors and full checkout-flow synthetic testing."
    >
      <main>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Ecommerce monitoring · Uptime · Checkout flows</span>
            <h1 className={styles.heroTitle}>
              Catch issues before{' '}
              <span className={styles.heroTitleAccent}>your customers do.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              24/7 uptime + page checks for any storefront. Smart alerting on
              the channels you already use. Plug in the Magento extension to
              unlock 15+ health collectors and synthetic checkout-flow testing.
            </p>
            <div className={styles.heroCtas}>
              <Link className="button button--primary button--lg" to="/docs/getting-started/quick-start">
                Quick start
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/">
                Read the docs
              </Link>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statValue}>1 min</span>
                <span className={styles.statLabel}>Check interval</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Monitoring</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>5+</span>
                <span className={styles.statLabel}>Alert channels</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>15+</span>
                <span className={styles.statLabel}>Magento collectors</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core monitoring */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Monitoring</span>
            <p className={styles.sectionLead}>
              Uptime + page checks out of the box for any storefront. Deep store
              diagnostics for Magento via the optional extension.
            </p>
          </header>

          <div className={styles.cardGrid}>
            <FeatureCard
              href="/docs/monitoring/http-checks"
              icon="🟢"
              title="HTTP uptime"
              body="Reach any URL on a 1-min interval. Status code, latency, content assertion (the page actually contains the string you expect). Works for any commerce platform — Shopify, WooCommerce, BigCommerce, Magento, custom."
              cta="HTTP checks"
            />
            <FeatureCard
              href="/docs/monitoring/checkout-flows"
              icon="🛒"
              title="Checkout-flow testing"
              body="Synthetic buyer journeys run through your entire checkout — add to cart, shipping selection, payment — every 10 minutes. Catch silent failures before customers abandon carts. Requires the Magento extension."
              cta="Checkout flows"
            />
            <FeatureCard
              href="/docs/monitoring/health-monitoring"
              icon="🩺"
              title="15+ Magento collectors"
              body="The Pulsar Magento extension exposes a /pulsar/health endpoint with collectors for indexers, cron, queues, cache, message queues, search engine, and more. Pulsar polls it and surfaces issues before they affect customers."
              cta="Health collectors"
            />
          </div>
        </section>

        {/* Alerting */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Alerting</span>
            <p className={styles.sectionLead}>
              Route alerts to where your team actually lives.
              Smart-suppress flapping incidents so you don't burn pager calls.
            </p>
          </header>

          <div className={styles.cardGrid}>
            <FeatureCard
              href="/docs/alerts/slack-integration"
              icon="💬"
              title="Slack + Discord"
              body="Workspace-wide incident channels with rich Block Kit cards. Per-site routing — your dev channel gets HTTP failures, your ops channel gets infrastructure alerts. Acknowledge from the message itself."
              cta="Chat integrations"
            />
            <FeatureCard
              href="/docs/alerts/pagerduty-integration"
              icon="📟"
              title="PagerDuty"
              body="Wire Pulsar into your existing PagerDuty service. Severity-aware — Major incidents page on-call, Minor ones land in the daily digest. De-dup keys keep flapping alerts from waking your team twice."
              cta="PagerDuty"
            />
            <FeatureCard
              href="/docs/alerts/webhooks"
              icon="🔔"
              title="Webhooks + email"
              body="Generic webhook for chatops bots, internal dashboards, or anything else that can read JSON. Email fallback for the channels you haven't wired up. Per-site mute windows for maintenance work."
              cta="Webhooks"
            />
          </div>
        </section>

        {/* Architecture */}
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>How it's wired</span>
            <p className={styles.sectionLead}>
              Hosted SaaS, zero infra to run. Optional Magento extension is
              one composer install away.
            </p>
          </header>

          <div className={styles.cardGrid}>
            <FeatureCard
              href="/docs/getting-started/quick-start"
              icon="☁️"
              title="Hosted SaaS"
              body="Sign up at pulsar.byte8.io, paste your store URL, monitoring starts immediately. No agents to install, no infra to babysit, no servers to patch. We host, you watch."
              cta="Sign up"
            />
            <FeatureCard
              href="/docs/getting-started/adding-sites"
              icon="🪶"
              title="Thin Magento extension"
              body="composer require byte8/module-pulsar && bin/magento setup:upgrade. Adds the /pulsar/health endpoint with 15+ collectors. Authenticated via X-Pulsar-Key header; nothing else on your server changes."
              cta="Adding sites"
            />
            <FeatureCard
              href="/docs/api/graphql"
              icon="🔑"
              title="GraphQL API + PATs"
              body="Same API the dashboard uses. Personal Access Tokens authenticate scripts, CI/CD, your own tooling. Query sites, fire ad-hoc checks, ingest alert history into your data warehouse."
              cta="API docs"
            />
          </div>
        </section>

        {/* CTA band */}
        <section className={styles.ctaBand}>
          <h2 className={styles.ctaTitle}>14-day free trial. No credit card.</h2>
          <p className={styles.ctaSubtitle}>
            Add your storefront URL · pick alert channels · sleep better tonight.
          </p>
          <div className={styles.heroCtas}>
            <Link className="button button--primary button--lg" to="/docs/getting-started/quick-start">
              Quick start
            </Link>
            <Link className="button button--secondary button--lg" to="https://byte8.io/products/pulsar">
              Plans & pricing
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
