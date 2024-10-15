import type { Metadata } from "next";
import {Carlito} from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { CookieBar } from "@/components/CookieBar";

export const metadata: Metadata = {
  title: "Corporetorre",
  description: "Clínica de fisioterapia",
  keywords:'Fisioterapia, Quiropraxia, Quiropraxia RJ, Quiropraxia norte shopping, fisioterapia norte shopping, fisioterapeuta rj, fisioterapeuta cachambi, quiropraxia cachambi, rpg cachambi, agulhas cachambi'
};
const carlito = Carlito({ subsets: ['latin'], weight:'400' })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <GoogleTagManager gtmId="GTM-NMMR2W6T" />
      <body className={`${carlito.className} antialiased`}>
        {children}
        <CookieBar/>
      </body>
    </html>
  );
}
