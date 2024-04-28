import type { Metadata } from "next";

import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Launchpad Websites",
  description: "Launch your custom website | Design and Deployment | E-commerce, SEO, Hosting, and Maintenance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  injectSpeedInsights();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
