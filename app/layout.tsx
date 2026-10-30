import type { Metadata } from "next";
import Script from "next/script";
import { Archivo, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/data";

const CONSOLE_EGG = String.raw`
console.log(
  "%c    ____\n   /\\   \\\n  /  \\___\\    UPLB Data Science Guild\n  \\  /   /    You opened the console. You're our kind of person.\n   \\/___/     Try the Konami code on the home page. Or type sudo.\n\n  Want in? https://www.facebook.com/dsguplb",
  "color:#c77dff;font-family:ui-monospace,monospace"
);`;

// Opening, first home visit per session. Runs in the head before paint so there
// is no flash; builds the overlay outside React, lifts it once the page has
// loaded (at least 1.6s so it plays, at most 3s so slow connections never wait).
// Click or any key skips. Reduced motion and hash links skip it entirely.
const INTRO = String.raw`try{if(location.pathname==='/'&&!location.hash&&!sessionStorage.getItem('dsgIntro')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){var r=document.documentElement;r.classList.add('dsg-intro');sessionStorage.setItem('dsgIntro','1');var l=document.createElement('link');l.rel='preload';l.as='image';l.href='/logo.webp';document.head.appendChild(l);document.addEventListener('DOMContentLoaded',function(){var o=document.createElement('div');o.className='dsg-intro-ov';o.setAttribute('aria-hidden','true');o.innerHTML='<div class="dsg-intro-in"><div class="dsg-intro-emb"><img src="/logo.webp" alt="" width="124" height="124"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="19" pathLength="100"/><circle cx="20" cy="20" r="17.5" pathLength="100"/></svg></div><div class="dsg-intro-ttl"></div><div class="dsg-intro-sub">University of the Philippines Los Baños</div></div><div class="dsg-intro-bar"></div>';var t=o.querySelector('.dsg-intro-ttl'),i=0;'UPLB Data Science Guild'.split(' ').forEach(function(w,k){if(k)t.appendChild(document.createTextNode(' '));var ws=document.createElement('span');ws.className='w';w.split('').forEach(function(ch){var s=document.createElement('span');s.textContent=ch;s.style.animationDelay=(0.45+i++*0.035)+'s';ws.appendChild(s);});t.appendChild(ws);});document.body.appendChild(o);var t0=Date.now(),gone=false;function lift(){if(gone)return;gone=true;o.classList.add('done');setTimeout(function(){o.classList.add('out');r.classList.remove('dsg-intro');setTimeout(function(){o.remove();},950);},220);}function ready(){setTimeout(lift,Math.max(0,1600-(Date.now()-t0)));}if(document.readyState==='complete')ready();else addEventListener('load',ready);setTimeout(lift,3000);o.addEventListener('click',lift);addEventListener('keydown',lift);});}}catch(e){}`;

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
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO }} />
      </head>
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
        <Script id="console-egg" strategy="afterInteractive">{CONSOLE_EGG}</Script>
      </body>
    </html>
  );
}
