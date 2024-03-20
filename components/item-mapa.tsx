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
        props.isParkingSlot ? "mx-4 mt-2" : "mx-14 mt-5"
      } `}
      data-aos="zoom-in"
    >
      <div
        className={`${
          props.isApartmentInfo
            ? "bg-midnight-950 w-8 h-8 text-sm"
            : "bg-dusk w-32 h-32 text-4xl"
        } ${props.isParkingSlot ? "w-[96px] h-[96px] text-2xl" : ""} rounded-full flex items-center justify-center font-light cursor-pointer hover:text-2xl transition-all ease-in-out delay-5`}
        onClick={props.onClick}
        // data-aos="zoom-in"
      >
        {props.identifier}
      </div>
    </div>
  );
}
