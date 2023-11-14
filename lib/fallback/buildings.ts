import { ENTERPRISE } from "../../types";
import floorPlanInfinityBlueApartament from "../../public/floor-plan-infinity-blue-apartment.png";
import floorPlanInfinityBlueRooftop from "../../public/floor-plan-infinity-blue-rooftop.png";
import photoInfinityBlueRooftop01 from "../../public/photo-infinity-blue-rooftop01.jpg";
import photoInfinityBlueRooftop02 from "../../public/photo-infinity-blue-rooftop02.jpg";

import floorPlanInfinitySeaApartament from "../../public/floor-plan-infinity-sea-apartment.png";
import floorPlanInfinitySeaClub from "../../public/floor-plan-infinity-sea-club.png";

export const enterprises: ENTERPRISE[] = [
  {
    title: "Infinity Blue",
    slug: "infinity-blue",
    floors: [
      {
        title: "Planta tipo",
        coords: { x: 780, y: 400 },
        slug: "apartament",
        floorPlanSrc: floorPlanInfinityBlueApartament.src,
        decorated: [
          {
            title: "Laís Galvão",
            subtitle: "287,32m²",
            description:
              "3 suítes, sala ampliada e home office + suíte master com 2 sanitários",
            floorPlanSrc: floorPlanInfinitySeaApartament.src,
          },
          {
            title: "Tatiana Melo",
            subtitle: "287,32m²",
            description:
              "3 suítes e suíte master com 2 sanitários",
            floorPlanSrc: floorPlanInfinitySeaApartament.src,
          },
        ],
        ambients: [
          {
            title: "Suíte Master",
            coords:
              "m 389.93199,234.12641 0.63744,114.84378 147.79815,0.26332 -0.34424,82.20537 48.90737,-0.52687 -0.87123,82.29042 150.57009,-1.73768 0.19287,-277.11269 z",
          },
          {
            title: "Sanitário Suíte Master",
            coords:
              "m 773.06777,48.155744 -127.17283,0.382318 0.1764,65.254438 99.6027,1.08788 -0.23821,11.49221 85.19576,-0.78822 -16.07174,-71.418364 -41.18649,0.166153 z",
          },
          {
            title: "Varanda",
            coords:
              "m 749.22959,132.54052 81.90463,-0.32309 79.60307,386.72713 -164.07545,-6.21621 z",
          },
        ],
      },
      {
        title: "Rooftop",
        slug: "rooftop",
        coords: { x: 760, y: 170 },
        floorPlanSrc: floorPlanInfinityBlueRooftop.src,
        ambients: [
          {
            photoSrc: photoInfinityBlueRooftop01.src,
            title: "Rooftop bar",
            coords:
              "M 25.000711,49.91735 H 317.45795 l 3.60169,328.32418 -34.57623,0.73287 -2.16101,-1.46575 -154.87267,-0.73286 -0.72034,43.23913 -46.10164,0.73286 -0.720334,-45.43771 -55.466029,-0.73288 z",
          },
          {
            photoSrc: photoInfinityBlueRooftop02.src,
            title: "Piscina adulto",
            coords:
              "m 652.64463,56.440979 53.49831,1.465708 85.7439,406.000913 -128.98226,-1.4657 -0.73286,-253.56736 h -8.79424 z",
          },
          {
            title: "Deck",
            coords:
              "m 435.02932,47.35032 155.30396,-2.19855 -0.0338,6.505354 -24.2555,0.09029 v 71.819276 h 25.76132 v 7.32851 l -26.49736,0.73286 0.73604,74.0178 h 23.55321 l 0.73603,4.39711 h 72.86773 l -0.73604,150.96707 -105.98942,0.73285 v -25.64974 h -39.74603 v 25.64974 h -43.42621 l 0.73604,-40.30674 h -47.84246 l -0.73603,-48.36808 54.46678,0.73285 -0.73603,-64.49079 -41.95414,-0.73285 z",
          },
          {
            title: "Daybeds",
            coords:
              "m 566.23562,51.627725 -0.72453,72.183105 26.41064,-0.1696 60.87656,0.33372 0.8023,81.85815 -87.99623,-0.0497 0.37063,-73.79474 87.24171,-0.37908 -0.97545,-79.434472 z",
          },
        ],
      },
    ],
  },

  {
    title: "Infinity Sea",
    slug: "infinity-sea",
    floors: [
      {
        title: "Planta tipo",
        coords: { x: 1180, y: 380 },
        slug: "apartament",
        floorPlanSrc: floorPlanInfinitySeaApartament.src,
        ambients: [
          {
            title: "Sala de Estar",
            coords:
              "m 527.98613,307.05267 1.65594,174.86489 46.17234,0.78389 0.6673,13.13145 113.02942,1.63129 -0.13799,82.83904 134.02081,0.98486 -1.79108,61.35345 261.27793,-2.02639 -0.6122,-390.97248 -254.32214,3.14028 -0.10974,53.19933 z",
          },
          {
            title: "Suíte Master",
            coords:
              "m 706.99538,161.63882 0.11497,141.2953 112.25126,-0.90467 0.9472,-64.00687 410.69909,-1.12131 -5.8722,-171.707246 -298.53897,4.23909 1.27974,94.249886 z",
          },
          {
            title: "Sanitário Suíte Master",
            coords:
              "m 708.45145,64.598014 -0.64412,87.393796 211.84439,2.02584 0.60235,-89.61026 z",
          },
          {
            title: "Varanda",
            coords:
              "m 1095.2977,253.63983 v 390.04789 l 184.0533,-2.09615 -1.6233,-391.38381 z",
          },
        ],
      },
      {
        title: "Beach Club",
        coords: { x: 1180, y: 770 },
        slug: "beach-club",
        floorPlanSrc: floorPlanInfinitySeaClub.src,
        ambients: [],
      },
    ],
  },
];

// <FloorPlan.Poi title="Rooftop" icon='/icon-infinity.svg' x={760} y={170} onClick={() => gotoBuilding(BUILDING.INFINITY_BLUE, BUILDING_AREA.ROOTOP)} />
// <FloorPlan.Poi title="Planta tipo" icon='/icon-infinity.svg' x={780} y={400} onClick={() => gotoBuilding(BUILDING.INFINITY_BLUE, BUILDING_AREA.APARTAMENT)} />
// <FloorPlan.Poi title="Pavimento térreo" icon='/icon-infinity.svg' x={760} y={700} onClick={() => gotoBuilding(BUILDING.INFINITY_BLUE, BUILDING_AREA.GROUND)} />
// <FloorPlan.Poi title="Beach Lounge" icon='/icon-infinity.svg' x={880} y={780} onClick={() => gotoBuilding(BUILDING.INFINITY_BLUE, BUILDING_AREA.BEACH)} />

// <FloorPlan.Poi title="Planta tipo" icon='/icon-infinity.svg' x={1180} y={380} onClick={() => gotoBuilding(BUILDING.INFINITY_SEA, BUILDING_AREA.APARTAMENT)}  />
// <FloorPlan.Poi title="Beach Club" icon='/icon-infinity.svg' x={1180} y={770} onClick={() => gotoBuilding(BUILDING.INFINITY_SEA, BUILDING_AREA.BEACH)}  />
