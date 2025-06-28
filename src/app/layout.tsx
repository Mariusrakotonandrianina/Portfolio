import "./globals.css";
import Navbar from "./componets/navbar";
import Footer from "./componets/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen flex flex-col dark">
        <div className="">
          <Navbar />
        </div>
        <div className="">
          {children}
        </div>
        <div className="max-h-16">
          <Footer />
        </div>
      </body>
    </html>
  );
}