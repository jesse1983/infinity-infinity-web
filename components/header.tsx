'use client'
import { Page } from "../models";
import Link from "next/link";
import LogoWhite from "../public/logo-infinity-small-white.svg";
import LogoSeaWhite from "../public/logo-infinity-sea-white.svg"; 
import LogoBlueWhite from "../public/logo-infinity-blue-white.svg"; 
import { useState } from "react";
import { usePathname } from "next/navigation";

const slugify = text =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');

export default function Header({ menu, logo }: { menu: Page[], logo?: "SEA" | "BLUE" | string }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);


  const isItemActive = (slug: string, index: number) => {
    const currentURL = usePathname();
    if (currentURL === '/' && index === 0) return true;
    return currentURL.indexOf(slug) > -1;
  }

  return (
    <header className="text-center">
      <div>
        <Link href="/" className="w-[200px] h-[50px] block  m-auto my-7">
          {logo === 'SEA' && <LogoSeaWhite  className="m-auto" />}
          {logo === 'BLUE' && <LogoBlueWhite  className="m-auto" />}
          {!logo && <LogoWhite className="m-auto" />}
        </Link>
      </div>
      <nav className="sm:h-autow-screen text-lg relative">
        <div className="bg-[url('/bg-menu.jpg')] h-[64px] absolute w-screen -z-10 opacity-50"></div>
        <button
          onClick={toggle}
          type="button"
          className="inline-flex sm:hidden items-center w-10 h-10 justify-center text-sm text-gray-100"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <ul className={`overflow-hidden shadow-[inset_0px_20px_20px_-20px_#000] sm:h-auto sm:grid sm:grid-cols-5 gap-0 m-0 p-0 transition-all duration-300 ease-in-out ${open ? 'h-[322px]' : 'h-0'}`}>
          {menu.map((item, i) => (
            <li key={item.slug} className={`text-center ${isItemActive(item.slug, i) ? 'bg-midnight-950' : ''}`}>
              <Link
                href={'/' + (i === 0 ? '' : item.slug)}
                className={`flex  justify-center items-center h-16 bg-midnight-950/70  hover:bg-midnight-950 transition duration-500 hover:ease-in-out`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
