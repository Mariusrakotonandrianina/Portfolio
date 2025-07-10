"use client";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./componets/navbar";
import Footer from "./componets/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <div className="">
            <Navbar />
          </div>
          <div className="">
              {children}
          </div>
          <div className="max-h-16">
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}