import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/*
 * Social share card for bookevents.app, generated at build time.
 *
 * Next picks this up by filename and injects it into og:image and, since
 * there is no separate twitter-image, the Twitter card too. Editing this
 * file is what changes the card — there is no PNG to re-export.
 *
 * Satori (the renderer behind ImageResponse) supports a subset of CSS:
 * flexbox only, and any element with more than one child needs an
 * explicit display:flex. Keep that in mind when editing.
 */

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Book Events — Run the event, not the paperwork. Ticketing for Shopify.";

/*
 * Static per-weight WOFF, not the variable TTFs: Satori cannot parse
 * multi-axis variable fonts, and static files let us hit the brand weights
 * exactly — Newsreader Light 300 for display, Regular 400 for the wordmark
 * (the brand sheet allows no other face for it).
 */
const FONT_FILES = [
  { file: "Newsreader-300.woff", name: "Newsreader", weight: 300 },
  { file: "Newsreader-400.woff", name: "Newsreader", weight: 400 },
  { file: "Archivo-400.woff", name: "Archivo", weight: 400 },
  { file: "Archivo-500.woff", name: "Archivo", weight: 500 },
] as const;

async function loadFonts() {
  const dir = join(process.cwd(), "app", "_fonts");
  return Promise.all(
    FONT_FILES.map(async ({ file, name, weight }) => ({
      name,
      weight: weight as 300 | 400 | 500,
      style: "normal" as const,
      data: await readFile(join(dir, file)),
    })),
  );
}

export default async function OpengraphImage() {
  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF7F2",
          color: "#1C1A17",
          padding: "72px 80px",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="46" height="46" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="15" fill="#B4552F" />
            <rect x="12" y="19" width="11" height="26" rx="5.5" fill="#FAF7F2" />
            <rect
              x="26.5"
              y="19"
              width="11"
              height="26"
              rx="5.5"
              fill="#FAF7F2"
            />
            <rect
              x="41"
              y="19"
              width="11"
              height="26"
              rx="5.5"
              fill="#FAF7F2"
              opacity="0.3"
            />
          </svg>
          <div
            style={{
              fontFamily: "Newsreader",
              fontWeight: 400,
              fontSize: 34,
              letterSpacing: "-0.02em",
              marginLeft: 16,
            }}
          >
            Book Events
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Newsreader",
              fontWeight: 300,
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            <div>Run the Event.</div>
            <div>Not the paperwork.</div>
          </div>
          <div
            style={{
              fontSize: 27,
              lineHeight: 1.45,
              color: "#4A463F",
              marginTop: 30,
              // Narrow enough that the line breaks at the em-dash rather
              // than leaving "kits, goats." stranded on its own line.
              maxWidth: 690,
            }}
          >
            Ticketing for Shopify that holds your real limits — seats, staff,
            mats, kits, goats.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #E5DFD5",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 24 }}>bookevents.app</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                width: 10,
                height: 10,
                background: "#3F5340",
                marginRight: 12,
              }}
            />
            <div style={{ fontSize: 22, color: "#4A463F" }}>
              Free to install. You pay only when you sell.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    },
  );
}
