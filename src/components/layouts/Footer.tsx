import { socialMediaLinks } from "@/constants/socialMediaLinks";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center transition-colors duration-500 bg-black text-white gap-4 border-t py-10">
      <div className="w-full max-w-screen-xl m-auto flex flex-col items-center gap-4">
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
        <div className="flex flex-col">
          <p className="text-sm text-center">
            Todos os Direitos Reservados Copyright © {new Date().getFullYear()}
          </p>
          <div>
            <p className="text-xs text-center">
              Desenvolvido por{" "}
              <span className="text-blue-700 font-bold">
                <Link
                  href="https://www.linkedin.com/in/tiago-lacerda-devfrontend/"
                  target="_blank"
                  className="hover:underline"
                >
                  Tiago Forward
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
