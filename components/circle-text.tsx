"use client";

import React from "react";
import CircleBlue from "./circle-blue";
import CircleSea from "./circle-sea";

type Props = {
  texts: string[];
  active?: string;
  space?: number;
  onClick?: Function;
  enterprise: string;
};

const mapSizesSea = new Map<string, number[]>();
mapSizesSea.set("FITNESS", [270, 160]);
mapSizesSea.set("BEACH CLUB", [95, 90]);
mapSizesSea.set("PAVIMENTO TÉRREO", [190, 340]);
mapSizesSea.set("PLANTA PADRÃO", [0, 230]);

const mapSizesBlue = new Map<string, number[]>();
mapSizesBlue.set("BEACH LOUNGE", [98, 150]);
mapSizesBlue.set("PAVIMENTO TÉRREO", [360, 50]);
mapSizesBlue.set("ROOFTOP", [280, 320]);
mapSizesBlue.set("PLANTA PADRÃO", [200, 220]);

const getRotate = (str: string, enterprise: string) => {
  if (str) {
    const source = enterprise === "infinity-sea" ? mapSizesSea : mapSizesBlue;
    const found = source.get(str.toUpperCase());
    console.log(str.toUpperCase(), enterprise, found);
    if (found) return found[0];
  }
  return 0;
};

export const CircleText = ({
  texts = [],
  active,
  onClick = () => undefined,
  enterprise,
}: Props) => {
  const rotate = getRotate(active, enterprise);
  const isBlue = enterprise.includes("blue");
  const width = isBlue ? 939 : 880;
  const height = isBlue ? 927 : 864;

  const setClick = (i) => {
    onClick(i);
  };
  return (
    <div
      className="xl:flex items-center hidden transition-all duration-500 ease-in-out"
      style={{ transform: `rotate(${rotate}deg)`, width: `${width}px`, height: `${height}px`  }}
    >
      {enterprise.includes("blue") ? (
        <CircleBlue active={active} onClick={setClick} />
      ) : (
        <CircleSea active={active} onClick={setClick} />
      )}
    </div>
  );
};
