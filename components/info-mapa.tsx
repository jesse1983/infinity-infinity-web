import BackButton from "./voltar";
import IconMaximize from "../public/maximize.svg";
import { createPortal } from "react-dom";
import ImageZoom from "./image-zoom";
import { useState } from "react";

type InfoProps = {
  identifier: string;
  apartment: string;
  mainImage: string;
  bgImage: string;
  parkingSpace?: string;
  onBack?: Function;
};

export default function InfoMapa(props: InfoProps) {
  const onClick = () => (props.onBack ? props.onBack() : undefined);

  const [zoomOpened, setZoomOpened] = useState(null);
  const openZoom = (image) => {
    document.body.style.cursor = "default";
    setZoomOpened(image);
  };
  const closeZoom = () => {
    document.body.style.cursor = "none";
    setZoomOpened(null);
  };

  return (
    <div
      className=" w-full h-[calc(100vh_-_174px)] bg-cover flex"
      style={{
        backgroundImage: `url(${props.bgImage}`,
      }}
    >
      {zoomOpened && 
        createPortal(
          <ImageZoom image={zoomOpened} onClose={closeZoom} />,
          document.body
        )}
      <div className="container mx-auto ">
        <div className="grid grid-cols-12">
          <div className="flex items-end col-span-2 text-4xl uppercase font-light h-[calc(100vh_-_174px)]">
            <div
              className="border-l-2 pl-8 ml-4 "
              data-aos="fade-right"
              data-aos-duration="300"
            >
              <p className="mb-3" data-aos="fade-left" data-aos-duration="600">
                {props.identifier}
              </p>
              <p
                className="text-xl mb-10"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <a
                  href="#"
                  onClick={() => (props.onBack ? props.onBack() : undefined)}
                >
                  {props.apartment}
                </a>
              </p>
              {props.parkingSpace && (
                <p data-aos="fade-right" data-aos-duration="1200">
                  {props.parkingSpace}
                </p>
              )}
              <div className="mt-10 scale-75">
                <BackButton onClick={onClick} margin="m-0" />
              </div>
            </div>
          </div>
          <div className="flex col-span-8 mx-auto items-center justify-center px-20 h-full">
            <div className="flex">
              <div className="w-20 mt-10 cursor-pointer" onClick={() => openZoom(props.mainImage)}>
                <IconMaximize />
              </div>
              <img
                src={props.mainImage}
                alt={`Mapa ${props.identifier} do apartamento ${props.apartment}`}
                data-aos="zoom-in"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
