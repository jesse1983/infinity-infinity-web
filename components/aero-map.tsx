import { useRouter } from "next/router";
import { ENTERPRISE } from "../types";
import BackButton from "./voltar";
import { useMemo } from "react";

export default function AeroMap({
  enterprises,
  onClick,
  title
}: {
  enterprises: ENTERPRISE[];
  onClick: Function;
  title: string;
}) {
  const router = useRouter();
  const reverseEnterprises = useMemo(() => enterprises.slice().reverse(), [enterprises]);

  return (
    <div
      className="w-full flex overflow-hidden bg-[url('/bg-mapa-geral.jpg')] h-[calc(100vh_-_174px)] bg-[length:100vw_100%] items-end"
      data-aos="fade"
    >
      <div
        className="absolute z-50 cursor-pointer bottom-4 right-0 scale-50"
        onClick={() => router.push("/infinity-world")}
      >
        <BackButton margin="m-0" />
      </div>
      <div
        className="absolute w-full text-center z-50 top-0"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <h1 className=" uppercase font-thin text-5xl pl-[25vw] pt-[7vh]">
          {title}
        </h1>
      </div>
      <div className="mb-[10vh] h-[48vh] flex flex-col justify-between">
        {reverseEnterprises.map((enterprise, i) => (
          <div
            className="flex flex-row items-center cursor-pointer hover:scale-125 transition-all duration-300"
            onClick={() => onClick(enterprise)}
            key={enterprise.id}
          >
            <div className="w-[25vw]" />
            <div
              className="h-[2px] w-[30vw] bg-gradient-to-r from-white/0 to-white"
              data-aos="slide-right"
              data-aos-delay={500 - i * 200}
              data-aos-anchor-placement="bottom-bottom"
            />
            <div
              className="w-[350px]"
              data-aos="fade-left"
              data-aos-delay={500 + i * 200}
              data-aos-anchor-placement="bottom-bottom"
            >
              <img
                src={enterprise.logo}
                style={{ filter: "contrast(0%) brightness(2)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
