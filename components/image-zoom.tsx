import { useState, useRef, useEffect } from "react";
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
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentMousePosition, setCurrentMousePosition] = useState([]);
  const place = useRef(null);

  const onCloseFn = (ev) => {
    if (onClose) onClose(ev);
    ev.preventDefault();
  };

  const toggleZoom = (e: React.MouseEvent<HTMLElement>) => {
    setCurrentMousePosition([e.clientX, e.clientY]);
    setIsZoomed(!isZoomed);
  }

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    if (place.current) {
      if (isZoomed) {
        place.current.addEventListener("mousemove", (e) => {
          const diffX = currentMousePosition[0] - e.offsetX;
          place.current.style.backgroundPositionX = (diffX) + 'px';

          const diffY = currentMousePosition[1] - e.offsetY;
          place.current.style.backgroundPositionY = (diffY) + 'px';
        });
      } else {
        place.current.removeEventListener("mousemove", () => true);
        place.current.style.backgroundPositionX = 0;
        place.current.style.backgroundPositionY = 0;  
      }
    }
  }, [isZoomed]);

  return (
    image && (
      <div
        className={`absolute z-50 top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-70 backdrop-blur-lg flex overflow-hidden`}
      >
        <div className="absolute top-5 right-5 scale-100 hover:scale-75 transition-all duration-300 z-20">
          <a href="" onClick={onCloseFn}>
            <Close />
          </a>
        </div>
        <div
          className={`m-auto bg-midnight-900 border shadow-2xl bg-opacity-30 bg-contain backdrop-blur-lg overflow-hidden transition duration-500 bg-no-repeat my-10 ${isZoomed ? 'scale-150 cursor-zoom-out' : ' cursor-zoom-in'}`}
          style={{ backgroundImage: isZoomed ? `url(${image})` : 'none', backgroundPositionX: 0, backgroundPositionY: 0 }}
          ref={place}
          onClick={toggleZoom}
        >
          <img src={image} className={`w-full h-full object-contain ${domLoaded ? "scale-100" : "scale-0"} ${isZoomed ? 'opacity-0 pointer-events-none' : ''}`} />
        </div>
      </div>
    )
  );
}
