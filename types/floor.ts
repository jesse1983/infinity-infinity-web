import { AMBIENT } from "./ambient";

export type XY = {
  x: number;
  y: number;
}

export type FLOOR = {
  title: string;
  slug: string;
  ambients: AMBIENT[];
  coords?: XY;
  floorPlanSrc?: string;
};
