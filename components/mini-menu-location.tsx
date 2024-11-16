import Nav01 from "../public/localization-nav01.svg";
import Nav02 from "../public/localization-nav02.svg";
import Nav03 from "../public/localization-nav03.svg";
import MiniMenu from "./min-menu";

export default function MiniMenuLocation() {
  const items = [
    {
      icon: <Nav02 className="w-7 md:w-10 xl:w-12" />,
      text: "Sobre a localização",
      path: "/localizacao/sobre-a-localizacao",
    },
    {
      icon: <Nav01 className="w-7 md:w-10 xl:w-12" />,
      text: "Localização",
      path: "/localizacao",
    },
    {
      icon: <Nav03 className="w-7 md:w-10 xl:w-12" />,
      text: "Requalificação",
      path: "/localizacao/requalificacao",
    },
  ];
  return MiniMenu({ items });
}
