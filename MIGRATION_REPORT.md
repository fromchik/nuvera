# Migration Report

## Summary
Migrated local Webflow/static export to a Next.js App Router baseline.

## Pages
- /404
- /about
- /blog
- /category
- /checkout
- /forget-password
- /
- /privacy-policy
- /shop
- /sign-in
- /sign-up
- /blog-posts/eco-friendly-skincare-swaps
- /blog-posts/power-of-plant-based-ingredients
- /blog-posts/science-behind-clean-beauty
- /blog-posts/understanding-your-skin-type
- /category/cleanser
- /category/moisturiser
- /category/serum
- /category/spf
- /category/toner
- /product/balancing-toner
- /product/daily-spf
- /product/dew-glow-moisturizer
- /product/glow-serum
- /product/hydra-cream
- /product/pure-cleanser
- /product/rescue-balm
- /product/soft-skin-body-lotion
- /product/velvet-glow-serum
- /utility-pages/changelog
- /utility-pages/license
- /utility-pages/style-guide

## Localized Pages
- /us/404
- /us/about
- /us/blog
- /us/category
- /us/checkout
- /us/forget-password
- /us
- /us/privacy-policy
- /us/shop
- /us/sign-in
- /us/sign-up
- /us/blog-posts/eco-friendly-skincare-swaps
- /us/blog-posts/power-of-plant-based-ingredients
- /us/blog-posts/science-behind-clean-beauty
- /us/blog-posts/understanding-your-skin-type
- /us/category/cleanser
- /us/category/moisturiser
- /us/category/serum
- /us/category/spf
- /us/category/toner
- /us/product/balancing-toner
- /us/product/daily-spf
- /us/product/dew-glow-moisturizer
- /us/product/glow-serum
- /us/product/hydra-cream
- /us/product/pure-cleanser
- /us/product/rescue-balm
- /us/product/soft-skin-body-lotion
- /us/product/velvet-glow-serum
- /us/utility-pages/changelog
- /us/utility-pages/license
- /us/utility-pages/style-guide
- /ru/404
- /ru/about
- /ru/blog
- /ru/category
- /ru/checkout
- /ru/forget-password
- /ru
- /ru/privacy-policy
- /ru/shop
- /ru/sign-in
- /ru/sign-up
- /ru/blog-posts/eco-friendly-skincare-swaps
- /ru/blog-posts/power-of-plant-based-ingredients
- /ru/blog-posts/science-behind-clean-beauty
- /ru/blog-posts/understanding-your-skin-type
- /ru/category/cleanser
- /ru/category/moisturiser
- /ru/category/serum
- /ru/category/spf
- /ru/category/toner
- /ru/product/balancing-toner
- /ru/product/daily-spf
- /ru/product/dew-glow-moisturizer
- /ru/product/glow-serum
- /ru/product/hydra-cream
- /ru/product/pure-cleanser
- /ru/product/rescue-balm
- /ru/product/soft-skin-body-lotion
- /ru/product/velvet-glow-serum
- /ru/utility-pages/changelog
- /ru/utility-pages/license
- /ru/utility-pages/style-guide
- /ua/404
- /ua/about
- /ua/blog
- /ua/category
- /ua/checkout
- /ua/forget-password
- /ua
- /ua/privacy-policy
- /ua/shop
- /ua/sign-in
- /ua/sign-up
- /ua/blog-posts/eco-friendly-skincare-swaps
- /ua/blog-posts/power-of-plant-based-ingredients
- /ua/blog-posts/science-behind-clean-beauty
- /ua/blog-posts/understanding-your-skin-type
- /ua/category/cleanser
- /ua/category/moisturiser
- /ua/category/serum
- /ua/category/spf
- /ua/category/toner
- /ua/product/balancing-toner
- /ua/product/daily-spf
- /ua/product/dew-glow-moisturizer
- /ua/product/glow-serum
- /ua/product/hydra-cream
- /ua/product/pure-cleanser
- /ua/product/rescue-balm
- /ua/product/soft-skin-body-lotion
- /ua/product/velvet-glow-serum
- /ua/utility-pages/changelog
- /ua/utility-pages/license
- /ua/utility-pages/style-guide

## Components
- RawHtmlBlock
- WebflowScripts
- WebflowRuntimeRefresh

## Assets
- Moved to public/webflow
- Images: copied from local Webflow asset folders
- Fonts: copied from local Webflow asset folders
- JS: local jQuery, Webflow chunks, and GSAP copied
- CSS: Webflow CSS preserved
- Documents: none found locally

## CSS
- Webflow CSS preserved
- Import order preserved from source HTML for the shared stylesheet
- Patches: src/app/webflow-patches.css, migration-only comments required for future edits

## JS
- Local scripts connected through src/components/layout/WebflowScripts.tsx
- Runtime refresh included through src/components/layout/WebflowRuntimeRefresh.tsx

## Forms
- Auth, checkout, cart, and email forms:
  - visual: migrated
  - backend: not implemented
  - limitations: Webflow backend, auth, ecommerce, payment, reset email, and checkout flows require separate implementation.

## Webflow hosting-dependent features
- Forms: static visual only
- CMS: static routes only
- Ecommerce: static visual only
- Search: not found
- Localization: static /us, /ru, and /ua pages generated from local strings only
- Password pages: not implemented

## External dependencies
- Listed in EXTERNAL_DEPENDENCIES.md

## Checks
- npm run check:assets: passed
- npm run audit:css: passed
- npm run audit:routes: passed
- npm run audit:i18n: passed
- npm run typecheck: passed
- npm run lint: passed
- npm run build: passed
- npm run verify:migration: passed

## Remaining limitations
- Baseline uses raw Webflow HTML rendering to preserve DOM/classes/data attributes before safe component extraction.
- Dynamic Webflow Ecommerce, user accounts, forms, and hosting-specific behavior are not implemented.
- Translation is dictionary-based from local source content. Brand names, product names, country lists, prices, and Webflow-hosting dynamic templates are preserved where translating them would risk breaking ecommerce/static data behavior.

## Notes
No live-site comparison was performed.
No external assets were downloaded during Next.js migration.
No redesign was performed.
