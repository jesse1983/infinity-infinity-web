import { MouseEventHandler } from "react";

type ItemProps = {
  identifier: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isFilled?: boolean;
};

export default function ItemMapa(props: ItemProps) {
  return (
    <div
      className={`w-auto flex flex-col`}
      data-aos="zoom-in"
    >
      <div
        className={`${ props.isFilled ? 'bg-dusk' : '' } border border-dusk w-[90px] h-[90px] text-2xl rounded-full flex items-center justify-center font-thin cursor-pointer hover:text-2xl transition-all ease-in-out delay-5`}
        onClick={props.onClick}
        // data-aos="zoom-in"
      >
        {props.identifier}
      </div>
    </div>
  );
}
