import BackSVG from "../public/icon-close-only.svg";

export default function Close({ onClick = () => undefined, size = 'sm' }: { onClick: Function, size?: 'sm' | 'md' | 'xl' }) {
  const sizes = {
    sm: { h: 'h-16', w: 'w-16' },
    md: { h: 'h-20', w: 'w-20' },
    xl: { h: 'h-30', w: 'w-30' },
  }

  const handle = () => {
    onClick();
  }
  return (
    <div className="flex flex-row group transition duration-300" onClick={handle}>
      <div className={`bg-white text-midnight-950 rounded-full ${sizes[size].h} ${sizes[size].w} flex items-center justify-center font-light cursor-pointer group-hover:bg-midnight-950 group-hover:text-white  transition duration-300`}>
        <BackSVG className="w-8 h-8" />
      </div>
    </div>
  );
}
