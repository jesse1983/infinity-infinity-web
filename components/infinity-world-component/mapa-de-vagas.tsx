import MiniMenuContainer from "../mini-menu-container";
import ItemMapa from "../item-mapa";
import { FloorPlanInfinityWorldMapa } from "../floorplans";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InfoMapa from "../info-mapa";
import { ENTERPRISE } from "../../types";
import { PARKING } from "../../types/parking";

export default function MapaDeVagas({ enterprises }: { enterprises: ENTERPRISE[] }) {
  const [selectedEnterprise, setSelectedEnterprise] = useState<ENTERPRISE>();
  const [infoParking, setInfoParking] = useState<PARKING>();

  const onBack = () => setSelectedEnterprise(undefined);

  const compare = (a, b) => parseInt(a.parkingslot) >= parseInt(b.parkingslot) ? 1 : -1;

  // console.log(selectedEnterprise.slug)

  return (
    <>
      {selectedEnterprise && !infoParking && (
        <>
          <MiniMenuContainer title="Mapa de Vagas">
            <div className="flex flex-col text-center p-5">
              <div key={uuidv4()}>
                <div className={`grid ${selectedEnterprise.slug === "infinity-sea" ? 'grid-cols-8' : 'grid-cols-5'} gap-y-8`}>

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
          parkingSpace={infoParking.identifier}
          identifier={infoParking.parkingslot}
          apartment={selectedEnterprise.title}
          mainImage={infoParking.image}
          bgImage={selectedEnterprise.bgImage}
          onBack={() => setInfoParking(undefined)}
        />
      )}
      {!selectedEnterprise && (
        <MiniMenuContainer title="Mapa de Vagas">
          <div className="w-full px-24">
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
