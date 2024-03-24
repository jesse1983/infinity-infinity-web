import BackButton from "./voltar";

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
            <div className="border-l-2 pl-8 ml-4 pb-[100%]" data-aos="fade-right" data-aos-duration="300">
              <p className="mb-3" data-aos="fade-left" data-aos-duration="600">{props.identifier}</p>
              <p className="text-xl mb-10" data-aos="fade-right" data-aos-duration="900"><a href="#" onClick={() => (props.onBack ? props.onBack() : undefined)}>{props.apartment}</a></p>
              {props.parkingSpace && <p>{props.parkingSpace}</p>}
            </div>
          </div>
          {/* <div className="col-span-2 self-center" data-aos="zoom-in">
            <BackButton
              onClick={() => (props.onBack ? props.onBack() : undefined)}
            />
          </div> */}
          <div className="col-span-8 mx-auto self-center p-20">
            <img
              src={props.mainImage}
              alt={`Mapa ${props.identifier} do apartamento ${props.apartment}`}
              data-aos="zoom-in"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
