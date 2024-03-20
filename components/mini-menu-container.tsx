import infinityBG from "../public/infinity-mar-col.png";
import infinityBGNoBorder from "../public/infinity-mar-col-noborder.png";

export default function MiniMenuContainer({
  children,
  title,
  noBorder = false,
  slot = undefined,
}) {
  return (
    <div className="w-full h-[calc(100%_-_64px)] grid grid-cols-12 mt-[64px] relative">
      {slot}
      <div
        className="hidden lg:col-span-3 lg:flex items-start bg-[length:100%_100%] h-[calc(100vh_-_175px)] bg-midnight-950"
        style={{
          backgroundImage: `url(${
            noBorder ? infinityBGNoBorder.src : infinityBG.src
          })`,
        }}
      >
        <div className="h-[calc(100vh_-_175px)] flex">
          <span
            className={`mx-[10%] font-light uppercase text-4xl leading-tight ${
              noBorder ? "w-full" : "w-1/2 pb-4 border-b-2 m-auto"
            }`}
          >
            {title}
          </span>
        </div>
      </div>
      <div className="col-span-12 bg-midnight-950 lg:col-span-9 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
