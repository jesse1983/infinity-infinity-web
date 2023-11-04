"use client";
import FloorPlan from "../floor-plan";
import bgMap from "../../public/floor-plan-infinity-sea-apartment.png";

export function FloorPlanInfinitySeaApartment({
  onClick,
}: {
  onClick?: Function;
}) {
  const open = (ev, index) => onClick(ev, index);
  return (
    <FloorPlan src={bgMap.src}>
      <FloorPlan.Path
        title="Sala de Estar"
        coords="m 527.98613,307.05267 1.65594,174.86489 46.17234,0.78389 0.6673,13.13145 113.02942,1.63129 -0.13799,82.83904 134.02081,0.98486 -1.79108,61.35345 261.27793,-2.02639 -0.6122,-390.97248 -254.32214,3.14028 -0.10974,53.19933 z"
        onClick={(ev) => open(ev, 0)}
      />
      <FloorPlan.Path
        title="Suíte Master"
        coords="m 706.99538,161.63882 0.11497,141.2953 112.25126,-0.90467 0.9472,-64.00687 410.69909,-1.12131 -5.8722,-171.707246 -298.53897,4.23909 1.27974,94.249886 z"
        onClick={(ev) => open(ev, 1)}
      />
      <FloorPlan.Path
        title="Sanitário Suíte Master"
        coords="m 708.45145,64.598014 -0.64412,87.393796 211.84439,2.02584 0.60235,-89.61026 z"
        onClick={(ev) => open(ev, 2)}
      />
      <FloorPlan.Path
        title="Varanda"
        coords="m 1095.2977,253.63983 v 390.04789 l 184.0533,-2.09615 -1.6233,-391.38381 z"
        onClick={(ev) => open(ev, 3)}
      />
    </FloorPlan>
  );
}
