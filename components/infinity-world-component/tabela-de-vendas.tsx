import { FloorPlanInfinityWorldMapa } from "../floorplans";
import { useState } from "react";
import BackButton from "../voltar";
import { ENTERPRISE } from "../../types";
import { useRouter } from "next/router";
import IconClose from "../../public/icon-close-filled-dark.svg";
import AeroMap from "../aero-map";
import { useSearchParams } from "next/navigation";
import Download from "../download";

export default function TabelaDeVendas({
  enterprises,
}: {
  enterprises: ENTERPRISE[];
}) {
  const searchParams = useSearchParams();
  const slug = searchParams.get("enterprise");
  const enterprise = enterprises.find((e) => e.slug === slug);

  const [selectedEnterprise, setSelectedEnterprise] =
    useState<ENTERPRISE>(enterprise);

  const router = useRouter();
  const onBack = () => router.push("/infinity-world/tabela-de-vendas");

  const go = (enterprise: ENTERPRISE) => {
    router.replace(
      "/infinity-world/tabela-de-vendas?enterprise=" + enterprise.slug
    );
    setSelectedEnterprise(enterprise);
  };

  return (
    <div className={"w-full h-full relative flex"}>
      <div
        className={
          "absolute z-50 selected:top-4 selected:bottom-full cursor-pointer " +
          (selectedEnterprise ? "top-6 right-24 " : "bottom-4 right-4 scale-75")
        }
        onClick={() =>
          selectedEnterprise ? onBack() : router.push("/infinity-world")
        }
      >
        {selectedEnterprise ? <IconClose /> : <BackButton margin="m-0" />}
      </div>

      <div
        className="absolute z-50 selected:top-4 selected:bottom-full cursor-pointer bottom-4 right-24 scale-75"
        onClick={() => true}
      >
        <Download />
      </div>
      {selectedEnterprise && (
        <>
          <div
            className="container mx-auto w-[100vw_-_30px] h-[70vh] bg-[length:100%_100%]  text-center"
            data-aos="zoom-out"
          >
            <iframe
              src={
                selectedEnterprise.salesTable +
                "#toolbar=0&navpanes=0&scrollbar=0"
              }
              className="m-auto w-full h-full"
            />
          </div>
        </>
      )}
      {!selectedEnterprise && (
        <AeroMap
          enterprises={enterprises}
          onClick={go}
          title="Tabela de vendas"
        />
      )}
    </div>
  );
}
