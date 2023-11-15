"use client";

import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FloorPlan from "../floor-plan";
import MiniMenuItem01 from "../../public/mini-menu-item01.svg";
import MiniMenuItem02 from "../../public/mini-menu-item02.svg";
import MiniMenuItem03 from "../../public/mini-menu-item03.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import roofTop from "../../public/rooftop.jpg";
import miniMenuBg from "../../public/mini-menu-bg.png";
import MapaDeDepositos from "./mapa-de-depositos";
import MapaDeVagas from "./mapa-de-vagas";
import { BUILDING } from '../../enums/building';
import { BUILDING_AREA } from "../../enums/building-area";
import { ENTERPRISE, FLOOR } from "../../types";
import TabelaDeVendas from "./tabela-de-vendas";

export enum SCREEN {
  SALES_TABLE = "SALES_TABLE",
  PARKING_MAP = "PARKING_MAP",
  DEPOSIT_MAP = "DEPOSIT_MAP",
}

function getScreenByRouter(items) {
  const router = useRouter();
  const foundItem = items.find((item) => router.pathname.includes(item.path));
  if (foundItem) return foundItem.screen;
}

export function InfinityWorldComponent({ enterprises = [] }: { enterprises: ENTERPRISE[] }) {
  const items = [
    {
      icon: <MiniMenuItem01 className="w-7 md:w-10 xl:w-12" />,
      screenComponent: <TabelaDeVendas enterprises={enterprises} />,
      screen: SCREEN.SALES_TABLE,
      text: "Tabela de vendas",
      path: "tabela-de-vendas",
    },
    {
      icon: <MiniMenuItem02 className="w-7 md:w-10 xl:w-12" />,
      screenComponent: <MapaDeVagas enterprises={enterprises} />,
      screen: SCREEN.PARKING_MAP,
      text: "Mapa de vagas",
      path: "mapa-de-vagas",
    },
    {
      icon: <MiniMenuItem03 className="w-7 md:w-10 xl:w-12" />,
      screenComponent: <MapaDeDepositos enterprises={enterprises} />,
      screen: SCREEN.DEPOSIT_MAP,
      text: "Mapa de depósitos",
      path: "mapa-de-depositos",
    },
  ];
  const router = useRouter();

  const [currentScreen, setCurrentScreen] = useState<SCREEN>(
    getScreenByRouter(items)
  );

  const position = useMemo(() => {
    return currentScreen ? "bottom-0 right-0" : "bottom-[25%] right-10";
  }, [currentScreen]);

  const gotoEnterprise = (enterprise: string, area: string) => {
    const pathname = `/infinity-world/${enterprise}`;
    router.push({ pathname, query: { area: area.toLowerCase() } })
  }

  const changeScreen = (ev: React.MouseEvent, item) => {
    ev.preventDefault();
    setCurrentScreen(item.screen);
    history.pushState({}, item.text, `/infinity-world/${item.path}`);
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 10);
  };

  const floors:(FLOOR & { enterprise: string})[] = enterprises.reduce((acc, cur) => {
    return acc.concat(cur.floors.map((f) => ({ ...f, enterprise: cur.slug })));
  }, []);

  return (
    <div className="relative max-h-screen ">
      <div
        style={{ backgroundImage: `url(${miniMenuBg.src})` }}
        className={`absolute px-7 hidden w-[80px] lg:w-[324px] h-[50%] ${position} transition-top duration-300 drop-shadow-2xl z-50 sm:flex flex-col justify-around items-center uppercase text-sm font-bold bg-repeat-y bg-right`}
      >
        {items.map((item) => (
          <Link
            href={`/infinity-world/${item.path}`}
            key={uuidv4()}
            className="group  flex justify-between items-center gap-7 w-[324px] whitespace-nowrap hover:bg-midnight-950/50 px-7 py-2 border-l-8 border-midnight-950/0 hover:border-midnight-950"
            onClick={(ev) => changeScreen(ev, item)}
          >
            <span className="indent-2 opacity-0 group-hover:opacity-100">
              {item.text}
            </span>
            <span>{item.icon}</span>
          </Link>
        ))}
      </div>
      {items.map((item) => (
        <div
          key={uuidv4()}
          className={`absolute bg-midnight-900 flex items-center justify-center z-10 h-full w-full transition duration-300 ${
            currentScreen === item.screen ? "" : "hidden"
          }`}
        >
          {item.screenComponent}
        </div>
      ))}

      <div className="">
        <FloorPlan src={roofTop.src} onLoad={scrollToBottom}>
          {floors.filter((f) => f.coords).map((floor) => <FloorPlan.Poi key={uuidv4()} icon='/icon-infinity.svg' title={floor.title} x={floor.coords.x} y={floor.coords.y} onClick={() => gotoEnterprise(floor.enterprise, floor.slug)}/>)}
          {/* <FloorPlan.Poi title="Rooftop" icon='/icon-infinity.svg' x={760} y={170} onClick={() => gotoBuilding(BUILDING.INFINITY_BLUE, BUILDING_AREA.ROOFTOP)} />
          <FloorPlan.Poi title="Planta tipo" icon='/icon-infinity.svg' x={780} y={400} onClick={() => gotoBuilding(BUILDING.INFINITY_BLUE, BUILDING_AREA.APARTAMENT)} />
          <FloorPlan.Poi title="Pavimento térreo" icon='/icon-infinity.svg' x={760} y={700} onClick={() => gotoBuilding(BUILDING.INFINITY_BLUE, BUILDING_AREA.GROUND)} />
          <FloorPlan.Poi title="Beach Lounge" icon='/icon-infinity.svg' x={880} y={780} onClick={() => gotoBuilding(BUILDING.INFINITY_BLUE, BUILDING_AREA.BEACH)} />

          <FloorPlan.Poi title="Planta tipo" icon='/icon-infinity.svg' x={1180} y={380} onClick={() => gotoBuilding(BUILDING.INFINITY_SEA, BUILDING_AREA.APARTAMENT)}  />
          <FloorPlan.Poi title="Beach Club" icon='/icon-infinity.svg' x={1180} y={770} onClick={() => gotoBuilding(BUILDING.INFINITY_SEA, BUILDING_AREA.BEACH)}  /> */}
        </FloorPlan>
      </div>
    </div>
  );
}
