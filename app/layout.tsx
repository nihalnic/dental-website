import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer, NavBar } from "./components";
import "./global.css";

const playFair = Playfair_Display({
  variable: "--font-playFair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oasis Dental - Your dental Friend.",
  description:
    "Oasis is the best dental clinic you ever visit in the town, wee alway try do best for our client, and there are happy with us. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playFair.variable} ${inter.variable} antialiased`}>
        <NavBar />
        <main className="max-w-[1440px] w-full mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
