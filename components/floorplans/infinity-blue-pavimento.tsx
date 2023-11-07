"use client";
import FloorPlan from "../floor-plan";
import bgMap from "../../public/floor-plan-infinity-blue-pavimento.png";

export function FloorPlanInfinityBluePavimento({
  onClick,
}: {
  onClick?: Function;
}) {
  const open = (ev, index) => onClick(ev, index);
  return (
    <FloorPlan src={bgMap.src}>
      <FloorPlan.Path
        title="Brinquedoteca"
        coords="m 437.97296,175.15431 1.31113,149.09531 98.33917,1.001 0.22724,22.23607 28.96481,0.39981 -0.37457,-174.72256 z"
        onClick={(ev) => open(ev, 0)}
      />
      <FloorPlan.Path
        title="Mirante/Firepit"
        coords="M 842.13364,41.411791 841.95936,165.7323 1062.5933,164.81513 1037.1164,36.955046 Z"
        onClick={(ev) => open(ev, 1)}
      />
      <FloorPlan.Path
        title="Academia"
        coords="m 746.34584,172.96464 -0.82366,150.72808 97.63195,0.84121 1.0634,76.09079 263.11617,-0.74895 -46.8763,-229.07887 z"
        onClick={(ev) => open(ev, 2)}
      />
      <FloorPlan.Path
        title="Hall"
        coords="m 667.95273,422.82743 1.20809,82.8932 35.46627,1.56095 -0.75764,-25.34389 132.76191,-0.28272 2.27193,-151.55746 -171.35593,-1.5223 0.1428,22.16308 -132.1583,1.16403 -1.51888,-21.32824 -98.29965,-1.55036 2.78399,119.70011 95.01151,1.23338 1.31547,-26.43418 z"
        onClick={(ev) => open(ev, 3)}
      />
    </FloorPlan>
  );
}
