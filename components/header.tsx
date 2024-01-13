'use client'
import { Page } from "../models";
import Link from "next/link";
import LogoWhite from "../public/logo-infinity-white.svg";
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

export default function Header({ menu }: { menu: Page[] }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);


  const isItemActive = (title: string) => {
    const currentURL = usePathname();
    return currentURL.includes(slugify(title));
  }

  return (
    <header className="text-center">
      <div>
        <Link href="/" className="w-[330px] h-[80px] block  m-auto my-7">
          <LogoWhite className="m-auto" />
        </Link>
      </div>
      <nav className="sm:h-auto sm:absolute z-40 w-screen shadow-[inset_0px_20px_20px_-20px_#000] text-lg">
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
        <ul className={`overflow-hidden sm:h-auto sm:grid sm:grid-cols-5 bg-midnight-900/70 m-0 p-0 transition-all duration-300 ease-in-out ${open ? 'h-[322px]' : 'h-0'}`}>
          {menu.map((item, i) => (
            <li key={item.slug} className="text-center">
              <Link
                href={'/' + (i === 0 ? '' : item.slug)}
                className={`flex justify-center items-center h-16 hover:bg-midnight-950 transition duration-500 hover:ease-in-out ${isItemActive(item.title) ? 'bg-midnight-950' : ''}`}
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
