import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StoreProvider from "./StoreProvider";
import { Toaster } from "sonner";

const font = Heebo({
  subsets: ["latin", "hebrew"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heebo',
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
    <StoreProvider>
      <html lang="en">
        <body className={font.className}>
          <Header />
          {children}
          <div>
            <Footer />
            <Toaster richColors />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
