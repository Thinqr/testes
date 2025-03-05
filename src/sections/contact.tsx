"use client";

import ContactForm from "@/components/contact-form";
import Section from "@/components/section-container";
import GradientTitle from "@/components/title";
import React from "react";

export default function Contact() {
  return (
    <Section className="pt-[100px] pb-[60px] flex flex-col gap-10 mt-[-55px]">
      <div className="flex flex-col py-[32px] pb-[36px]">
        <div className=" px-5 md:px-0 md:w-[426px] mx-auto flex flex-col gap-[27px]">
          <GradientTitle
            title="Contact Us"
            className="text-[32px] leading-[40px] "
          />
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
