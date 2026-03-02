import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LifeCare Multispeciality Clinic | Best Clinic in Your City",
  description:
    "LifeCare Multispeciality Clinic offers expert medical care in diabetes, thyroid, blood pressure, skin, child care, and more. Book an appointment with our experienced doctors today.",
  keywords:
    "multispeciality clinic, best clinic, diabetes doctor, thyroid specialist, blood pressure, skin doctor, child care, book appointment",
  authors: [{ name: "LifeCare Multispeciality Clinic" }],
  openGraph: {
    title: "LifeCare Multispeciality Clinic | Best Multispeciality Clinic",
    description:
      "Expert healthcare under one roof. 10+ years of experience, 5000+ happy patients. Book your appointment today.",
    url: "https://lifecareclinic.in",
    siteName: "LifeCare Multispeciality Clinic",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "LifeCare Multispeciality Clinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeCare Multispeciality Clinic",
    description:
      "Expert healthcare under one roof. Book your appointment today.",
    images: ["/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "LifeCare Multispeciality Clinic",
  description:
    "Best multispeciality clinic offering expert care in diabetes, thyroid, blood pressure, skin, child care, and more.",
  url: "https://lifecareclinic.in",
  telephone: "+91-98765-43210",
  email: "info@lifecareclinic.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123, Health Avenue, Near City Hospital",
    addressLocality: "Your City",
    addressRegion: "Your State",
    postalCode: "400001",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://facebook.com/lifecareclinic",
    "https://instagram.com/lifecareclinic",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
