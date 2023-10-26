import Image from 'next/image';
import { Page } from '../models';

export default function Header({ menu }: { menu: Page[]}) {
  return (
    <header className="text-center">
    <div>
      <a href="/">
        <Image
          src="/logo-infinity-white.svg"
          width={330}
          height={79}
          alt="Infinity"
          className="py-8 m-auto"
        />
      </a>
    </div>
    <ul className="grid grid-cols-5 gap-1 bg-gradient-to-b from-5% from-midnight-900 to-95% to-midnight-800">
      {menu.map((item) => (
        <li key={item.uri} className="text-center">
          <a
            href={item.uri}
            className="flex justify-center items-center h-16"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </header>
  )
}
