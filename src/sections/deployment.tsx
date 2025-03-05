"use client";

import Section from "@/components/section-container";
import GradientTitle from "@/components/title";
import { cn, spanStyle } from "@/lib/utils";
import { frutigerRegular } from "@/public/font/font";

export default function DeploymentSection() {
  return (
    <div>
      <Section className="py-[60px] pt-[57px] ">
        <div className="flex flex-col gap-[26px] px-6 md:px-[30px] lg:px-[60px]">
          <div className="max-w-[500px]">
            <GradientTitle title="Deployment" className="max-md:to-70%" />
          </div>
          <p
            className={cn(
              frutigerRegular.className,
              "text-2xl tracking-[-0.24px] text-white/60"
            )}
          >
            <span className={spanStyle}>Creative design</span> ignites the
            spark, <span className={spanStyle}>programming</span> provides the
            momentum, and with each precise action,{" "}
            <span className={spanStyle}>ideas</span> take form. Until the moment
            comes: <span className={spanStyle}>the launch</span> is{" "}
            <span className={spanStyle}>seamless</span> and{" "}
            <span className={spanStyle}>efficient</span>. Whether it&apos;s into
            the vast <span className={spanStyle}>digital space</span>, your{" "}
            <span className={spanStyle}>servers</span>, or directly into{" "}
            <span className={spanStyle}>app stores</span> — our focus is
            unwavering, always ready for{" "}
            <span className={spanStyle}>your next</span> great leap.
          </p>
        </div>
      </Section>
      <div className="grid grid-cols-2 gap-6 h-[800px] relative w-full min-[1920px]:max-w-[1440px] mx-auto">
        <video
          id="background-video"
          autoPlay={true}
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        >
          <source src="/videos/rocket.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
