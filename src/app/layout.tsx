import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "./theme/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quote of the Day",
  description: "Display a quote of the day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <SpeedInsights />
      <Analytics />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
