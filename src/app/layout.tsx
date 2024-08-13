import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CUBE Summit",
  description: "For the first time, top university blockchain clubs are teaming up, backed by extensive alumni networks, in collaboration with leading blockchains, projects, and VCs, to ignite emerging talent and innovative projects, shaping the future stars of the crypto world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
