import MiniMenuContainer from "../mini-menu-container";
import ItemMapa from "../item-mapa";
import InfoMapa from "../info-mapa";
import depositG1 from "../../public/deposit-g1-blue.png";
import bgInfinityBlue from "../../public/bg-infinity-blue.png";
import bgInfinitySea from "../../public/bg-infinty-sea.png";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function MapaDeDepositos() {
  const [infoMap, setInfoMap] = useState<any>();

  const groupBy = (input: any[], key: string) => {
    const groups = [];
    for (let i = 0; i < input.length; i++) {
      let found = groups.find((group) => group[key] === input[i][key]);
      if (!found) {
        found = { [key]: input[i][key], items: [] };
        groups.push(found);
      }
      found.items.push(input[i]);
    }
    return groups;
  };

  const deposits = [
    {
      identifier: "G1",
      apartment: "Infinity Blue",
      mainImage: depositG1.src,
      bgImage: bgInfinityBlue.src,
    },
    {
      identifier: "G2",
      apartment: "Infinity Blue",
      mainImage: depositG1.src,
      bgImage: bgInfinityBlue.src,
    },
    {
      identifier: "G1",
      apartment: "Infinity Sea",
      mainImage: depositG1.src,
      bgImage: bgInfinitySea.src,
      parkingSpace: "1001",
    },
    {
      identifier: "G2",
      apartment: "Infinity Sea",
      mainImage: depositG1.src,
      bgImage: bgInfinitySea.src,
    },
  ];

  const grouped = groupBy(deposits, "apartment");

  return (
    <>
      {infoMap && (
        <InfoMapa
          parkingSpace={infoMap.parkingSpace}
          identifier={infoMap.identifier}
          apartment={infoMap.apartment}
          mainImage={infoMap.mainImage}
          bgImage={infoMap.bgImage}
          onBack={() => setInfoMap(undefined)}
        />
      )}
      {!infoMap && (
        <MiniMenuContainer title="Mapa de Depositos">
          <div className="flex flex-col gap-y-24 text-center">
            {grouped.map((group) => (
              <div key={uuidv4()}>
                <div className="self-center mb-10 text-3xl uppercase font-light mx-auto">
                  {group.apartment}
                </div>
                <div className="flex flex-row">
                  {group.items.map((item) => (
                    <ItemMapa
                      onClick={() => {
                        setInfoMap(item);
                      }}
                      identifier={item.identifier}
                      key={uuidv4()}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </MiniMenuContainer>
      )}
    </>
  );
}
