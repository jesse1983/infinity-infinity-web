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
  floorPlanExample?: FLOOR;
}

export type FLOOR = {
  id: string;
  title: string;
  slug: string;
  reverse?: boolean;
  ambients: AMBIENT[];
  coords?: XY;
  floorPlanSrc?: string;
  miniSrc?: string;
  compassSrc?: string;
  iconSrc?: string;
  decorated?: DECORATED[];
  main: boolean;
};
