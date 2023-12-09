"use client";
import Head from "next/head";
import Navigation from "@/app/components/navigation/navbar";
import "@/styles/normalize.css";
import "@/styles/webflow.css";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Next.js</title>
      </Head>
      <body>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
