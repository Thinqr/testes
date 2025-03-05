import Section from "@/components/section-container";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { frutigerBold } from "@/public/font/font";
import { frutigerRegular } from "@/public/font/font";
import Script from "next/script";
import { ScheduleMeetingCandly } from "@/components/calendly";

export default function ScheduleMeeting() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <div
        className={cn(
          "h-[866px] relative flex items-center justify-center px-5 md:px-10",
          "bg-[url('/images/line-structure-bottom.png')] bg-cover bg-center bg-no-repeat snap-start"
        )}
      >
        {/* <Image
          src="/images/line-structure-bottom.png"
          alt="logo"
          width={1440}
          height={860}
          quality={100}
          className="absolute top-0 left-0 mx-auto right-0 max-[1540px]:w-full z-[-1] max-lg:hidden"
        /> */}

        <Section
          onClick={ScheduleMeetingCandly}
          className="py-[36px] flex justify-center items-center relative "
        >
          <div className="bg-white rounded-3xl max-w-[880px] w-full border p-10 cursor-pointer group hover:scale-105 transition-all duration-300">
            <div className="w-full flex justify-end">
              <Image
                src="/icons/arrow-top-right.svg"
                alt="arrow-top-right"
                width={32}
                height={32}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 "
              />
            </div>
            <div className="flex gap-[16px] flex-col">
              <Image
                src="/icons/calendar.svg"
                alt="calendar"
                width={60}
                height={60}
              />
              <div className="text-black">
                <h4
                  className={cn(
                    frutigerBold.className,
                    "text-[32px] leading-[38px]"
                  )}
                >
                  Have a virtual coffee with us!
                </h4>
                <p
                  className={cn(
                    frutigerRegular.className,
                    "text-lg text-[16px] leading-[20px]"
                  )}
                >
                  Check our availability and choose a time that works best for
                  you.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
