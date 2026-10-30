import type { Metadata } from "next";
import { Gabarito, Onest } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Motion from "./components/Motion";

const gabarito = Gabarito({ variable: "--font-gabarito", subsets: ["latin"], weight: ["700", "800"], display: "swap" });
const onest = Onest({ variable: "--font-onest", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Bintang Hutabarat | Fullstack & Systems Engineer", template: "%s | Bintang Hutabarat" },
  description:
    "Fullstack and systems engineer building web platforms, industrial IoT and secure backends. Based in South Tangerang, Indonesia.",
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${gabarito.variable} ${onest.variable}`}>
      <body>
        <a href="#main" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-full bg-white px-4 py-2 font-semibold text-ink focus:translate-y-0">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
