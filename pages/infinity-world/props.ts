import { Page, Settings } from "../../models";
import { ENTERPRISE } from "../../types";

export type PROPS = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  enterprises: ENTERPRISE[];
};
