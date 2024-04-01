import MiniMenuContainer from "../mini-menu-container";
import tabelaVendas from "../../public/tabela-vendas.png";
import { FloorPlanInfinityWorldMapa } from "../floorplans";
import { useState } from "react";
import Image from "next/image";
import BackButton from "../voltar";
import { ENTERPRISE } from "../../types";

export default function TabelaDeVendas({
  enterprises,
}: {
  enterprises: ENTERPRISE[];
}) {
  const [selectedEnterprise, setSelectedEnterprise] = useState<ENTERPRISE>();

  const onBack = () => setSelectedEnterprise(undefined);
  return (
    <>
      {selectedEnterprise && (
        <>
          <div className="self-center" data-aos="zoom-in">
            <BackButton onClick={() => (onBack ? onBack() : undefined)} />
          </div>
          <div
            className="container mx-auto mt-[64px] max-w-[75%] h-[75vh] bg-[length:100%_100%]  text-center"
            data-aos="zoom-out"
          >

            <iframe src={selectedEnterprise.salesTable} className="m-auto w-full h-full" />
          </div>
        </>
      )}
      {!selectedEnterprise && (
        <MiniMenuContainer title="Tabela de Vendas">
          <div className="w-full p-24">
            <FloorPlanInfinityWorldMapa
              getApartment={setSelectedEnterprise}
              enterprises={enterprises}
              isSalesTable={true}
            />
          </div>
        </MiniMenuContainer>
      )}
    </>
  );
}
