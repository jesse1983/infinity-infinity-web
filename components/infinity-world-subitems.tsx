import { ENTERPRISE } from "../types";

import MiniMenuItem01 from "../public/mini-menu-item01.svg";
import MiniMenuItem02 from "../public/mini-menu-item02.svg";
import MiniMenuItem03 from "../public/mini-menu-item03.svg";
import MiniMenuItem04 from "../public/mini-menu-item04.svg";
import MiniMenuItem05 from "../public/info04.svg";
import MapaDeDepositos from "./infinity-world-component/mapa-de-depositos";
import MapaDeVagas from "./infinity-world-component/mapa-de-vagas";

export enum SCREEN {
  SALES_TABLE = "SALES_TABLE",
  PARKING_MAP = "PARKING_MAP",
  DEPOSIT_MAP = "DEPOSIT_MAP",
  VIEWS = "VIEWS",
  INOVATION = "INOVATION",
}

export default function infinityWorldItems({
  enterprises,
}: {
  enterprises: ENTERPRISE[];
}) {
  return [
    {
      icon: <MiniMenuItem01 className="mr-1 h-10 scale-75" />,
      screenComponent: <></>,
      screen: SCREEN.SALES_TABLE,
      text: "Tabela de vendas",
      path: "tabela-de-vendas",
    },
    {
      icon: <MiniMenuItem02 className="mr-1 h-10 scale-75" />,
      screenComponent: <MapaDeVagas enterprises={enterprises} />,
      screen: SCREEN.PARKING_MAP,
      text: "Mapa de vagas",
      path: "mapa-de-vagas",
    },
    {
      icon: <MiniMenuItem03 className="mr-2 h-10 scale-75" />,
      screenComponent: <MapaDeDepositos enterprises={enterprises} />,
      screen: SCREEN.DEPOSIT_MAP,
      text: "Mapa de depósitos",
      path: "mapa-de-depositos",
    },
    {
      icon: <MiniMenuItem04 className="pt-3 mr-2 h-11 scale-75" />,
      screenComponent: <div></div>,
      screen: SCREEN.VIEWS,
      text: "Vistas",
      path: "vistas",
    },
    {
      icon: <MiniMenuItem05 className="mr-1 h-10 scale-75" />,
      screenComponent: <div></div>,
      screen: SCREEN.INOVATION,
      text: "Inovação e tecnologia",
      path: "inovacao-e-tecnologia",
    },
  ];
}
