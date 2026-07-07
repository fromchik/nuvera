# Webflow Migration Plan

## Source type
- Official Webflow export: no
- Downloaded static copy: yes
- Mixed: no

## Pages found
- 404.html -> /404
- about.html -> /about
- blog.html -> /blog
- category.html -> /category
- checkout.html -> /checkout
- forget-password.html -> /forget-password
- index.html -> /
- privacy-policy.html -> /privacy-policy
- shop.html -> /shop
- sign-in.html -> /sign-in
- sign-up.html -> /sign-up
- blog-posts/eco-friendly-skincare-swaps.html -> /blog-posts/eco-friendly-skincare-swaps
- blog-posts/power-of-plant-based-ingredients.html -> /blog-posts/power-of-plant-based-ingredients
- blog-posts/science-behind-clean-beauty.html -> /blog-posts/science-behind-clean-beauty
- blog-posts/understanding-your-skin-type.html -> /blog-posts/understanding-your-skin-type
- category/cleanser.html -> /category/cleanser
- category/moisturiser.html -> /category/moisturiser
- category/serum.html -> /category/serum
- category/spf.html -> /category/spf
- category/toner.html -> /category/toner
- product/balancing-toner.html -> /product/balancing-toner
- product/daily-spf.html -> /product/daily-spf
- product/dew-glow-moisturizer.html -> /product/dew-glow-moisturizer
- product/glow-serum.html -> /product/glow-serum
- product/hydra-cream.html -> /product/hydra-cream
- product/pure-cleanser.html -> /product/pure-cleanser
- product/rescue-balm.html -> /product/rescue-balm
- product/soft-skin-body-lotion.html -> /product/soft-skin-body-lotion
- product/velvet-glow-serum.html -> /product/velvet-glow-serum
- utility-pages/changelog.html -> /utility-pages/changelog
- utility-pages/license.html -> /utility-pages/license
- utility-pages/style-guide.html -> /utility-pages/style-guide

## Localized routes
- Bare routes -> English default
- /us/* -> English
- /ru/* -> Русский
- /ua/* -> Українська

## CSS files
- cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/css/nuvera-store.webflow.shared.fb8b57857.min.css

## JS files
- d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js%3Fsite=69a6c7b91d1004a13a9f99d8
- cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/js/webflow.schunk.b2397b2502f6f17b.js
- cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/js/webflow.schunk.809bf1b8b8331815.js
- cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/js/webflow.schunk.e2cbbd904d0d72c4.js
- cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/js/webflow.9c5c5ed3.9ea8b40799357820.js
- cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js
- cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js
- cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js
- custom scripts: inline Webflow init snippets and JSON-LD preserved inside source-derived page HTML where applicable.

## Asset folders
- cdn.prod.website-files.com/ -> public/webflow/cdn.prod.website-files.com/
- d3e54v103j8qbb.cloudfront.net/ -> public/webflow/d3e54v103j8qbb.cloudfront.net/
- fonts: local InterVariable.ttf in Webflow asset folder
- videos/json/documents: none found as local files in source audit

## Interactive elements
- navbar: Webflow navbar markup preserved.
- dropdown: Webflow dropdown markup preserved.
- tabs: product detail tab markup preserved where present.
- slider: no dedicated Webflow slider audit hit found.
- modals: ecommerce cart sidebar markup preserved.
- forms: auth/checkout/cart forms preserved as static visual markup.
- lottie: no local Lottie JSON files found.
- animations: Webflow data-w-id and GSAP script references preserved locally.
- ecommerce: product, cart, checkout markup preserved; dynamic cart/payment not implemented.
- search: no Webflow site search implementation found.

## Risks
- missing assets: tracked in MISSING_ASSETS.md.
- external dependencies: social/Webflow/schema links tracked in EXTERNAL_DEPENDENCIES.md.
- CMS/static data: collection pages migrated as static routes.
- form backend: Webflow form backend not migrated.
- localization: Russian and Ukrainian pages are generated from a local migration dictionary. Dynamic Webflow-hosted localization is not migrated.
- case-sensitive paths: checked by npm run check:assets.
