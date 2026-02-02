---
sidebar_position: 3
title: Checkout Flows
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

## Configuration

### Product URL

Specify a product page URL for the test:

```
Product URL: /test-product.html
```

:::tip
Create a dedicated test product that's always in stock and has simple options.
:::

### Flow Steps

The default Magento 2 checkout flow:

| Step | Verification |
|------|--------------|
| Product Page | Add to cart button visible |
| Mini Cart | Item added confirmation |
| Cart Page | Product in cart, proceed button |
| Checkout - Shipping | Shipping form renders |
| Checkout - Payment | Payment methods visible |

### Custom Selectors

Override default selectors for customized checkouts:

```yaml
add_to_cart: "#product-addtocart-button"
minicart: ".counter-number"
proceed_to_checkout: "#top-cart-btn-checkout"
```

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
- Screenshot of the failure (if enabled)

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
