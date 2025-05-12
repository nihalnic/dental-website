// app/metadata.ts
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Alice Oasis Dental | Dental Clinic in Dhaka, Bangladesh",
  description:
    "Alice Oasis Dental is a modern dental clinic in Dhaka offering gentle, affordable, and professional dental care. Your smile is our passion.",
  keywords: [
    "Alice Oasis Dental",
    "Dental Clinic Dhaka",
    "Dentist Bangladesh",
    "Teeth Whitening Dhaka",
    "Dental Implants Bangladesh",
    "Painless Dental Care",
    "Orthodontics Dhaka",
  ],
  authors: [
    { name: "Alice Oasis Dental", url: "https://aliceoasisdental.com" },
  ],
  creator: "Alice Oasis Dental",
  metadataBase: new URL("https://aliceoasisdental.com"),
  alternates: {
    canonical: "https://aliceoasisdental.com",
  },
  openGraph: {
    title: "Alice Oasis Dental | Trusted Dental Clinic in Dhaka, Bangladesh",
    description:
      "Visit Alice Oasis Dental for top-quality dental care in Dhaka. From cosmetic dentistry to orthodontics — we care for your smile.",
    url: "https://aliceoasisdental.com",
    siteName: "Alice Oasis Dental",
    images: [
      {
        url: "https://aliceoasisdental.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alice Oasis Dental Clinic in Dhaka",
      },
    ],
    locale: "en_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alice Oasis Dental | Gentle & Modern Dental Care in Dhaka",
    description:
      "Experience the best dental services in Dhaka, Bangladesh. Alice Oasis Dental offers comfortable care for every smile.",
    site: "@aliceoasisdental",
    creator: "@aliceoasisdental",
    images: ["https://aliceoasisdental.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default metadata;
