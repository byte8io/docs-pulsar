---
sidebar_position: 3
title: Checkout Flow Monitoring
description: Simulate complete purchase journeys through your Magento checkout. Catch payment integration issues and broken checkout flows before customers do.
keywords: [checkout monitoring, synthetic testing, magento checkout, purchase flow testing, ecommerce monitoring]
---

# Checkout Flow Monitoring

Checkout flow monitoring simulates a complete purchase journey through your Magento store, catching issues that simple page checks might miss.

## How It Works

Pulsar's synthetic checkout test:

1. Navigates to a configurable product page
2. Adds the product to cart
3. Proceeds through checkout steps
4. Verifies each step completes successfully
5. Stops before actual payment submission

## Setting Up Checkout Flow Monitoring

To configure checkout flow monitoring for your site:

1. Go to **Sites** in the left-hand menu
2. Click on the site you want to configure
3. Find the **Checkout Flow Monitor** section
4. Configure the following settings:
   - **Product Path** - URL path to a test product (e.g., `/test-product.html`)
   - **Checkout Path** - URL path to checkout (e.g., `/checkout`)
   - **Theme** - Select your Magento theme (Luma, Hyvä, or Custom)
   - **Check Interval** - How often to run the checkout test
5. Toggle **Enable Checkout Flow Monitoring** to ON
6. Click **Save**

:::tip
Create a dedicated test product that's always in stock and has simple options.
:::

### Advanced: Custom Selectors

If you have a customized checkout, expand the **Advanced** section to configure custom CSS selectors:

| Selector | Description |
|----------|-------------|
| **Product Info Selector** | Element containing product details |
| **Add to Cart Button Selector** | The add to cart button (e.g., `#product-addtocart-button`) |
| **Cart Success Message Selector** | Element shown when item is added to cart |
| **Checkout Shipping Form Selector** | The shipping form element |

Click **Save** after configuring custom selectors.

## Flow Steps

The default Magento 2 checkout flow:

| Step | Verification |
|------|--------------|
| Product Page | Add to cart button visible |
| Mini Cart | Item added confirmation |
| Cart Page | Product in cart, proceed button |
| Checkout - Shipping | Shipping form renders |
| Checkout - Payment | Payment methods visible |

## Status Determination

| Result | Status |
|--------|--------|
| All steps complete | **Up** |
| Any step fails | **Down** |
| JavaScript error during flow | **Down** |
| Timeout waiting for element | **Down** |

## Error Details

When a checkout flow fails, Pulsar reports:

- Which step failed
- What element was expected
- Any JavaScript errors captured

## Best Practices

### Test Product Setup

1. Create a simple product for testing
2. Ensure it's always in stock
3. Use a low price point
4. Disable any upsells or cross-sells on the test product

### Checkout Configuration

1. Enable guest checkout for simpler testing
2. Configure a test shipping method
3. Ensure test addresses are valid for your shipping zones

### Monitoring Schedule

- Run checkout flows less frequently than HTTP checks (every 5-15 minutes)
- Checkout flows count against your browser session quota

## Troubleshooting

### Flow Timeout

If flows consistently timeout:

- Check if selectors match your theme's implementation
- Verify the product is in stock
- Review page load performance

### Intermittent Failures

For occasional failures:

- Check for A/B tests that might change selectors
- Review third-party script interference
- Verify checkout customizations are loading consistently

### Custom Theme Issues

If using a custom theme:

1. Use browser DevTools to find the correct selectors
2. Test selectors manually before configuring
3. Update selectors after theme changes
