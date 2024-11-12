import memojiAvatar1 from "@/assets/images/tamino.png";
import memojiAvatar2 from "@/assets/images/kateryna.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Tamino Tschol",
    position: "Sketch Artist & Fotorealist @tamino.art",
    text: "Sehr direkte Ausarbeitung meiner Vorstellungen und eine gute Kooperation mit David. Das Ergebnis ist eine Online-Präsenz auf die man wirklich stolz sein kann!",
    avatar: memojiAvatar1,
  },
  {
    name: "Kateryna Burlakova",
    position: "CEO Chocberry Desserts @chocberry_vienna",
    text: "David hat eine technisch beeindruckende und benutzerfreundliche Webseite entwickelt. Sein umfassendes Know-how zeigt sich in einer stabilen und ansprechend gestalteten Seite.",
    avatar: memojiAvatar2,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Zufriedene Kunden"
          title="Das sagen Kunden über mich"
          description="Lassen Sie sich von den Kundenbewertungen überzeugen."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:75s] sm:[animation-duration:25s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 items-center justify-center inline-flex rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-12 w-max "
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
