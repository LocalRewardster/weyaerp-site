import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeyaERP - Agricultural ERP for Uganda",
  description: "The first ERP built from Ugandan soil—track every kilo, shilling, and seed in one place.",
  keywords: ["agriculture", "ERP", "Uganda", "farming", "inventory", "management"],
  authors: [{ name: "WeyaERP Team" }],
  creator: "WeyaERP",
  publisher: "WeyaERP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  themeColor: "#2F9E44",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "WeyaERP - Agricultural ERP for Uganda",
    description: "The first ERP built from Ugandan soil—track every kilo, shilling, and seed in one place.",
    url: "https://weyaerp.com",
    siteName: "WeyaERP",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeyaERP - Agricultural ERP for Uganda",
    description: "The first ERP built from Ugandan soil—track every kilo, shilling, and seed in one place.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#2F9E44" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
