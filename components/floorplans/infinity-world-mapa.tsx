"use client";
import FloorPlan from "../floor-plan";
import bgMap from "../../public/floor-plan-infinity-world-mapa.png";

export function FloorPlanInfinityWorldMapa({
  onClick = (desiredApartment) => console.log(desiredApartment),
}: {
  onClick?: Function;
}) {
  const open = (desiredApartment) => onClick(desiredApartment);
  return (
    <FloorPlan src={bgMap.src}>
      <FloorPlan.Path
        title="Infinity Sea"
        coords="m 230.13913,115.53386 0.48918,173.87665 202.17978,-5.50972 135.04182,5.33608 -55.93134,-172.12516 z"
        onClick={() => open("Infinity Sea")}
      />
      <FloorPlan.Path
        title="Infinity Blue"
        coords="m 226.59171,484.40469 -2.78191,113.08433 266.61167,1.09754 -37.89929,-115.00142 z"
        onClick={() => open("Infinity Blue")}
      />
    </FloorPlan>
  );
}
