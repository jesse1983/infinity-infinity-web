import MiniMenu from "./min-menu";
import Info01 from "../public/info04.svg";
import Info02 from "../public/info01.svg";
import Info03 from "../public/info03.svg";
import Info04 from "../public/info02.svg";


export default function MenuInformacoes({ currentPage, subpages = [] }) {
  const items = subpages.map((page, i) => ({
    text: page.title as string,
    path: '/informacoes-gerais' + (i === 0 ? '' : ('/' + page.slug)),
    icon: <Info01 />,
  }));

  if (items.length === 4) {
    items[0].icon = <Info01 className="mr-1 w-10 scale-75" />;
    items[1].icon = <Info02 className="mr-1 w-10 scale-75" />;
    items[2].icon = <Info03 className="mr-1 w-10 scale-75" />;
    items[3].icon = <Info04 className="mr-1 w-10 scale-75" />;
  }
  return MiniMenu({ items })
}