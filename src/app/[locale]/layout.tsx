import "~/styles/globals.css";
import { Urbanist as Font } from "next/font/google";

import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { type Metadata } from "next";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/components/ThemeProvider";
import Footer from "~/modules/home/Footer";
import { PostHogProvider } from "~/lib/PostHog";
import { routing } from "~/i18n/routing";
import { notFound } from "next/navigation";
import Providers from "~/lib/tanstack-query/client-provider";

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
      url: "/favicon.ico",
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
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <PostHogProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
                <Footer />
              </ThemeProvider>
            </PostHogProvider>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
