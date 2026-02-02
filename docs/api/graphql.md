---
sidebar_position: 1
title: GraphQL API
---

# GraphQL API

Pulsar provides a GraphQL API for accessing your monitoring data.

## Endpoint

```
POST https://pulsar.byte8.io/graphql
```

## Authentication

The API uses session-based authentication. See [Authentication](/api/authentication) for details.

## Schema Overview

### Queries

```graphql
type Query {
  # Current user
  me: User

  # Sites
  sites: [Site!]!
  site(id: ID!): Site

  # Site pages
  sitePages(siteId: ID!): [SitePage!]!

  # Checks
  checks(siteId: ID!, limit: Int): [Check!]!
  recentActivity(siteId: ID!, limit: Int): [Check!]!

  # Alerts
  alerts(siteId: ID, unresolvedOnly: Boolean, limit: Int): [Alert!]!

  # Statistics
  dashboardStats: DashboardStats!
  siteStats(siteId: ID!): SiteStats!
  uptimeData(siteId: ID!, days: Int): [UptimeDataPoint!]!
  responseTimeData(siteId: ID!, days: Int): [ResponseTimeDataPoint!]!
  quotaUsage: QuotaInfo!

  # Notification settings
  notificationSettings: NotificationSettings

  # Error patterns (per site or page)
  siteErrorPatterns(siteId: ID!): [ErrorPattern!]!
  pageErrorPatterns(pageId: ID!): [ErrorPattern!]!
}
```

### Mutations

```graphql
type Mutation {
  # Sites
  createSite(input: CreateSiteInput!): Site!
  updateSite(id: ID!, input: UpdateSiteInput!): Site!
  deleteSite(id: ID!): Boolean!
  muteSite(id: ID!): Site!
  unmuteSite(id: ID!): Site!

  # Checkout flow
  updateCheckoutFlowConfig(id: ID!, input: CheckoutFlowInput!): Site!
  disableCheckoutFlow(id: ID!): Site!

  # Site pages
  createSitePage(input: CreateSitePageInput!): SitePage!
  updateSitePage(id: ID!, input: UpdateSitePageInput!): SitePage!
  deleteSitePage(id: ID!): Boolean!

  # Alerts
  resolveAlert(id: ID!): Alert!
  triggerCheck(siteId: ID!): Boolean!

  # Notifications
  updateNotificationSettings(input: NotificationSettingsInput!): NotificationSettings!
  testNotification(channel: String!): Boolean!

  # Error patterns
  createSiteErrorPattern(input: CreateErrorPatternInput!): ErrorPattern!
  updateSiteErrorPattern(id: ID!, input: UpdateErrorPatternInput!): ErrorPattern!
  deleteSiteErrorPattern(id: ID!): Boolean!
  createPageErrorPattern(input: CreateErrorPatternInput!): ErrorPattern!
  updatePageErrorPattern(id: ID!, input: UpdateErrorPatternInput!): ErrorPattern!
  deletePageErrorPattern(id: ID!): Boolean!
}
```

## Types

### Site

```graphql
type Site {
  id: ID!
  name: String!
  url: String!
  status: SiteStatus!
  muted: Boolean!
  checkIntervalSeconds: Int!
  browserChecks: Boolean!
  checkoutFlowEnabled: Boolean!
  basicAuthUsername: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum SiteStatus {
  UP
  DOWN
  DEGRADED
  PAUSED
  UNKNOWN
}
```

### SitePage

```graphql
type SitePage {
  id: ID!
  siteId: ID!
  name: String!
  path: String!
  checkIntervalSeconds: Int!
  browserCheck: Boolean!
  enabled: Boolean!
  status: SiteStatus!
  createdAt: DateTime!
}
```

### Check

```graphql
type Check {
  id: ID!
  siteId: ID!
  pageId: ID
  checkType: CheckType!
  status: CheckStatus!
  responseTimeMs: Int
  statusCode: Int
  errorMessage: String
  jsErrors: [JsError!]
  createdAt: DateTime!
}

enum CheckType {
  HTTP
  BROWSER
  CHECKOUT_FLOW
}

enum CheckStatus {
  UP
  DOWN
}

type JsError {
  source: String!
  message: String!
  stackTrace: String
  url: String
  line: Int
  column: Int
}
```

### Alert

```graphql
type Alert {
  id: ID!
  siteId: ID!
  alertType: AlertType!
  status: AlertStatus!
  message: String!
  createdAt: DateTime!
  resolvedAt: DateTime
}

enum AlertType {
  SITE_DOWN
  PAGE_DOWN
  JS_ERROR
  CHECKOUT_FAILED
}

enum AlertStatus {
  OPEN
  RESOLVED
}
```

### DashboardStats

```graphql
type DashboardStats {
  totalSites: Int!
  sitesUp: Int!
  sitesDown: Int!
  sitesPaused: Int!
  totalChecks24h: Int!
  avgResponseTimeMs: Float
}
```

### QuotaInfo

```graphql
type QuotaInfo {
  sitesUsed: Int!
  sitesLimit: Int!
  pagesUsed: Int!
  pagesLimit: Int!
  browserChecksUsed: Int!
  browserChecksLimit: Int!
  checkoutFlowsUsed: Int!
  checkoutFlowsLimit: Int!
}
```

### NotificationSettings

```graphql
type NotificationSettings {
  emailEnabled: Boolean!
  emailAddresses: [String!]!
  slackEnabled: Boolean!
  slackWebhookUrl: String
  discordEnabled: Boolean!
  discordWebhookUrl: String
  pagerdutyEnabled: Boolean!
  pagerdutyIntegrationKey: String
  webhookEnabled: Boolean!
  webhookUrl: String
}
```

## Example Queries

### Get All Sites with Status

```graphql
query {
  sites {
    id
    name
    url
    status
    muted
    checkIntervalSeconds
  }
}
```

### Get Site with Pages

```graphql
query GetSiteDetails($siteId: ID!) {
  site(id: $siteId) {
    id
    name
    url
    status
  }
  sitePages(siteId: $siteId) {
    id
    name
    path
    status
  }
}
```

### Get Dashboard Stats

```graphql
query {
  dashboardStats {
    totalSites
    sitesUp
    sitesDown
    totalChecks24h
    avgResponseTimeMs
  }
  quotaUsage {
    sitesUsed
    sitesLimit
    browserChecksUsed
    browserChecksLimit
  }
}
```

### Get Recent Checks

```graphql
query {
  checks(siteId: "uuid-here", limit: 10) {
    id
    status
    responseTimeMs
    errorMessage
    createdAt
  }
}
```

## Example Mutations

### Create a Site

```graphql
mutation {
  createSite(input: {
    name: "My Store"
    url: "https://mystore.com"
    checkIntervalSeconds: 60
  }) {
    id
    name
    status
  }
}
```

### Update Notification Settings

```graphql
mutation {
  updateNotificationSettings(input: {
    emailEnabled: true
    emailAddresses: ["alerts@company.com"]
    slackEnabled: true
    slackWebhookUrl: "https://hooks.slack.com/..."
  }) {
    emailEnabled
    slackEnabled
  }
}
```

## GraphQL Playground

Explore the API interactively when logged in:

```
https://pulsar.byte8.io/graphql
```

Use the GraphQL Playground in your browser's developer tools or a client like [Altair](https://altairgraphql.dev/).
