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
  const onClick = () => props.onBack ? props.onBack() : undefined;
  return (
    <div
      className=" w-full h-[calc(100vh_-_174px)] overflow-hidden bg-cover flex"
      style={{
        backgroundImage: `url(${props.bgImage}`,
      }}
    >
      <div className="container mx-auto ">
        <div className="grid grid-cols-12">
          <div className="flex items-end col-span-2 text-4xl uppercase font-light h-[calc(100vh_-_174px)]">
            <div className="border-l-2 pl-8 ml-4 " data-aos="fade-right" data-aos-duration="300">
              <p className="mb-3" data-aos="fade-left" data-aos-duration="600">{props.identifier}</p>
              <p className="text-xl mb-10" data-aos="fade-right" data-aos-duration="900"><a href="#" onClick={() => (props.onBack ? props.onBack() : undefined)}>{props.apartment}</a></p>
              {props.parkingSpace && <p  data-aos="fade-right" data-aos-duration="1200">{props.parkingSpace}</p>}
              <div className="mt-10 scale-75"><BackButton onClick={onClick} margin="m-0" /></div>
            </div>
          </div>
          {/* <div className="col-span-2 self-center" data-aos="zoom-in">
            <BackButton
              onClick={() => (props.onBack ? props.onBack() : undefined)}
            />
          </div> */}
          <div className="flex col-span-8 mx-auto items-center justify-center px-20 h-full ">
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
