"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FloorPlan from "../../../components/floor-plan";
import MiniMenuItem01 from "../../../public/mini-menu-item01.svg";
import MiniMenuItem02 from "../../../public/mini-menu-item02.svg";
import MiniMenuItem03 from "../../../public/mini-menu-item03.svg";

export enum SCREEN {
  MAIN = "MAIN",
  SALE_MAP = "SALE_MAP",
  DEPOSIT_MAP = "DEPOSIT_MAP",
}

export function InfinityWorldComponent() {
  const items = [
    {
      icon: <MiniMenuItem01 className="w-7 md:w-10 xl:w-12" />,
      screen: SCREEN.MAIN,
    },
    {
      icon: <MiniMenuItem02 className="w-7 md:w-10 xl:w-12" />,
      screen: SCREEN.SALE_MAP,
    },
    {
      icon: <MiniMenuItem03 className="w-7 md:w-10 xl:w-12" />,
      screen: SCREEN.DEPOSIT_MAP,
    },
  ];
  const [currenScreen, setCurrentScreen] = useState(SCREEN.MAIN);

  const changeCurrentScreen = (ev: React.MouseEvent, screen: SCREEN) => {
    ev.preventDefault();
    setCurrentScreen(screen);
  };

  return (
    <div className="relative">
      <div className="absolute hidden w-[80px] lg:w-[104px] h-[50%] top-[25%] right-10 bg-midnight-950/70 drop-shadow-2xl z-50 sm:flex flex-col justify-around items-center">
        {items.map((item) => (
          <a href="#" onClick={(ev) => changeCurrentScreen(ev, item.screen)} key={uuidv4()}>
            {item.icon}
          </a>
        ))}
      </div>
      <div className={`absolute bg-midnight-900 flex items-center justify-center z-10 h-full w-full transition duration-300 ${currenScreen === SCREEN.SALE_MAP ? 'opacity-100' : 'opacity-0'}`}>
          <div>Mapa de vendas</div>
      </div>

      <div className={`absolute bg-midnight-900 flex items-center justify-center z-10 h-full w-full transition duration-300 ${currenScreen === SCREEN.DEPOSIT_MAP ? 'opacity-100' : 'opacity-0'}`}>
          <div>Mapa de depósitos</div>
      </div>

      <div className=""><FloorPlan src="./rooftop.jpg" /></div>
      {/* <div className={currenScreen === SCREEN.DEPOSIT_MAP ? 'opacity-100' : 'opacity-0'}><FloorPlan src="./rooftop.jpg" /></div> */}
    </div>
  );
}
