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
import { BUILDING } from "../../enums/building";
import { BUILDING_AREA } from "../../enums/building-area";
import { ENTERPRISE, FLOOR } from "../../types";
import TabelaDeVendas from "./tabela-de-vendas";
import InfinityLogoBlue from "../../public/logo-infinity-blue-white.svg";
import InfinityLogoSea from "../../public/logo-infinity-sea-white.svg";
import ItemMapa from "../item-mapa";

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

export function InfinityWorldComponent({
  enterprises = [],
}: {
  enterprises: ENTERPRISE[];
}) {
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

  const [buildingDetails, setBuildingDetails] = useState<ENTERPRISE>();
  const [direction, setDirection] = useState<string>();

  const position = useMemo(() => {
    return currentScreen ? "bottom-0 right-0" : "bottom-[25%] right-10";
  }, [currentScreen]);

  const gotoEnterprise = (enterprise: string, area: string) => {
    const pathname = `/infinity-world/${enterprise}`;
    router.push({ pathname, query: { area: area.toLowerCase() } });
  };

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

  const floors: (FLOOR & { enterprise: string })[] = enterprises.reduce(
    (acc, cur) => {
      return acc.concat(
        cur.floors.map((f) => ({ ...f, enterprise: cur.slug }))
      );
    },
    []
  );

  const clickBuildingDetails = (enterprise: ENTERPRISE, direction: string) => {
    setBuildingDetails(enterprise);
    setDirection(direction);
  };

  return (
    <div className="relative max-h-screen " data-aos="zoom-out">
      <div
        style={{ backgroundImage: `url(${miniMenuBg.src})` }}
        className={`absolute px-7 hidden w-[80px] lg:w-[324px] h-[50%] ${position} transition-top duration-300 drop-shadow-2xl z-50 sm:flex flex-col justify-around items-center uppercase text-sm font-bold bg-repeat-y bg-right`}
      >
        {items.map((item) => (
          <Link
            href={`/infinity-world/${item.path}`}
            key={uuidv4()}
            className="group  flex justify-between items-center gap-7 w-[324px] whitespace-nowrap hover:bg-midnight-950/50 px-7 py-2 border-l-8 border-midnight-950/0 hover:border-midnight-950 transition ease-in-out delay-50"
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
      {buildingDetails && (
        <div
          className={`flex flex-col px-2 absolute w-1/5 z-20 text-center top-[20%] ${direction}`}
          data-aos="zoom-in"
        >
          <div className="bg-dusk flex flex-row text-center rounded-t-3xl">
            <div className="w-full text-3xl font-medium p-8 ml-12">
              {buildingDetails.area}
            </div>
            <ItemMapa
              identifier="X"
              isApartmentInfo={true}
              onClick={() => setBuildingDetails(undefined)}
            />
          </div>
          <div className="bg-midnight-950 leading-tight border-white text-xl rounded-b-3xl mb-10">
            {buildingDetails.features.map((feature, i) => (
              <div
                className={`py-3 ${
                  i === buildingDetails.features.length - 1 ? "" : "border-b"
                }`}
              >
                {feature}
              </div>
            ))}
          </div>
          <img src={buildingDetails.logo} />
        </div>
      )}
      <div className="">
        <FloorPlan src={roofTop.src} onLoad={scrollToBottom}>
          <FloorPlan.Path
            title={"Infinity Blue"}
            coords="m 650.34595,244.25823 -16.69319,13.7393 -1.52777,469.63462 163.72365,-0.99498 0.34756,-12.5225 124.36387,-6.71658 1.67999,-468.28169 -4.8043,-3.16321 -21.92955,-3.92985 -0.30536,-14.12017 4.05404,-1.43352 0.36927,-4.16029 -195.8216,-33.71256 -1.87703,1.39514 v 3.63937 l -14.31199,-1.01263 -37.19983,32.39774 z"
            onClick={(ev) => clickBuildingDetails(enterprises[0], "left-[5%]")}
          />
          <FloorPlan.Path
            title={"Infinity Sea"}
            coords="m 990.26489,155.08884 -0.0589,19.16434 -9.47572,5.86163 0.35537,1.95262 7.59924,1.53823 0.33361,7.70718 -18.12559,10.65442 -4.23344,504.61432 99.08344,1.66689 50.7551,-0.18565 167.9397,2.45917 1.8619,-555.62118 -6.5855,-5.64578 -18.1504,-4.23036 v -7.36315 l 16.6577,-7.51778 -0.6463,-2.5847 -152.6622,-34.516545 -8.4432,5.281279 -25.2483,-5.585702 h -2.1233 l 0.086,8.953498 -10.9751,-1.4198 z"
            onClick={(ev) =>
              clickBuildingDetails(enterprises[1], "right-[10%]")
            }
          />
          {floors
            .filter((f) => f.coords)
            .map((floor) => (
              <FloorPlan.Poi
                key={uuidv4()}
                icon="/icon-infinity.svg"
                title={floor.title}
                x={floor.coords.x}
                y={floor.coords.y}
                onClick={() => gotoEnterprise(floor.enterprise, floor.slug)}
              />
            ))}
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
