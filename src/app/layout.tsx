import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruha Holidays | The Best Travel Agency in Kerala",
  description: "Experience Kerala with the best travel agency in God's Own Country. We offer premium travel solutions including family trips, honeymoon packages, houseboat tours in Alleppey, and Munnar hill station experiences.",
  keywords: "Best travel agency in Kerala, Kerala tourism, Kerala tour packages, Kerala travel packages, best Kerala houseboat, Munnar packages, Alleppey backwaters, Wayanad trekking, Lakshadweep permit, Ruha Holidays",
  authors: [{ name: 'Ruha Holidays LLP' }],
  creator: 'Ruha Holidays LLP',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ruha-holidays.vercel.app",
    title: "Ruha Holidays | The Best Travel Agency in Kerala",
    description: "Premium tour packages for Kerala & Lakshadweep. Houseboats, Honeymoon, and Family trips.",
    siteName: "Ruha Holidays",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ruha Holidays Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruha Holidays | The Best Travel Agency in Kerala",
    description: "Premium tour packages for Kerala & Lakshadweep. Houseboats, Honeymoon, and Family trips.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Ruha Holidays LLP',
    image: 'https://ruha-holidays.vercel.app/logo.png',
    description: 'The Best Travel Agency in Kerala, offering premium tour packages, houseboats, and honeymoon trips.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kerala',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '10.8505',
      longitude: '76.2711'
    },
    url: 'https://ruha-holidays.vercel.app',
    telephone: '+919999999999',
    priceRange: '₹₹',
    areaServed: ['Kerala', 'Lakshadweep', 'India'],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
