---
sidebar_position: 1
title: GraphQL API
---

# GraphQL API

Pulsar provides a GraphQL API for programmatic access to your monitoring data.

## Endpoint

```
POST https://api.pulsar.byte8.io/graphql
```

## Authentication

Include your session token in the request:

```bash
curl -X POST https://api.pulsar.byte8.io/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"query": "{ sites { id name } }"}'
```

See [Authentication](/api/authentication) for details on obtaining tokens.

## Schema Overview

### Queries

```graphql
type Query {
  # Get all sites for the current user
  sites: [Site!]!

  # Get a specific site by ID
  site(id: ID!): Site

  # Get checks for a site
  checks(siteId: ID!, limit: Int): [Check!]!

  # Get alerts
  alerts(siteId: ID, unresolvedOnly: Boolean, limit: Int): [Alert!]!

  # Dashboard statistics
  dashboardStats: DashboardStats!

  # Site-specific statistics
  siteStats(siteId: ID!): SiteStats!

  # Notification settings
  notificationSettings: NotificationSettings
}
```

### Mutations

```graphql
type Mutation {
  # Create a new site
  createSite(input: CreateSiteInput!): Site!

  # Update a site
  updateSite(id: ID!, input: UpdateSiteInput!): Site!

  # Delete a site
  deleteSite(id: ID!): Boolean!

  # Mute/unmute a site
  muteSite(id: ID!, muted: Boolean!): Site!

  # Resolve an alert
  resolveAlert(id: ID!): Alert!

  # Trigger an immediate check
  triggerCheck(siteId: ID!): Boolean!

  # Update notification settings
  updateNotificationSettings(input: NotificationSettingsInput!): NotificationSettings!
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
  checkInterval: Int!
  browserChecks: Boolean!
  checkoutFlows: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum SiteStatus {
  UP
  DOWN
  DEGRADED
  UNKNOWN
}
```

### Check

```graphql
type Check {
  id: ID!
  siteId: ID!
  status: CheckStatus!
  responseTimeMs: Int
  statusCode: Int
  errorMessage: String
  jsErrors: [JsError!]
  createdAt: DateTime!
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
  type: AlertType!
  status: AlertStatus!
  message: String!
  createdAt: DateTime!
  resolvedAt: DateTime
}

enum AlertType {
  DOWN
  JS_ERROR
  CHECKOUT_FAILED
  DEGRADED
}

enum AlertStatus {
  OPEN
  RESOLVED
  ACKNOWLEDGED
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
  }
}
```

### Get Recent Checks

```graphql
query {
  checks(siteId: "site_abc123", limit: 10) {
    id
    status
    responseTimeMs
    errorMessage
    createdAt
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
    avgResponseTime
  }
}
```

## Rate Limits

| Plan | Requests/Hour |
|------|---------------|
| Free | 100 |
| Pro | 1,000 |
| Enterprise | 10,000 |

## GraphQL Playground

Explore the API interactively at:

```
https://api.pulsar.byte8.io/graphql/playground
```
