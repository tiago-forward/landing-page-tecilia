"use cliente";

import { useState } from "react";
import MenuHamburger1 from "@/components/Icons/MenuHamburger1";
import Xmark from "@/components/Icons/Xmark";

import { navigationLinks } from "../../constants/navigationLinks";
import { socialMediaLinks } from "../../constants/socialMediaLinks";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={handleToggleMenu}
        className=""
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <Xmark /> : <MenuHamburger1 />}
      </button>

      {isOpen && (
        <div
          className="absolute h-screen inset-0 opacity-50 z-50"
          onClick={handleToggleMenu}
        ></div>
      )}

      <div
        className={`z-50 w-9/12 h-screen flex flex-col absolute right-0 top-0 transition-all duration-300 ease-in-out transform
                ${
                  isOpen
                    ? "translate-y-0 animate-openMenu"
                    : "-translate-y-full"
                }`}
      >
        <header className="w-full flex items-center justify-between h-20 border-b">
          <a onClick={handleNavLinkMenu} href={"#"}>
            <span className="pl-2 font-bold uppercase">Evelin Make</span>
          </a>

          <button
            onClick={handleToggleMenu}
            className="px-4"
            aria-label="Fechar menu"
          >
            <Xmark />
          </button>
        </header>

        <nav
          className="flex flex-col flex-1 items-end justify-center gap-8 pr-4"
          role="navigation"
        >
          <ul className="flex flex-col items-end gap-8">
            {navigationLinks.map((link) => (
              <li
                key={link.id}
                className="font-bold tracking-wider duration-300 uppercase text-lg"
              >
                <a href={link.url} aria-label={link.label} role="navigation">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* <Link
            onClick={handleNavLinkMenu}
            href={"/contact"}
            className="flex items-center gap-2 text-md font-semibold border rounded-sm py-1 px-2"
          >
            Fale conosco
          </Link> */}
          <ul className="flex items-center justify-center gap-2">
            {socialMediaLinks.map((link) => (
              <li
                key={link.id}
                className="duration-300 rounded-full border p-1 hover:opacity-70"
              >
                <a
                  href={link.url}
                  target="_blank"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon && <link.icon />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
