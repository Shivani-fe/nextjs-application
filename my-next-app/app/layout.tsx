import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarthi Rentals",
  description:
    "Sarthi Rentals — trusted rental listings across the city. Browse verified homes, compare prices, and contact landlords directly for smooth, secure rentals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-slate-50 dark:bg-black">
          <header className="w-full border-b bg-white/60 dark:bg-[#050505]/60 border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-5xl px-6 py-4">
              <h1 className="text-xl font-semibold">Sarthi Rentals</h1>
            </div>
          </header>
          <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
          <footer className="w-full border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Sarthi Rentals</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
