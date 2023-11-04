"use client";
import FloorPlan from "../floor-plan";
import bgMap from "../../public/floor-plan-infinity-blue-lounge.png";

export function FloorPlanInfinityBlueLounge({
  onClick,
}: {
  onClick?: Function;
}) {
  const open = (ev, index) => onClick(ev, index);
  return (
    <FloorPlan src={bgMap.src}>
      <FloorPlan.Path
        title="Beach Lounge"
        coords="m 68.472484,53.013389 -1.085697,15.070459 -52.102738,-0.04823 56.212291,271.760412 64.16606,0.57977 0.049,-69.64559 86.18647,1.02948 -0.17868,-162.08726 -89.2248,-1.29579 0.37136,-55.384027 z"
        onClick={(ev) => open(ev, 0)}
      />
    </FloorPlan>
  );
}
