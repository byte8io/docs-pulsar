---
sidebar_position: 4
title: Error Patterns
---

# Error Patterns

Error patterns allow you to filter out known, non-critical JavaScript errors from triggering alerts.

## Overview

Modern websites often have JavaScript errors from:

- Third-party scripts (analytics, chat widgets, ads)
- Browser extensions
- Deprecated APIs
- Non-critical functionality

Error patterns let you acknowledge these errors without being alerted every time they occur.

## Adding Patterns

1. Navigate to your site's settings
2. Click **Error Patterns**
3. Add a regex pattern
4. Provide a description

### Pattern Syntax

Patterns use standard regular expressions:

| Pattern | Matches |
|---------|---------|
| `.*gtm.*` | Any error containing "gtm" |
| `^Script error` | Errors starting with "Script error" |
| `analytics\.js` | Errors containing "analytics.js" |
| `deprecated` | Errors containing "deprecated" (case sensitive) |

### Case Sensitivity

Patterns are case-sensitive by default. Use `(?i)` for case-insensitive matching:

```
(?i)deprecated
```

## Common Patterns

### Third-Party Services

```
# Google Tag Manager
.*googletagmanager.*
.*gtm\.js.*

# Analytics
.*google-analytics.*
.*analytics\.js.*

# Facebook Pixel
.*facebook.*pixel.*
.*fbevents\.js.*

# Chat widgets
.*intercom.*
.*drift.*
.*zendesk.*
```

### Browser/Extension Errors

```
# Cross-origin script errors
^Script error\.?$

# Browser extension interference
.*extension.*
.*chrome-extension.*
```

### Deprecation Warnings

```
# Common deprecation messages
.*is deprecated.*
.*will be removed.*
```

## Best Practices

1. **Investigate before ignoring** - Understand why the error occurs
2. **Be specific** - Avoid overly broad patterns that might hide real issues
3. **Document patterns** - Add descriptions explaining why each pattern exists
4. **Review periodically** - Remove patterns for fixed issues
5. **Test patterns** - Verify they match the intended errors

## Pattern Testing

Before adding a pattern, test it against your recent errors:

1. Go to your site's check history
2. Find an error you want to filter
3. Copy the error message
4. Test your regex pattern matches it

## Limitations

- Patterns only apply to the site they're configured on
- Maximum 50 patterns per site
- Patterns apply to both console errors and uncaught exceptions
