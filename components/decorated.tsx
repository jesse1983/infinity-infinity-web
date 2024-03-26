import { useState } from "react";
import { DECORATED } from "../types/floor";
import MiniMenuContainer from "./mini-menu-container";
import BackButton from "./voltar";

export function Decorated({ decorated, onClose = () => undefined }: { decorated: DECORATED[], onClose?: Function }) {
  const [selectedDecorated, setSelectedDecorated] = useState<
    DECORATED | undefined
  >();

  const close = () => onClose();

  const decoratedTitle = (deco: DECORATED) => {
    return (
      <div className="absolute h-full lg:flex items-center justify-center flex-col w-3/12 p-12 text-center hidden">
        <div className="lg:w-2/3">
        <div className="uppercase">Opção</div>
        <div className="text-4xl font-thin mb-20">{deco.title}</div>
        <div className="text-3xl font-thin pb-5 border-b border-b-white w-full">
          {deco.subtitle}
        </div>
        <div className="p-7 border-b border-b-white">{deco.description}</div>
        </div>
      </div>
    );
  };
  const odd = (i: number, total: number) => {
    if (i === (total - 1) && i % 2 === 0) return ' col-start-4';
    return '';
  }
  return (
    <div className="absolute z-30 bg-midnight-950 h-full w-full">
      {selectedDecorated ? (
        <MiniMenuContainer
          title={""}
          noBorder
          slot={decoratedTitle(selectedDecorated)}
        >
          <div className="grid grid-flow-col auto-cols-fr w-full text-center gap-12 text-white p-12 font-thin">
            <img src={selectedDecorated.floorPlanSrc} alt={selectedDecorated.title} className="w-full max-h-screen" />
          </div>
          <div className="absolute z-40 bottom-7 right-7" onClick={() => setSelectedDecorated(undefined)}><BackButton /></div>

        </MiniMenuContainer>
      ) : (
        <MiniMenuContainer title="Opções de plantas">
          <div className="grid grid-cols-12 w-full text-center gap-12 text-white p-12 font-thin">
            {decorated.map((deco, i) => (
              <div className={'border-b border-b-white pb-8 col-span-6' + odd(i, decorated.length)}>
                <h1
                  className="text-2xl  bg-dusk p-4 uppercase mb-16 cursor-pointer"
                  onClick={() => setSelectedDecorated(deco)}
                >
                  {deco.title}
                </h1>
                <p>{deco.description}</p>
              </div>
            ))}
            <div className="absolute z-40 bottom-7 right-7" onClick={() => close()}><BackButton /></div>
          </div>
        </MiniMenuContainer>
      )}
    </div>
  );
}
