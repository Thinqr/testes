import Header from "@/sections/header";
import Footer from "@/sections/footer";
import ScheduleMeeting from "@/sections/Schedule-meeting";
import { Fragment } from "react";
import { cn, spanStyle } from "@/lib/utils";
import { frutigerBold, frutigerRegular } from "@/public/font/font";
import Section from "@/components/section-container";
import HomeServices from "@/sections/home-services";
import Image from "next/image";
import { Button } from "@/components/button";
import GradientTitle from "@/components/title";
import Faqs from "@/sections/faqs";
import Link from "next/link";
import BgBlur from "@/components/bg-blur";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <HomeServices />
      <BleakMind />
      <BgBlur>
        <TeamSection />
        <Faqs />
        <ScheduleMeeting />
      </BgBlur>
      <Footer />
    </Fragment>
  );
}

const HeroSection = () => {
  return (
    <>
      <section className="relative h-[880px]">
        <Header />
        <video
          id="background-video"
          loop
          autoPlay
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/videos/hero-section.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 h-full flex items-center justify-center mt-[-65px]">
          <h1
            className={cn(
              "text-white text-center text-[48px] md:text-[68px] leading-[58px] md:leading-[68px] tracking-[-1.9px] lg:text-[100px] lg:leading-[110px] lg:tracking-[-1.9px]",
              frutigerBold.className
            )}
          >
            Create Visions.
          </h1>
        </div>
      </section>
      <Section className="pb-[34px] pt-[56px] px-0">
        <div className="px-4 lg:px-10">
          <p
            className={cn(
              frutigerRegular.className,
              "text-[34px] md:text-[48px] leading-[38px] md:leading-[58px] tracking-[-0.5] text-white/60"
            )}
          >
            Where <span className={spanStyle}>AI</span> and{" "}
            <span className={spanStyle}>code</span> meet{" "}
            <span className={spanStyle}>creativity</span>, we{" "}
            <span className={spanStyle}>build software</span> that{" "}
            <span className={spanStyle}>transforms ideas</span> into{" "}
            <span className={spanStyle}>impact</span>.
          </p>
        </div>
      </Section>
    </>
  );
};

const BleakMind = () => {
  return (
    <div
      className="relative overflow-hidden mx-auto"
      style={{
        background: "linear-gradient(180deg, #000000 19.57%, #3D639A 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 w-full h-[383px] z-10"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0) 27.02%, #000000 100%)",
        }}
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex items-center justify-center">
        <Image
          src="/images/spiral.png"
          alt="logo"
          width={1440}
          height={740}
          quality={100}
          className="scale-110"
        />
      </div>
      <Section className="flex flex-col items-center h-[550px] md:h-[650px] lg:h-[740px] relative">
        <div className="flex flex-col items-center mt-[29px] z-10">
          <div className="flex flex-col items-center ">
            <Image
              src="/images/bleakmind.png"
              alt="logo"
              width={304}
              height={38}
              quality={100}
              className="max-sm:w-[223px] max-sm:h-[27.88px] mb-[22px] "
            />

            <h2
              className={cn(
                frutigerRegular.className,
                "px-5  text-center max-sm:text-[34px] md:text-[48px] mb-[34px]  leading-[38px] md:leading-[58px] text-white max-w-[646px] mx-auto"
              )}
            >
              Next-Generation Prediction AI. For all of us.
            </h2>
            <div className="flex gap-x-2">
              <Link href="/blaekmind">
                <Button variant="default">Learn more</Button>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 left-0 flex justify-center  px-6 md:px-[30px] lg:px-[60px] ">
            <Image
              src="/images/blaekmind-shadows.png"
              alt="logo"
              width={1040}
              height={1000}
              quality={100}
              className="  max-sm:-top-10 max-lg:-top-[5rem] lg:mb-[22px] absolute -top-24 left-1/2 -translate-x-1/2 "
            />
            <Image
              src="/images/bleakmind-dashboard.png"
              alt="logo"
              width={842}
              height={689}
              quality={100}
              className=" z-10 !w-[91%] max-lg:w-[88%] lg:w-full "
              priority
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export const TeamSection = () => {
  return (
    <div className="relative overflow-hidden snap-start">
      <ConnectionsDesktopTablet />
      <ConnectionsMobile />
      <Section className="py-[60px] pt-[54px] relative">
        <div className="flex flex-col items-center">
          <GradientTitle title="Our Team" />
        </div>
        <DesktopTablet />
        <Mobile />
      </Section>
    </div>
  );
};

const DesktopTablet = () => {
  return (
    <div className="relative h-[342.66px] lg:h-[585px] w-full  items-center justify-center hidden sm:flex">
      <div className="max-w-[1200px] mx-auto lg:px-10 md:px-[14px] flex mt-[4px] z-10 absolute w-[732px] lg:w-[1200px]">
        {/* left */}
        <div className="flex flex-col md:gap-y-[36px] gap-y-[20.88px] justify-center lg:mr-5 mr-2">
          <TeamButton />
          <TeamButton />
          <TeamButton />
        </div>
        {/* middle */}
        <div className="flex gap-x-[5px]">
          {/* left */}
          <div className="flex gap-x-[1px]">
            <div className="flex flex-col gap-[19px] justify-center items-center">
              <TeamButton />
              <TeamMember
                src="/images/ruben.svg"
                name="Ruben Schwan"
                position="Founder"
              />
              <TeamButton />
            </div>
            <div className="flex flex-col md:gap-y-[36px] gap-y-[20.88px]">
              <TeamButton />
              <TeamButton />
              <TeamButton />
              <TeamButton />
            </div>
          </div>
          {/* middle */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <TeamButton />
            <AddButton />
            <TeamButton />
          </div>
          {/* right */}
          <div className="flex gap-x-[1px]">
            <div className="flex flex-col md:gap-y-[36px] gap-y-[20.88px]">
              <TeamButton />
              <TeamButton />
              <TeamButton />
              <TeamButton />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <TeamButton />
              <TeamMember
                src="/images/julius.svg"
                name="Julius Zehnder"
                position="Founder"
              />
              <TeamButton />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col md:gap-y-[36px] gap-y-[20.88px] justify-center lg:ml-5 ml-2">
          <TeamButton />
          <TeamButton />
          <TeamButton />
        </div>
      </div>
    </div>
  );
};

const ConnectionsDesktopTablet = () => {
  return (
    <div className="hidden sm:flex">
      <Image
        src="/images/connections-center.png"
        alt="logo"
        width={942.07}
        height={492.8}
        quality={100}
        className="absolute bottom-0 left-0 right-0 top-[201px] z-[-1] mx-auto lg:w-[942.07px] lg:h-[492.8px] w-[600px] h-[300px]"
      />
      <div className="absolute left-1/2 -translate-x-1/2 flex top-[271px] gap-[500px]">
        <Image
          src="/images/connections-left.svg"
          alt="logo"
          width={344.57}
          height={364.97}
          quality={100}
          className="absolute right-[640px]"
        />
        <Image
          src="/images/connections-right.svg"
          alt="logo"
          width={344.57}
          height={365.01}
          quality={100}
          className="opacity-0"
        />
        <Image
          src="/images/connections-right.svg"
          alt="logo"
          width={344.57}
          height={365.01}
          quality={100}
          className="absolute left-[640px] "
        />
      </div>
    </div>
  );
};

const ConnectionsMobile = () => {
  return (
    <div className="flex sm:hidden">
      <Image
        src="/images/connections-center-mobile.svg"
        alt="logo"
        width={305}
        height={272}
        quality={100}
        className="absolute bottom-0 left-0 right-0 top-[176px] z-[-1] mx-auto"
      />
      <div className="absolute left-1/2 -translate-x-1/2 flex top-[210px] gap-[500px]">
        <Image
          src="/images/connections-left-mobile.svg"
          alt="logo"
          width={210}
          height={217}
          quality={100}
          className="absolute right-[250px]"
        />
        <Image
          src="/images/connections-right-mobile.svg"
          alt="logo"
          width={344.57}
          height={365.01}
          quality={100}
          className="w-[186px] h-[365.01px] opacity-0"
        />
        <Image
          src="/images/connections-right-mobile.svg"
          alt="logo"
          width={220}
          height={300}
          quality={100}
          className=" absolute left-[255px] mt-2"
        />
      </div>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="relative h-[317.37px] w-full  items-center justify-center flex sm:hidden">
      <div className="w-[360px] mx-auto lg:px-10 md:px-[14px] flex mt-[4px] z-10 absolute">
        {/* left */}
        <div className="flex flex-col gap-[14.27px] justify-center">
          <TeamButton />
          <TeamButton />
          <TeamButton />
          <TeamButton />
        </div>
        {/* middle */}
        <div className="flex">
          {/* left */}
          <div className="flex">
            <div className="flex flex-col gap-[6.34px] justify-center items-center">
              <TeamButton />
              <TeamButton />
              <TeamMember
                src="/images/ruben.svg"
                name="Ruben Schwan"
                position="Founder"
              />
              <TeamButton />
              <TeamButton />
            </div>
          </div>
          {/* middle */}
          <div className="flex flex-col gap-[6.34px] justify-center items-center -mx-2">
            <TeamButton />
            <TeamButton />
            <TeamButton />
            <TeamButton />
            <AddButton />
          </div>
          {/* right */}
          <div className="flex">
            <div className="flex flex-col gap-[6.34px] justify-center items-center">
              <TeamButton />
              <TeamButton />
              <TeamMember
                src="/images/julius.svg"
                name="Julius Zehnder"
                position="Founder"
              />
              <TeamButton />
              <TeamButton />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-[14.27px] justify-center">
          <TeamButton />
          <TeamButton />
          <TeamButton />
          <TeamButton />
        </div>
      </div>
    </div>
  );
};

const TeamMember = ({
  src,
  name,
  position,
}: {
  src: string;
  name: string;
  position: string;
}) => {
  return (
    <div className="relative group overflow-hidden rounded-full">
      <Image
        src="/images/photo-container.png"
        alt="background"
        width={200}
        height={200}
        quality={100}
        className="absolute top-0 left-0 right-0 bottom-0 z-[-1]"
      />
      <Image
        src={src}
        alt="profile"
        width={200}
        height={200}
        quality={100}
        className="group-hover:md:scale-[.97] group-hover:scale-[.9] group-hover:md:translate-y-[5px] group-hover:translate-y-[10px] transition-all duration-300 ease-out translate-y-[10px] w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[200px] lg:h-[200px]"
      />

      <div
        className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out absolute bottom-0 px-2 py-1 w-full left-0 right-0 top-0 flex items-end justify-center pb-3"
        style={{
          background:
            "linear-gradient(180deg, rgba(6, 11, 19, 0) 65%, #060B13 90%)",
        }}
      >
        <div className="flex flex-col items-center md:gap-y-1 max-md:-mb-1.5">
          <p
            className={cn(
              frutigerRegular.className,
              "text-white text-[12px] md:text-[16px] leading-[24px]"
            )}
          >
            {name}
          </p>
          <p
            className={cn(
              frutigerRegular.className,
              "bg-gradient-to-r from-[#FFFFFF] to-[#6AB2EA] bg-clip-text text-transparent text-[10px] md:text-sm leading-[12px] "
            )}
          >
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

const TeamButton = () => {
  return (
    <div className="size-[48px] sm:size-[70px] lg:size-[119.2px] rounded-full bg-black flex items-center justify-center relative truncate group hover:bg-[#11111A] transition-all duration-300 ease-out hover:border-transparent">
      <Image
        src="/icons/logo-icon.svg"
        alt="logo-icon"
        width={46.15}
        height={30.3}
        className="group-hover:scale-125 transition-all duration-300 ease-out w-[18.29px] h-[12.01px] sm:w-[26.77px] sm:h-[17.57px] lg:w-[46.15px] lg:h-[30.3px]"
      />
      <img
        src="/icons/logo-icon-blur.svg"
        alt="blur"
        className="absolute left-0"
      />
    </div>
  );
};

const AddButton = () => {
  return (
    <div className="size-[80px] sm:size-[116px] lg:size-[200px] rounded-full bg-black flex items-center justify-center relative truncate group hover:bg-[#11111A] transition-all duration-300 ease-out cursor-pointer flex-col gap-y-2">
      <Image
        src="/icons/team-button-plus.svg"
        alt="team-button-plus"
        width={51}
        height={51}
        className="group-hover:scale-90 group-hover:translate-y-[-10px] transition-all duration-300 ease-out lg:w-[51px] lg:h-[51px] w-[20px] h-[20px]"
      />
      <p
        className={cn(
          frutigerRegular.className,
          "bg-gradient-to-r from-[#FFFFFF] to-[#6AB2EA] bg-clip-text text-transparent text-[10px] md:text-sm leading-[12px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out absolute md:bottom-9 bottom-6"
        )}
      >
        Join the Team
      </p>
      <img
        src="/icons/logo-icon-blur-xl.svg"
        alt="blur"
        className="absolute left-0"
      />
    </div>
  );
};
