"use client";

import { useState } from "react";
import Image from "next/image";
import taminosWebseite from "@/assets/images/tamino_web.png";
import ffmiRechner from "@/assets/images/ffmi.png";
import chocberryLandingPage from "@/assets/images/chocberry.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Chocberry Vienna",
    year: "In Arbeit - 2024",
    title: "Chocberry Landing Page",
    results: [
      { title: "Geplante Verbesserung der Nutzererfahrung um 40%" },
      { title: "Ziel: Ladegeschwindigkeit um 50% zu steigern" },
      { title: "Optimierung für einen Anstieg des mobilen Traffics um 35%" },
    ],
    link: "",
    disabled: true,
    image: chocberryLandingPage,
  },
  {
    company: "Tamino's ART",
    year: "November 2024",
    title: "Sketch Artist Kurssektion",
    results: [
      { title: "Kursverkauf um 40% gestiegen – ein klarer Erfolg!" },
      { title: "Bekanntheitsgrad signifikant gestiegen." },
      { title: "Mobile Aufmerksamkeit um 35% gestiegen." },
    ],
    link: "https://taminosart.com/",
    disabled: false,
    image: taminosWebseite,
  },
  {
    company: "Free FFMI Calculator",
    year: "September 2024",
    title: "FFMI Calculator Landing Page",
    results: [
      { title: "Intensive Nutzung von JavaScript für interaktive Funktionen" },
      { title: "Erlernte Umgang mit DOM-Manipulation und Event-Handling" },
      {
        title: "Implementierung von Form-Validierung und dynamischen Inhalten",
      },
    ],
    link: "",
    disabled: true,
    image: ffmiRechner,
  },
];

export const ProjectsSection = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    // Tooltip für 3 Sekunden anzeigen
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000); // 3000 ms = 3 Sekunden
  };

  const handleMouseEnter = () => setShowTooltip(true); // Tooltip beim Hover anzeigen (Desktop)
  const handleMouseLeave = () => setShowTooltip(false); // Tooltip beim Verlassen ausblenden (Desktop)

  const handleTouchStart = () => setShowTooltip(true); // Tooltip wird beim Tippen angezeigt (mobil)
  const handleTouchEnd = () => {};

  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Ergebnisse"
          title=" Featured Projekte"
          description="Schau dir an wie ich Konzepte in außergewöhnliche digitale Erlebnisse
          umgewandelt habe."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base  text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    onMouseEnter={handleMouseEnter} // Tooltip wird beim Hover aktiviert (Desktop)
                    onMouseLeave={handleMouseLeave} // Tooltip wird beim Verlassen deaktiviert (Desktop)
                    onTouchStart={handleTouchStart} // Tooltip wird beim Tippen auf dem Handy aktiviert
                    onTouchEnd={handleTouchEnd} // Verhindern, dass Tooltip sofort verschwindet (mobil)
                    className="relative"
                  >
                    <a href={project.disabled ? "#" : project.link}>
                      <button
                        className={`h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ${
                          project.disabled
                            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                            : "bg-white text-gray-950"
                        }`}
                        disabled={project.disabled}
                        onClick={handleClick}
                      >
                        <span>Besuche Live Seite</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                    {showTooltip && (
                      <div className="absolute z-50 top-full mt-2 p-2 bg-gray-700 text-white text-sm rounded-md shadow-lg">
                        {project.disabled
                          ? "Dieses Projekt wird momentan bearbeitet und ist noch nicht online."
                          : "Seite besuchen"}
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
