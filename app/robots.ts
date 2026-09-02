import type { MetadataRoute } from "next";

import { SITE_URL } from "./_content";

/*
 * Served at /robots.txt, generated at build time.
 *
 * Nothing here is private, so everything is crawlable. The sitemap line is
 * the part that earns its keep — it is how a crawler that arrives without
 * following a link finds the page.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
