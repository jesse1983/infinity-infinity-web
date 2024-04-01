"use client";

import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FloorPlan from "../floor-plan";
import MiniMenuItem01 from "../../public/mini-menu-item01.svg";
import MiniMenuItem02 from "../../public/mini-menu-item02.svg";
import MiniMenuItem03 from "../../public/mini-menu-item03.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import roofTop from "../../public/rooftop.png";
import miniMenuBg from "../../public/mini-menu-bg.png";
import MapaDeDepositos from "./mapa-de-depositos";
import MapaDeVagas from "./mapa-de-vagas";
import { ENTERPRISE, FLOOR } from "../../types";
import TabelaDeVendas from "./tabela-de-vendas";
import IconClose from "../../public/icon-close-borderless.svg";

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
  const subPageItems = [
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
    getScreenByRouter(subPageItems)
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

  const bgOverlay = useMemo(() => {
    return buildingDetails ? 'bg-white' : undefined;
  }, [buildingDetails]);

  const hidePois = useMemo(() => {
    return !!buildingDetails;
  }, [buildingDetails]);


  return (
    <div className="relative max-h-screen " data-aos="zoom-out">
      <div
        style={{ backgroundImage: `url(${miniMenuBg.src})`, display: hidePois ? 'none' : '' }}
        className={`absolute px-7 hidden w-[80px] lg:w-[324px] h-[50%] ${position} transition-top duration-300 drop-shadow-2xl z-50 sm:flex flex-col justify-around items-center uppercase text-sm font-bold bg-repeat-y bg-right`}
      >
        {subPageItems.map((item) => (
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
      {subPageItems.map((item) => (
        <div
          key={uuidv4()}
          className={`absolute  bg-midnight-900 flex items-center justify-center z-10 min-h-[calc(100vh_-_80px)] w-full transition duration-300 ${
            currentScreen === item.screen ? "" : "hidden"
          }`}
        >
          {item.screenComponent}
        </div>
      ))}
      {buildingDetails && !currentScreen && (
        <div className="absolute top-0 bottom-0 left-0 right-0 z-20">
          <div
            className={`flex flex-col absolute w-1/5 z-30 text-center top-[20%] ${direction}`}
            data-aos="zoom-in"
          >
            <div className="bg-dusk flex flex-row text-center rounded-t-3xl overflow-hidden">
              <div className="w-full text-3xl font-medium relative">
                <div className="py-8 text-center">{buildingDetails.area}</div>
                <div className="absolute hover:right-4 hover:top-4 transition-all ease-in-out delay-50 right-2 top-2 w-8 h-8">
                  <button
                    onClick={() => setBuildingDetails(undefined)}
                    className="rounded-full flex w-8 h-8 text-base justify-center items-center bg-midnight-950 transition-all ease-in-out delay-80 hover:scale-150 hover:bg-midnight-900"
                  >
                    <IconClose />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-midnight-950 leading-tight border-white text-xl rounded-b-3xl mb-10">
              {buildingDetails.features.map((feature, i) => (
                <div
                  className={`py-3 px-3 text-lg ${
                    i === buildingDetails.features.length - 1 ? "" : "border-b"
                  }`}
                >
                  {feature}
                </div>
              ))}
            </div>
            <img src={buildingDetails.logo} />
          </div>
        </div>
      )}
      <div className={bgOverlay}>
        <FloorPlan src={roofTop.src} onLoad={scrollToBottom} hidePois={hidePois}>
          <FloorPlan.Path
            title={"Infinity Blue"}
            noBorder
            coords="m 709.15105,224.03528 16.22933,-0.35281 -1.05844,-15.5237 19.75744,-1.05844 151.00331,9.1731 10.93716,9.1731 12.70121,28.93054 -1.15061,20.79428 15.46747,31.68337 1.20684,565.29523 35.28115,-2.8225 -1.41125,19.75745 13.40684,4.93936 1.41125,191.92944 -293.53914,0.5292 2.46968,-199.16206 4.23373,0.35281 v 24.16759 l 16.40574,-0.35281 0.1764,-38.28005 -5.64498,0.17641 -0.35281,-10.23154 -4.58655,-574.02425 8.64388,-1.41125 0.35281,-21.87431 -7.76185,-9.87872 3.70452,-1.05844 z"
            onClick={(ev) => clickBuildingDetails(enterprises[0], "left-[5%]")}
          />
          <FloorPlan.Path
            title={"Infinity Sea"}
            noBorder
            coords="m 1487.8712,223.52994 52.8888,-0.49895 v -31.93285 l 209.5593,-3.49265 v 34.4276 l 54.3856,-0.9979 -1.4968,627.18112 67.3583,-0.99791 0.9979,240.4943 -452.0494,-2.9937 0.499,-234.50689 64.8636,-1.49685 z"
            onClick={(ev) =>
              clickBuildingDetails(enterprises[1], "right-[5%]")
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
        </FloorPlan>
      </div>
    </div>
  );
}
