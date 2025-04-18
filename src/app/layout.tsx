import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

import Whatsapp from "@/components/Icons/Whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <a
          href="https://wa.me/5583998310461"
          target="_blank"
          className="group z-50 fixed right-8 bottom-8 grid place-items-center rounded-full cursor-pointer duration-300 ease-linear p-2 lg:p-3 border-2 border-transparent bg-green-500 hover:bg-green-600 hover:border-green-700"
        >
          <Whatsapp />
        </a>
      </body>
    </html>
  );
}
