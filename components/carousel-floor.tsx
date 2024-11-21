import { Carousel } from "react-responsive-carousel";
import { createRef, useEffect, useRef, useState } from "react";
import { AMBIENT } from "../types";
import Chevron from "../public/voltar.svg";
import IconMaximize from "../public/maximize.svg";
// import IconRuler from "../public/icon-ruler.svg";
import IconClose from "../public/icon-close-filled.svg";
import IconPlay from "../public/icone-play.svg";
import { Image } from "../models";
import { createPortal } from "react-dom";
import VideoFull from "./video-full";



type Props = {
  ambients: AMBIENT[];
  selected?: number;
  onBack?: Function;
};

export default function CarouselFloor({
  ambients,
  selected = 0,
  onBack = () => undefined,
}: Props) {
  const [currentImage, setCurrentImage] = useState(selected);
  const onChangeImage = (index) => setCurrentImage(index);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imagesRefs = ambients.map(() => useRef(null));
  const [videoURL, setVideoURL] = useState<Image>();


  const goBack = () => onBack();

  const setFullScreen = (imageIndex) => {
    setIsFullscreen(true);
    const el = imagesRefs[imageIndex].current;
    setTimeout(() => {
      el.requestFullscreen({ navigationUI: "show" });
    }, 10);
    el.addEventListener("fullscreenchange", function () {
      const fullScreen = !!document.fullscreenElement;
      setIsFullscreen(fullScreen);
    });
  };

  const exitFullScreen = (imageIndex) => {
    document.exitFullscreen();
  };

  const playVideo = (ambient: AMBIENT) => {
    document.body.style.cursor = 'default';
    setVideoURL({ mediaItemUrl: ambient.videoSrc });
  };
  const closeVideo = () => {
    document.body.style.cursor = 'none';
    setVideoURL(null);
  };

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (ev) => (ev.key === "Escape" ? onBack() : undefined),
      false
    );
  }, []);

  return (
    <>
      {videoURL && createPortal(<VideoFull video={videoURL} onClose={closeVideo} />, document.body)}

      <Carousel
        className="flex"
        infiniteLoop={ambients.length > 1}
        useKeyboardArrows
        centerMode={ambients.length > 1}
        centerSlidePercentage={70}
        // dynamicHeight
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        onChange={onChangeImage}
        // renderArrowPrev={(clickHandler, hasPrev) => hasPrev && <div className="absolute z-50 h-full flex p-4"><div className="m-auto rounded-full w-24 h-24 cursor-pointer flex items-center justify-center bg-white" onClick={clickHandler}><Chevron /></div></div>}
        // renderArrowNext={(clickHandler, hasNext) => hasNext && <div className="absolute z-50 right-0 top-0 float-right h-full flex p-4"><div className="m-auto rounded-full w-24 h-24 cursor-pointer flex items-center justify-center bg-white rotate-180" onClick={clickHandler}><Chevron /></div></div>}
        selectedItem={currentImage}
      >
        {ambients.map((ambient, i) => (
          <div
            className={
              "cursor-pointer p-7 pt-0 flex flex-col h-[calc(100vh_-_200px)] relative items-center m-auto transition-all duration-300 " +
              (currentImage === i ? "" : " opacity-30 scale-y-75")
            }
            key={ambient.coords}
            onClick={() => setCurrentImage(i)}
            style={{
              backgroundImage:
                i !== currentImage ? `url(${ambient.photoSrc})` : "",
            }}
          >
            <span
              className="relative flex items-center justify-center"
              ref={imagesRefs[i]}
            >
              <span
                className={`relative flex items-center justify-center ${
                  isFullscreen ? "w-screen h-screen bg-midnight-800" : "h-[calc(100%_-_25px)]"
                }`}
              >
                {!isFullscreen && (
                  <div className="absolute z-50 bottom-[-25px] border border-white p-2 bg-midnight-950 uppercase text-xl ">
                    {ambient.title}
                  </div>
                )}
                <img
                  src={ambient.photoSrc}
                  className={`self-center ${
                    currentImage === i ? "" : " opacity-0"
                  } ${
                    isFullscreen
                      ? "max-h-screen max-w-screen object-contain "
                      : "max-h-[calc(100vh_-_225px)]"
                  }`}
                />
                {ambient.videoSrc && <div
                  className={
                    "absolute z-50 top-3 right-20 w-12 cursor-pointer transition-all duration-300 ease-in-out delay-300 hover:scale-100" +
                    (i === currentImage ? " scale-75" : " scale-0")
                  }
                  onClick={() => playVideo(ambient)}
                >
                  <IconPlay />
                </div>}
                <div
                  className={
                    "absolute z-50 top-3 right-3 w-12 cursor-pointer transition-all duration-300 ease-in-out delay-300 hover:scale-100" +
                    (i === currentImage ? " scale-75" : " scale-0")
                  }
                  onClick={() =>
                    isFullscreen ? exitFullScreen(i) : setFullScreen(i)
                  }
                >
                  {isFullscreen ? <IconClose /> : <IconMaximize />}
                </div>
              </span>
            </span>
          </div>
        ))}
      </Carousel>
      <div className="absolute bottom-4 left-16 scale-75">
        <div
          className="m-auto rounded-full w-24 h-24 cursor-pointer flex items-center justify-center bg-white"
          onClick={goBack}
        >
          <Chevron />
        </div>
      </div>
    </>
  );
}
