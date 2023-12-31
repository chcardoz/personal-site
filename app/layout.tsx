import type { Metadata } from "next";
import { Inter, Sawarabi_Mincho, Prosto_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sawarabi = Sawarabi_Mincho({
  weight: "400",
  display: "swap",
  variable: "--font-sawarabi",
  style: "normal",
  subsets: ["latin"],
});

const prosto = Prosto_One({
  weight: "400",
  display: "swap",
  variable: "--font-prosto",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`${prosto.variable} ${sawarabi.variable}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
