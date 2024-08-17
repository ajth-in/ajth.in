import "./global.css";
import type {Metadata} from "next";
import {NavigationBar} from "./components/nav";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import {baseUrl} from "./sitemap";
import {Quicksand} from "next/font/google"; // If loading a variable font, you don't need to specify the font weight

// If loading a variable font, you don't need to specify the font weight
const inter = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ajith Kumar",
    template: "%s | Ajith Kumar",
  },
  description: "Ajith Kumar P M portfolio website",
  openGraph: {
    title: "Ajith Kumar P M ",
    description: "Ajith Kumar P M portfolio website",
    url: baseUrl,
    siteName: "ajith",
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

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        inter.className,
      )}
    >
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dobs3jkdj/image/upload/c_thumb,w_200,g_face/v1722176212/A_1_sfatsl.png"
        />
      </head>
      <body className="antialiased max-w-5xl mx-4 mt-8 lg:mx-auto ">
        <main>
          <NavigationBar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
