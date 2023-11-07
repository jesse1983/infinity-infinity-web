"use client";
import FloorPlan from "../floor-plan";
import bgMap from "../../public/floor-plan-infinity-sea-club.png";

export function FloorPlanInfinitySeaClub({ onClick }: { onClick?: Function }) {
  const open = (ev, index) => onClick(ev, index);
  return (
    <FloorPlan src={bgMap.src}>
      <FloorPlan.Path
        title="Beach Club"
        coords="m 578.30025,226.04258 -0.58518,613.17785 290.39767,0.0491 0.42506,-612.9309 z"
        onClick={(ev) => open(ev, 0)}
      />
    </FloorPlan>
  );
}
