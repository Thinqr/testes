"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { frutigerRegular } from "../../public/font/font";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "CustomBlaek",
    href: "/customblaek",
  },

  {
    label: "BlaekMind",
    href: "/blaekmind",
  },

  {
    label: "About us",
    href: "/about-us",
  },

  {
    label: "Contact us",
    href: "/contact-us",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#22222224] z-50 backdrop-blur-md relative ">
      <div className="py-3 w-full max-w-[1200px] mx-auto flex justify-between items-center px-5 md:px-[30px] sm:px-[20px]">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={54} height={31} />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-10 font-normal text-18px">
            {navItems.map((item) => (
              <li
                key={item.href}
                className={`${
                  frutigerRegular.className
                } transition-colors hover:text-white ${
                  pathname === item.href ? "" : "text-white/60"
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <div
          className={`md:hidden  fixed top-[60px] right-0 w-full h-screen bg-black/95 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full hidden"
          }`}
        >
          <nav className="p-6">
            <ul className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className={`${
                    frutigerRegular.className
                  } text-2xl transition-colors hover:text-white ${
                    pathname === item.href ? "" : "text-white/60"
                  }`}
                >
                  <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
