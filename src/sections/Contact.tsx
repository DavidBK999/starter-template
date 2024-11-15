"use client";

import React, { useState } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg"; // Bildimport anpassen

export const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false); // Zustand für Ladevorgang
  const [error, setError] = useState<string | null>(null); // Fehlerzustand

  const handleContactClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null); // Fehler zurücksetzen

    // Sicherstellen, dass grecaptcha und grecaptcha.enterprise existieren
    if (typeof grecaptcha !== "undefined" && grecaptcha.enterprise) {
      grecaptcha.enterprise.ready(async () => {
        try {
          // Verwendung des Produktions-Site-Keys direkt aus der Umgebungsvariable
          const token = await grecaptcha.enterprise.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, // Dein Produktions-Site-Key hier
            { action: "CONTACT" }
          );

          // Wenn das Token erfolgreich abgerufen wurde, sende es an den Server
          if (token) {
            const response = await fetch("/api/verify-recaptcha", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: token,
                action: "CONTACT", // Optional, wenn du eine Aktion weitergeben willst
              }),
            });

            const data = await response.json();

            // Überprüfe die Antwort vom Server (z.B. wenn reCAPTCHA erfolgreich verifiziert wurde)
            if (data.success) {
              window.location.href =
                "mailto:davidkoeberl99@gmail.com?subject=Kontaktaufnahme%20über%20Webseite&body=Hallo%2C%20David,%20ich%20habe%20eine%20Frage%20an%20dich.";
            } else {
              setError(
                "reCAPTCHA konnte nicht verifiziert werden. Bitte versuche es erneut."
              );
            }
          } else {
            setError(
              "reCAPTCHA konnte nicht verifiziert werden. Bitte versuche es erneut."
            );
          }
        } catch (error) {
          console.error("Fehler beim Ausführen des reCAPTCHA:", error);
          setError(
            "Es gab einen Fehler bei der Verifizierung. Bitte versuche es später."
          );
        } finally {
          setIsLoading(false); // Ladeanzeige deaktivieren
        }
      });
    } else {
      setError(
        "reCAPTCHA konnte nicht geladen werden. Bitte versuche es später."
      );
      setIsLoading(false); // Ladeanzeige deaktivieren
    }
  };

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-13 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Lass uns gemeinsam etwas Außergewöhnliches schaffen
              </h2>
              <p className="text-sm md:text-base mt-2 ">
                Bereit, dein nächstes Projekt zum Leben zu erwecken? Dann lass
                uns in Verbindung treten! Ich helfe dir dabei, deine Ziele zu
                erreichen.
              </p>
            </div>
            <div>
              <button
                onClick={handleContactClick}
                disabled={isLoading} // Button deaktivieren, wenn es lädt
                className="g-recaptcha text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 border border-gray-900"
              >
                {isLoading ? (
                  <span className="font-semibold text-sm w-max">
                    Verifiziere...
                  </span>
                ) : (
                  <span className="font-semibold text-sm w-max">
                    Kontakt aufnehmen
                  </span>
                )}
                <ArrowUpRightIcon className="size-4 " />
              </button>
            </div>
          </div>

          {/* Fehleranzeige */}
          {error && (
            <div className="mt-4 text-red-600 text-sm">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
