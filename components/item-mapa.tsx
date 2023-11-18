import { MouseEventHandler } from "react";

type ItemProps = {
  identifier: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isParkingSlot?: boolean;
  isApartmentInfo?: boolean;
};

export default function ItemMapa(props: ItemProps) {
  return (
    <div
      className={`w-auto flex flex-col ${
        props.isParkingSlot
          ? "mx-5"
          : props.isApartmentInfo
          ? "self-start"
          : "mx-14"
      } `}
      // data-aos="zoom-in"
    >
      <div
        className={`${
          props.isApartmentInfo
            ? "bg-midnight-950 w-8 h-8 text-sm"
            : "bg-dusk w-32 h-32 text-4xl"
        } rounded-full flex items-center justify-center font-light cursor-pointer`}
        onClick={props.onClick}
        // data-aos="zoom-in"
      >
        {props.identifier}
      </div>
    </div>
  );
}
