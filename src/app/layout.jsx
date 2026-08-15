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
  title: {
    default: "Hero Kidz",
    template: "%s | Hero Kidz"
  },
  description: "Here you will get your children favorite toys!",
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
