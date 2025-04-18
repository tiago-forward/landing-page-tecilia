import { socialMediaLinks } from "@/constants/socialMediaLinks";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center transition-colors duration-500 bg-bg-footer text-txt-secondary gap-4 border-t py-4">
      <div className="w-full max-w-screen-xl m-auto flex flex-col items-center gap-4 mt-4">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-2 w-full">
          <Link href={"#home"} className="flex flex-col items-center">
            <span className="font-bold text-xl">Dra. Tecilia Santos</span>
            <span className="font-normal ">Fisioterapéuta</span>
          </Link>
          <nav className="flex">
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
        </div>
        <div className="flex flex-col mt-10">
          <p className="text-sm text-center">
            Todos os Direitos Reservados Copyright © {new Date().getFullYear()}
          </p>
          <div className="flex flex-col items-center">
            <p className="text-xs text-center text-txt-desc-secondary">
              Desenvolvido por:{" "}
              <Link
                href="https://www.linkedin.com/in/tiago-lacerda-devfrontend/"
                target="_blank"
                className="hover:underline"
              >
                <Image
                  src={"/assets/images/logos/tiago-forward.png"}
                  alt=""
                  width={120}
                  height={40}
                />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
