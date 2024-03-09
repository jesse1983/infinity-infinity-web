import Nav01 from "../public/localization-nav01.svg";
import Nav02 from "../public/localization-nav02.svg";
import Nav03 from "../public/localization-nav03.svg";
import miniMenuBg2 from "../public/mini-menu-bg2.png";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const items = [
  {
    icon: <Nav01 className="w-7 md:w-10 xl:w-12" />,
    text: "Localização",
    path: "/localizacao",
  },
  {
    icon: <Nav02 className="w-7 md:w-10 xl:w-12" />,
    text: "Movimento",
    path: "/localizacao/movimento",
  },
  {
    icon: <Nav03 className="w-7 md:w-10 xl:w-12" />,
    text: "Urbana",
    path: "/localizacao/urbana",
  },
];

export default function MiniMenuLocation() {
  return (
    <div
      style={{ backgroundImage: `url(${miniMenuBg2.src})` }}
      className={`absolute px-2 hidden w-[40px] lg:w-[294px] h-[200px] transition-top duration-300 drop-shadow-2xl z-50 sm:flex flex-col justify-around items-center uppercase text-sm font-bold bg-repeat-y bg-right right-0 mr-4 mt-[35vh] overflow-hidden`}
    >
      {items.map((item) => (
        <Link
          href={item.path}
          key={uuidv4()}
          className="group flex justify-between items-center gap-7 w-[324px] whitespace-nowrap hover:bg-[#8F7D57] px-7 py-2 border-l-8 border-midnight-950/0 hover:border-midnight-950 transition ease-in-out delay-50"
        >
          <span className="indent-2 opacity-0 group-hover:opacity-100">
            {item.text}
          </span>
          <span>{item.icon}</span>
        </Link>
      ))}
    </div>
  );
}
