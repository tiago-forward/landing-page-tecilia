"use client";

import { useEffect, useState } from "react";
import { MobileMenu } from "@/components/layouts/MobileMenu";
import { navigationLinks } from "@/constants/navigationLinks";
import { socialMediaLinks } from "@/constants/socialMediaLinks";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/assets/logos/Marca D_água-02.png";

export const Header = () => {
  const [effectScroll, setEffectScroll] = useState<boolean>(false);

  const scrollHeader = () => {
    if (window.scrollY >= 40) {
      setEffectScroll(true);
    } else {
      setEffectScroll(false);
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHeader);
  }, []);

  return (
    <>
      <header
        className={
          effectScroll
            ? "z-50 fixed w-full flex flex-col items-center justify-center transition-colors duration-300 backdrop-blur-md bg-opacity-15 shadow-lg"
            : "z-50 fixed w-full flex flex-col items-center justify-center transition-colors duration-300 bg-transparent"
        }
      >
        {/* <div className="w-full border border-black">
          <nav className="max-w-6xl m-auto flex items-center justify-between px-4 py-1">
            <div></div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum vero
              iste fugit nobis quo beatae consequuntur
            </p>
            <div></div>
          </nav>
        </div> */}
        <div className="w-full max-w-7xl px-4 flex justify-between items-center gap-2">
          <Link href={"#home"} className="flex flex-col items-center">
            <div className="overflow-hidden">
              <Image src={Logo} alt="Logo" width={500} height={160} className="overflow-hidden" />
            </div>
          </Link>
          <nav className="hidden max-w-6xl lg:flex lg:flex-1 lg:items-center lg:justify-center gap-8">
            <ul className="flex items-center gap-4 text-lg uppercase text-txt-primary">
              {navigationLinks.map((link) => (
                <li
                  key={link.id}
                  className="font-bold tracking-wide duration-300"
                >
                  <Link
                    href={link.url}
                    aria-label={link.label}
                    role="navigation"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="hidden lg:flex">
            <ul className="flex items-center justify-center gap-2">
              {socialMediaLinks.map((link) => (
                <li
                  key={link.id}
                  className="duration-300 rounded-full border p-1 hover:opacity-70"
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    aria-label={link.label}
                    title={link.label}
                  >
                    {link.icon && <link.icon />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </header>
    </>
  );
};
