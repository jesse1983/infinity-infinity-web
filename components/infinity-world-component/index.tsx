"use client";

import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FloorPlan from "../floor-plan";
import MiniMenuItem01 from "../../public/mini-menu-item01.svg";
import MiniMenuItem02 from "../../public/mini-menu-item02.svg";
import MiniMenuItem03 from "../../public/mini-menu-item03.svg";
import MiniMenuItem04 from "../../public/mini-menu-item04.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import roofTop from "../../public/rooftop2.png";
import miniMenuBg from "../../public/mini-menu-bg.png";
import MapaDeDepositos from "./mapa-de-depositos";
import MapaDeVagas from "./mapa-de-vagas";
import { ENTERPRISE, FLOOR } from "../../types";
import TabelaDeVendas from "./tabela-de-vendas";
import IconClose from "../../public/icon-close-borderless.svg";
import MiniMenu from "../min-menu";

export enum SCREEN {
  SALES_TABLE = "SALES_TABLE",
  PARKING_MAP = "PARKING_MAP",
  DEPOSIT_MAP = "DEPOSIT_MAP",
  VIEWS = "VIEWS",
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
      icon: <MiniMenuItem01 className="mr-1 h-10 scale-75" />,
      screenComponent: <TabelaDeVendas enterprises={enterprises} />,
      screen: SCREEN.SALES_TABLE,
      text: "Tabela de vendas",
      path: "tabela-de-vendas",
    },
    {
      icon: <MiniMenuItem02 className="mr-1 h-10 scale-75" />,
      screenComponent: <MapaDeVagas enterprises={enterprises} />,
      screen: SCREEN.PARKING_MAP,
      text: "Mapa de vagas",
      path: "mapa-de-vagas",
    },
    {
      icon: <MiniMenuItem03 className="mr-1 h-10 scale-75" />,
      screenComponent: <MapaDeDepositos enterprises={enterprises} />,
      screen: SCREEN.DEPOSIT_MAP,
      text: "Mapa de depósitos",
      path: "mapa-de-depositos",
    },
    {
      icon: <MiniMenuItem04 className="mr-1 h-10 scale-75" />,
      screenComponent: <div>laklakl</div>,
      screen: SCREEN.VIEWS,
      text: "Vistas",
      path: "vistas",
    },
  ];
  const router = useRouter();

  const [currentScreen, setCurrentScreen] = useState<SCREEN>(
    getScreenByRouter(subPageItems)
  );

  const [buildingDetails, setBuildingDetails] = useState<ENTERPRISE>();
  const [direction, setDirection] = useState<string>();

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
    <div className="relative h-[calc(100vh_-_174px)]  " data-aos="fade-in">
      <MiniMenu items={subPageItems.map((s) => ({
        icon: s.icon,
        text: s.text,
        path: '/infinity-world/'+s.path,
        // onClick: (ev) => changeScreen(ev, s),
      }))} />
      {subPageItems.map((item) => (
        <div
          key={uuidv4()}
          className={` bg-midnight-900 flex items-center justify-center z-10 min-h-[calc(100vh_-_174px)] w-full transition duration-300 ${
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
        {!currentScreen && <FloorPlan src={roofTop.src} onLoad={scrollToBottom} hidePois={hidePois}>
          <FloorPlan.Path
            title={"Infinity Blue"}
            noBorder
            coords="m 820.48971,240.43039 3.36266,568.29 -12.60999,0.84066 1.05199,94.1522 -13.64523,0.43839 1.41081,55.87263 c 90.60155,-1.4784 180.3597,2.36885 270.94805,0.0159 l -1.6813,-32.78596 11.7694,-14.29132 -21.8573,-5.88466 -5.8847,-139.5505 -38.6706,-1.68133 2.522,-469.09145 -11.7693,-19.33531 1.6813,-18.49465 -11.76933,-25.21997 -152.16049,-7.56599 -10.08799,10.08799 z"
            onClick={(ev) => clickBuildingDetails(enterprises[0], "left-[5%]")}
          />
          <FloorPlan.Path
            title={"Infinity Sea"}
            noBorder
            coords="m 1496.3849,235.38639 292.5517,-5.04399 -3.3627,522.89405 62.2093,-1.68133 3.3626,208.48509 -232.0237,6.72532 -168.1331,-10.08798 -5.044,-163.08915 3.3626,-5.04399 1.6814,-31.9453 50.4399,-1.68133 z"
            onClick={(ev) =>
              clickBuildingDetails(enterprises[1], "right-[5%]")
            }
          />
          {floors
            .filter((f) => f.coords)
            .map((floor) => (
              <FloorPlan.Poi
                key={uuidv4()}
                icon={floor.iconSrc || "/icon-infinity.svg"}
                title={floor.title}
                x={floor.coords.x}
                y={floor.coords.y}
                onClick={() => gotoEnterprise(floor.enterprise, floor.slug)}
              />
            ))}
        </FloorPlan>}
      </div>
    </div>
  );
}
