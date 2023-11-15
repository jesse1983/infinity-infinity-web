import { DEPOSIT } from "./deposit";
import { FLOOR } from "./floor";
import { PARKING } from "./parking";

export type ENTERPRISE = {
  title: string;
  slug: string;
  floors?: FLOOR[];
  garages?: PARKING[];
  bgImage?: string;
  salesTable?: string;
  deposits?: DEPOSIT[];
};
