import { cn } from "@/lib/utils";
import { frutigerBold } from "@/public/font/font";
import React from "react";

export default function GradientTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        frutigerBold.className,
        "text-white  text-[48px]  leading-[58px] bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#6AB2EA] bg-clip-text text-transparent",
        className
      )}
    >
      {title}
    </h3>
  );
}
