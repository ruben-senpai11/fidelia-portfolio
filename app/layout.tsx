import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from '@vercel/analytics/next';
import TagManager from 'react-gtm-module';
import Header from "./navigation/header";
import Footer from "./navigation/footer";

if (typeof window !== 'undefined') {
  const tagManagerArgs = {
    gtmId: '5VRHGB65',
    dataLayer: {
    }
  };

  TagManager.initialize(tagManagerArgs);
}


const inter = Inter({ subsets: ["latin"] });

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Illustratrice de mode | Fidelia HOUNGBEDJI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <meta name="google-site-verification" content="MwtyOjEuk62KDPzYPycf-g9oLQP5Wo6kYR95tCEQPUo" />
      <body className={inter.className}>
        <Header />
          {children}
          <Analytics />
        <Footer />
      </body>
    </html>
  );
}
