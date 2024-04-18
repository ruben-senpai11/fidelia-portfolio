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
  title: "White Devs Agency",
  description: "Nous créons du résultat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* <link rel="shortcut icon" href="favicon.png" type="image/x-icon" /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
