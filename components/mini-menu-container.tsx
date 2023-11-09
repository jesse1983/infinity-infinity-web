import infinityBG from "../public/infinity-mar-col.png";

export default function MiniMenuContainer({ children, title }) {
  return (
    <div className="w-full h-[calc(100%_-_64px)] grid grid-cols-12 mt-[64px]">
      <div
        className="hidden lg:col-span-3 min-[1210px]:flex items-center bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${infinityBG.src})` }}
      >
        <span className="mx-[10%] font-light uppercase text-4xl w-1/2 pb-6 border-b-2 leading-tight">
          {title}
        </span>
      </div>
      <div className="col-span-12 bg-midnight-900 lg:col-span-9 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
