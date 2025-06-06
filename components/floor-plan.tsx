"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import Drift from 'drift-zoom';
import { Tooltip } from "react-tooltip";
import { v4 as uuidv4 } from "uuid";
import Poi from "./poi";
import { createPortal } from "react-dom";

type Path = {
  coords: string;
  title?: string;
  onMouseDown?: Function;
  onMouseOver?: Function;
  onMouseOut?: Function;
  onClick?: Function;
  notClickable?: boolean;
  bgTooltip?: string;
};

type Poi = {
  x: number;
  y: number;
  title?: string;
  icon?: string;
  svg?: string;
};

type Props = {
  src: string;
  children?: React.ReactNode;
  hidePois?: boolean;
  onLoad?: Function;
  heightPlaceholder?: string;
  zoom?: boolean;
  onToggleActivePath?: Function,
};

type PathProps = {
  coords: string;
  title: string;
  onMouseDown?: React.MouseEventHandler<SVGPathElement>;
  onMouseOver?: React.MouseEventHandler<SVGPathElement>;
  onMouseOut?: React.MouseEventHandler<SVGPathElement>;
  onClick?: React.MouseEventHandler<SVGPathElement>;
  noBorder?: boolean;
  notClickable?: boolean;
  bgTooltip?: string; 
};

function Path(options: PathProps) {
  return <>{options}</>;
}

const getNodes = (children, componentName) => {
  return React.Children.toArray(children).filter(
    (c) =>
      React.isValidElement(c) &&
      typeof c.type !== "string" &&
      c.type.name === componentName
  );
};
const cacheKey = "FLOORPLAN: ";

function setCachedSize(src: string, d: string, v: number) {
  const key = cacheKey + d + src;
  return localStorage.setItem(key, v.toString());
}

function FloorPlan({ 
  src, 
  children, 
  onLoad, 
  hidePois,
  heightPlaceholder,
  zoom,
  onToggleActivePath,
}: Props) {
  const clipPathUuid = useId();
  const tooltipUuid = useId();
  const poisNodes: React.ReactNode[] = getNodes(children, "Poi");
  const pathNodes: React.ReactNode[] = getNodes(children, "Path");
  const paths: PathProps[] = pathNodes.map((n) =>
    React.isValidElement(n) && n.props ? n.props : {}
  );
  // const pois: Poi[] = poisNodes.map((n) =>
  //   React.isValidElement(n) && n.props ? n.props : {}
  // );

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [active, setActive] = useState(false);
  const [pathActive, setPathActive] = useState();
  const [label, setLabel] = useState("");
  const [bgTooltip, setBgTooltip] = useState("");
  const [showZoomPane, setShowZoomPane] = useState(false);
  const svgRef = useRef(null);
  const paneContainerRef = useRef(null);
  const magRef = useRef(null);

  const setActivePath = (ev, index) => {
    setActive(true);
    setPathActive(index);
    if (onToggleActivePath) onToggleActivePath(true);
    const path = paths[index];
    setBgTooltip(path.bgTooltip);
    if (path.title) setLabel(path.title);
    if (path.onMouseDown) path.onMouseDown(ev);
  };

  const setDisablePaths = (ev) => {
    setActive(false);
    setPathActive(undefined);
    setLabel("");
    if (onToggleActivePath) onToggleActivePath(false);
  };

  const clickOnPath = (ev, path: Path) => {
    ev.preventDefault();
    if (path.onClick && path.notClickable !== true) path.onClick(ev);
  };

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setWidth(image.width);
      setHeight(image.height);
      setCachedSize(src, "w", image.width);
      setCachedSize(src, "h", image.height);
      if (onLoad) onLoad(image);
    };
    image.src = src;

    if (zoom) {
      new Drift(svgRef.current, { 
        paneContainer: paneContainerRef.current,
        zoomFactor: 2,
        onShow: () => setShowZoomPane(true),
        onHide: () => setShowZoomPane(false),
       });
       document.body.onpointermove = (event) => {
        const { clientX, clientY } = event;

        magRef.current?.animate(
          {
            left: `calc(-4vh + ${clientX}px)`,
            top: `calc(-36vh + ${clientY}px)`,
          },
          { duration: 10, fill: "forwards" }
        );
      };
    }
  }, [src]);
  return (
    <div className={`flex w-full ${heightPlaceholder || ''} m-auto relative`}>
      {zoom && createPortal(
        <div
          ref={magRef}
          className={`absolute h-[40vh] w-[40vh] z-[100] border border-white rounded-full overflow-hidden pointer-events-none shadow-2xl bg-midnight-900 transition-all ${
            showZoomPane ? "opacity-100" : "opacity-0 scale-0"
          }`}
        >
          <div
            ref={paneContainerRef}
            className={`relative h-[40vh] w-[40vh]`}
          ></div>
        </div>,
        document.body
      )}
      <Tooltip id={tooltipUuid} style={{ background: "transparent", zIndex: '30' }}>
        <div
          style={{ backgroundColor: bgTooltip }}
          className={`
              ${active ? "" : "hidden"}
              ${hidePois ? 'hidden' : ''}
              ${!bgTooltip ? 'bg-midnight-950' : '' }
              px-7
              py-3
              rounded-3xl
              whitespace-nowrap
              uppercase
              text-md
              pointer-events-none
              flex
          `}
        >
          {label}
        </div>
      </Tooltip>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
        className="m-auto"
        preserveAspectRatio="none"
        style={{ width: `100%`, height: `100%`  }}
        data-zoom={src}
        ref={svgRef}
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
            className={`fill-black/10 hover:fill-white/0 hover:stroke-[4px] ${path.notClickable ? '' : 'cursor-pointer'} ${path.noBorder ? '' : 'hover:stroke-midnight-700'}`}
            d={path.coords}
            onMouseOver={(e) => setActivePath(e, i)}
            onMouseOut={setDisablePaths}
            onClick={(e) => clickOnPath(e, path)}
            data-tooltip-id={tooltipUuid}
            data-tooltip-float
            key={uuidv4()}
          />
        ))}
        {hidePois ? undefined : poisNodes}
      </svg>
    </div>
  );
}

FloorPlan.Poi = Poi;
FloorPlan.Path = Path;

export default FloorPlan;
