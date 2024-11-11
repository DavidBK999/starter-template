"use client";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import PHPIcon from "@/assets/icons/php.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map1.png";
import SmileMemoji from "@/assets/images/me2.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "PHP",
    iconType: PHPIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Schach",
    emoji: "♟️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Fitness",
    emoji: "🏋🏻‍♂️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Kochen",
    emoji: "🧑🏼‍🍳",
    left: "7%",
    top: "35%",
  },
  {
    title: "Yoga",
    emoji: "☯️",
    left: "39%",
    top: "40%",
  },
  {
    title: "Lesen",
    emoji: "📖",
    left: "66%",
    top: "45%",
  },
  {
    title: "Musik",
    emoji: "🎶",
    left: "5%",
    top: "65%",
  },
  {
    title: "Natur",
    emoji: "🍂",
    left: "50%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Über mich"
          title="Ein Einblick in meine Welt"
          description="Lerne mehr darüber, wer ich bin, was ich mache und was mich inspiriert."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Perspektiven"
                description="Bücher, die mich inspirieren und prägen."
              />
              <div className="w-40 mx-auto mt-2 md:mt-1 hover:mt-0 hover:scale-x-105 transition-all duration-300">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Expertise"
                description="Tools, mit denen ich außergewöhnliche Webseiten
                schaffe."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Zwischen den Zeilen"
                description="Was mich außerhalb der digitalen Welt inspiriert."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400  -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400  -z-10"></div>
                <Image
                  src={SmileMemoji}
                  alt="smiling memoji"
                  className="size-16 mx-4 mt-2 w-max"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
