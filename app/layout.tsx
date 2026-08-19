import type { Metadata } from "next";
import { Archivo, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SITE_URL } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "UPLB Data Science Guild",
  description:
    "The UPLB Data Science Guild is a socio-civic, and pioneer organization of UPLB for data science.",
  openGraph: {
    title: "UPLB Data Science Guild",
    description:
      "The UPLB Data Science Guild is a socio-civic, and pioneer organization of UPLB for data science.",
    url: SITE_URL,
    siteName: "UPLB Data Science Guild",
  },
  twitter: {
    card: "summary_large_image",
    title: "UPLB Data Science Guild",
    description:
      "The UPLB Data Science Guild is a socio-civic, and pioneer organization of UPLB for data science.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-off-white">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-sm focus:bg-accent-main focus:px-4 focus:py-2 focus:text-off-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
