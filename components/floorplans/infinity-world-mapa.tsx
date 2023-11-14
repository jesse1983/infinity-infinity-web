"use client";
import FloorPlan from "../floor-plan";
import bgMap from "../../public/floor-plan-infinity-world-mapa.png";
import bgTableMap from "../../public/floor-plan-infinity-world-tabela-mapa.png";

type MapProps = {
  getApartment?: Function;
  isTable?: boolean;
};

export function FloorPlanInfinityWorldMapa(props: MapProps) {
  return (
    <FloorPlan src={props.isTable ? bgTableMap.src : bgMap.src}>
      <FloorPlan.Path
        title="Infinity Sea"
        coords="m 230.13913,115.53386 0.48918,173.87665 202.17978,-5.50972 135.04182,5.33608 -55.93134,-172.12516 z"
        onClick={() =>
          props.getApartment ? props.getApartment("Infinity Sea") : undefined
        }
      />
      {props.isTable && (
        <FloorPlan.Path
          title="Tabela de Vendas"
          coords="m 812.1547,317.27964 c -10.68218,-0.093 -21.32648,4.31731 -28.83382,11.91714 -7.50735,7.59983 -11.78523,18.28447 -11.62708,28.96589 0.15815,10.68142 4.74271,21.22445 12.42627,28.64608 7.68355,7.42163 18.36654,11.63613 29.04812,11.48954 8.732,-0.11983 17.42456,-3.12244 24.27253,-8.54162 6.01838,-4.76268 10.56739,-11.34054 12.97092,-18.62936 2.40354,-7.28883 2.66266,-15.26004 0.81069,-22.70814 -2.16247,-8.69684 -7.22171,-16.65691 -14.21672,-22.2588 -6.99502,-5.60189 -15.88959,-8.80267 -24.85091,-8.88073 z"
          onClick={() =>
            props.getApartment ? props.getApartment("Infinity Blue") : undefined
          }
        />
      )}
      <FloorPlan.Path
        title="Infinity Blue"
        coords="m 226.59171,484.40469 -2.78191,113.08433 266.61167,1.09754 -37.89929,-115.00142 z"
        onClick={() =>
          props.getApartment ? props.getApartment("Infinity Blue") : undefined
        }
      />
    </FloorPlan>
  );
}
