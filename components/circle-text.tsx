"use client";

import React from "react";
import { useId, useMemo } from "react";

type Props = {
  texts: string[];
  active?: string;
  space?: number;
  onClick?: Function;
  enterprise: string;
};

const mapSizesSea = new Map<string, number[]>();
mapSizesSea.set('FITNESS', [140, 160]);
mapSizesSea.set('BEACH CLUB', [180, 80]);
mapSizesSea.set('PAVIMENTO TÉRREO', [320, 340]);
mapSizesSea.set('PLANTA PADRÃO', [120, 140]);

const mapSizesBlue = new Map<string, number[]>();
mapSizesBlue.set('BEACH LOUNGE', [200, 150]);
mapSizesBlue.set('PAVIMENTO TÉRREO', [300, 50]);
mapSizesBlue.set('ROOFTOP', [160, 320]);
mapSizesBlue.set('PLANTA PADRÃO', [140, 220]);

const getSize = (str: string, enterprise: string) => {
  if (str) {
    const source = enterprise === 'infinity-sea' ? mapSizesSea : mapSizesBlue;
    const found = source.get(str.toUpperCase());
    return found[0];
  }
  return str.length * 18;
}

const getRotate = (str: string, enterprise: string) => {
  if (str) {
    const source = enterprise === 'infinity-sea' ? mapSizesSea : mapSizesBlue;
    const found = source.get(str.toUpperCase());
    return found[1];
  }
  return 0;
}

export const CircleText = ({
  texts = [],
  active,
  onClick = () => undefined,
  space = 100,
  enterprise,
}: Props) => {
  let sum = 0;
  const id = useId();
  const startOffset = [
    0,
    ...texts.map((t) => getSize(t, enterprise)).map((t) => (sum += (t + space))),
  ];

  sum = 60;
  // const rotate = [60, ...texts.map((t) => sum += - ((space + getSize(t, 0)) / 2))];
  const rotate = getRotate(active, enterprise);

  const setClick = (i) => {
    onClick(i);
  }

  const activeIndex = useMemo(() => {
    return texts.findIndex((text) => text === active);
  }, [active]);
  return (
    <div className="w-[calc(65vh)] h-[calc(65vh)] hidden xl:block transition-all duration-500 ease-in-out" style={{ transform: `rotate(${rotate}deg)` }}>
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id={id}
          style={{ fill: "none" }}
          d="M50 250A200 200 0 1 1 450 250A200 200 0 1 1 50 250"
        ></path>
        {texts.map((text, i) => (
          <React.Fragment key={text}>
            <text
              style={{
                fontSize: texts.length === 3 ? "40px" : '30px',
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
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};
