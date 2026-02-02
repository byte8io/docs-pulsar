---
sidebar_position: 2
title: Browser Checks
description: Detect JavaScript errors on your Magento store using headless browser monitoring. Capture console errors, uncaught exceptions, and network failures.
keywords: [javascript monitoring, browser checks, console errors, magento javascript, frontend monitoring]
---

# Browser Checks

Browser checks use a real headless browser to load your pages and detect JavaScript errors that could impact your customers.

## How It Works

Pulsar uses a headless Chrome browser to:

1. Navigate to your page
2. Wait for the page to fully load
3. Capture any JavaScript errors
4. Report console errors and uncaught exceptions

## What Gets Captured

### Console Errors

Any `console.error()` calls are captured and reported:

```javascript
// This will be captured
console.error("Failed to load product images");
```

### Uncaught Exceptions

JavaScript exceptions that aren't handled are detected:

```javascript
// This will trigger an alert
throw new Error("Payment gateway unavailable");
```

### Network Errors

Failed network requests that result in JavaScript errors are captured.

## Configuration

### Wait for Selector

Specify a CSS selector to wait for before checking for errors:

```
Wait for: #main-content
```

This ensures the page is fully loaded before capturing errors.

### Viewport Size

Set the browser viewport size (default: 1920x1080):

| Viewport | Use Case |
|----------|----------|
| 1920x1080 | Desktop |
| 1366x768 | Laptop |
| 375x667 | Mobile |

## Error Patterns

Configure patterns to ignore known, non-critical errors:

```
# Ignore third-party tracking errors
.*gtm\.js.*
.*analytics.*

# Ignore deprecation warnings
.*deprecated.*
```

## Best Practices

1. **Start with default settings** - Enable browser checks and monitor for a few days
2. **Add error patterns gradually** - Only ignore errors you've investigated
3. **Monitor checkout pages** - JavaScript errors here directly impact conversions
4. **Check mobile views** - Some errors only occur on specific viewports

## Limitations

- Browser checks are more resource-intensive than HTTP checks
- Maximum page load time is 30 seconds
- Some third-party scripts may cause false positives
