import { FloorPlanInfinityWorldMapa } from "../floorplans";
import { useState } from "react";
import BackButton from "../voltar";
import { ENTERPRISE } from "../../types";
import { useRouter } from "next/router";
import IconClose from "../../public/icon-close-filled.svg";

export default function TabelaDeVendas({
  enterprises,
}: {
  enterprises: ENTERPRISE[];
}) {
  const [selectedEnterprise, setSelectedEnterprise] = useState<ENTERPRISE>();

  const onBack = () => setSelectedEnterprise(undefined);
  const router = useRouter();

  return (
    <div className={"w-full h-full relative flex"}>
      <div
        className={
          "fixed z-50 selected:top-4 selected:bottom-full cursor-pointer " +
          (selectedEnterprise ? "top-44 right-8" : "bottom-4 right-4 scale-75")
        }
        onClick={() =>
          selectedEnterprise ? onBack() : router.push("/infinity-world")
        }
      >
        {selectedEnterprise ? <IconClose /> : <BackButton margin="m-0" />}
      </div>
      {selectedEnterprise && (
        <>
          <div
            className="container mx-auto max-w-[75%] h-[70vh] bg-[length:100%_100%]  text-center"
            data-aos="zoom-out"
          >
            <iframe
              src={selectedEnterprise.salesTable}
              className="m-auto w-full h-full"
            />
          </div>
        </>
      )}
      {!selectedEnterprise && (
        <div className="w-full overflow-hidden" data-aos="zoom-in">
          <div
            className="absolute w-full text-center z-50"
            data-aos="slide-down"
            data-aos-delay="500"
          >
            <h1 className="uppercase font-thin text-5xl pl-[25vw] pt-14">
              Tabela de vendas
            </h1>
          </div>
          <FloorPlanInfinityWorldMapa
            getApartment={setSelectedEnterprise}
            enterprises={enterprises}
            isSalesTable={true}
          />
        </div>
      )}
    </div>
  );
}
