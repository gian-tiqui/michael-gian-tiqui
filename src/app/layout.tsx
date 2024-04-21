import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navigation/navbar/Navbar";
import FloatingNavigator from "./components/Navigation/floating-navigator/FloatingNavigator";
import "./globals.css";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Gian M. Tiqui",
  description: "Michael Gian Tiqui's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950`}>
        <Navbar />
        <FloatingNavigator />
        {children}
        <Footer />
      </body>
    </html>
  );
}
