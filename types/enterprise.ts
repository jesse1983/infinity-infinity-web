import { DEPOSIT } from "./deposit";
import { FLOOR } from "./floor";
import { PARKING } from "./parking";

export type ENTERPRISE = {
  id?: string;
  title: string;
  slug: string;
  area?: string;
  features?: string[];
  logo?: string;
  floors?: FLOOR[];
  garages?: PARKING[];
  bgImage?: string;
  salesTable?: string;
  deposits?: DEPOSIT[];
};
