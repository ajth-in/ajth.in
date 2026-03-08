import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { baseUrl } from "./sitemap";
import { cx } from "styled-system/css";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ajith Kumar P M",
    template: "%s | Ajith Kumar P M",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "Ajith Kumar P M",
    description: "My personal portfolio website",
    url: baseUrl,
    siteName: "Ajith Kumar P M",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
