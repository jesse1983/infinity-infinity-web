import { useState } from "react";
import { DECORATED } from "../types/floor";
import MiniMenuContainer from "./mini-menu-container";
import BackButton from "./voltar";
import SeaVideo from "./sea-video";

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

  const decoratedTitle = (deco: DECORATED) => {
    return (
      <div className="absolute h-full lg:flex items-center justify-center flex-col w-3/12 py-12 text-center hidden">
        <div className="lg:w-2/3">
          <div className="uppercase" data-aos="slide-right">Opção</div>
          <div className="text-4xl font-thin mb-20" data-aos="slide-right" data-aos-delay="100">{deco.title}</div>
          <div className="text-3xl font-thin pb-5 border-b border-b-white w-full" data-aos="slide-right"  data-aos-delay="200">
            {deco.subtitle}
          </div>
          <div className="p-7 border-b border-b-white" data-aos="slide-right"  data-aos-delay="300">{deco.description}</div>
        </div>
        <div
          className="absolute z-40 bottom-7 left-7"
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
  return (
    <div className="absolute z-30 bg-midnight-950 h-full w-full">
      {selectedDecorated ? (
        <div
          className="h-[calc(100vh_-_174px)] w-screen flex items-center overflow-hidden bg-cover "
          style={{ backgroundImage: "url(/bg-projetistas.jpg)" }}
        >
          <MiniMenuContainer
            slot={decoratedTitle(selectedDecorated)}
            noBackground
          >
            <div className="grid grid-flow-col auto-cols-fr w-full text-center gap-12 text-white p-12 font-thin" data-aos="slide-left">
              <img
                src={selectedDecorated.floorPlanSrc}
                alt={selectedDecorated.title}
                className="w-full max-h-screen"
              />
            </div>
          </MiniMenuContainer>
        </div>
      ) : (
        <div
          className="h-[calc(100vh_-_174px)] w-screen flex items-center"
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

            <div className="grid grid-cols-12 w-[60%] mx-auto text-center gap-20 text-white p-12 font-thin">
              {decorated.sort((a, b) => a.sort > b.sort ? 1 : -1).map((deco, i) => (
                <div
                  className={
                    "border-b border-b-white pb-8 col-span-6" +
                    odd(i, decorated.length)
                  }
                  onClick={() => setSelectedDecorated(deco)}
                  data-aos="slide-down"
                >
                  <h1 className="text-3xl p-4 mb-8 cursor-pointer border border-white hover:bg-white hover:text-midnight-950 duration-300 transition-all">
                    {deco.title}
                  </h1>
                  <p className="text-2xl">{deco.description}</p>
                </div>
              ))}
              <div
                className="absolute z-40 bottom-7 left-7"
                onClick={() => close()}
              >
                <BackButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
