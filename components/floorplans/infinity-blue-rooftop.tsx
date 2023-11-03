"use client";
import FloorPlan from "../floor-plan";
import bgMap from '../../public/floor-plan-infinity-blue-rooftop.png';

export function FloorPlanInfinityBlueRooftop({ onClick }: { onClick?: Function }) {
  const open = (ev, index) => onClick(ev, index);
  return (
    <FloorPlan src={bgMap.src}>
      <FloorPlan.Path title="Rooftop bar" coords="M 25.000711,49.91735 H 317.45795 l 3.60169,328.32418 -34.57623,0.73287 -2.16101,-1.46575 -154.87267,-0.73286 -0.72034,43.23913 -46.10164,0.73286 -0.720334,-45.43771 -55.466029,-0.73288 z" onClick={(ev) => open(ev, 0)} />
      <FloorPlan.Path title="Deck" coords="m 435.02932,47.35032 155.30396,-2.19855 -0.0338,6.505354 -24.2555,0.09029 v 71.819276 h 25.76132 v 7.32851 l -26.49736,0.73286 0.73604,74.0178 h 23.55321 l 0.73603,4.39711 h 72.86773 l -0.73604,150.96707 -105.98942,0.73285 v -25.64974 h -39.74603 v 25.64974 h -43.42621 l 0.73604,-40.30674 h -47.84246 l -0.73603,-48.36808 54.46678,0.73285 -0.73603,-64.49079 -41.95414,-0.73285 z" onClick={(ev) => open(ev, 1)} />
      <FloorPlan.Path title="Piscina infantil e adulto" coords="m 652.64463,56.440979 53.49831,1.465708 85.7439,406.000913 -128.98226,-1.4657 -0.73286,-253.56736 h -8.79424 z" onClick={(ev) => open(ev, 2)} />
    </FloorPlan>
  );
}
