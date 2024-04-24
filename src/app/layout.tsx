import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navigation/navbar/Navbar";
import FloatingNavigator from "./components/Navigation/floating-navigator/FloatingNavigator";
import "./globals.css";
import Footer from "./components/footer/Footer";
import ModeToggler from "./components/mode-toggler/ModeToggler";
import { createContext } from "vm";
import ContextProvider from "./context-provider/ContextProvider";
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
      <body className={`${inter.className} bg-neutral-950 dark:bg-neutral-200`}>
        <ContextProvider>
          <Navbar />
          <FloatingNavigator />
          {children}
          <ModeToggler />
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
