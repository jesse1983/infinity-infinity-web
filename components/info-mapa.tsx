import { useEffect, useRef, useState } from "react";
import Drift from "drift-zoom";
import BackButton from "./voltar";
import { createPortal } from "react-dom";

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
  const imgRef = useRef(null);
  const paneContainerRef = useRef(null);
  const magRef = useRef(null);
  const [showZoomPane, setShowZoomPane] = useState(false);

  useEffect(() => {
    if (magRef.current && imgRef.current) {
      new Drift(imgRef.current, {
        paneContainer: paneContainerRef.current,
        zoomFactor: 2,
        onShow: () => setShowZoomPane(true),
        onHide: () => setShowZoomPane(false),
      });

      document.body.onpointermove = (event) => {
        const { clientX, clientY } = event;

        magRef.current?.animate(
          {
            left: `calc(-4vh + ${clientX}px)`,
            top: `calc(-36vh + ${clientY}px)`,
          },
          { duration: 10, fill: "forwards" }
        );
      };
    }
  }, []);
  return (
    <div
      className=" w-full h-[calc(100vh_-_174px)] bg-cover flex"
      style={{
        backgroundImage: `url(${props.bgImage}`,
      }}
    >
      {createPortal(
        <div
          ref={magRef}
          className={`absolute h-[40vh] w-[40vh] z-[100] border border-white rounded-full overflow-hidden pointer-events-none shadow-2xl bg-midnight-900 transition-all ${
            showZoomPane ? "opacity-100" : "opacity-0 scale-0"
          }`}
        >
          <div
            ref={paneContainerRef}
            className={`relative h-[40vh] w-[40vh]`}
          ></div>
        </div>,
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
              data-zoom={props.mainImage}
              ref={imgRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
