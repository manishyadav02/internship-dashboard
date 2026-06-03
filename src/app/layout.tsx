import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student Learning Dashboard",
  description: "A production-grade, animated learning dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={clsx(
          syne.variable,
          dmSans.variable,
          "antialiased min-h-screen pb-14 md:pb-0 font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
