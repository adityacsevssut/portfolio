import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aditya.Dev | Developer Portfolio",
    template: "%s | Aditya.Dev",
  },
  description: "A futuristic algorithm visualization operating system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen flex flex-col text-[var(--foreground)] selection:bg-[#EF4444] selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col pb-24 md:pb-8">
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
