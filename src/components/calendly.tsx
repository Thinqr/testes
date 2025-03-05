"use client";
import Script from "next/script";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export const ScheduleMeetingCandly = () => {
  if (typeof window !== "undefined" && window.Calendly) {
    window.Calendly.initPopupWidget({
      url: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
    });
  }

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
    </>
  );
};
