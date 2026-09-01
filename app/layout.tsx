import type { Metadata, Viewport } from "next";
import { Archivo, Newsreader } from "next/font/google";

import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bookevents.app"),
  title: "Book Events — Run the event, not the paperwork",
  description:
    "Book Events sells the tickets, holds the capacity, and gets everyone through the gate. Tell it your real limits — seats, staff, mats, kits, goats — and it holds the tightest one for you. A Shopify app, free to install.",
  applicationName: "Book Events",
  openGraph: {
    type: "website",
    siteName: "Book Events",
    title: "Run the event. Not the paperwork.",
    description:
      "Ticketing for Shopify that models capacity properly: resource pools, timed holds, offline check-in. Free to install, you pay only when you sell.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Run the event. Not the paperwork.",
    description:
      "Ticketing for Shopify that models capacity properly. Free to install, you pay only when you sell.",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
