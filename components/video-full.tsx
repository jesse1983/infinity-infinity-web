import { useState, useRef, useEffect } from "react";
import { Image } from "../models";
import Close from "../public/icon-close-filled.svg";

export default function VideoFull({
  video,
  onClose,
  backLink,
}: {
  video: Image;
  backLink?: string;
  onClose?: Function;
}) {
  const [domLoaded, setDomLoaded] = useState(false);
  const videoPlayer = useRef<HTMLVideoElement | null>(null);

  const onCloseFn = (ev) => {
    if (onClose) onClose(ev);
    if (backLink) window.location.href = backLink;
    ev.preventDefault();
  };

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    video && (
      <div className={`absolute z-50 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 backdrop-blur-lg flex`}>

        <div className={`m-auto border overflow-hidden transition duration-500 ${domLoaded ? 'scale-100' : 'scale-0'}`}>
        <div className="absolute top-4 right-4 scale-100 hover:scale-75 transition-all duration-300 z-20">
          <a href="" onClick={onCloseFn}>
            <Close />
          </a>
        </div>
          <video
            className="max-w-[calc(100vw_-_150px)] max-h-[calc(100vh_-_100px)] "
            autoPlay
            controls
            loop
            ref={videoPlayer}
          >
            <source src={video.mediaItemUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    )
  );
}
