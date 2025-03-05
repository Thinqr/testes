import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { frutigerBold, frutigerRegular } from "../../public/font/font";
import ArrowRight from "../../public/icons/arrow-right";

const buttonVariants = cva(
  `rounded-full border text-base leading-[20px] transition-all duration-300 ${frutigerRegular.className}`,
  {
    variants: {
      variant: {
        default:
          "bg-[#F7F5F5] border-[#F7F5F5] text-black hover:bg-[#21212A] hover:text-white hover:border-[#44444A]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-input",
        text: `hover:bg-accent hover:text-accent-foreground border-none flex items-center gap-x-2 hover:underline hover:${frutigerBold.className}`,
      },
      size: {
        default: "px-4 py-[14px] px-12 h-[58px]",
        secondary: "h-9 rounded-md px-3",
        text: "pr-[32px] pl-[36px] h-[58px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {variant === "text" && <ArrowRight className="w-4 h-4" />}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
