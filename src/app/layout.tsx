import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Party People",
  description: "Party People - Creating memorable experiences for every occasion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white text-black ${inter.variable} font-sans overflow-x-hidden`}>{children}</body>
    </html>
  );
}