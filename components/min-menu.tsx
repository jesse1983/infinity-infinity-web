import Link from "next/link";
import { MouseEvent } from 'react';
import { v4 as uuidv4 } from "uuid";

export type ItemNav = {
  icon: JSX.Element,
  text: string,
  path: string;
  onClick?: Function,
}

export default function MiniMenu({ items = [] }: { items: ItemNav[] }) {
  const height = items.length > 3 ? 'h-[260px]' : 'h-[160px]';
  const nav = (ev: MouseEvent<HTMLAnchorElement>, item: ItemNav) => {
    if (item.onClick) {
      ev.preventDefault();
      item.onClick(ev, item);
    } 
  }
  return (
    <div
      className={`bg-contain absolute px-2 hidden w-[70px] hover:w-[299px] ${height} drop-shadow-2xl z-30 sm:flex flex-col uppercase text-sm font-bold bg-repeat-y bg-right right-0 mr-4 mt-[30vh] overflow-hidden`}
    >
      <div className="relative">
        <div className={`bg-midnight-950/70 w-14 ${height} absolute z-40 right-0`} style={{ boxShadow: '5px -5px 4px 0px rgba(0,0,0,0.25)' }}></div>
        <div className="absolute z-50 right-0">
          <div className={`flex flex-col gap-3 ${height}`}>
            {items.map((item) => (
              <Link
                href={item.path}
                key={uuidv4()}
                onClick={(ev: MouseEvent<HTMLAnchorElement>) => nav(ev, item)}
                className="group flex justify-end items-center gap-4 w-[269px] whitespace-nowrap hover:bg-midnight-950/70 px-1 py-2 transition ease-in-out delay-50 hover:shadow-lg hover:border-l-8 hover:border-l-midnight-950"
              >
                <span className="opacity-0 group-hover:opacity-100">
                  {item.text}
                </span>
                <span>{item.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
