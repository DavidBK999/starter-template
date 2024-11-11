import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Köberl - Full Stack Web Developer</title>
        <meta
          name="description"
          content="Willkommen auf der Portfolio-Seite von David Köberl. Ich bin ein Full Stack Web Developer mit Erfahrung in Frontend und Backend Entwicklung."
        />
        <meta
          name="keywords"
          content="David Köberl, Portfolio, Full Stack Developer, Web Development, React, Node.js, Next.js"
        />
        <meta name="author" content="David Köberl" />

        {/* Open Graph Meta-Tags */}
        <meta
          property="og:title"
          content="David Köberl - Full Stack Web Developer"
        />
        <meta
          property="og:description"
          content="Willkommen auf der Portfolio-Seite von David Köberl. Ich bin ein Full Stack Web Developer mit Erfahrung in Frontend und Backend Entwicklung."
        />
        {/* Nutze ein passendes Bild, das mindestens 1200x630 px groß ist */}
        <meta
          property="og:image"
          content="https://davidkoeberl.com/assets/images/portfolio-banner.jpg"
        />
        <meta property="og:url" content="https://davidkoeberl.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta-Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="David Köberl - Full Stack Web Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Willkommen auf der Portfolio-Seite von David Köberl. Ich bin ein Full Stack Web Developer mit Erfahrung in Frontend und Backend Entwicklung."
        />
        {/* Nutze hier das gleiche Bild wie bei Open Graph */}
        <meta
          name="twitter:image"
          content="https://davidkoeberl.com/assets/images/portfolio-banner.jpg"
        />
      </Head>
      <div>
        <Header />
        <div id="Hero">
          <HeroSection />
        </div>
        <div id="Projects">
          <ProjectsSection />
        </div>
        <div id="Tape">
          <TapeSection />
        </div>
        <div id="Testimonials">
          <TestimonialsSection />
        </div>
        <div id="About">
          <AboutSection />
        </div>
        <div id="Contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}
