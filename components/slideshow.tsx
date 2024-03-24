import { useState } from "react";
import { AMBIENT } from "../types";

type Props = {
  photos: AMBIENT[];
};

export const SlideShow = function ({ photos }: Props) {
  const [active, setActive] = useState(1);
  const next = () => {
    if (active < photos.length - 1) setActive(active + 1);
  };

  const prev = () => {
    if (active > 0) setActive(active - 1);
  };

  const getAlign = (index: number) => {
    if (index === active) return 'justify-center';
    if (index > active) return 'justify-start';
    return 'justify-end';
  }
  return (
    <div className="w-screen h-full overflow-hidden flex">
      <div className="">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
      <div
        className="wrapper flex gap-[30px] m-auto transition-all ease-in-out duration-500 px-[30px]"
        style={{
          width: `calc((100vw + 120px) * ${photos.length})`,
          marginLeft: `calc((-100vw + 120px - 30px) * ${active})`,
        }}
      >
        {photos.map((ambient, index) => (
          <div
            onClick={() => setActive(index)}
            className={
              "cursor-pointer w-[calc(100vw_-_60px_-60px)] text-center transition-all ease-in-out duration-500 border border-white flex "
              + (active === index ? " opacity-100 " : " opacity-30 ")
              + getAlign(index)
              // (active === index ? " scale-100" : " scale-75")
            }
          >
            <img
              src={ambient.photoSrc}
              alt={ambient.title}
              className="self-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
