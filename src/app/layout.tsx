import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navigation/Navbar";
import FloatingNavigator from "./components/Navigation/FloatingNavigator";
import "./globals.css";

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
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        <FloatingNavigator />
        {children}
      </body>
    </html>
  );
}
