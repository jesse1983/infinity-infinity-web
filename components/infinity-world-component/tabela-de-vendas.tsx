import MiniMenuContainer from "../mini-menu-container";
import tabelaVendas from "../../public/tabela-vendas.png";
import { FloorPlanInfinityWorldMapa } from "../floorplans";
import { useState } from "react";
import Image from "next/image";
import BackButton from "../voltar";
import { ENTERPRISE } from "../../types";

export default function TabelaDeVendas({ enterprises }: { enterprises: ENTERPRISE[] }) {
  const [selectedEnterprise, setSelectedEnterprise] = useState<ENTERPRISE>();

  const onBack = () => setSelectedEnterprise(undefined);
  return (
    <>
      {selectedEnterprise && (
        <>
          <div className="self-center">
            <BackButton onClick={() => (onBack ? onBack() : undefined)} />
          </div>
          <div
            className="container mx-auto mt-[64px] overflow-y-scroll w-[80%] h-[80%] bg-[length:100%_100%]"
            style={{
              backgroundImage: `url(${selectedEnterprise.salesTable})`,
            }}
          ></div>
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
