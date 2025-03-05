"use client";

import React, { useState } from "react";
import Section from "@/components/section-container";
import { cn, spanStyle } from "@/lib/utils";
import { frutigerRegular, frutigerBold } from "@/public/font/font";
import Image from "next/image";
import { Button } from "@/components/button";
import { features } from "@/lib/constants";
import GradientTitle from "@/components/title";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import XIcon from "@/public/icons/x2";

export default function UniqueDesigns() {
  const [openFeatures, setOpenFeatures] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenFeatures((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Section className="py-[60px] pt-[56px]">
      <div className="flex flex-col gap-[26px] px-6 md:px-[60px]">
        <div className="max-w-[500px]">
          <GradientTitle
            className="max-sm:text-[60px] max-sm:!leading-[70px]"
            title="Unique Designs for Innovative Ideas"
          />
        </div>
        <p
          className={cn(
            frutigerRegular.className,
            "text-2xl tracking-[-0.24px] text-white/60"
          )}
        >
          Our <span className={spanStyle}>UX/UI designs</span> prioritize
          usability and adaptability, ensuring that each interaction is{" "}
          <span className={spanStyle}>smooth, impactful,</span> and{" "}
          <span className={spanStyle}>tailored</span> to enhance{" "}
          <span className={spanStyle}>user engagement</span> on every device.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-6 md:px-10 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="relative overflow-hidden rounded-3xl">
            <Image
              src={feature.img}
              alt={feature.title}
              width={588}
              height={589}
              quality={100}
              className={cn(
                "w-full object-cover h-[589px]",
                index === 0 && "rotate-[1.44deg]"
              )}
            />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#0000001A] to-[#00000080]" />
            <div className="absolute top-0 left-0 px-[60px] py-[36px] bottom-0 flex flex-col items-center justify-center right-0  gap-4">
              <div className="flex flex-col items-center gap-4">
                <feature.icon />
                <h3
                  className={cn(
                    frutigerBold.className,
                    "text-[38px] leading-[42px] text-white"
                  )}
                >
                  {feature.title}
                </h3>
              </div>
              <Button variant="default" onClick={() => toggleSection(index)}>
                Learn More
              </Button>
            </div>
            <AnimatePresence>
              {openFeatures.includes(index) && (
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
              {openFeatures.includes(index) && (
                <motion.div
                  className="absolute inset-0 bg-[#00000014] text-white rounded-t-[20px] pt-[54px] pb-[16px] mx-4 mt-4 px-4 overflow-y-hidden"
                  initial={{ y: 589 }}
                  animate={{ y: 0 }}
                  exit={{ y: 589 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    backdropFilter: "blur(100px)",
                  }}
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="size-[38] rounded-full absolute top-4 right-4 flex items-center justify-center group bg-[#222222] border border-transparent hover:border-[#44444A] transition-all duration-300 ease-out"
                  >
                    <XIcon className="group-hover:fill-white size-[14px]" />
                  </button>
                  <div className="flex flex-col gap-6 overflow-y-auto h-[528px] hide-scrollbar mb-10">
                    <h3
                      className={cn(
                        frutigerBold.className,
                        "text-white text-[38px] leading-[42px]"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={cn(
                        frutigerRegular.className,
                        "text-white/60 text-[18px] leading-[24px] tracking-[-0.5]"
                      )}
                    >
                      {feature.paragraph}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}
