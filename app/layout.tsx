import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from "@/components/Navbar/Navbar";
import ToasterContext from "@/context/ToastContext";
const inter = Inter({ subsets: ["latin"] });
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
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToasterContext />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
