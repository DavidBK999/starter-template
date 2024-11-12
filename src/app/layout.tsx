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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Product",
              name: "David Köberl Web Development Services",
              image: "https://davidkoeberl.com/favicon.ico",
              description: "Web Development Service von David Köberl",
              brand: "David Köberl",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "3",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Tamino Tschol",
                  },
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
