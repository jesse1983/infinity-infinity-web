import { useState, useRef, useEffect } from "react";
import Drift from "drift-zoom";
import Close from "../public/icon-close-filled.svg";
import { createPortal } from "react-dom";

export default function ImageZoom({
  image,
  onClose,
}: {
  image: string;
  onClose?: Function;
}) {
  const [domLoaded, setDomLoaded] = useState(false);
  const imgRef = useRef();
  const paneContainerRef = useRef();
  const magRef = useRef(null);

  const onCloseFn = (ev) => {
    if (onClose) onClose(ev);
    ev.preventDefault();
  };

  useEffect(() => {
    setDomLoaded(true);
    new Drift(imgRef.current, {
      paneContainer: paneContainerRef.current,
      zoomFactor: 2,
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
  }, []);

  return (
    image && (
      <div
        className={`absolute z-50 top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-70 backdrop-blur-lg flex`}
      >
        {createPortal(
          <div
            ref={magRef}
            className={`absolute h-[40vh] w-[40vh] z-[100] border border-white rounded-full overflow-hidden pointer-events-none shadow-2xl bg-midnight-900 transition-all opacity-100`}
          >
            <div
              ref={paneContainerRef}
              className={`relative h-[40vh] w-[40vh]`}
            ></div>
          </div>,
          document.body
        )}
        <div
          className={`m-auto border bg-midnight-900 shadow-2xl bg-opacity-30 backdrop-blur-lg overflow-hidden transition duration-500 my-4 ${
            domLoaded ? "scale-100" : "scale-0"
          }`}
        >
          <div className="absolute top-4 right-4 scale-100 hover:scale-75 transition-all duration-300 z-20">
            <a href="" onClick={onCloseFn}>
              <Close />
            </a>
          </div>
          <img src={image} ref={imgRef} className="w-full h-full" data-zoom={image} />
        </div>
      </div>
    )
  );
}
