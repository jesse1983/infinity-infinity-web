import ItemMapa from "../item-mapa";
import { FloorPlanInfinityWorldMapa } from "../floorplans";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InfoMapa from "../info-mapa";
import { ENTERPRISE } from "../../types";
import { PARKING } from "../../types/parking";
import { DEPOSIT } from "../../types/deposit";
import SeaVideo from "../sea-video";
import EnterpriseContainer from "../enterprise-container";

export default function MapaDeVagas({
  enterprises,
}: {
  enterprises: ENTERPRISE[];
}) {
  const [selectedEnterprise, setSelectedEnterprise] = useState<ENTERPRISE>();
  const [infoParking, setInfoParking] = useState<PARKING | DEPOSIT>();

  const onBack = () => setSelectedEnterprise(undefined);

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
          <EnterpriseContainer title="Mapa de depósitos" onBack={onBack}>
          <div className="flex flex-col text-center">
                <div
                  className={`grid ${
                    selectedEnterprise.slug === "infinity-sea"
                      ? "grid-cols-8"
                      : "grid-cols-5"
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
                <div className="flex justify-center items-center gap-4">
                  {selectedEnterprise.deposits.sort(compare).map((item) => (
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
        <div className="w-full overflow-hidden" data-aos="zoom-in">
          <div
            className="absolute w-full text-center z-50"
            data-aos="slide-down"
            data-aos-delay="500"
          >
            <h1 className=" uppercase font-thin text-5xl pl-[25vw] pt-14">
              Mapa de vagas
            </h1>
          </div>
          <FloorPlanInfinityWorldMapa
            getApartment={setSelectedEnterprise}
            enterprises={enterprises}
            isSalesTable={true}
          />
        </div>
      )}
    </>
  );
}
