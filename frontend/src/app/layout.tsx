import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.scss";

const font = Heebo({
  subsets: ["latin", "hebrew"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heebo'
});

export const metadata: Metadata = {
  title: "MacBuildServer",
  description: "MacBuildServer Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
