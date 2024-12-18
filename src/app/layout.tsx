import type { Metadata } from "next";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import Navbar from '../app/navbar/page'
import Footer from '../component/Footer/Footer'


export const metadata: Metadata = {
  title: "catlog-lemon",
  description: "catlog-lemon ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
