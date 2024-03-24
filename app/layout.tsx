import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "White Devs Agency",
  description: "Scale your business +50% NOW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link rel="shortcut icon" href="favicon.png" type="image/x-icon" /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
