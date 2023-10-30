"use client"
import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { v4 as uuidv4 } from "uuid";
import { get } from 'lodash';
import Poi from "./poi";

type Path = {
  coords: string;
  title?: string;
  onMouseUp?: Function;
  onMouseOver?: Function;
  onMouseOut?: Function;
};

type Poi = {
  left: number;
  top: number;
  title?: string;
  icon?: string;
};

type Props = {
  src: string;
  children?: React.ReactNode,
  paths?: Path[];
};

type PathProps = {
  coords: string;
  title: string;
  onMouseUp?: React.MouseEventHandler<SVGPathElement>,
}

function Path(options: PathProps) {
  return <>{options}</>;
}

const getNode = (children, componentName) => {
  return React.Children.toArray(children)
    .filter((c) => React.isValidElement(c) && get(c, 'type.name') === componentName);
}

function FloorPlain({ src, children }: Props) {
  const clipPathUuid = uuidv4();
  const tooltipUuid = uuidv4();
  const pois:React.ReactNode = getNode(children, 'Poi');
  const pathNodes:React.ReactNode[] = getNode(children, 'Path');
  const paths:PathProps[] = pathNodes.map((n) => get(n, 'props'));

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [active, setActive] = useState(false);
  const [pathActive, setPathActive] = useState();
  const [label, setLabel] = useState("");

  const setActivePath = (ev, index) => {
    setActive(true);
    setPathActive(index);
    const path = paths[index];
    if (path.title) setLabel(path.title);
    if (path.onMouseUp) path.onMouseUp(ev);
  };

  const setDisablePaths = (ev) => {
    setActive(false);
    setPathActive(undefined);
    setLabel("");
  };

  const clickOnPath = (ev, path: Path) => {
    ev.preventDefault();
    if (path.onMouseUp) path.onMouseUp(ev);
  };

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setWidth(image.width);
      setHeight(image.height);
    };
    image.src = src;
  });

  return (
    <div className="w-auto relative">
      {pois}
      <Tooltip id={tooltipUuid} style={{ background: "transparent" }}>
        <div
          className={`
              bg-midnight-950
              px-7
              py-3
              rounded-3xl
              whitespace-nowrap
              uppercase
              text-md
              pointer-events-none`}
        >
          {label}
        </div>
      </Tooltip>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
        className="w-auto h-auto"
      >
        <image
          href={src}
          className={`w-auto h-auto ${
            active ? "opacity-30" : ""
          } transition duration-300 ease-out`}
        />
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id={clipPathUuid}>
            {paths
              .filter((p, i) => i === pathActive)
              .map((path) => (
                <path d={path.coords} key={uuidv4()} />
              ))}
          </clipPath>
        </defs>
        <image
          href={src}
          className={`w-auto h-auto transition duration-300 ease-out ${
            active ? "opacity-100" : "opacity-0"
          }`}
          clipPath={`url(#${clipPathUuid})`}
        />
        {paths.map((path, i) => (
          <path
            className="fill-black/10 hover:fill-white/0 hover:stroke-midnight-700 hover:stroke-[4px] cursor-pointer"
            d={path.coords}
            onMouseOver={(e) => setActivePath(e, i)}
            onMouseOut={setDisablePaths}
            onMouseUp={(e) => clickOnPath(e, path)}
            data-tooltip-id={tooltipUuid}
            data-tooltip-float
            key={uuidv4()}
          />
        ))}
      </svg>
    </div>
  );
}

FloorPlain.Poi = Poi;
FloorPlain.Path = Path;

export default FloorPlain;
