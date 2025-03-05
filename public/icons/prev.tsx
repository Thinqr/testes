import React, { SVGProps } from "react";

export default function Prev({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 6C14.2813 6 14.5313 6.09375 14.7188 6.28125C15.125 6.65625 15.125 7.3125 14.7188 7.6875L10.4375 12L14.7188 16.2812C15.125 16.6562 15.125 17.3125 14.7188 17.6875C14.3438 18.0937 13.6875 18.0937 13.3125 17.6875L8.3125 12.6875C7.90625 12.3125 7.90625 11.6562 8.3125 11.2812L13.3125 6.28125C13.5 6.09375 13.75 6 14 6Z"
        fill="white"
      />
    </svg>
  );
}
