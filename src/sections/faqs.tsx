"use client";

import Section from "@/components/section-container";
import GradientTitle from "@/components/title";
import { cn } from "@/lib/utils";
import { frutigerBold, frutigerRegular } from "@/public/font/font";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "How closely do you work with clients during development?",
    answer:
      "We work hand in hand with you throughout the entire process, from concept to deployment. Regular feedback loops ensure that the software aligns perfectly with your needs.",
  },
  {
    question: "Can your software be integrated into our existing systems?",
    answer:
      "Yes, we design our solutions to integrate smoothly via APIs and other standard interfaces. Before development starts, we analyze your existing infrastructure to ensure seamless compatibility.",
  },
  {
    question: "How do you ensure the quality of your software?",
    answer:
      "We follow strict testing processes, including automated and manual testing, to guarantee reliability. Additionally, we validate the software in real-world scenarios and refine it based on user feedback.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Section className="py-[60px] gap-[45px] px-0">
      <div className="flex flex-col items-center">
        <GradientTitle title="FAQ" />
      </div>
      <div className="flex flex-col gap-[20px] px-[40px]">
        {faqs.map((faq, faqIndex) => (
          <div
            key={faq.question}
            className="p-[1px] rounded-[10px]"
            style={{
              background:
                selectedIndex === faqIndex
                  ? "linear-gradient(0deg, rgba(61, 99, 154, 0.6), rgba(61, 99, 154, 0.6)), conic-gradient(from 268.79deg at 14.71% 44.43%, rgba(34, 63, 107, 0.6) -0.97deg, rgba(34, 34, 34, 0.6) 100.56deg, rgba(34, 34, 34, 0.8) 269.32deg, rgba(34, 63, 107, 0.6) 359.03deg, rgba(34, 34, 34, 0.6) 460.56deg)"
                  : "",
            }}
          >
            <div className="bg-black rounded-[10px] p-6 relative">
              <img
                src="/icons/blur-faq.svg"
                alt="blur"
                className="absolute left-0 top-0 bottom-0 h-full rounded-l-[10px]"
              />
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <h3
                  className={cn(
                    frutigerBold.className,
                    "text-2xl tracking-[-0.27]",
                    selectedIndex !== faqIndex && "text-white/60"
                  )}
                >
                  {faq.question}
                </h3>

                <svg
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "transition-transform duration-300 -rotate-180",
                    selectedIndex === faqIndex && "rotate-0 "
                  )}
                >
                  <path
                    d="M13.5 7L7.5 1L1.5 7"
                    stroke="white"
                    className={cn(
                      "stroke-white/30",
                      selectedIndex === faqIndex && "stroke-white"
                    )}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0 }}
                    animate={{ height: "auto", marginTop: 8 }}
                    exit={{ height: 0, marginTop: 0 }}
                    className={twMerge("overflow-hidden")}
                  >
                    <p
                      className={cn(
                        frutigerRegular.className,
                        "text-white leading-[20px]"
                      )}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
