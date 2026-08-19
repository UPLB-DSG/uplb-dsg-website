import type { Metadata } from "next";
import { Archivo, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/data";

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
  title: {
    default: "UPLB Data Science Guild",
    template: "%s | UPLB Data Science Guild",
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "UPLB Data Science Guild",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "UPLB Data Science Guild",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "UPLB Data Science Guild",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UPLB Data Science Guild",
    description: SITE_DESCRIPTION,
    images: ["/twitter-image.png"],
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
