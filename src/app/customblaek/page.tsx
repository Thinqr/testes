import { Button } from "@/components/button";
import Section from "@/components/section-container";
import { cn } from "@/lib/utils";
import Header from "@/sections/header";
import Image from "next/image";
import { Fragment } from "react";
import { spanStyle } from "@/lib/utils";
import Footer from "@/sections/footer";
import ScheduleMeeting from "@/sections/Schedule-meeting";
import { frutigerRegular } from "@/public/font/font";
import { Metadata } from "next";
import Link from "next/link";
import ServiceSection from "@/sections/service";
import UniqueDesigns from "@/sections/unique-designs";
import DeploymentSection from "@/sections/deployment";

export const metadata: Metadata = {
  title: "CustomBlaek",
  description:
    "Explore CustomBlaek's innovative solutions, from AI simulations to unique UX/UI designs, ensuring reliability and efficiency for your projects. Schedule a meeting or contact us to learn more.",
};

export default function Home() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <ServiceSection />
      <UniqueDesigns />
      <DeploymentSection />
      <ScheduleMeeting />
      <Footer />
    </Fragment>
  );
}

const HeroSection = () => {
  return (
    <>
      <div className="h-[calc(880px-300px)] md:h-[calc(880px-55px)]  relative px-5">
        <Image
          src="/images/line-structure.png"
          alt="logo"
          width={1440}
          height={860}
          quality={100}
          className="absolute top-0 left-0 mx-auto right-0 z-[-1] max-[1540px]:w-full hidden lg:block"
        />

        <Image
          src="/images/hero-back.png"
          alt="logo"
          width={1440}
          height={860}
          quality={100}
          className="absolute top-0 md:top-[-50px] right-0 z-[-1] max-[1540px]:w-full lg:hidden"
        />

        <div className="relative z-10 flex flex-col items-center gap-[35px] pt-[55px]">
          <Image
            src="/images/customblaek.png"
            alt="logo"
            width={303.73}
            height={31.07}
            quality={100}
          />
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Button variant="default">Schedule Meeting</Button>
            <Link href="/contact-us">
              <Button variant="text" size="text">
                Contact Us
              </Button>
            </Link>
          </div>
          <Image
            src="/images/hero-image.png"
            alt="hero-section"
            width={1017.62}
            height={610.3}
            quality={100}
            className="md:mt-[100px] lg:mt-0 "
          />
        </div>
      </div>
      <Section className="md:pb-[34px] md:pt-[56px] px-5 ">
        <p
          className={cn(
            frutigerRegular.className,
            "text-[34px] leading-[38px] md:text-[48px] md:leading-[58px] tracking-[-0.5] text-white/60"
          )}
        >
          From <span className={spanStyle}>AI simulations</span> to{" "}
          <span className={spanStyle}>apps</span>, our architectures enhance
          projects with <span className={spanStyle}>reliability</span> and{" "}
          <span className={spanStyle}>efficiency</span>. Designed for{" "}
          <span className={spanStyle}>scale</span>,{" "}
          <span className={spanStyle}>speed</span>, and{" "}
          <span className={spanStyle}>flexibility</span>, our{" "}
          <span className={spanStyle}>development</span> ensures unmatched
          efficiency in every line of <span className={spanStyle}>code</span>.
        </p>
      </Section>
    </>
  );
};
