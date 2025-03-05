"use client";

import Section from "@/components/section-container";
import { cn } from "@/lib/utils";
import { frutigerRegular } from "@/public/font/font";
import { useState } from "react";
import { useTransform } from "framer-motion";
import { useEffect } from "react";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const words = [
  "What began as a research project at TU Darmstadt quickly grew into a bigger idea: making technology accessible to everyone.",
  "We saw the potential to bridge imagination and action, to turn sparks of creativity into something tangible. Blaekbit became our way of building that bridge — crafting tools that transform ideas into stories, workflows into masterpieces, and everyday challenges into opportunities.",
  "Our ambition is to turn ideas into reality with powerful code.",
];

const AboutUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <Section className="pb-[60px] relative md:h-[744px] lg:h-[800px] h-[800px] text-center flex items-center justify-center pt-[100px] snap-start ">
      <div
        className={cn(
          frutigerRegular.className,
          "max-w-[720px] mx-auto flex flex-col gap-4 px-5",
          "text-[24px] md:text-[28px] leading-[24px] md:leading-[32px] tracking-[-0.3]"
        )}
      >
        <div className="flex flex-col gap-4">
          {words.map((word, index) => (
            <div
              key={index}
              className={twMerge(
                "transition duration-500 text-white/60",
                index === Math.floor(currentWord) && "text-white",
                index === 0 && "max-w-[700px] max-sm:px-[16px]",
                index === 2 && "max-w-[620px] max-sm:px-[16px] mx-auto"
              )}
            >{`${word} `}</div>
          ))}
        </div>
      </div>
      <div className="h-[150vh] " ref={sectionRef}></div>
    </Section>
  );
};

export default AboutUsSection;
