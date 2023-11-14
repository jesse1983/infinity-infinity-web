import { ENTERPRISE } from "../../types";
import floorPlanInfinityBlueApartament from "../../public/floor-plan-infinity-blue-apartment.png";
import floorPlanInfinityBlueRooftop from "../../public/floor-plan-infinity-blue-rooftop.png";
import floorPlanInfinityBluePavimento from "../../public/floor-plan-infinity-blue-pavimento.png";
import floorPlanInfinityBlueLounge from "../../public/floor-plan-infinity-blue-lounge.png";
import floorPlanInfinitySeaPavimento from "../../public/floor-plan-infinity-sea-pavimento.png";
import photoInfinityBlueRooftop01 from "../../public/photo-infinity-blue-rooftop01.jpg";
import photoInfinityBlueRooftop02 from "../../public/photo-infinity-blue-rooftop02.jpg";
import photoInfinityBluePlantaTipo01 from "../../public/photo-infinity-blue-planta-tipo01.png";
import photoInfinityBluePlantaTipo02 from "../../public/photo-infinity-blue-planta-tipo02.png";
import photoInfinityBluePlantaTipo03 from "../../public/photo-infinity-blue-planta-tipo03.png";
import photoInfinityBluePlantaTipo04 from "../../public/photo-infinity-blue-planta-tipo04.png";
import photoInfinityBluePavimento01 from "../../public/photo-infinity-blue-pavimento01.png";
import photoInfinityBluePavimento02 from "../../public/photo-infinity-blue-pavimento02.png";
import photoInfinityBluePavimento03 from "../../public/photo-infinity-blue-pavimento03.png";
import photoInfinityBluePavimento04 from "../../public/photo-infinity-blue-pavimento04.png";
import photoInfinityBlueBeachLounge01 from "../../public/photo-infinity-blue-beach-lounge01.png";
import photoInfinitySeaBeachClub01 from "../../public/photo-infinity-sea-beach-club01.png";
import photoInfinitySeaPavimento01 from "../../public/photo-infinity-sea-pavimento01.png";
import photoInfinitySeaPavimento02 from "../../public/photo-infinity-sea-pavimento02.png";
import photoInfinitySeaPavimento03 from "../../public/photo-infinity-sea-pavimento03.png";
import photoInfinitySeaPavimento04 from "../../public/photo-infinity-sea-pavimento04.png";
import photoInfinitySeaPavimento05 from "../../public/photo-infinity-sea-pavimento05.png";
import photoInfinitySeaPlantaTipo01 from "../../public/photo-infinity-sea-planta-tipo01.png";
import photoInfinitySeaPlantaTipo02 from "../../public/photo-infinity-sea-planta-tipo02.png";
import photoInfinitySeaPlantaTipo03 from "../../public/photo-infinity-sea-planta-tipo03.png";
import photoInfinitySeaPlantaTipo04 from "../../public/photo-infinity-sea-planta-tipo04.png";

import floorPlanInfinitySeaApartament from "../../public/floor-plan-infinity-sea-apartment.png";
import floorPlanInfinitySeaClub from "../../public/floor-plan-infinity-sea-club.png";

export const enterprises: ENTERPRISE[] = [
  {
    title: "Infinity Blue",
    slug: "infinity-blue",
    floors: [
      {
        title: "Rooftop",
        slug: "rooftop",
        coords: { x: 760, y: 170 },
        floorPlanSrc: floorPlanInfinityBlueRooftop.src,
        ambients: [
          {
            photoSrc: photoInfinityBlueRooftop01.src,
            title: "Sky bar",
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
            photoSrc: photoInfinityBluePlantaTipo02.src,
            title: "Sala de Estar",
            coords:
              "m 389.93199,234.12641 0.63744,114.84378 147.79815,0.26332 -0.34424,82.20537 48.90737,-0.52687 -0.87123,82.29042 150.57009,-1.73768 0.19287,-277.11269 z",
          },
          {
            photoSrc: photoInfinityBluePlantaTipo03.src,
            title: "Suíte Master",
            coords:
              "m 499.92866,49.505953 1.2974,178.813417 238.01977,0.33915 -0.63563,-107.83617 -99.50205,-1.02675 -0.0564,-71.020393 z",
          },
          {
            photoSrc: photoInfinityBluePlantaTipo01.src,
            title: "Sanitário Suíte Master",
            coords:
              "m 773.06777,48.155744 -127.17283,0.382318 0.1764,65.254438 99.6027,1.08788 -0.23821,11.49221 85.19576,-0.78822 -16.07174,-71.418364 -41.18649,0.166153 z",
          },
          {
            photoSrc: photoInfinityBluePlantaTipo04.src,
            title: "Varanda",
            coords:
              "m 749.22959,132.54052 81.90463,-0.32309 79.60307,386.72713 -164.07545,-6.21621 z",
          },
        ],
      },
      {
        title: "Pavimento térreo",
        coords: { x: 760, y: 720 },
        slug: "pavimento-terreo",
        floorPlanSrc: floorPlanInfinityBluePavimento.src,
        ambients: [
          {
            photoSrc: photoInfinityBluePavimento03.src,
            title: "Brinquedoteca",
            coords:
              "m 437.97296,175.15431 1.31113,149.09531 98.33917,1.001 0.22724,22.23607 28.96481,0.39981 -0.37457,-174.72256 z",
          },
          {
            photoSrc: photoInfinityBluePavimento01.src,
            title: "Mirante/Firepit",
            coords:
              "M 842.13364,41.411791 841.95936,165.7323 1062.5933,164.81513 1037.1164,36.955046 Z",
          },
          {
            photoSrc: photoInfinityBluePavimento04.src,
            title: "Academia",
            coords:
              "m 746.34584,172.96464 -0.82366,150.72808 97.63195,0.84121 1.0634,76.09079 263.11617,-0.74895 -46.8763,-229.07887 z",
          },
          {
            photoSrc: photoInfinityBluePavimento02.src,
            title: "Hall",
            coords:
              "m 667.95273,422.82743 1.20809,82.8932 35.46627,1.56095 -0.75764,-25.34389 132.76191,-0.28272 2.27193,-151.55746 -171.35593,-1.5223 0.1428,22.16308 -132.1583,1.16403 -1.51888,-21.32824 -98.29965,-1.55036 2.78399,119.70011 95.01151,1.23338 1.31547,-26.43418 z",
          },
        ],
      },
      {
        title: "Beach Lounge",
        coords: { x: 850, y: 790 },
        slug: "beach-lounge",
        floorPlanSrc: floorPlanInfinityBlueLounge.src,
        ambients: [
          {
            photoSrc: photoInfinityBlueBeachLounge01.src,
            title: "Beach Lounge",
            coords:
              "m 68.472484,53.013389 -1.085697,15.070459 -52.102738,-0.04823 56.212291,271.760412 64.16606,0.57977 0.049,-69.64559 86.18647,1.02948 -0.17868,-162.08726 -89.2248,-1.29579 0.37136,-55.384027 z",
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
            photoSrc: photoInfinitySeaPlantaTipo01.src,
            title: "Sala de Estar",
            coords:
              "m 527.98613,307.05267 1.65594,174.86489 46.17234,0.78389 0.6673,13.13145 113.02942,1.63129 -0.13799,82.83904 134.02081,0.98486 -1.79108,61.35345 261.27793,-2.02639 -0.6122,-390.97248 -254.32214,3.14028 -0.10974,53.19933 z",
          },
          {
            photoSrc: photoInfinitySeaPlantaTipo02.src,
            title: "Suíte Master",
            coords:
              "m 706.99538,161.63882 0.11497,141.2953 112.25126,-0.90467 0.9472,-64.00687 410.69909,-1.12131 -5.8722,-171.707246 -298.53897,4.23909 1.27974,94.249886 z",
          },
          {
            photoSrc: photoInfinitySeaPlantaTipo03.src,
            title: "Sanitário Suíte Master",
            coords:
              "m 708.45145,64.598014 -0.64412,87.393796 211.84439,2.02584 0.60235,-89.61026 z",
          },
          {
            photoSrc: photoInfinitySeaPlantaTipo04.src,
            title: "Varanda",
            coords:
              "m 1095.2977,253.63983 v 390.04789 l 184.0533,-2.09615 -1.6233,-391.38381 z",
          },
        ],
      },
      {
        title: "Pavimento térreo",
        coords: { x: 1180, y: 720 },
        slug: "pavimento-terreo",
        floorPlanSrc: floorPlanInfinitySeaPavimento.src,
        ambients: [
          {
            photoSrc: photoInfinitySeaPavimento01.src,
            title: "Piscina Adulta & Infantil",
            coords:
              "m 1040.8519,22.511613 90.6381,0.465112 -5.9764,514.341205 -128.09106,-3.12787 0.17748,-80.82266 45.55408,-0.47028 0.9513,-161.18546 -45.50834,-1.64374 -2.43943,-36.66575 44.16187,2.22062 z",
          },
          {
            photoSrc: photoInfinitySeaPavimento02.src,
            title: "Parque Infantil",
            coords:
              "m 339.00048,618.77907 c -0.38384,-6.13974 -1.32372,-12.41837 -1.98558,-18.62755 -0.66186,-6.20919 3.24023,-9.84952 4.86034,-14.77428 1.62011,-4.92476 7.22869,-11.05797 10.84304,-16.58696 3.61434,-5.52898 6.455,-5.80362 9.6825,-8.70543 3.22751,-2.90182 4.01992,-11.31243 6.02988,-16.96864 2.00996,-5.65621 1.14812,-9.9236 1.72217,-14.88542 0.57406,-4.9618 0.24995,-8.87101 0.37493,-13.30652 0.12497,-4.43551 -1.89593,-6.14939 -2.8439,-9.22408 -0.94797,-3.0747 -4.60183,-13.27007 -6.90274,-19.90511 -2.30091,-6.63503 -7.35936,-12.59492 -11.03905,-18.89238 -3.67968,-6.29745 -8.46865,-8.47997 -12.70298,-12.71995 -4.23432,-4.23999 -6.18107,-7.30818 -9.27161,-10.96227 -3.09054,-3.65408 -4.27058,-16.04399 -6.40587,-24.06599 -2.13529,-8.022 -0.38743,-11.52375 -0.58115,-17.28564 -0.19372,-5.76188 1.31847,-5.89921 1.9777,-8.84883 0.65924,-2.94961 -1.13482,-10.15605 -1.70223,-15.23408 -0.56742,-5.07804 -9.29186,-8.6647 -13.93779,-12.99704 -4.64593,-4.33236 -8.05369,-5.54763 -12.08054,-8.32144 -4.02684,-2.77381 -3.77585,24.25156 -3.77585,24.25156 l -31.47521,0.59258 0.0858,239.13053 z",
          },
          {
            photoSrc: photoInfinitySeaPavimento03.src,
            title: "Spa",
            coords:
              "m 570.22821,149.74235 -14.28171,0.53189 0.0345,67.99516 46.99633,-1.78315 -0.54631,-85.15046 -31.5248,-0.36013 z",
          },
          {
            photoSrc: photoInfinitySeaPavimento04.src,
            title: "Salão de Festas",
            coords:
              "m 796.72834,368.42697 34.53725,-0.99144 -0.26433,244.33001 -261.95479,3.08552 -3.10475,-178.83453 135.30206,-0.97708 1.59547,-57.81429 92.54475,0.0755 z",
          },
          {
            photoSrc: photoInfinitySeaPavimento05.src,
            title: "Yatch Club",
            coords:
              "m 656.16002,135.62665 -0.0316,113.8548 99.83831,0.0434 -1.00042,-112.8524 z",
          },
        ],
      },
      {
        title: "Beach Club",
        coords: { x: 1130, y: 790 },
        slug: "beach-club",
        floorPlanSrc: floorPlanInfinitySeaClub.src,
        ambients: [
          {
            photoSrc: photoInfinitySeaBeachClub01.src,
            title: "Beach Club",
            coords:
              "m 578.30025,226.04258 -0.58518,613.17785 290.39767,0.0491 0.42506,-612.9309 z",
          },
        ],
      },
    ],
  },
];
