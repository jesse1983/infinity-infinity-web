"use client";

import { useId, useMemo } from "react";

type Props = {
  texts: string[];
  active?: string;
  space?: number;
  onClick?: Function;
};

export const CircleText = ({
  texts = [],
  active,
  onClick = () => undefined,
  space = 100,
}: Props) => {
  let sum = 0;
  const id = useId();
  const startOffset = [
    0,
    ...texts.map((t) => t.length * 18).map((t) => (sum += (t + space))),
  ];

  sum = 60;
  const rotate = [60, ...texts.map((t) => sum += - ((space + (t.length * 8)) / 2))];

  const setClick = (i) => {
    onClick(i);
  }

  const activeIndex = useMemo(() => {
    return texts.findIndex((text) => text === active);
  }, [active]);
  return (
    <div className="w-[calc(100vh/2)] h-[calc(100vh/2)] transition-all duration-500 ease-in-out" style={{ transform: `rotate(${rotate[activeIndex]}deg)` }}>
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id={id}
          style={{ fill: "none" }}
          d="M50 250A200 200 0 1 1 450 250A200 200 0 1 1 50 250"
        ></path>
        {texts.map((text, i) => (
          <>
            <text
              style={{
                fontSize: "30px",
                fill: "rgb(255, 255, 255)",
                fillOpacity: i === activeIndex ? 1 : 0.3,
                textTransform: "uppercase",
                cursor: 'pointer'
              }}
              onClick={() => setClick(i)}
            >
              <textPath
                xlinkHref={'#' + id}
                startOffset={startOffset[i]}
              >
                <tspan>{text}</tspan>
              </textPath>
            </text>
          </>
        ))}
      </svg>
    </div>
  );
};
