import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { frutigerBold } from "../../public/font/font";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const spanStyle = cn(frutigerBold.className, "text-white");
