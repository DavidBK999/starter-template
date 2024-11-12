import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "David Köberl | Full Stack Web Developer",
  description:
    "Ich bin David Köberl, ein Full Stack Web Developer, spezialisiert auf die Entwicklung moderner und skalierbarer Webanwendungen. Entdecke meine Arbeit und Projekte auf dieser Portfolio-Seite.",
  keywords:
    "Webentwickler Wien, Full Stack Webentwickler, Webentwicklung Wien, professionelle Webentwicklung, Webentwicklung Wien Österreich, Webdesign Wien, React Entwickler Wien",
  authors: [
    { name: "David Köberl", url: "https://www.davidkoeberl.com" },
    { name: "Frontend Tribe", url: "https://www.frontendtribe.com" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="canonical" href="https://www.davidkoeberl.com" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Meta-Tags */}
        <meta
          name="description"
          content="Willkommen auf der Portfolio-Seite von David Köberl. Ich bin ein Full Stack Webentwickler mit Erfahrung in Frontend und Backend Entwicklung."
        />
        <meta
          name="keywords"
          content="Webentwickler Wien, Full Stack Webentwickler, Webentwicklung Wien, professionelle Webentwicklung, Webentwicklung Wien Österreich"
        />

        {/* Open Graph Meta-Tags */}
        <meta
          property="og:title"
          content="David Köberl - Full Stack Webentwickler"
        />
        <meta
          property="og:description"
          content="Willkommen auf der Portfolio-Seite von David Köberl. Ich bin ein Full Stack Web Entwickler mit Erfahrung in Frontend und Backend Entwicklung."
        />
        <meta
          property="og:image"
          content="https://davidkoeberl.com/favicon.ico"
        />
        <meta property="og:url" content="https://davidkoeberl.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta-Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="David Köberl | Full Stack Webentwickler"
        />
        <meta
          name="twitter:description"
          content="Willkommen auf der Portfolio-Seite von David Köberl. Ich bin ein Full Stack Web Entwickler mit Erfahrung in Frontend und Backend Entwicklung."
        />
        <meta
          name="twitter:image"
          content="https://davidkoeberl.com/favicon.ico"
        />

        {/* JSON-LD for Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "David Köberl",
              image: "https://davidkoeberl.com/favicon.ico",
              description: "Webentwicklung Services David Köberl",
              url: "https://www.davidkoeberl.com",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "3",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Tamino Tschol" },
                  datePublished: "2024-11-07",
                  reviewBody:
                    "David ist ein hervorragender Entwickler, der unsere Anforderungen schnell und professionell umgesetzt hat.",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
