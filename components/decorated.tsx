import { useEffect, useMemo, useState } from "react";
import { DECORATED } from "../types/floor";
import BackButton from "./voltar";
import SeaVideo from "./sea-video";
import { AMBIENT } from "../types";
import FullFloorPlan from "./full-floor-plan";

export function Decorated({
  decorated,
  onClose = () => undefined,
}: {
  decorated: DECORATED[];
  onClose?: Function;
}) {
  const [selectedDecorated, setSelectedDecorated] = useState<
    DECORATED | undefined
  >();

  const close = () => onClose();

  const sortedDecorated = useMemo(() => {
    return decorated.sort((a, b) => (a.sort > b.sort ? 1 : -1));
  }, [decorated]);

  const decoratedTitle = (deco: DECORATED) => {
    return (
      <div className="absolute h-full lg:flex items-center justify-between flex-col w-3/12 py-12 text-center hidden">
        <div></div>
        <div className="w-full lg:w-9/12">
          <div className="uppercase" data-aos="slide-right">
            Opção
          </div>
          <div
            className="text-3xl font-thin mb-20"
            data-aos="slide-right"
            data-aos-delay="100"
          >
            {deco.title}
          </div>
          <div
            className="text-3xl font-thin pb-5 border-b border-b-white w-full"
            data-aos="slide-right"
            data-aos-delay="200"
          >
            {deco.subtitle}
          </div>
          <div
            className="p-7 border-b border-b-white"
            data-aos="slide-right"
            data-aos-delay="300"
          >
            {deco.description.split(" - ").map((d) => (
              <span className=" block">{d}</span>
            ))}
          </div>
        </div>
        <div
          className="scale-50"
          onClick={() => setSelectedDecorated(undefined)}
        >
          <BackButton />
        </div>
      </div>
    );
  };
  const odd = (i: number, total: number) => {
    if (i === total - 1 && i % 2 === 0) return " col-start-4";
    return "";
  };

  const [isClient, setIsClient] = useState(false);
  const [selectedAmbient, setSelectedAmbient] = useState<AMBIENT>(undefined);
  const [currentImage, setCurrentImage] = useState(0);

  const openSlideShow = (ev, ambient: AMBIENT, ambients: AMBIENT[]) => {
    ev.preventDefault();
    if (ambient.photoSrc) {
      setSelectedAmbient(ambient);
      setCurrentImage(
        ambients
          .filter((a) => a.photoSrc)
          .findIndex((a) => a.photoSrc === ambient.photoSrc)
      );
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="absolute z-30 bg-midnight-950 h-[calc(100vh_-_174px)] w-screen">
      {selectedDecorated ? (
        <>
          {!selectedAmbient && (
            <div
              className="h-[calc(100vh_-_174px)] w-screen flex items-center overflow-hidden bg-cover"
              style={{ backgroundImage: "url(/bg-opcao.jpg)" }}
            >
              <div className="grid grid-cols-4">
                <div>{decoratedTitle(selectedDecorated)}</div>
                <div className="col-span-3">
                  {selectedDecorated.floorPlanExample?.floorPlanSrc && (
                    <FullFloorPlan
                      floor={selectedDecorated.floorPlanExample}
                      setShowDecorated={() => {}}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div
          className="h-[calc(100vh_-_174px)] w-screen flex items-center relative "
          style={{ backgroundColor: "#9C917C" }}
        >
          <SeaVideo number={1} />
          <div className="w-[75%] mx-auto z-10">
            <h1
              className="text-5xl uppercase font-light mb-12"
              data-aos="slide-up"
            >
              <span className="border-b border-white pb-4">
                Opções de plantas
              </span>
            </h1>

            <div className="flex justify-center mx-auto text-center gap-20 text-white p-12 font-thin">
              {sortedDecorated.map((deco, i) => (
                <div
                  className={
                    "border-b border-b-white pb-8 w-[300px]" +
                    odd(i, decorated.length)
                  }
                  onClick={() => setSelectedDecorated(deco)}
                  data-aos="slide-down"
                >
                  {}
                  <h1 className="text-3xl p-4 mb-8 cursor-pointer border border-white hover:bg-white hover:text-midnight-950 duration-300 transition-all">
                    {isClient ? deco.title : ""}
                  </h1>
                  <p className="text-2xl">
                    {isClient
                      ? deco.description
                          .split(" - ")
                          .map((d) => <span className=" block">{d}</span>)
                      : ""}
                  </p>
                </div>
              ))}
              <div
                className="absolute z-40 bottom-7 left-7 scale-50"
                onClick={() => close()}
              >
                <BackButton  />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
