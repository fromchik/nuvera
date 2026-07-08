import type { Metadata } from "next";
import { WebflowRuntimeRefresh } from "@/components/layout/WebflowRuntimeRefresh";
import { WebflowScripts } from "@/components/layout/WebflowScripts";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3001");

export const metadata: Metadata = {
  title: "PureGlow Naturals - Pure Skincare Ecommerce",
  description:
    "Discover 50+ naturally pure skincare essentials. Cruelty-free, clinically proven formulas for visible results. Shop serums, cleansers & more.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "PureGlow Naturals - Pure Skincare Ecommerce",
    description:
      "Discover 50+ naturally pure skincare essentials. Cruelty-free, clinically proven formulas for visible results.",
    images: [
      "/webflow/cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/69da806a89e5fb010af6d5f8_PureGlow_Og_Image.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="/webflow/cdn.prod.website-files.com/69a6c7b91d1004a13a9f99d8/css/pureglow-store.webflow.shared.fb8b57857.min.css"
        />
      </head>
      <body>
        {children}
        <WebflowRuntimeRefresh />
        <WebflowScripts />
      </body>
    </html>
  );
}
