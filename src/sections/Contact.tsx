import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
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
          <div className="flex flex-col md:flex-row gap-8 md:gap-13  items-center">
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
              <a href="mailto:davidkoeberl99@gmail.com?subject=Frage%20an%20David&body=Hallo%2C%20ich%20habe%20eine%20Frage%20an%20dich.">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 border border-gray-900">
                  <span className="font-semibold text-sm w-max">
                    Kontakt aufnehmen
                  </span>
                  <ArrowUpRightIcon className="size-4 " />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
