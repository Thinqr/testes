import React from "react";
import { cn } from "@/lib/utils";

export default function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "w-full max-w-[1200px] mx-auto  flex flex-col gap-10",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
