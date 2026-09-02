/**
 * The canonical origin, used for metadataBase, robots and the sitemap.
 *
 * It is the www host on purpose: the apex 308-redirects to www, so
 * declaring the apex anywhere would advertise a URL that immediately
 * redirects. If you ever flip the redirect to serve the apex instead,
 * change this one constant and everything follows.
 */
export const SITE_URL = "https://www.bookevents.app";

/**
 * Copy and link targets for the marketing page.
 *
 * The Shopify listing does not exist yet, so every install call-to-action
 * points at the on-page install section. Swap INSTALL_URL for the real
 * app-store URL and every button follows.
 */
export const INSTALL_URL = "#install";

export const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#faq", label: "FAQ" },
] as const;
