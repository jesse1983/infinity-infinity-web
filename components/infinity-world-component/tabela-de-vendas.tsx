import MiniMenuContainer from "../mini-menu-container";
import bgInfinityBlue from "../../public/bg-infinity-blue.png";
import bgInfinitySea from "../../public/bg-infinty-sea.png";
import { FloorPlanInfinityWorldMapa } from "../floorplans";
import { useState } from "react";
import Image from "next/image";
import Voltar from "../voltar";

export default function TabelaDeVendas() {
  const [priceTable, setPriceTable] = useState<any>();

  const onBack = () => setPriceTable(undefined);
  return (
    <>
      {priceTable && (
        <>
          <div className="self-center">
            <Voltar onClick={() => (onBack ? onBack() : undefined)} />
          </div>
          <div
            className="container mx-auto mt-[64px] overflow-y-scroll w-[80%] h-[80%] bg-[length:100%_100%]"
            style={{
              backgroundImage: `url(${
                priceTable === "Infinity Blue"
                  ? bgInfinityBlue.src
                  : bgInfinitySea.src
              })`,
            }}
          ></div>
        </>
      )}
      {!priceTable && (
        <MiniMenuContainer title="Tabela de Vendas">
          <div className="w-full p-24">
            <FloorPlanInfinityWorldMapa
              getApartment={(desiredApartment) =>
                setPriceTable(desiredApartment)
              }
              isTable={true}
            />
          </div>
        </MiniMenuContainer>
      )}
    </>
  );
}
