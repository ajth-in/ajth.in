import type { Metadata } from "next";
import { VT323, Open_Sans } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${vt323.variable} ${openSans.variable} bg-background`}>
        {children}
      </body>
    </html>
  );
}
