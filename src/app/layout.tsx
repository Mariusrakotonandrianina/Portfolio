"use client";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./componets/navbar";
import Footer from "./componets/footer";
import FloatingElements from "./componets/floatingElements";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h  -screen flex flex-col">
        <Providers>
          <div className="">
            <Navbar />
          </div>
          <div className="">{children}</div>
          <div className="max-h-16">
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
