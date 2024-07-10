import ItemMapa from "../item-mapa";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InfoMapa from "../info-mapa";
import { ENTERPRISE } from "../../types";
import { PARKING } from "../../types/parking";
import { DEPOSIT } from "../../types/deposit";
import SeaVideo from "../sea-video";
import EnterpriseContainer from "../enterprise-container";
import { useRouter } from "next/router";
import AeroMap from "../aero-map";
import { useSearchParams } from "next/navigation";

export default function MapaDeVagas({
  enterprises,
}: {
  enterprises: ENTERPRISE[];
}) {
  const searchParams = useSearchParams();
  const slug = searchParams.get('enterprise');
  const building = enterprises.find((e) => e.slug === slug);
  
  const [selectedEnterprise, setSelectedEnterprise] = useState<ENTERPRISE>(building);
  const [infoParking, setInfoParking] = useState<PARKING | DEPOSIT>();

  const onBack = () => router.push("/infinity-world/mapa-de-vagas");

  const router = useRouter();

  const go = (enterprise: ENTERPRISE) => {
    router.replace(
      "/infinity-world/mapa-de-vagas?enterprise=" + enterprise.slug
    );
    setSelectedEnterprise(enterprise);
  };

  const compare = (a, b) =>
    a.parkingslot
      ? parseInt(a.parkingslot) >= parseInt(b.parkingslot)
        ? 1
        : -1
      : parseInt(a.identifier) >= parseInt(b.identifier)
      ? 1
      : -1;
  return (
    <>
      {selectedEnterprise && !infoParking && (
        <>
          <SeaVideo />
          <EnterpriseContainer title="Mapa de vagas" onBack={onBack}>
            <div className="flex flex-col text-center">
              <div
                className={`mx-auto grid ${
                  selectedEnterprise.slug === "infinity-sea"
                    ? "grid-cols-8"
                    : "grid-cols-5 w-[68%] "
                } gap-y-8 gap-4 mb-4`}
              >
                {selectedEnterprise.garages.sort(compare).map((item) => (
                  <ItemMapa
                    onClick={() => {
                      setInfoParking(item);
                    }}
                    identifier={item.parkingslot}
                    key={uuidv4()}
                    isFilled
                  />
                ))}
              </div>
              <div className="flex justify-center items-center gap-4 pt-8">
                {selectedEnterprise.deposits?.sort(compare).map((item) => (
                  <ItemMapa
                    onClick={() => {
                      setInfoParking(item);
                    }}
                    identifier={item.identifier}
                    key={uuidv4()}
                  />
                ))}
              </div>
            </div>
          </EnterpriseContainer>
        </>
      )}
      {infoParking && selectedEnterprise && (
        // <div>{JSON.stringify(currentSlot)}</div>
        <InfoMapa
          parkingSpace={infoParking.identifier}
          identifier={infoParking.parkingslot}
          apartment={selectedEnterprise.title}
          mainImage={infoParking.image}
          bgImage={selectedEnterprise.bgImage}
          onBack={() => setInfoParking(undefined)}
        />
      )}
      {!selectedEnterprise && (
        <AeroMap
          enterprises={enterprises}
          onClick={go}
          title="Mapa de vagas"
        />
      )}
    </>
  );
}
