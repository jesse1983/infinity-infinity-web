import { AMBIENT } from "./ambient";

export type XY = {
  x: number;
  y: number;
}

export type DECORATED = {
  title: string;
  subtitle?: string;
  description?: string;
  floorPlanSrc?: string;
}

export type FLOOR = {
  title: string;
  slug: string;
  ambients: AMBIENT[];
  coords?: XY;
  floorPlanSrc?: string;
  iconSrc?: string;
  decorated?: DECORATED[];
};
