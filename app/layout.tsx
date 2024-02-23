import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import React from "react";
import { cachedFn } from "./utils";
import { unstable_noStore } from "next/cache";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  console.log("IN METADATA");
  const data = await cachedFn();
  return {
    title: `${data}, ${Date.now()}`,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  unstable_noStore();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="bg-red-200 w-60 flex flex-col h-screen">
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/news"}>News</Link>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
