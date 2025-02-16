import "~/styles/globals.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

import { type Metadata } from "next";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/components/ThemeProvider";
import Header from "~/modules/home/Header";
import Footer from "~/modules/home/Footer";
import { PostHogProvider } from "~/lib/PostHog";

export const metadata: Metadata = {
  title: "Ajth-k",
  description: "Ajith Kumar P M",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(ubuntu.className, "max-w-xl mx-auto px-4")}>
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
