import MiniMenuContainer from "../mini-menu-container";
import ItemMapa from "../item-mapa";
import InfoMapa from "../info-mapa";
import depositG1 from "../../public/deposit-g1-blue.png";
import bgInfinityBlue from "../../public/bg-infinity-blue.png";
import bgInfinitySea from "../../public/bg-infinty-sea.png";
import { useState } from "react";

export default function MapaDeVagas() {
  const [infoMap, setInfoMap] = useState<any>();

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

  return (
    <MiniMenuContainer title="Mapa de Vagas">
      <div className="flex">
        <div className="text-center mb-24">
          <div>
            <div className="flex flex-row mb-24"></div>
          </div>
        </div>
      </div>
    </MiniMenuContainer>
  );
}
