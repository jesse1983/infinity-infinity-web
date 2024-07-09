import { FloorPlanInfinityWorldMapa } from "../floorplans";
import { useState } from "react";
import BackButton from "../voltar";
import { ENTERPRISE } from "../../types";
import { useRouter } from "next/router";
import IconClose from "../../public/icon-close-filled-dark.svg";
import AeroMap from "../aero-map";

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
              src={selectedEnterprise.salesTable + '#toolbar=0&navpanes=0&scrollbar=0'}
              className="m-auto w-full h-full"
            />
          </div>
        </>
      )}
      {!selectedEnterprise && (
                <AeroMap
                enterprises={enterprises}
                onClick={setSelectedEnterprise}
                title="Tabela de vendas"
              />
      )}
    </div>
  );
}
