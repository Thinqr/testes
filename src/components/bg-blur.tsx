import Image from "next/image";
import React from "react";

export default function BgBlur({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="relative" {...rest}>
      <div className="absolute top-0 left-0 w-full h-full blur-[150px] pt-40 flex justify-center">
        <Image
          src="/images/container.png"
          alt="logo"
          width={1440}
          height={1697}
          quality={100}
          className="w-[1440px] h-[1100px]"
        />
      </div>
      {children}
    </div>
  );
}
