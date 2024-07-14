import { useRef } from "react";
import BackSVG from "../public/download.svg";

export default function Download({ file = "", size = 'sm' }: { file: string, size?: 'sm' | 'md' | 'xl' }) {
  const ref = useRef(null);
  const sizes = {
    sm: { h: 'h-16', w: 'w-16' },
    md: { h: 'h-20', w: 'w-20' },
    xl: { h: 'h-30', w: 'w-30' },
  }
  const downloadIt = () => {
    ref.current?.click();
  }
  return (
    <div className="flex flex-row group hover:bg-midnight-950/80 rounded-e-full transition duration-300" onClick={downloadIt}>
      <div className={`opacity-0 group-hover:opacity-100 transition duration-300 ${sizes[size].h} flex items-center px-10 text-white uppercase`}>
        Fazer o download
      </div>
      <div className={`bg-white text-midnight-950 rounded-full ${sizes[size].h} ${sizes[size].w} flex items-center justify-center font-light cursor-pointer group-hover:bg-midnight-950 group-hover:text-white  transition duration-300`}>
        <BackSVG className="w-8 h-8" />
      </div>
      <a href={`/api/download?fileurl=${file}`} className="hidden" download ref={ref} target="_blank">Download</a>
    </div>
  );
}
