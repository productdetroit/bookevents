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
