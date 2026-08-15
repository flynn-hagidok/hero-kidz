import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

export const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"]
});

export const fontBangla = localFont({
  src: "./../fonts/mayaboti-normal.ttf"
});

export const metadata = {

  metadataBase: new URL("https://hero-kidz-nine-lilac.vercel.app/"),

  title: {
    default: "Hero Kidz",
    template: "%s | Hero Kidz"
  },
  description: "Here you will get your children favorite toys!",

  keywords: [
    "educational toys",
    "kids toys",
    "learning toys",
    "children toys",
    "educational games",
    "learning board",
    "kids learning",
    "Hero C Kidz",
  ],

  authors: [
    {
      name: "Hero C Kidz",
    },
  ],

  creator: "Hero C Kidz",
  publisher: "Hero C Kidz",

  applicationName: "Hero C Kidz",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Hero C Kidz",
    title: "Hero C Kidz | Educational Toys for Kids",
    description:
      "Discover educational toys, learning boards, puzzles, and fun learning products for children at Hero C Kidz.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hero C Kidz - Educational Toys for Kids",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero C Kidz | Educational Toys for Kids",
    description:
      "Discover educational toys, learning boards, puzzles, and fun learning products for children.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="w-11/12 mx-auto py-2">
          <Navbar></Navbar>
        </header>

        <main className="flex-1 w-11/12 mx-auto my-10 min-h-[calc(100svh-302px)]">
          {children}
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
