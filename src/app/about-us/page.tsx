import Header from "@/sections/header";
import Footer from "@/sections/footer";
import ScheduleMeeting from "@/sections/Schedule-meeting";
import { Metadata } from "next";
import { TeamSection } from "../page";
import { spanStyle } from "@/lib/utils";
import Section from "@/components/section-container";
import Image from "next/image";
import GradientTitle from "@/components/title";
import { frutigerBold, frutigerRegular } from "@/public/font/font";
import { cn } from "@/lib/utils";
import Approach from "@/sections/approach";
import BgBlur from "@/components/bg-blur";
import AboutUsSection from "@/sections/about";

export const metadata: Metadata = {
  title: "About Us",
  description: "Born from academic research, we bridge science and innovation.",
};

export default function Home() {
  return (
    <section className="">
      {/* <Image
          src="/images/about-us.png"
          alt="about-us-bg"
          width={1440}
          height={860}
          quality={100}
          className="absolute top-0 left-0 mx-auto right-0 max-[1540px]:w-full z-[-1] hidden min-[1440px]:flex"
        />
        <div className="w-full absolute left-0 right-0 top-0 h-[912px] items-center justify-center hidden lg:flex">
          <div className="h-full w-[291px] bg-[#00000080] blur-[240px]" />
        </div>
        <div className="w-full  absolute left-0 right-0 max-lg:z-[-1] -top-20 h-[2555px] flex items-center justify-center">
          <Image
            src="/images/visual-light.png"
            alt="about-us-bg"
            width={1440}
            height={2555}
            quality={100}
          />
        </div> */}
      <HeroSection />
      <AboutUsSection />
      <Meaning />
      <Approach />
      <BgBlur>
        <TeamSection />
        <ScheduleMeeting />
      </BgBlur>
      <Footer />
    </section>
  );
}

const HeroSection = () => {
  return (
    <div className="snap-start">
      <Header />
      <div className="max-[1440px]:bg-[url('/images/about-us.png')] max-[1440px]:bg-cover max-[1440px]:bg-center max-[1440px]:bg-no-repeat">
        <Section className="h-[745px] relative flex items-center justify-center px-5">
          <div className="relative z-10 flex flex-col items-center gap-[16px]">
            <GradientTitle title="Who we are" />
            <h3
              className={cn(
                frutigerBold.className,
                "text-white  text-[32px] md:text-[48px] leading-[42px] md:leading-[58px] text-center"
              )}
            >
              Born from academic research, <br />
              we bridge science and innovation.
            </h3>
          </div>
        </Section>
      </div>
    </div>
  );
};

const Meaning = () => {
  return (
    <div className="relative max-lg:bg-[url('/images/meaning-lines.png')] max-lg:bg-cover max-lg:bg-center max-lg:bg-no-repeat snap-start">
      <Image
        src="/images/meaning-lines.png"
        alt="meaning-lines"
        width={1440}
        height={800}
        quality={100}
        className="absolute hidden lg:block  top-0 left-0 h-full max-[1540px]:w-full mx-auto right-0"
      />
      <Section className=" h-[800px] text-center md:pt-[238px] gap-[38px] relative px-5">
        <div className="flex flex-col items-center gap-3">
          <GradientTitle title="The Meaning" />
          <Image
            src="/images/blaekbit.png"
            alt="blaekbit"
            width={404}
            height={45}
            className="max-sm:w-[343px] max-sm:h-[33.75px] md:w-[404px] md:h-[45px] lg:w-[404px] lg:h-[45px]"
          />
        </div>
        <div
          className={cn(
            frutigerRegular.className,
            "text-[20px] md:text-[28px] leading-[24px] md:leading-[32px] tracking-[-0.3] text-white/60",
            "px-[60px] flex flex-col gap-4 max-w-[740px] mx-auto"
          )}
        >
          <p>
            The fusion of <span className={spanStyle}>[BLAEK]</span>,{" "}
            <span className={spanStyle}>Danish</span> for{" "}
            <span className={spanStyle}>ink</span>, and{" "}
            <span className={spanStyle}>[BIT]</span>,{" "}
            <span className={spanStyle}>the fundamental</span> building{" "}
            <span className={spanStyle}>block of computing</span>, symbolizes{" "}
            <span className={spanStyle}>our mission</span>:
          </p>
          <p>
            <span className={spanStyle}>Bringing</span> stories{" "}
            <span className={spanStyle}>to life</span> through{" "}
            <span className={spanStyle}>Blaekbit software</span>.
          </p>
        </div>
      </Section>
    </div>
  );
};
