import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import TagManager from 'react-gtm-module';

if (typeof window !== 'undefined') {
    const tagManagerArgs = {
        gtmId: '5VRHGB65',
        dataLayer: {
            // Optional dataLayer object
        }
    };
    
    TagManager.initialize(tagManagerArgs);
}


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "White devs Agency",
  description: "Nous ne créons pas des outils, créons du résultat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <meta name="google-site-verification" content="MwtyOjEuk62KDPzYPycf-g9oLQP5Wo6kYR95tCEQPUo" />
      {/* <link rel="shortcut icon" href="favicon.png" type="image/x-icon" /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
