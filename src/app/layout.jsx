import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Weather Site",
  description: "View live weather updates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <div>
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-around w-full">
          <Link href="/" className="hover:cursor-pointer hover:text-white text-gray-300">Home</Link>
          <Link href="/about" className="hover:cursor-pointer hover:text-white text-gray-300">About</Link>
          <Link href="/history" className="hover:cursor-pointer hover:text-white text-gray-300">History</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-white p-4 w-full text-center fixed bottom-0">
        © 2025 Weather App
      </footer>
    </div>
    </body>
  </html>
  );
}
