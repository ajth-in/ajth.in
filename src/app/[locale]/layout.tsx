import "~/styles/globals.css";
import { Urbanist as Font } from "next/font/google";

import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { type Metadata } from "next";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/components/ThemeProvider";
import Header from "~/modules/home/Header";
import Footer from "~/modules/home/Footer";
import { PostHogProvider } from "~/lib/PostHog";
import { routing } from "~/i18n/routing";
import { notFound } from "next/navigation";

const font = Font({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajth-k",
  description: "Ajith Kumar P M",
  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
    },
  ],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "ml" }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(font.className, " mx-4")}>
        <NextIntlClientProvider messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
