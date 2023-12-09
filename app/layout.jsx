"use client";
import Head from "next/head";
import Navigation from "@/app/components/navigation/navbar";
import "@/styles/normalize.css";
import "@/styles/webflow.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
