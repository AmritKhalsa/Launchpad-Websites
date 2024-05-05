import type { Metadata } from "next";
import Head from 'next/head';
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
  return (
    <>
      <head>
       <meta name="google-site-verification" content="uELXrgATNTcpm41NNFtlAmDc7s7XwUS9hDwtU-rs5u4" />
      </head>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  );
}
