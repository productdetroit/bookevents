import type { MetadataRoute } from "next";

import { SITE_URL } from "./_content";

/*
 * Served at /sitemap.xml, generated at build time.
 *
 * One page today, so this is close to a formality — a crawler finds the
 * homepage regardless. It becomes worth having the moment a second route
 * exists, and costs nothing to keep correct until then.
 *
 * Deliberately no lastModified: the honest value is "when the copy last
 * changed", which nothing here tracks. Wiring it to new Date() would stamp
 * every build as a content change, which is worse than omitting it —
 * crawlers discount a lastModified that always says "just now".
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
    },
  ];
}
