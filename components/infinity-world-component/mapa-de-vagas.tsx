import MiniMenuContainer from "../mini-menu-container";
import ItemMapa from "../item-mapa";
import bgInfinityBlue from "../../public/bg-infinity-blue.png";
import bgInfinitySea from "../../public/bg-infinty-sea.png";
import depositG1 from "../../public/deposit-g1-blue.png";
import { FloorPlanInfinityWorldMapa } from "../floorplans";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { parkingSlots } from "./parkingSlots";
import InfoMapa from "../info-mapa";
import { ENTERPRISE } from "../../types";
import { PARKING } from "../../types/parking";

export default function MapaDeVagas({ enterprises }: { enterprises: ENTERPRISE[] }) {
  const [selectedEnterprise, setSelectedEnterprise] = useState<ENTERPRISE>();
  const [infoParking, setInfoParking] = useState<PARKING>();

  const onBack = () => setSelectedEnterprise(undefined);

  const compare = (a, b) => parseInt(a.parkingslot) >= parseInt(b.parkingslot) ? 1 : -1;

  // console.log(selectedEnterprise.garages)

  return (
    <>
      {selectedEnterprise && !infoParking && (
        <>
          <MiniMenuContainer title="Mapa de Vagas">
            <div className="flex flex-col gap-y-24 text-center">
              <div key={uuidv4()}>
                <div className="flex flex-row flex-wrap gap-y-10">
                  {selectedEnterprise.garages.sort(compare).map((item) =>
                   (
                      <ItemMapa
                        onClick={() => {
                          setInfoParking(item);
                        }}
                        identifier={item.parkingslot}
                        key={uuidv4()}
                        isParkingSlot={true}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </MiniMenuContainer>
        </>
      )}
      {infoParking && selectedEnterprise && (
        // <div>{JSON.stringify(currentSlot)}</div>
        <InfoMapa
          parkingSpace={infoParking.parkingslot}
          identifier={infoParking.identifier}
          apartment={selectedEnterprise.title}
          mainImage={infoParking.image}
          bgImage={selectedEnterprise.bgImage}
          onBack={() => setInfoParking(undefined)}
        />
      )}
      {!selectedEnterprise && (
        <MiniMenuContainer title="Mapa de Vagas">
          <div className="w-full p-24">
            <FloorPlanInfinityWorldMapa
              getApartment={setSelectedEnterprise}
              enterprises={enterprises}
              isSalesTable={false}
            />
          </div>
        </MiniMenuContainer>
      )}
    </>
  );
}
