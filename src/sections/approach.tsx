"use client";

import GradientTitle from "@/components/title";
import { cn } from "@/lib/utils";
import { frutigerRegular } from "@/public/font/font";
import {
  Arrow1,
  Arrow2,
  Arrow3,
  Arrow4,
  Arrow5,
} from "@/public/icons/our-approach/arrows";
import { ClassValue } from "clsx";
import Image from "next/image";
import React, { useState } from "react";

const texts = [
  {
    type: "idea",
    text: "Every great idea begins as a quiet spark, uncertain and unnoticed, until action brings it to life.",
  },
  {
    type: "code",
    text: "What is built today is only a draft of tomorrow, constantly reshaped by those who dare to question, refine, and create anew.",
  },
  {
    type: "value",
    text: "Great software doesn't just make things easier it creates possibilities that didn't exist before.",
  },
  {
    type: "frame",
    text: "A blank space holds endless possibilities until the first stroke turns chaos into form.",
  },
  {
    type: "empowering",
    text: "The most intuitive creations are the ones that go unnoticed, effortlessly guiding and adapting until they feel like second nature.",
  },
];

export default function Approach() {
  const [activeText, setActiveText] = useState<(typeof texts)[number] | null>(
    texts[0]
  );
  return (
    <div className="lg:pt-[167px] max-sm:mb-[-100px] snap-start">
      <div className=" relative max-sm:-top-60 h-[971px] max-sm:h-[700px] lg:max-w-[1184px] mx-auto overflow-hidden max-lg:bg-[url('/images/circles.png')] max-lg:bg-cover max-lg:bg-center max-lg:bg-no-repeat">
        <Image
          src="/images/circles.png"
          alt="circles"
          width={1184}
          height={971}
          className="absolute top-[-71px] left-0 w-full h-full z-[-1] hidden lg:block"
        />

        <div className="flex flex-col items-center gap-[19.5px]">
          <GradientTitle title="Our Approach" className="px-20 text-center" />
          <div className="flex flex-col items-center gap-3 relative max-sm:scale-[0.6] ">
            <div className="absolute top-[247.5px] w-[360px] mr-[9px]">
              <p
                className={cn(
                  frutigerRegular.className,
                  "text-[28px] leading-[32px] tracking-[-0.3px] text-center"
                )}
              >
                {activeText?.text}
              </p>
            </div>
            <Icons
              icon={activeText === texts[0] ? "idea-white" : "idea"}
              gif={"idea"}
              title="Idea"
              w={75}
              h={75}
              gifW={100}
              gifH={90}
              onHover={() => setActiveText(texts[0])}
              isActive={activeText === texts[0]}
            />
            <Icons
              icon="tools"
              gif={"tools"}
              title="Code"
              w={76}
              h={76}
              gifW={100}
              gifH={100}
              divClassName="absolute top-[434px] -right-[157px] "
              onHover={() => setActiveText(texts[1])}
              isActive={activeText === texts[1]}
            />
            <Icons
              icon="frame"
              gif={"frame"}
              title="Creativity"
              w={79}
              h={76.99}
              gifW={79}
              gifH={79}
              divClassName="absolute top-[186px] left-[226px]"
              gifClassName="mt-2"
              onHover={() => setActiveText(texts[3])}
              isActive={activeText === texts[3]}
            />
            <Icons
              icon="empowering"
              gif={"empowering"}
              title="Experience"
              w={76}
              h={76}
              gifW={92}
              gifH={92}
              divClassName="absolute top-[434px] right-[132px] "
              onHover={() => setActiveText(texts[4])}
              isActive={activeText === texts[4]}
            />
            <Icons
              icon="value"
              gif={"value"}
              title="Value"
              w={69.39}
              h={69.39}
              gifW={69.39}
              gifH={69.39}
              divClassName="absolute top-[193px] right-[250px]"
              onHover={() => setActiveText(texts[2])}
              isActive={activeText === texts[2]}
            />
            <div className="absolute top-[55px] left-[64px]">
              <Arrow1 />
            </div>
            <div className="absolute top-[310px] left-[235px]">
              <Arrow2 />
            </div>
            <div className="absolute top-[538px] -left-[55px]">
              <Arrow3 />
            </div>
            <div className="absolute top-[311px] right-[245px]">
              <Arrow4 />
            </div>
            <div className="absolute top-[50px] right-[94px]">
              <Arrow5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface IconsProps {
  w: number;
  h: number;
  gif: string;
  gifW: number;
  icon: string;
  gifH: number;
  title: string;
  isActive: boolean;
  onHover: () => void;
  divClassName?: ClassValue;
  gifClassName?: ClassValue;
}

const Icons = ({
  w,
  h,
  gif,
  icon,
  gifW,
  gifH,
  title,
  onHover,
  isActive,
  divClassName,
  gifClassName,
}: IconsProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-[6px] mr-2 relative",
        divClassName
      )}
      onMouseEnter={onHover}
    >
      {isActive ? (
        <div style={{ width: w, height: h }}>
          <Image
            src={`/icons/our-approach/${gif}.gif`}
            alt={title}
            width={gifW}
            height={gifH}
            className={cn("absolute", gifClassName)}
          />
        </div>
      ) : (
        <Image
          src={`/icons/our-approach/${icon}.svg`}
          alt={title}
          width={w}
          height={h}
        />
      )}
      <p
        className={cn(
          frutigerRegular.className,
          "text-[28px] leading-[32px] font-medium text-primary",
          { "text-white": isActive }
        )}
      >
        {title}
      </p>
    </div>
  );
};
