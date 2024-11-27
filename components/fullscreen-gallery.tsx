import { Carousel } from "react-responsive-carousel";
import BackButton from "./voltar";
import { AMBIENT } from "../types";
import { createRef, useEffect, useMemo, useState } from "react";
import IconClose from "../public/icon-close-filled.svg";
import IconPlay from "../public/icone-play.svg";
import IconMaximize from "../public/maximize.svg";
import VideoFull from "./video-full";
import { Image } from "../models";
import { createPortal } from "react-dom";

export default function FullscreenGallery({
  photographedAmbients,
  selected = 1,
  backFn,
}: {
  photographedAmbients: AMBIENT[];
  selected: number;
  backFn: Function;
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videoURL, setVideoURL] = useState<Image>();
  const [imagesRefs] = useState<React.RefObject<HTMLBaseElement>[]>(
    photographedAmbients.map((p) => createRef())
  );
  const [videoRefs] = useState(photographedAmbients.map((p) => createRef<HTMLVideoElement>()));
  const [currentImage, setCurrentImage] = useState(selected);

  useEffect(() => {
    videoRefs.forEach((video, i) => {
      if(video?.current) { 
        video.current.currentTime = 0;
        video.current.pause();
      }
    });
  }, [currentImage]);

  const onChangeImage = (index) => setCurrentImage(index);

  const setFullScreen = (imageIndex) => {
    setIsFullscreen(true);
    const el = imagesRefs[imageIndex]?.current;
    try {
      setTimeout(() => {
        el.requestFullscreen({ navigationUI: "show" });
      }, 10);
      el.addEventListener("fullscreenchange", function () {
        const fullScreen = !!document.fullscreenElement;
        setIsFullscreen(fullScreen);
      });
    } catch (e) {
      console.info(imagesRefs, el);
    }
  };

  const exitFullScreen = (imageIndex) => {
    document.exitFullscreen();
  };

  const playVideo = (ambient: AMBIENT) => {
    document.body.style.cursor = "default";
    setVideoURL({ mediaItemUrl: ambient.videoSrc });
  };
  const closeVideo = () => {
    document.body.style.cursor = "none";
    setVideoURL(null);
  };
  return (
    <>
      {videoURL &&
        createPortal(
          <VideoFull video={videoURL} onClose={closeVideo} />,
          document.body
        )}

      <Carousel
        className="flex"
        infiniteLoop={photographedAmbients.length > 1}
        useKeyboardArrows
        centerMode={photographedAmbients.length > 1}
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
        {photographedAmbients.map((ambient, i) => (
          <div
            className={
              "cursor-pointer p-7 pt-0 flex flex-col h-[calc(100vh_-_200px)] relative items-center justify-center m-auto transition-all duration-300 " +
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
                  isFullscreen ? "w-screen h-screen" : "h-[calc(100%_-_25px)]"
                }`}
              >
                {!isFullscreen && (
                  <div className="absolute z-50 bottom-[-25px] border border-white p-2 bg-midnight-950 uppercase text-xl text-white">
                    {ambient.title}
                  </div>
                )}
                {ambient.photoSrc && (
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
                )}
                {!ambient.photoSrc && ambient.videoSrc && (
                  <video
                    className={currentImage === i ? '' :  'pointer-events-none'}
                    // className="pointer-events-none"
                    autoPlay={false}
                    controls
                    loop
                    muted
                    ref={videoRefs[i]}
                  >
                    <source src={ambient.videoSrc} type="video/mp4" />
                  </video>
                )}
                {ambient.videoSrc && ambient.photoSrc && (
                  <div
                    className={
                      "absolute z-50 top-3 right-20 w-12 cursor-pointer transition-all duration-300 ease-in-out delay-300 hover:scale-100" +
                      (i === currentImage ? " scale-75" : " scale-0")
                    }
                    onClick={() => playVideo(ambient)}
                  >
                    <IconPlay />
                  </div>
                )}
                {ambient.photoSrc && <div
                  className={
                    "absolute z-50 top-3 right-3 w-12 cursor-pointer transition-all duration-300 ease-in-out delay-300 hover:scale-100" +
                    (i === currentImage ? " scale-75" : " scale-0")
                  }
                  onClick={() =>
                    isFullscreen ? exitFullScreen(i) : setFullScreen(i)
                  }
                >
                  {isFullscreen ? <IconClose /> : <IconMaximize />}
                </div>}
              </span>
            </span>
          </div>
        ))}
      </Carousel>
      <div className="absolute bottom-4 left-16 scale-50">
        <BackButton onClick={() => backFn(null)} margin="m-0" />
      </div>
    </>
  );
}
