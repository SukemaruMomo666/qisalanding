import type { Metadata, Viewport } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Grain } from "@/components/ui/Grain";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "qisa.studio | Absolute Digital Perfection",
    template: "%s | qisa.studio",
  },
  description: "Elite UI/UX & Full-Stack Studio architecting high-performance digital solutions for visionary brands. Experience the intersection of brutalist aesthetics and elite engineering.",
  keywords: ["Digital Studio", "UI/UX Design", "Full-Stack Development", "Next.js Expert", "Premium Web Design", "qisa.studio", "Prabu Alam", "Qisty Sauva"],
  authors: [{ name: "Prabu Alam" }, { name: "Qisty Sauva" }],
  creator: "qisa.studio",
  publisher: "qisa.studio",
  metadataBase: new URL("https://qisa.studio"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "qisa.studio | Absolute Digital Perfection",
    description: "Elite UI/UX & Full-Stack Studio architecting high-performance digital solutions for visionary brands.",
    url: "https://qisa.studio",
    siteName: "qisa.studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "qisa.studio - Digital Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "qisa.studio | Absolute Digital Perfection",
    description: "Elite UI/UX & Full-Stack Studio architecting high-performance digital solutions.",
    images: ["/og-image.png"],
    creator: "@qisastudio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${archivo.variable} ${spaceGrotesk.variable} dark:bg-background dark:text-foreground antialiased selection:bg-accent selection:text-white overflow-x-hidden`}>
        <Grain />
        <CustomCursor />
        <ScrollToTop />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
