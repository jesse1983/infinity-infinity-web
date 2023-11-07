"use client";
import FloorPlan from "../floor-plan";
import bgMap from "../../public/floor-plan-infinity-blue-apartment.png";

export function FloorPlanInfinityBlueApartment({
  onClick,
}: {
  onClick?: Function;
}) {
  const open = (ev, index) => onClick(ev, index);
  return (
    <FloorPlan src={bgMap.src}>
      <FloorPlan.Path
        title="Sala de Estar"
        coords="m 389.93199,234.12641 0.63744,114.84378 147.79815,0.26332 -0.34424,82.20537 48.90737,-0.52687 -0.87123,82.29042 150.57009,-1.73768 0.19287,-277.11269 z"
        onClick={(ev) => open(ev, 0)}
      />
      <FloorPlan.Path
        title="Suíte Master"
        coords="m 499.92866,49.505953 1.2974,178.813417 238.01977,0.33915 -0.63563,-107.83617 -99.50205,-1.02675 -0.0564,-71.020393 z"
        onClick={(ev) => open(ev, 1)}
      />
      <FloorPlan.Path
        title="Sanitário Suíte Master"
        coords="m 773.06777,48.155744 -127.17283,0.382318 0.1764,65.254438 99.6027,1.08788 -0.23821,11.49221 85.19576,-0.78822 -16.07174,-71.418364 -41.18649,0.166153 z"
        onClick={(ev) => open(ev, 2)}
      />
      <FloorPlan.Path
        title="Varanda"
        coords="m 749.22959,132.54052 81.90463,-0.32309 79.60307,386.72713 -164.07545,-6.21621 z"
        onClick={(ev) => open(ev, 3)}
      />
    </FloorPlan>
  );
}
