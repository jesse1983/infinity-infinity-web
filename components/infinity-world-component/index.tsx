"use client";

import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FloorPlan from "../floor-plan";
import { useRouter } from "next/router";
import roofTop from "../../public/rooftop2.png";
import signature from "../../public/signature.png";
import { ENTERPRISE, FLOOR } from "../../types";
import IconClose from "../../public/icon-close-borderless.svg";
import MiniMenu from "../min-menu";
import { Page } from "../../models";
import infinityWorldItems, { SCREEN } from "../infinity-world-subitems";
import MiniMenuCais from "./mini-menu-cais";

function getScreenByRouter(items) {
  const router = useRouter();
  const foundItem = items.find((item) => router.pathname.includes(item.path));
  if (foundItem) return foundItem.screen;
}

const fnBottom = () => {
  if (typeof window !== "undefined" && window.innerHeight < 800)
    return "-bottom-24";
  return "-bottom-24";
};

export function InfinityWorldComponent({
  enterprises = [],
  page,
}: {
  enterprises: ENTERPRISE[];
  page?: Page;
}) {
  const subPageItems = infinityWorldItems({ enterprises });
  const router = useRouter();

  const [currentScreen, setCurrentScreen] = useState<SCREEN>(
    getScreenByRouter(subPageItems)
  );

  const [buildingDetails, setBuildingDetails] = useState<ENTERPRISE>();
  const [hoverActive, setHoverActive] = useState(false);
  const [direction, setDirection] = useState<string>();
  const [bottom, setBottom] = useState<string>(fnBottom());

  const onToggleActivePath = (bool: boolean) => {
    setHoverActive(bool);
  }

  const gotoEnterprise = (enterprise: string, area: string) => {
    const pathname = `/infinity-world/${enterprise}`;
    router.push({ pathname, query: { area: area.toLowerCase() } });
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
    return buildingDetails ? "bg-white" : undefined;
  }, [buildingDetails]);

  const hidePois = useMemo(() => {
    return !!buildingDetails;
  }, [buildingDetails]);

  useEffect(() => {
    setBottom(fnBottom()), [];
  });

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => setBottom(fnBottom()));
  }
  return (
    <div
      className="relative h-[calc(100vh_-_174px)] overflow-hidden bg-auto bg-white"
      data-aos="fade-in"
    >
      <MiniMenuCais enterprises={enterprises} />
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
      <div className={`w-full absolute ${bgOverlay} -bottom-24`}>
        {!currentScreen && (
          <FloorPlan
            src={page?.featuredImage?.mediaItemUrl || roofTop.src}
            hidePois={hidePois}
            onToggleActivePath={onToggleActivePath}
          >
            <FloorPlan.Path
              title={"Cais 218"}
              noBorder
              coords="m 809.87904,196.00267 0.99494,29.84812 h -13.92913 l -0.99493,28.85318 h 5.96962 l 2.98481,502.44339 -22.88356,38.80256 v 170.13429 l 264.65331,0.99494 V 794.95498 l -7.9595,-44.77218 h -40.79239 l 0.99494,-498.46364 -12.93419,-0.99494 V 196.9976 Z"
              onClick={() => clickBuildingDetails(enterprises[0], "left-[5%]")}
            />
            <FloorPlan.Path
              title={"Cais 292"}
              noBorder
              coords="m 1448.6288,210.92673 3.9798,503.43832 -59.6962,1.98988 v 250.72422 l 439.7623,13.92912 -1.9899,-208.93685 -23.8785,-59.69624 h -45.7671 l -3.9798,-499.45858 -49.7468,1.98988 -1.9899,-23.8785 h -200.9774 l 1.9899,21.88862 z"
              onClick={() => clickBuildingDetails(enterprises[1], "right-[5%]")}
            />
            {floors
              .filter((f) => f.coords)
              .map((floor) => (
                <FloorPlan.Poi
                  key={uuidv4()}
                  icon={floor.iconSrc || "/icon-infinity.svg"}
                  title={floor.title}
                  reverse={floor.reverse}
                  x={floor.coords.x}
                  y={floor.coords.y}
                  onClick={() => gotoEnterprise(floor.enterprise, floor.slug)}
                />
              ))}
          </FloorPlan>
        )}
        {!currentScreen && <div className="fixed bottom-4 left-4">
          <img src={signature.src} className={(buildingDetails || hoverActive) ? 'opacity-20' : ''} />
        </div>}
      </div>
    </div>
  );
}
