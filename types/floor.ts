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
  sort?: number;
}

export type FLOOR = {
  title: string;
  slug: string;
  reverse?: boolean;
  ambients: AMBIENT[];
  coords?: XY;
  floorPlanSrc?: string;
  iconSrc?: string;
  decorated?: DECORATED[];
};
