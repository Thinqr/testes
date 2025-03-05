"use client";

import { Button } from "@/components/button";
import Section from "@/components/section-container";
import { cn } from "@/lib/utils";
import { frutigerBold, frutigerRegular } from "@/public/font/font";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { socialLinks } from "@/lib/constants";
import { Loader } from "lucide-react";

const companyLinks = [
  { label: "CustomBlaek", href: "/custom-blaek" },
  { label: "BlaekMind", href: "/blaek-mind" },
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/contact-us" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Impressum", href: "/impressum" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      await axios.post("/api/subscribe", { email });
      toast.success(
        "Thanks for subscribing! You'll receive our newsletter with the latest updates and offers."
      );
      setEmail("");
    } catch (error) {
      console.log(error);
      toast.error(
        "Subscription failed. Please check your email address and try again, or contact support if the issue persists."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" bg-black px-5 md:px-10 snap-start">
      <Section className="py-[30px] md:py-[60px] flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between w-full md:gap-20">
          <div className="h-[174px] flex-col flex justify-around md:justify-between">
            <Image
              src="/icons/footer-logo.svg"
              alt="logo"
              width={187}
              height={42}
            />
            <div className="flex-col flex gap-4 md:mt-48 lg:mt-0">
              <div className="flex items-center gap-x-2">
                {socialLinks.map((link) => (
                  <Link href={link.href} key={link.icon}>
                    <div className="bg-[#222222] transition-all duration-300 hover:bg-[#44444A] rounded-[4px] w-[40px] h-[40px] flex items-center justify-center">
                      <Image
                        src={link.icon}
                        alt={link.icon}
                        width={link.width}
                        height={link.height}
                      />
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-sm text-white/60 tracking-[0.6px]">
                Copyright © 2025 - Blaekbit® Software
              </p>
            </div>
          </div>
          <div className="max-w-[680px] grid md:grid-cols-2 lg:grid-cols-[160px_160px_360px] gap-5 md:gap-10 lg:gap-0">
            <div className="flex flex-col gap-6">
              <h2
                className={cn("font-semibold text-xl", frutigerBold.className)}
              >
                Company
              </h2>
              <div className="flex w-fit flex-col gap-2 text-sm text-white/60 tracking-[0.45px]">
                {companyLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.label}
                    className="hover:text-white transition-all duration-300 w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2
                className={cn(
                  "font-semibold text-xl tracking-[-0.4px]",
                  frutigerBold.className
                )}
              >
                Legal
              </h2>
              <div className="flex flex-col gap-2 text-sm text-white/60 tracking-[0.4px]">
                {legalLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.label}
                    className="hover:text-white transition-all duration-300 w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
              <h2
                className={cn("font-semibold text-xl", frutigerBold.className)}
              >
                Stay up to date
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 px-[22px] rounded-[4px] bg-white/10 border border-[#888888]/40 placeholder:text-white/60 text-sm outline-none"
                  />
                  <Button
                    onClick={handleSubscribe}
                    disabled={loading}
                    className="px-6 h-[40px] py-0 text-sm leading-5"
                  >
                    <div>
                      {loading ? (
                        <Loader className="w-4 h-4 animate-spin" />
                      ) : (
                        "Send"
                      )}
                    </div>
                  </Button>
                </div>
                <p
                  className={cn(
                    "text-sm text-white/60 tracking-[0.6px]",
                    frutigerRegular.className
                  )}
                >
                  By submitting, you agree to our{" "}
                  <span className="text-white underline">
                    Terms and Conditions
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
