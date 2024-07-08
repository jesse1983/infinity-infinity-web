import BackButton from "./voltar";

export default function MiniMenuContainer({
  children,
  onBack = undefined,
  slot = undefined,
  noBackground = false,
}) {
  const bg = noBackground ? '' : 'bg-midnight-950';
  return (
    <div className="w-full h-[calc(100%_-_60px)] grid grid-cols-12 relative z-10">
      {slot}
      <div className={'hidden lg:col-span-3 lg:flex items-start bg-[length:100%_100%] ' + bg}>
        <div className="h-[calc(100vh_-_175px)] flex w-full items-center">
          <span
            className={`mx-4 font-light uppercase text-4xl leading-tight scale-75 cursor-pointer z-50`}
          >
            {onBack && <BackButton onClick={onBack} />}
          </span>
        </div>
      </div>
      <div className={`col-span-9 ${bg} lg:col-span-9 flex flex-col items-center justify-center border-none`}>
        {children}
      </div>
    </div>
  );
}
