import type { Metadata } from "next";
import { VT323, Open_Sans } from "next/font/google";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Wrapper from "@/components/Wrapper";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ajith Kumar P M",
  description: "This is my personal website where I post blogs and stuffs.",
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${vt323.variable} ${openSans.variable} bg-background`}
    >
      <body>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Wrapper>{children}</Wrapper>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
