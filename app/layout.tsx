import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TheFooter } from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TheHeader />
          <main className="container">{children}</main>
          <TheFooter />
        </Providers>
      </body>
    </html>
  );
}
