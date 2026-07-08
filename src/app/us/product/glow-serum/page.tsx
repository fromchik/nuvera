import type { Metadata } from "next";
import { RawHtmlBlock } from "@/components/webflow/RawHtmlBlock";

export const metadata: Metadata = {
  title: "Glow Serum - PureGlow Webflow Ecommerce Website Template",
  description: "Glow Serum brightens and evens skin tone with 15% Vitamin C, hyaluronic acid, and niacinamide for a visibly radiant glow in 2 weeks.",
};

const html = `<!DOCTYPE html><!-- This site was created in Webflow. https://webflow.com --><!-- Last Published: Wed Apr 22 2026 23:42:55 GMT+0000 (Coordinated Universal Time) --><div class="page-wrapper"><div class="global-styles"><div class="style-overrides w-embed"><style>

/* Ensure all elements inherit the color from its parent */
a,
.w-input,
.w-select,
.w-tab-link,
.w-nav-link,
.w-nav-brand,
.w-dropdown-btn,
.w-dropdown-toggle,
.w-slider-arrow-left,
.w-slider-arrow-right,
.w-dropdown-link {
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
}

/* Focus state style for keyboard navigation for the focusable elements */
*[tabindex]:focus-visible,
  input[type="file"]:focus-visible {
   outline: 0.125rem solid #4d65ff;
   outline-offset: 0.125rem;
}

/* Get rid of top margin on first element in any rich text element */
.w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {
  margin-top: 0 !important;
}

/* Get rid of bottom margin on last element in any rich text element */
.w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {
	margin-bottom: 0 !important;
}

/* Prevent all click and hover interaction with an element */
.pointer-events-off {
	pointer-events: none;
}

/* Enables all click and hover interaction with an element */
.pointer-events-on {
  pointer-events: auto;
}

/* Create a class of .div-square which maintains a 1:1 dimension of a div */
.div-square::after {
	content: "";
	display: block;
	padding-bottom: 100%;
}

/* Make sure containers never lose their center alignment */
.container-medium,.container-small, .container-large {
	margin-right: auto !important;
  margin-left: auto !important;
}


/* Apply "..." after 3 lines of text */
.text-style-3lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}

/* Apply "..." after 2 lines of text */
.text-style-2lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

/* Adds inline flex display */
.display-inlineflex {
  display: inline-flex;
}

/* These classes are never overwritten */
.hide {
  display: none !important;
}

/* Remove default Webflow chevron from form select */
select{
  -webkit-appearance:none;
}


@media screen and (max-width: 991px) {
    .hide, .hide-tablet {
        display: none !important;
    }
}
  @media screen and (max-width: 767px) {
    .hide-mobile-landscape{
      display: none !important;
    }
}
  @media screen and (max-width: 479px) {
    .hide-mobile{
      display: none !important;
    }
}
 
.margin-0 {
  margin: 0rem !important;
}
  
.padding-0 {
  padding: 0rem !important;
}

.spacing-clean {
padding: 0rem !important;
margin: 0rem !important;
}

.margin-top {
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}

.padding-top {
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}
  
.margin-right {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}

.padding-right {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}

.margin-bottom {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}

.padding-bottom {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}

.margin-left {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
}
  
.padding-left {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
}
  
.margin-horizontal {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
}

.padding-horizontal {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
}

.margin-vertical {
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}
  
.padding-vertical {
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}

/* Apply "..." at 100% width */
.truncate-width { 
		width: 100%; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
}
/* Removes native scrollbar */
.no-scrollbar {
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none; 
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}
</style></div><div class="color-schemes w-embed"><style>
/* Color Schemes Controls*/
<meta name="relume-color-schemes" content="false"/>

  .color-scheme-1 {
/*All sections should point to Color Scheme 1*/

  }

  .color-scheme-2 {
    --color-scheme-1--text: var(--color-scheme-2--text);
    --color-scheme-1--background: var(--color-scheme-2--background);
    --color-scheme-1--foreground: var(--color-scheme-2--foreground);
    --color-scheme-1--border: var(--color-scheme-2--border);
    --color-scheme-1--accent: var(--color-scheme-2--accent);
  }

  .color-scheme-3 {
    --color-scheme-1--text: var(--color-scheme-3--text);
    --color-scheme-1--background: var(--color-scheme-3--background);
    --color-scheme-1--foreground: var(--color-scheme-3--foreground);
    --color-scheme-1--border: var(--color-scheme-3--border);
    --color-scheme-1--accent: var(--color-scheme-3--accent);
  }

  .color-scheme-4 {
    --color-scheme-1--text: var(--color-scheme-4--text);
    --color-scheme-1--background: var(--color-scheme-4--background);
    --color-scheme-1--foreground: var(--color-scheme-4--foreground);
    --color-scheme-1--border: var(--color-scheme-4--border);
    --color-scheme-1--accent: var(--color-scheme-4--accent);
  }

  .color-scheme-5 {
    --color-scheme-1--text: var(--color-scheme-5--text);
    --color-scheme-1--background: var(--color-scheme-5--background);
    --color-scheme-1--foreground: var(--color-scheme-5--foreground);
    --color-scheme-1--border: var(--color-scheme-5--border);
    --color-scheme-1--accent: var(--color-scheme-5--accent);
  }

  .color-scheme-6 {
    --color-scheme-1--text: var(--color-scheme-6--text);
    --color-scheme-1--background: var(--color-scheme-6--background);
    --color-scheme-1--foreground: var(--color-scheme-6--foreground);
    --color-scheme-1--border: var(--color-scheme-6--border);
    --color-scheme-1--accent: var(--color-scheme-6--accent);
  }

  .color-scheme-7 {
    --color-scheme-1--text: var(--color-scheme-7--text);
    --color-scheme-1--background: var(--color-scheme-7--background);
    --color-scheme-1--foreground: var(--color-scheme-7--foreground);
    --color-scheme-1--border: var(--color-scheme-7--border);
    --color-scheme-1--accent: var(--color-scheme-7--accent);
  }

  .color-scheme-8 {
    --color-scheme-1--text: var(--color-scheme-8--text);
    --color-scheme-1--background: var(--color-scheme-8--background);
    --color-scheme-1--foreground: var(--color-scheme-8--foreground);
    --color-scheme-1--border: var(--color-scheme-8--border);
    --color-scheme-1--accent: var(--color-scheme-8--accent);
  }

  .color-scheme-9 {
    --color-scheme-1--text: var(--color-scheme-9--text);
    --color-scheme-1--background: var(--color-scheme-9--background);
    --color-scheme-1--foreground: var(--color-scheme-9--foreground);
    --color-scheme-1--border: var(--color-scheme-9--border);
    --color-scheme-1--accent: var(--color-scheme-9--accent);
  }

  .color-scheme-10 {
    --color-scheme-1--text: var(--color-scheme-10--text);
    --color-scheme-1--background: var(--color-scheme-10--background);
    --color-scheme-1--foreground: var(--color-scheme-10--foreground);
    --color-scheme-1--border: var(--color-scheme-10--border);
    --color-scheme-1--accent: var(--color-scheme-10--accent);
  }
  
/* Inherit slider dot colors */
.w-slider-dot {
  background-color: var(--color-scheme-1--text);
  opacity: 0.20;
}

.w-slider-dot.w-active {
  background-color: var(--color-scheme-1--text);
  opacity: 1;
}

/* Override .w-slider-nav-invert styles */
.w-slider-nav-invert .w-slider-dot {
  background-color: var(--color-scheme-1--text) !important;
  opacity: 0.20 !important;
}

.w-slider-nav-invert .w-slider-dot.w-active {
  background-color: var(--color-scheme-1--text) !important;
  opacity: 1 !important;
}

</style></div></div><div class="main-wrapper"><div data-animation="default" class="navbar_component w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium" data-w-id="f10d4125-410f-9ab3-65a1-b2d0b75bd03d" role="banner" data-duration="400"><div class="container-large"><div class="navbar-wrapper"><div class="navbar_left-wrapper"><a href="/us" class="navbar-logo w-nav-brand"><img loading="lazy" src="/pureglow_logo.svg" alt="Green stylized medical cross with a curved line forming an &#x27;N&#x27; shape inside." class="pureglow_logo"/></a><p class="navbar_location-text hide-mobile-portrait">Colorado, USA</p></div><nav role="navigation" class="navbar_menu is-page-height-tablet w-nav-menu"><a href="/us" class="navbar-link w-nav-link">Home</a><a href="/us/about" class="navbar-link w-nav-link">About</a><a href="/us/shop" class="navbar-link w-nav-link">Shop</a><a href="/us/blog" class="navbar-link w-nav-link">Blog</a><div data-hover="true" data-delay="200" data-w-id="669c9ba2-b5fd-7e01-91f7-317dc8e28d1a" class="navbar_menu-dropdown w-dropdown"><div class="navbar_dropdown-toggle w-dropdown-toggle"><div class="navbar-dropdown-icon w-embed"><svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"/>
</svg></div><div class="navbar-dropdown_link-text">Pages</div></div><nav class="navbar_dropdown-list w-dropdown-list"><a href="/us/category" class="navbar-link w-dropdown-link">Category</a><a href="/us/sign-in" class="navbar-link w-dropdown-link">Login</a><a href="/us/sign-up" class="navbar-link w-dropdown-link">Signup</a><a href="/us/forget-password" class="navbar-link w-dropdown-link">Forget Password</a></nav></div></nav><div class="navbar-cart-btn"><div data-open-product="" data-wf-cart-type="rightSidebar" data-wf-cart-query="query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_ec_product_type_2dr10dr: productType {
            id
            name
          }
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}" data-wf-page-link-href-prefix="" data-wf-cart-easing="ease-out-sine" class="w-commerce-commercecartwrapper" data-node-type="commerce-cart-wrapper"><a class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart" data-node-type="commerce-cart-open-link" href="#"><img src="/webflow/cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/69cbab30dd0be9259eb616de_cart-icon.svg" loading="lazy" alt="Shopping cart icon" class="navbar-product_cart-image"/><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" class="w-commerce-commercecartopenlinkcount cart-quantity cart-quantity-badge">0</div></a><div style="display:none" class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar" data-node-type="commerce-cart-container-wrapper"><div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer"><div class="w-commerce-commercecartheader"><div class="cart-title"><div class="heading-style-h4">Your Cart</div></div><a class="w-commerce-commercecartcloselink w-inline-block" role="button" aria-label="Close cart" data-node-type="commerce-cart-close-link"><svg width="16px" height="16px" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill-rule="nonzero" fill="#333333"><polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon></g></g></svg></a></div><div class="w-commerce-commercecartformwrapper"><form style="display:none" class="w-commerce-commercecartform" data-node-type="commerce-cart-form"><script type="text/x-wf-template" id="wf-template-ff1d5d9b-3606-3c1e-c0bf-f374c21cee3a">%3Cdiv%20class%3D%22w-commerce-commercecartitem%22%3E%3Cimg%20data-wf-bindings%3D%22%255B%257B%2522src%2522%253A%257B%2522type%2522%253A%2522ImageRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_main_image_4dr%2522%257D%257D%255D%22%20src%3D%22%22%20alt%3D%22%22%20class%3D%22w-commerce-commercecartitemimage%20w-dyn-bind-empty%22%2F%3E%3Cdiv%20class%3D%22w-commerce-commercecartiteminfo%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_name_%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartproductname%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.price%2522%257D%257D%255D%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3Cscript%20type%3D%22text%2Fx-wf-template%22%20id%3D%22wf-template-ff1d5d9b-3606-3c1e-c0bf-f374c21cee40%22%3E%253Cli%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522PlainText%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D.name%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253Cspan%253E%253A%2520%253C%252Fspan%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522CommercePropValues%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253C%252Fli%253E%3C%2Fscript%3E%3Cul%20data-wf-bindings%3D%22%255B%257B%2522optionSets%2522%253A%257B%2522type%2522%253A%2522CommercePropTable%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%5B%5D%2522%257D%257D%252C%257B%2522optionValues%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_sku_values_3dr%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartoptionlist%22%20data-wf-collection%3D%22database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%22%20data-wf-template-id%3D%22wf-template-ff1d5d9b-3606-3c1e-c0bf-f374c21cee40%22%3E%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3Ca%20href%3D%22%23%22%20role%3D%22button%22%20data-wf-bindings%3D%22%255B%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22remove-button%20w-inline-block%22%20data-wf-cart-action%3D%22remove-item%22%20data-commerce-sku-id%3D%22%22%20aria-label%3D%22Remove%20item%20from%20cart%22%3E%3Cdiv%3ERemove%3C%2Fdiv%3E%3C%2Fa%3E%3C%2Fdiv%3E%3Cinput%20aria-label%3D%22Update%20quantity%22%20data-wf-bindings%3D%22%255B%257B%2522value%2522%253A%257B%2522type%2522%253A%2522Number%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522numberPrecision%2522%252C%2522params%2522%253A%255B%25220%2522%252C%2522numberPrecision%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.count%2522%257D%257D%252C%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20data-wf-conditions%3D%22%257B%2522condition%2522%253A%257B%2522fields%2522%253A%257B%2522product%253Aec-product-type%2522%253A%257B%2522ne%2522%253A%2522e348fd487d0102946c9179d2a94bb613%2522%252C%2522type%2522%253A%2522Option%2522%257D%257D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D%2522%257D%22%20class%3D%22w-commerce-commercecartquantity%22%20required%3D%22%22%20pattern%3D%22%5E%5B0-9%5D%2B%24%22%20inputMode%3D%22numeric%22%20type%3D%22number%22%20name%3D%22quantity%22%20autoComplete%3D%22off%22%20data-wf-cart-action%3D%22update-item-quantity%22%20data-commerce-sku-id%3D%22%22%20value%3D%221%22%2F%3E%3C%2Fdiv%3E</script><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-ff1d5d9b-3606-3c1e-c0bf-f374c21cee3a"><div class="w-commerce-commercecartitem"><img data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D" src="" alt="" class="w-commerce-commercecartitemimage w-dyn-bind-empty"/><div class="w-commerce-commercecartiteminfo"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D" class="w-commerce-commercecartproductname w-dyn-bind-empty"></div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">$ 0.00 USD</div><script type="text/x-wf-template" id="wf-template-ff1d5d9b-3606-3c1e-c0bf-f374c21cee40">%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E</script><ul data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D" class="w-commerce-commercecartoptionlist" data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr" data-wf-template-id="wf-template-ff1d5d9b-3606-3c1e-c0bf-f374c21cee40"><li><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D" class="w-dyn-bind-empty"></span><span>: </span><span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D" class="w-dyn-bind-empty"></span></li></ul><a href="#" role="button" data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" class="remove-button w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="" aria-label="Remove item from cart"><div>Remove</div></a></div><input aria-label="Update quantity" data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D" data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22product%3Aec-product-type%22%3A%7B%22ne%22%3A%22e348fd487d0102946c9179d2a94bb613%22%2C%22type%22%3A%22Option%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D%22%7D" class="w-commerce-commercecartquantity" required="" pattern="^[0-9]+$" inputMode="numeric" type="number" name="quantity" autoComplete="off" data-wf-cart-action="update-item-quantity" data-commerce-sku-id="" value="1"/></div></div><div class="w-commerce-commercecartfooter"><div aria-atomic="true" aria-live="polite" class="w-commerce-commercecartlineitem"><div>Subtotal</div><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D" class="w-commerce-commercecartordervalue"></div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a data-node-type="commerce-cart-apple-pay-button" role="button" aria-label="Apple Pay" aria-haspopup="dialog" style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton apple-pay" tabindex="0"><div></div></a><a data-node-type="commerce-cart-quick-checkout-button" role="button" tabindex="0" aria-haspopup="dialog" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser.</div></a></div><a href="/us/checkout" value="Continue to Checkout" class="w-commerce-commercecartcheckoutbutton checkout-button" data-loading-text="Hang Tight..." data-node-type="cart-checkout-button">Continue to Checkout</a></div></div></form><div class="w-commerce-commercecartemptystate"><div aria-label="This cart is empty" aria-live="polite">No items found.</div></div><div aria-live="assertive" style="display:none" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate"><div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue." data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates.">Product is not available in this quantity.</div></div></div></div></div></div></div><div class="navbar_menu-button w-nav-button"><div class="menu-icon"><div class="menu-icon_line-top"></div><div class="menu-icon_line-middle"><div class="menu-icon_line-middle-inner"></div></div><div class="menu-icon_line-bottom"></div></div></div></div></div></div><section class="pd_details-section"><div class="padding-global"><div class="container-large"><div class="pd_wrapper"><div class="pd_name-desc-mobile"><div class="pd_name"><h1 class="heading-style-h4">Glow Serum</h1></div><div class="pd_short-desc"><p class="text-size-regular text-color-secondary text-weight-medium">Brightens and evens skin tone with 15% Vitamin C.</p></div><div class="pd_divider"></div></div><div class="pd_left-image"><div class="pd_images-tab-wrapper"><div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="pd_images-tab w-tabs"><div class="pd_image-tabs-menu w-tab-menu"><a data-w-tab="Tab 1" class="pd_tabs-link w-inline-block w-tab-link w--current"><img loading="lazy" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="/webflow/cdn.prod.website-files.com/69c386bec1311dc1f168dff2/69d90e01a9460333b337bcb4_ordinary1.avif" alt="Glow Serum bottle with Vitamin C for bright and even skin tone" class="pd_more-image"/></a><a data-w-tab="Tab 2" class="pd_tabs-link w-inline-block w-tab-link"><img loading="lazy" src="/webflow/cdn.prod.website-files.com/69c386bec1311dc1f168dff2/69d90df97e1f2dcfc8aca4d7_ordinary2.avif" alt="Glow Serum bottle with Vitamin C for bright and even skin tone" class="pd_more-image"/></a></div><div class="pd_image-tabs-content w-tab-content"><div data-w-tab="Tab 1" class="pd_tab-pane w-tab-pane w--tab-active"><div class="pd_tab-pane-image-wrapper"><img loading="lazy" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="/webflow/cdn.prod.website-files.com/69c386bec1311dc1f168dff2/69d90e01a9460333b337bcb4_ordinary1.avif" alt="Glow Serum bottle with Vitamin C for bright and even skin tone" class="pd_tab-pane-image"/></div></div><div data-w-tab="Tab 2" class="pd_tab-pane w-tab-pane"><div class="pd_tab-pane-image-wrapper"><img loading="lazy" src="/webflow/cdn.prod.website-files.com/69c386bec1311dc1f168dff2/69d90df97e1f2dcfc8aca4d7_ordinary2.avif" alt="Glow Serum bottle with Vitamin C for bright and even skin tone" class="pd_tab-pane-image"/></div></div></div></div></div></div><div class="pd_right-info"><div class="pd_name-desc hide-mobile-landscape"><div class="pd_name"><h1 class="heading-style-h4">Glow Serum</h1></div><div class="pd_short-desc"><p class="text-size-regular text-color-secondary text-weight-medium">Brightens and evens skin tone with 15% Vitamin C.</p></div><div class="pd_divider"></div></div><div class="pd_price-wrap"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="heading-style-h3">$ 1,300.00 USD</div></div><div class="pd_divider"></div><div class="pd_options"><div><form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="69d90a7f92586fd3a57acd9e" data-loading-text="Adding to cart..." data-commerce-product-id="69d90a7e7fccea4f7f944139" class="w-commerce-commerceaddtocartform"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_sku_values_3dr%22%2C%22to%22%3A%22optionValues%22%7D%5D" data-commerce-product-sku-values="%7B%22a1d529d0994ec286e28bc1f104209482%22%3A%2282295e1c9ebc9fdf95a0b08b902355a6%22%7D" data-node-type="commerce-add-to-cart-option-list" data-commerce-product-id="69d90a7e7fccea4f7f944139" data-preselect-default-variant="true" role="group"><div role="group"><label data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22name%22%7D%7D%5D" class="select-size-label">Select Size</label><div id="option-set-a1d529d0994ec286e28bc1f104209482" data-node-type="commerce-add-to-cart-pill-group" data-commerce-option-set-id="a1d529d0994ec286e28bc1f104209482" class="w-commerce-commerceaddtocartoptionpillgroup pd_pill-group" role="radiogroup" aria-label="Select Size"><div data-node-type="commerce-add-to-cart-pill" class="w-commerce-commerceaddtocartoptionpill select-size-btn" role="radio" aria-checked="false" aria-disabled="false" tabindex="-1" data-option-id="82295e1c9ebc9fdf95a0b08b902355a6"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22name%22%7D%7D%5D">30</div></div><div data-node-type="commerce-add-to-cart-pill" class="w-commerce-commerceaddtocartoptionpill select-size-btn" role="radio" aria-checked="false" aria-disabled="false" tabindex="-1" data-option-id="a63aa7c92fa3fa7b39b8a7d7f58275e0"><div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22name%22%7D%7D%5D">50</div></div></div></div></div><div class="pd_divider"></div><label for="quantity-0b0dedfab6bba6b20eb72d8c3746dcaa" class="quantity-label">Quantity</label><input type="number" pattern="^[0-9]+$" inputMode="numeric" id="quantity-0b0dedfab6bba6b20eb72d8c3746dcaa" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput quantity" value="1"/><div class="pd_divider"></div><input type="submit" data-node-type="commerce-add-to-cart-button" data-loading-text="Adding to cart..." aria-busy="false" aria-haspopup="dialog" class="w-commerce-commerceaddtocartbutton add-to-cart-button" value="Add to Cart"/><a data-node-type="commerce-buy-now-button" aria-busy="false" aria-haspopup="false" data-default-text="Buy now" data-subscription-text="Subscribe now" style="display:none" class="w-commerce-commercebuynowbutton" href="/us/checkout">Buy now</a></form><div style="display:none" class="w-commerce-commerceaddtocartoutofstock" tabindex="0"><div>This product is out of stock.</div></div><div aria-live="assertive" data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror"><div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div></div></div></div><div class="pd_accordion-wrap"><div class="pd_accordion-item"><div class="pd_accordion-header"><p class="pd_accordion-title">Description</p><div class="pd_accordion-icon">+</div></div><div class="pd_accordion-body"><p class="pd_accordion-content">Glow Serum is a lightweight, fast-absorbing formula with stabilized 15% Vitamin C, hyaluronic acid, and niacinamide that visibly brightens skin tone, fades dark spots, and delivers a healthy, radiant glow in just 2 weeks.</p></div></div><div class="pd_accordion-item"><div class="pd_accordion-header"><p class="pd_accordion-title">How To Use</p><div class="pd_accordion-icon">+</div></div><div class="pd_accordion-body"><p class="pd_accordion-content">Apply 3-4 drops of Glow Serum to clean, dry skin every morning. Gently press into skin until absorbed. Follow with moisturiser and SPF.</p></div></div><div class="pd_accordion-item"><div class="pd_accordion-header"><p class="pd_accordion-title">Delivery &amp; Returns</p><div class="pd_accordion-icon">+</div></div><div class="pd_accordion-body"><p class="pd_accordion-content">We offer free delivery on orders over $2,000. Standard delivery takes 3-5 business days. Returns accepted within 14 days of purchase in original condition.</p></div></div></div></div></div></div></div></section><section class="section_related-pd"><div class="padding-global"><div class="container-large"><div class="related-product_wrapper"><div data-anim-type="anim-up" class="related-product_title-wrap"><h2 class="heading-style-h2">Related Products</h2></div><div class="padding-top padding-section-title"></div><div data-delay="4000" data-animation="slide" class="related-product_slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true"><div class="related-product_mask w-slider-mask"><div class="related-product_slide w-slide"><div class="related-product_list-wrapper w-dyn-list"><div role="list" class="related-product_list w-dyn-items"><div role="listitem" class="related-product-item w-dyn-item"><a data-hover-trigger="scale-up" href="/us/product/rescue-balm" class="product_card w-inline-block"><img width="Auto" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" alt="Rescue Balm cream tube for soothing and repairing sensitive and stressed skin" loading="lazy" src="/webflow/cdn.prod.website-files.com/69c386bec1311dc1f168dff2/69d963fac82b13dd7a2c6a82_curology1.avif" data-hover-target="scale-up" class="product_card-image"/><div class="overlay"></div><div class="product_price-wrap"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="product_card-price">$ 450.00 USD</div></div><div class="product_card-bottom"><p class="product_title">Rescue Balm</p><div class="product-card_cart-icon-wrapper"><div class="product-plus-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14"></path>
  <path d="M12 5v14"></path>
</svg></div></div></div></a></div></div></div></div><div class="related-product_slide w-slide"><div class="related-product_list-wrapper w-dyn-list"><div role="list" class="related-product_list w-dyn-items"><div role="listitem" class="related-product-item w-dyn-item"><a data-hover-trigger="scale-up" href="/us/product/dew-glow-moisturizer" class="product_card w-inline-block"><img width="Auto" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" alt="Dew Glow Moisturizer gel-cream jar with green tea and niacinamide for dewy skin" loading="lazy" src="/webflow/cdn.prod.website-files.com/69c386bec1311dc1f168dff2/69d962c484381e7b096de18a_cream1.avif" data-hover-target="scale-up" class="product_card-image"/><div class="overlay"></div><div class="product_price-wrap"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="product_card-price">$ 550.00 USD</div></div><div class="product_card-bottom"><p class="product_title">Dew Glow Moisturizer</p><div class="product-card_cart-icon-wrapper"><div class="product-plus-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14"></path>
  <path d="M12 5v14"></path>
</svg></div></div></div></a></div></div></div></div><div class="related-product_slide w-slide"><div class="related-product_list-wrapper w-dyn-list"><div role="list" class="related-product_list w-dyn-items"><div role="listitem" class="related-product-item w-dyn-item"><a data-hover-trigger="scale-up" href="/us/product/daily-spf" class="product_card w-inline-block"><img width="Auto" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" alt="Daily SPF 50 sunscreen tube with zinc oxide for everyday UV protection" loading="lazy" src="/webflow/cdn.prod.website-files.com/69c386bec1311dc1f168dff2/69d961cb4ae626846193270f_spf1.avif" data-hover-target="scale-up" class="product_card-image"/><div class="overlay"></div><div class="product_price-wrap"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="product_card-price">$ 300.00 USD</div></div><div class="product_card-bottom"><p class="product_title">Daily SPF</p><div class="product-card_cart-icon-wrapper"><div class="product-plus-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14"></path>
  <path d="M12 5v14"></path>
</svg></div></div></div></a></div></div></div></div><div class="related-product_slide w-slide"><div class="related-product_list-wrapper w-dyn-list"><div role="list" class="related-product_list w-dyn-items"><div role="listitem" class="related-product-item w-dyn-item"><a data-hover-trigger="scale-up" href="/us/product/velvet-glow-serum" class="product_card w-inline-block"><img width="Auto" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" alt="Velvet Glow Serum bottle with natural extracts for radiant glowing skin" loading="lazy" src="/webflow/cdn.prod.website-files.com/69c386bec1311dc1f168dff2/69d95e8f4f7f242287684668_serum11.avif" data-hover-target="scale-up" class="product_card-image"/><div class="overlay"></div><div class="product_price-wrap"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="product_card-price">$ 500.00 USD</div></div><div class="product_card-bottom"><p class="product_title">Velvet Glow Serum</p><div class="product-card_cart-icon-wrapper"><div class="product-plus-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14"></path>
  <path d="M12 5v14"></path>
</svg></div></div></div></a></div></div></div></div><div class="related-product_slide w-slide"><div class="related-product_list-wrapper w-dyn-list"><div role="list" class="related-product_list w-dyn-items"><div role="listitem" class="related-product-item w-dyn-item"><a data-hover-trigger="scale-up" href="/us/product/pure-cleanser" class="product_card w-inline-block"><img width="Auto" data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" alt="Pure Cleanser foam bottle for gentle deep cleansing and clear skin" loading="lazy" src="/webflow/cdn.prod.website-files.com/69c386bec1311dc1f168dff2/69d965dab9e45b01ceb24ae5_cleanser11.avif" data-hover-target="scale-up" class="product_card-image"/><div class="overlay"></div><div class="product_price-wrap"><div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" class="product_card-price">$ 500.00 USD</div></div><div class="product_card-bottom"><p class="product_title">Pure Cleanser</p><div class="product-card_cart-icon-wrapper"><div class="product-plus-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14"></path>
  <path d="M12 5v14"></path>
</svg></div></div></div></a></div></div></div></div></div><div data-anim-type="anim-up" class="related-product_arrow-button left-arrow w-slider-arrow-left"><div class="w-icon-slider-left"></div></div><div data-anim-type="anim-up" class="related-product_arrow-button right-arrow w-slider-arrow-right"><div class="w-icon-slider-right"></div></div><div class="related-product_slide-nav w-slider-nav w-round w-num"></div></div></div></div></div></section><section class="section_cta"><div class="padding-global"><div class="container-large"><div class="cta_content-wrapper"><div class="cta_bg-wrapper"><img width="Auto" loading="lazy" alt="Close-up portrait of a woman with curly hair holding white flowers outdoors in soft sunlight." src="/webflow/cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/69d7887e38274acbbeea669c_Serene%20Outdoor%20Portrait.avif" sizes="100vw" srcset="/webflow/cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/69d7887e38274acbbeea669c_Serene%20Outdoor%20Portrait-p-500.avif 500w, /webflow/cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/69d7887e38274acbbeea669c_Serene%20Outdoor%20Portrait-p-800.avif 800w, /webflow/cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/69d7887e38274acbbeea669c_Serene%20Outdoor%20Portrait-p-1080.avif 1080w, /webflow/cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/69d7887e38274acbbeea669c_Serene%20Outdoor%20Portrait.avif 1200w" class="cta_bg"/><div class="cta_overlay"></div></div><div class="cta_card-wrapper"><div class="cta_card"><h2 class="cta_title text-color-white">Skincare Evolves. Adjust <br/>Your Formula Any time</h2><p class="cta-desc hide-mobile-landscape">Easily modify your formula as your skin, seasons, and lifestyle change <br/>for consistently better results.</p><div class="cta-btn-wrapper"><a href="/us/shop" class="beauty-button w-inline-block"><div class="beauty-button-text">Start Shopping</div><div class="beauty-button-icon"><div class="beauty_btn-arrow-icon w-embed"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.52987 0.443686L10.0421 0.443481M10.0421 0.443481V8.9559M10.0421 0.443481L0.313477 10.1721" stroke="#9CE069" stroke-width="0.88693"/>
</svg></div></div></a></div></div></div></div></div></div></section><section class="footer_component"><div class="padding-global"><div class="container-large"><div class="footer_content-wrapper"><div class="padding-top padding-footer-top"></div><div class="footer_top-wrapper"><div class="footer_logo-wrap"><div class="footer_logo-text">PureGlow.</div></div><div class="footer_links-wrapper"><div class="footer_links-group1"><a href="/us" class="footer_link">Home</a><a href="/us/about" class="footer_link">About</a><a href="/us/shop" class="footer_link">Shop</a><a href="/us/category" class="footer_link">Category</a><a href="/us/blog" class="footer_link">Blog</a></div><div class="footer_links-group2"><a href="/us/404" class="footer_link">404</a><a href="/us/utility-pages/style-guide" class="footer_link">Style Guide</a><a href="/us/utility-pages/license" class="footer_link">License</a><a href="/us/utility-pages/changelog" class="footer_link">Change Log</a><a href="/us/privacy-policy" class="footer_link">Privacy Policy</a></div></div></div><div class="padding-bottom padding-xlarge"></div><div class="footer_border"></div><div class="padding-bottom padding-xlarge"></div><div class="footer_bottom-wrapper"><div class="copyright-block"><p class="footer_copyright-text">© Copyright 2026, All Rights Reserved. Powered By <a href="https://webflow.com/" class="webflow_link">Webflow</a></p></div><div class="footer_social-icons-wrapper"><a href="https://facebook.com/" target="_blank" class="footer_social-link w-inline-block" rel="noopener noreferrer"><div aria-label="facebook" class="footer_social-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"/>
</svg></div></a><a aria-label="instagram" href="https://www.instagram.com/" target="_blank" class="footer_social-link w-inline-block" rel="noopener noreferrer"><div class="footer_social-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
</svg></div></a><a aria-label="linkedin" href="https://linkedin.com/" target="_blank" class="footer_social-link w-inline-block" rel="noopener noreferrer"><div class="footer_social-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"/>
  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
</svg></div></a><a aria-label="twitter" href="https://x.com/" target="_blank" class="footer_social-link w-inline-block" rel="noopener noreferrer"><div class="footer_social-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
</svg></div></a></div></div><div class="padding-bottom padding-footer-bottom"></div></div><div class="footer_bottom-padding"></div></div></div></section></div></div>`;

export default function Page() {
  return <RawHtmlBlock html={html} />;
}
