import Voltar from "./voltar";

type InfoProps = {
  identifier: string;
  apartment: string;
  mainImage: string;
  bgImage: string;
  parkingSpace?: string;
  onBack?: Function;
};

export default function InfoMapa(props: InfoProps) {
  return (
    <div
      className="absolute w-full h-full bg-[length:100%_100%]"
      style={{
        backgroundImage: `url(${props.bgImage}`,
      }}
    >
      <div className="container mx-auto h-full">
        <div className="h-full pt-[64px] grid grid-cols-12">
          <div className="flex items-end col-span-2 text-4xl uppercase font-light  h-full">
            <div className="border-l-2 pl-8 pb-[100%]">
              <p className="mb-3">{props.identifier}</p>
              <p className="text-3xl">{props.apartment}</p>
              {props.parkingSpace && <p>{props.parkingSpace}</p>}
            </div>
          </div>
          <div className="col-span-2 self-center ">
            <Voltar
              onClick={() => (props.onBack ? props.onBack() : undefined)}
            />
          </div>
          <img
            src={props.mainImage}
            alt={`Mapa ${props.identifier} do apartamento ${props.apartment}`}
            className="col-span-8 mx-auto self-center"
          />
        </div>
      </div>
    </div>
  );
}
