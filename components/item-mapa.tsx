import { MouseEventHandler } from "react";

type ItemProps = {
  identifier: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isParkingSlot?: boolean;
};

export default function ItemMapa(props: ItemProps) {
  return (
    <div
      className={`w-auto flex flex-col ${
        props.isParkingSlot ? "mx-5" : "mx-14"
      }`}
    >
      <div
        className="bg-dusk rounded-full w-32 h-32 flex items-center justify-center text-4xl font-light cursor-pointer"
        onClick={props.onClick}
      >
        {props.identifier}
      </div>
    </div>
  );
}
