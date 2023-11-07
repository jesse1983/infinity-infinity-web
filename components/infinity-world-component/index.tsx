"use client";

import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FloorPlan from "../floor-plan";
import MiniMenuItem01 from "../../public/mini-menu-item01.svg";
import MiniMenuItem02 from "../../public/mini-menu-item02.svg";
import MiniMenuItem03 from "../../public/mini-menu-item03.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import roofTop from '../../public/rooftop.jpg';

export enum SCREEN {
  SALES_TABLE = "SALES_TABLE",
  PARKING_MAP = "PARKING_MAP",
  DEPOSIT_MAP = "DEPOSIT_MAP",
}

const items = [
  {
    icon: <MiniMenuItem01 className="w-7 md:w-10 xl:w-12" />,
    screenComponent: <div>Tabela de vendas</div>,
    screen: SCREEN.SALES_TABLE,
    text: "Tabela de vendas",
    path: "tabela-de-vendas",
  },
  {
    icon: <MiniMenuItem02 className="w-7 md:w-10 xl:w-12" />,
    screenComponent: <div>Mapa de vendas</div>,
    screen: SCREEN.PARKING_MAP,
    text: "Mapa de vagas",
    path: "mapa-de-vagas",
  },
  {
    icon: <MiniMenuItem03 className="w-7 md:w-10 xl:w-12" />,
    screenComponent: <div>Mapa de depósitos</div>,
    screen: SCREEN.DEPOSIT_MAP,
    text: "Mapa de depósitos",
    path: "mapa-de-depositos",
  },
];

function getScreenByRouter() {
  const router = useRouter();
  const foundItem = items.find((item) => router.pathname.includes(item.path));
  if (foundItem) return foundItem.screen;
}

export function InfinityWorldComponent() {
  const router = useRouter();

  const [currenScreen, setCurrentScreen] = useState<SCREEN>(getScreenByRouter());

  const position = useMemo(() => {
    return currenScreen ? "bottom-0 right-0" : "bottom-[25%] right-10";
  }, [currenScreen]);

  const changeScreen = (ev: React.MouseEvent, item) => {
    ev.preventDefault();
    setCurrentScreen(item.screen);
    router.push(`/infinity-world/${item.path}`, undefined, { shallow: true });
  }

  return (
    <div className="relative">
      <div
        className={`absolute hidden w-[80px] lg:w-[104px] h-[50%] ${position} transition-top duration-300 bg-midnight-950/70 drop-shadow-2xl z-50 sm:flex flex-col justify-around items-center`}
      >
        {items.map((item) => (
          <Link
            href={`/infinity-world/${item.path}`}
            key={uuidv4()}
            className="relative"
            onClick={(ev) => changeScreen(ev, item)}
          >
            {item.icon}
          </Link>
        ))}
      </div>
      {items.map((item) => (
        <div
          key={uuidv4()}
          className={`absolute bg-midnight-900 flex items-center justify-center z-10 h-full w-full transition duration-300 ${
            currenScreen === item.screen ? "opacity-100" : "opacity-0"
          }`}
        >
          {item.screenComponent}
        </div>
      ))}

      <div className="">
        <FloorPlan src={roofTop.src} />
      </div>
    </div>
  );
}
