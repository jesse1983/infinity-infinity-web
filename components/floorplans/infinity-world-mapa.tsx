"use client";
import FloorPlan from "../floor-plan";
import bgMap from "../../public/floor-plan-infinity-world-mapa.png";
import bgTableMap from "../../public/floor-plan-infinity-world-tabela-mapa.png";
import { ENTERPRISE } from "../../types";

type MapProps = {
  getApartment?: Function;
  isSalesTable?: boolean;
  enterprises?: ENTERPRISE[];
};

export function FloorPlanInfinityWorldMapa(props: MapProps) {
  const setEnterprise = (title) => {
    const found = props.enterprises.find((e) => e.title === title);
    props.getApartment(found);
  };
  return (
    <FloorPlan src={props.isSalesTable ? bgTableMap.src : bgMap.src}>
      <FloorPlan.Path
        title="Cais 292"
        coords="m 146.33151,171.91953 274.27162,0.79963 -1.59925,197.50755 -271.87275,11.99439 z"
        onClick={() => setEnterprise("Cais 292")}
      />
      <FloorPlan.Path
        title="Cais 218"
        coords="m 128.73974,616.51143 h 202.30531 l 23.98877,115.94573 H 125.54124 Z"
        onClick={() => setEnterprise("Cais 218")}
      />
    </FloorPlan>
  );
}
