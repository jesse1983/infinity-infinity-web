import { LegacyRef, useEffect, useMemo, useRef, useState } from "react";

type Props = {
  x: number;
  y: number;
  active?: boolean;
  reverse?: boolean;
  icon?: string;
  title?: string;
  onClick?: Function;
};
export default function Poi({ active = true, reverse = false, icon, title, y, x, onClick }: Props) {
  const [isOver, setIsOver] = useState(false);
  const [width, setWidth] = useState(0);
  const textEl = useRef<SVGTextElement | null>();

  const onMouseOver = () => setIsOver(true);
  const onMouseOut = () => setIsOver(false);
  const onClickPoi = () => onClick && onClick();

  // const rectWidth = title.toUpperCase()
  //   .split('')
  //   .map((p) => ['I', ' '].includes(p) ? 5 : 25)
  //   .reduce((p, n) => p + n, 0);

  const isInverse = useMemo(() => reverse && isOver, [isOver]);

  useEffect(() => {
    setTimeout(() => {
      setWidth(textEl?.current?.getComputedTextLength());
    }, 100)
  }, []);

  return (
    <g className={`cursor-pointer ${active ? '' : 'opacity-0'}`} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClickPoi}>
      <rect
        className="fill-midnight-950 stroke-midnight-950 stroke-2"
        width={isOver ? width + 80 + 20 : 80}
        height="80"
        x={isInverse ? x - width - 15 : x}
        y={y}
        ry="40"
      />
      <image
        className="stroke-white text-white fill-white"
        width="40"
        height="40"
        x={isInverse ? x - width : x + 20}
        y={y + 20}
        href={icon}
      />
      <text ref={textEl} x={reverse ? x - width + 45 : x + 60} y={y + 45} className={` fill-white text-xl transition-opacity duration-300 uppercase ${isOver ? 'opacity-1' : 'opacity-0'}`}>
        {title}
      </text>
    </g>
  );
}
