"use client";

import Section from "@/components/section-container";
import { qualities, services2 } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import Prev from "@/public/icons/prev";
import Next from "@/public/icons/next";
import { frutigerBold, frutigerRegular } from "@/public/font/font";
import Link from "next/link";
import { useRef, useState } from "react";

export default function HomeServices() {
  const [direction, setDirection] = useState<"left" | "right">("left");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    setDirection(dir);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount =
        dir === "left" ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-10">
      <Section className="py-10 md:py-[80px] max-w-[1280px] h-fit  px-0">
        <div className="border-2 border-[#3D639A80] rounded-[16px] md:rounded-[26px] p-[3px]">
          <div className="border-2 border-[#3D639A60] rounded-xl md:rounded-3xl">
            <div className="relative z-10 flex flex-col items-center gap-6 md:gap-[60px] py-10 md:py-[75px]">
              <div className="flex flex-col items-center mt-4 md:mt-[19px]">
                <div className="flex flex-col items-center max-sm:px-[24px] max-sm:gap-[8px]">
                  <Image
                    src="/images/customblaek.png"
                    alt="logo"
                    width={370}
                    height={58}
                    quality={100}
                    className="w-3/4 md:w-auto mb-4 md:mb-[21px]"
                  />
                  <h2
                    className={cn(
                      frutigerRegular.className,
                      "text-center text-[34px] md:text-[48px] mb-4 md:mb-[34px] leading-tight md:leading-[58px] text-white",
                      "text-shadow"
                    )}
                  >
                    Your visions take flight.
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-2 sm:pl-8">
                    <Link href="/customblaek">
                      <Button variant="default" className="w-full sm:w-auto">
                        Learn more
                      </Button>
                    </Link>
                    <Link href="/contact-us">
                      <Button
                        variant="text"
                        size="text"
                        className="w-full sm:w-auto"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full gap-6">
                <div className="flex gap-x-4 w-full justify-center md:justify-end md:pr-[158px]">
                  <button
                    className={cn(
                      "bg-[#191F2A] rounded-lg w-[40px] h-[40px] flex items-center justify-center transition-all duration-300 group",
                      direction === "right" && "hover:bg-[#29303E]"
                    )}
                    onClick={() => scroll("left")}
                    disabled={direction === "left"}
                  >
                    <Prev
                      className={cn(
                        "transition-all duration-300 opacity-40",
                        direction === "right" && "opacity-100"
                      )}
                    />
                  </button>
                  <button
                    className={cn(
                      "bg-[#29303E] rounded-lg w-[40px] h-[40px] flex items-center justify-center group transition-all duration-300",
                      direction === "left" && "hover:bg-[#29303E]"
                    )}
                    onClick={() => scroll("right")}
                    disabled={direction === "right"}
                  >
                    <Next
                      className={cn(
                        "transition-all duration-300 opacity-40",
                        direction === "left" && "opacity-100"
                      )}
                    />
                  </button>
                </div>

                <div className="truncate">
                  <div
                    className="flex gap-x-3 md:gap-x-6 overflow-x-auto hide-scrollbar"
                    ref={scrollContainerRef}
                  >
                    {services2.map((service, index) => (
                      <div
                        className={cn(
                          "h-[400px] sm:h-[500px] md:h-[680px] w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 relative border border-transparent hover:border-[#273a579c] transition-all duration-500 ease-out rounded-2xl overflow-hidden",
                          index === 0 && "ml-4 sm:ml-6 md:ml-[75px]",
                          index === services2.length - 1 &&
                            "mr-4 sm:mr-6 md:mr-[75px]"
                        )}
                        key={index}
                      >
                        <Image
                          src={service.img}
                          alt={service.title.toString()}
                          width={360}
                          height={680}
                          quality={100}
                          className="object-cover h-full w-full"
                        />
                        <div className="absolute top-0 left-0 right-0 text-white px-4 sm:px-[23px] py-5 sm:py-[32px] flex flex-col gap-1">
                          <p
                            className={cn(
                              frutigerRegular.className,
                              "text-xs sm:text-sm text-white bg-gradient-to-r from-[#FFFFFF] to-[#6AB2EA] bg-clip-text text-transparent"
                            )}
                          >
                            {service.subTitle}
                          </p>
                          <h3
                            className={cn(
                              frutigerBold.className,
                              "text-xl sm:text-2xl md:text-[32px] leading-tight md:leading-[32px]"
                            )}
                          >
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-x-6 h-auto md:h-full relative px-4 w-full md:px-[75px]">
                <div className="absolute left-1/2 -translate-x-1/2 top-3 max-sm:top-0 h-[336px] w-[376px] md:h-[686px] md:w-[724px]">
                  <Image
                    src="/images/conectores.png"
                    alt="blur"
                    width={724}
                    height={686}
                    quality={100}
                    className="md:h-full md:w-full object-contain md:hidden"
                  />
                </div>
                {qualities.map((quality, index) => (
                  <div
                    className="h-[180px] w-full md:h-[350px]  flex-col gap-4 md:gap-6 rounded-[20px] bg-black hover:bg-[#11111A] flex items-center justify-center min-w-0 relative transition-all duration-500 ease-out  border border-transparent hover:border-[#273a579c] p-4"
                    key={index}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/icons/blur.svg"
                      alt="blur"
                      className="absolute left-0 max-sm:hidden"
                    />
                    <img
                      src="/icons/blur-mobile.svg"
                      alt="blur"
                      className="absolute left-0 sm:hidden"
                    />
                    <Image
                      src={quality.img}
                      alt={quality.title}
                      width={50}
                      height={50}
                      className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
                    />
                    <h3
                      className={cn(
                        frutigerBold.className,
                        "text-white text-lg sm:text-xl md:text-[24px] leading-tight md:leading-[24px] pb-2 md:pb-6 text-center"
                      )}
                    >
                      {quality.title}
                    </h3>
                    {index < qualities.length - 1 && (
                      <div className="absolute right-[-24px] md:right-[-175px] top-1/2 transform -translate-y-1/2 w-auto z-[-1] hidden lg:block">
                        <Image
                          src="/images/Lines.png"
                          alt="blur"
                          width={280}
                          height={202}
                          quality={100}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
