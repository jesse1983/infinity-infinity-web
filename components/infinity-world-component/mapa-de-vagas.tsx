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

export default function MapaDeVagas() {
  const [parkingSelection, setParkingSelection] = useState<any>();
  const [infoParking, setInfoParking] = useState<any>();

  const onBack = () => setParkingSelection(undefined);

  return (
    <>
      {parkingSelection && !infoParking && (
        <>
          <MiniMenuContainer title="Mapa de Vagas">
            <div className="flex flex-col gap-y-24 text-center">
              <div key={uuidv4()}>
                <div className="flex flex-row flex-wrap gap-y-10">
                  {parkingSlots.map((item) =>
                    item.apartment === parkingSelection ? (
                      <ItemMapa
                        onClick={() => {
                          setInfoParking(item);
                        }}
                        identifier={item.parkingSpace}
                        key={uuidv4()}
                        isParkingSlot={true}
                      />
                    ) : (
                      <div key={uuidv4()} />
                    )
                  )}
                </div>
              </div>
            </div>
          </MiniMenuContainer>
        </>
      )}
      {infoParking && parkingSelection && (
        // <div>{JSON.stringify(currentSlot)}</div>
        <InfoMapa
          parkingSpace={infoParking.parkingSpace}
          identifier={infoParking.identifier}
          apartment={infoParking.apartment}
          mainImage={infoParking.mainImage}
          bgImage={infoParking.bgImage}
          onBack={() => setInfoParking(undefined)}
        />
      )}
      {!parkingSelection && (
        <MiniMenuContainer title="Mapa de Vagas">
          <div className="w-full p-24">
            <FloorPlanInfinityWorldMapa
              getApartment={(desiredApartment) =>
                setParkingSelection(desiredApartment)
              }
              isTable={false}
            />
          </div>
        </MiniMenuContainer>
      )}
    </>
  );
}
