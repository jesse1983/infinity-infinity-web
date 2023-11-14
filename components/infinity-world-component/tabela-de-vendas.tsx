import MiniMenuContainer from "../mini-menu-container";
import tabelaVendas from "../../public/tabela-vendas.png";
import { FloorPlanInfinityWorldMapa } from "../floorplans";
import { useState } from "react";
import Image from "next/image";
import BackButton from "../voltar";

export default function TabelaDeVendas() {
  const [priceTable, setPriceTable] = useState<any>();

  const onBack = () => setPriceTable(undefined);
  return (
    <>
      {priceTable && (
        <>
          <div className="self-center">
            <BackButton onClick={() => (onBack ? onBack() : undefined)} />
          </div>
          <div
            className="container mx-auto mt-[64px] overflow-y-scroll w-[80%] h-[80%] bg-[length:100%_100%]"
            style={{
              backgroundImage: `url(${tabelaVendas.src})`,
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
