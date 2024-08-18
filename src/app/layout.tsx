import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navigation/navbar/Navbar";
import FloatingNavigator from "./components/Navigation/floating-navigator/FloatingNavigator";
import "./globals.css";
import Footer from "./components/footer/Footer";
import ModeToggler from "./components/mode-toggler/ModeToggler";
import ContextProvider from "./context-provider/ContextProvider";
import MotionTemplate from "./components/motion/MotionTemplate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

// renovation starts here

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
      <body
        className={`${inter.className} bg-neutral-900 dark:bg-neutral-200 md:px-32`}
      >
        <ContextProvider>
          <ToastContainer />
          <MotionTemplate>
            <Navbar />
            <FloatingNavigator />
            {children}
            <ModeToggler />
            <Footer />
          </MotionTemplate>
        </ContextProvider>
      </body>
    </html>
  );
}
