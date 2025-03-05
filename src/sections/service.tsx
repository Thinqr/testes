"use client";

import React, { useState } from "react";
import Section from "@/components/section-container";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { frutigerBold, frutigerRegular } from "@/public/font/font";
import { Button } from "@/components/button";
import { services } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import XIcon from "@/public/icons/x2";

export default function ServiceSection() {
  const [openServices, setOpenServices] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenServices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Section className="py-[30px] md:py-[60px] px-6">
      {services.map((service, index) => (
        <div
          key={service.title}
          className="relative h-[660px] rounded-3xl overflow-hidden"
        >
          <Image
            src={service.img}
            alt={service.title}
            width={1202}
            height={660}
            quality={100}
            className="max-sm:h-[300px] h-full hidden lg:block"
          />
          <Image
            src={service.mobileImg}
            alt={service.title}
            width={1202}
            height={660}
            quality={100}
            className=" md:h-[960px] block lg:hidden"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#0000001A] to-[#00000080]" />
          <div
            className="absolute left-0 px-6 md:px-[30px] lg:px-[60px] py-[36px] bottom-0 top-0 flex flex-col justify-end gap-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 38.11%, rgba(0, 0, 0, 0.33) 60.89%, rgba(0, 0, 0, 0.8) 100%)",
            }}
          >
            <div className="flex flex-col gap-2">
              <h3
                className={cn(
                  frutigerBold.className,
                  "text-white text-[38px] md:text-42px leading-[42px] md:leading-[58px]"
                )}
              >
                {service.title}
              </h3>
              <p
                className={cn(
                  frutigerRegular.className,
                  "text-white/60 text-[18px] leading-[24px] md:text-2xl tracking-[-0.24px]"
                )}
              >
                {service.paragraph}
              </p>
            </div>
            <Button
              variant="default"
              className="w-fit"
              onClick={() => toggleSection(index)}
            >
              Learn More
            </Button>
          </div>
          <AnimatePresence>
            {openServices.includes(index) && (
              <motion.div
                className="absolute inset-0 bg-[#000000]/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {openServices.includes(index) && (
              <motion.div
                className="absolute inset-0 bg-[#00000014] text-white rounded-t-[20px] pt-[54px] pb-[16px] mx-4 md:mx-[32px] mt-6 md:mt-[34px] px-4 md:px-[60px] overflow-y-hidden"
                initial={{ y: 660 }}
                animate={{ y: 0 }}
                exit={{ y: 660 }}
                transition={{ duration: 0.5 }}
                style={{
                  backdropFilter: "blur(100px)",
                }}
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="size-[32px] md:size-[44px] rounded-full absolute top-4 md:top-9 right-4 md:right-9 flex items-center justify-center group bg-[#22222233] border border-transparent hover:border-[#44444A] transition-all duration-300 ease-out"
                >
                  <XIcon className="group-hover:fill-white" />
                </button>
                <div className="flex flex-col gap-6 overflow-y-auto md:h-[528px] h-[550px] hide-scrollbar mb-10">
                  <h3
                    className={cn(
                      frutigerBold.className,
                      "text-white text-[38px] md:text-42px leading-[42px] md:leading-[58px]"
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      frutigerRegular.className,
                      "text-white/60 text-[18px] leading-[24px] md:text-2xl tracking-[-0.24px]"
                    )}
                  >
                    {service.longerParagraph}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </Section>
  );
}
