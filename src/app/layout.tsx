import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Corporetorre",
  description: "Clínica de fisioterapia",
  keywords:'Fisioterapia, Quiropraxia, Quiropraxia RJ, Quiropraxia norte shopping, fisioterapia norte shopping, fisioterapeuta rj, fisioterapeuta cachambi, quiropraxia cachambi, rpg cachambi, agulhas cachambi'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <GoogleTagManager gtmId="GTM-NMMR2W6T" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
