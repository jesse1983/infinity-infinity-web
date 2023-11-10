import MiniMenuContainer from "../mini-menu-container";
import bgInfinityBlue from "../../public/bg-infinity-blue.png";
import { FloorPlanInfinityWorldMapa } from "../floorplans";
import { useState } from "react";
import Image from "next/image";

export default function TabelaDeVendas() {
  const [priceTable, setPriceTable] = useState<any>();
  return (
    <>
      {priceTable && (
        <>
          <Image
            src={bgInfinityBlue}
            alt={`Tabela de Vendas do apartamento {apartamento}`}
          />
        </>
      )}
      {!priceTable && (
        <MiniMenuContainer title="Tabela de Vendas">
          <div className="w-full p-24">
            <FloorPlanInfinityWorldMapa />
          </div>
        </MiniMenuContainer>
      )}
    </>
  );
}
