import { ENTERPRISE } from "../types";

export default function BuildingInfo(
  direction,
  {
    enterprises,
  }: {
    enterprises: ENTERPRISE[];
  }
) {
  return direction;
  /*
     <div
          className={`flex flex-col px-2 absolute w-1/5 z-20 text-center top-[20%] ${direction}`}
          data-aos="zoom-in"
        >
          <div className="bg-dusk flex flex-row text-center rounded-t-3xl">
            <div className="w-full text-3xl font-medium p-8 ml-12">
              {buildingDetails.area}
            </div>
            <ItemMapa
              identifier="X"
              isApartmentInfo={true}
              onClick={() => setBuildingDetails(undefined)}
            />
          </div>
          <div className="bg-midnight-950 leading-tight border-white text-xl rounded-b-3xl mb-10">
            {buildingDetails.features.map((feature, i) => (
              <div
                className={`py-3 ${
                  i === buildingDetails.features.length - 1 ? "" : "border-b"
                }`}
              >
                {feature}
              </div>
            ))}
          </div>
          <img src={buildingDetails.logo} />
        </div>
     */
}
