import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/parts/Sidebar";

const interFont = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body
        className={`bg-body flex text-body ${interFont.className} antialiased`}
      >
        <Sidebar />
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}
