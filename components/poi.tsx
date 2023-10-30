import IconShoppingBag from "../public/icon-shopping-bag.svg";

type Props = {
  left: number,
  top: number,
  active?: boolean,
  icon?: string,
  title?: string,
}
const getIcon = (icon: string) => {
  const map = new Map();

  map.set('IconShoppingBag', IconShoppingBag);

  return map.get(icon);
}
export default function Poi({ active = false, icon, title, top, left }: Props) {
  const Icon = getIcon(icon);
  return (
    <div
    style={{ top: `${top}%`, left: `${left}%` }}
    className={`
    group
    absolute
    bg-midnight-950
    px-3
    py-2
    rounded-full
    xs:text-xs
    sm:text-sm
    lg:text-lg
    whitespace-nowrap
    text-white
    uppercase
    flex
    content-center
    cursor-pointer
    h-10
    w-10
    hover:gap-3
    hover:w-auto
    transition
    duration-300
    ease-out
    ${active ? "opacity-0" : ""}
  `}
  >
    <span className="inline-block">
      <Icon className="w-5 h-5 fill-white stroke-white" />
    </span>
    <span className="
      inline-block
      overflow-hidden
      scale-x-0
      w-0
      group-hover:scale-x-100
      group-hover:w-auto
      origin-left
      transition-all
      duration-300
      ease-out
    ">
      {title}
    </span>
  </div>
  )
}
