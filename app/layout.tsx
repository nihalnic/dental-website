import { Inter, Playfair_Display } from "next/font/google";
import { Footer, NavBar } from "./components";
import "./global.css";
import metadata from "./metadata";

const playFair = Playfair_Display({
  variable: "--font-playFair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClass = `${playFair.variable} ${inter.variable} antialiased`;

  return (
    <html lang="en">
      <body className={fontClass}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
