import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import ParticlesBackground from "@site/src/components/ParticlesBackground";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <ParticlesBackground className={styles.particles} />
      <div className={clsx("container", styles.heroContent)}>
        <div className={styles.heroLogo}>
          <img
            src="/img/pulsar-hero.svg"
            alt="Pulsar Logo"
            className={styles.logoImage}
          />
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          Real-time uptime monitoring, synthetic checkout flow testing, and
          intelligent alerting for your Magento store. Catch issues before your
          customers do.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs">
            Get Started
          </Link>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.buttonSecondary
            )}
            to="https://pulsar.byte8.io"
          >
            Open Dashboard
          </Link>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>1 min</span>
            <span className={styles.statLabel}>Check Intervals</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>24/7</span>
            <span className={styles.statLabel}>Monitoring</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>5+</span>
            <span className={styles.statLabel}>Alert Channels</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Magento Monitoring & Synthetic Checks"
      description="Real-time uptime monitoring, synthetic checkout flow testing, and intelligent alerting for Magento stores. Catch issues before your customers do."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
