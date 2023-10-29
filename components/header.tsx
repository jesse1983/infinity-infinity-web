import Image from "next/image";
import { Page } from "../models";

const isGithubActionsPages = process.env.GITHUB_ACTIONS_PAGES || false;
let assetPrefix = '';
if (isGithubActionsPages) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
}

export default function Header({ menu }: { menu: Page[] }) {
  return (
    <header className="text-center">
      <div>
        <a href="/">
          <Image
            src="./logo-infinity-white.svg"
            width={330}
            height={79}
            alt="Infinity"
            className="py-8 m-auto"
          />
        </a>
      </div>
      <nav className="absolute z-40 w-screen shadow-[inset_0px_20px_20px_-20px_#000] text-lg">
        <ul className="grid grid-cols-5 bg-midnight-900/70 m-0 p-0">
          {menu.map((item) => (
            <li key={item.uri} className="text-center">
              <a
                href={assetPrefix + item.uri}
                className="flex justify-center items-center h-16 hover:bg-midnight-950 transition duration-500 hover:ease-in-out"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
