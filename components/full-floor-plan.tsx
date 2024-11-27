import { useEffect, useMemo, useState } from "react";
import { AMBIENT, FLOOR } from "../types";
import { createPortal } from "react-dom";
import VideoFull from "./video-full";
import ImageZoom from "./image-zoom";
import FloorPlan from "./floor-plan";
import IconMaximize from "../public/maximize.svg";
import IconRuler from "../public/icon-ruler.svg";
import FullscreenGallery from "./fullscreen-gallery";
import { Image } from "../models";

export default function FullFloorPlan({
  floor,
  selected = undefined,
  setShowDecorated,
  showDecorated = false,
}: { floor: FLOOR, selected?: number, setShowDecorated?: Function, showDecorated?: boolean}) {
  const [dom, setDom] = useState(false);
  const [selectedAmbient, setSelectedAmbient] = useState<AMBIENT | undefined>();
  const [currentImage, setCurrentImage] = useState(selected);
  const photographedAmbients = useMemo(() => {
    return floor?.ambients?.filter((ambient) => ambient?.photoSrc || ambient?.videoSrc);
  }, [floor]);

  const openSlideShow = (ev, ambient: AMBIENT, ambients: AMBIENT[]) => {
    ev.preventDefault();
    if (ambient.photoSrc) {
      setSelectedAmbient(ambient);
      setCurrentImage(
        ambients
          .filter((a) => a.photoSrc)
          .findIndex((a) => a.photoSrc === ambient.photoSrc)
      );
    } else if (ambient.videoSrc) {
      setSelectedAmbient(ambient);
      setCurrentImage(
        ambients
          .filter((a) => a.videoSrc)
          .findIndex((a) => a.videoSrc === ambient.videoSrc)
      );
    }
  };
  const [videoURL, setVideoURL] = useState("");
  const closeVideo = () => setVideoURL("");

  const [zoomOpened, setZoomOpened] = useState<FLOOR>(null);
  const openZoom = () => {
    document.body.style.cursor = "default";
    setZoomOpened(floor);
  };
  const closeZoom = () => {
    document.body.style.cursor = "none";
    setZoomOpened(null);
  };
  useEffect(() => {
    setDom(true);
  }, []);
  return (
    <>
      {dom &&
        createPortal(
          <div
            className={`top-0 bottom-0 absolute bg-midnight-950 bg-opacity-70 backdrop-blur-lg w-full h-full z-50 transition-opacity duration-500 flex flex-col justify-center ${
              selectedAmbient ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {selectedAmbient && (
              <FullscreenGallery
                photographedAmbients={photographedAmbients}
                selected={currentImage}
                backFn={() => setSelectedAmbient(null)}
              />
            )}
          </div>,
          document.getElementsByTagName("header")[0].nextElementSibling
        )}
      {videoURL &&
        createPortal(
          <VideoFull video={{ mediaItemUrl: videoURL }} onClose={closeVideo} />,
          document.body
        )}
      {zoomOpened &&
        createPortal(
          <ImageZoom image={zoomOpened.floorPlanSrc} onClose={closeZoom} />,
          document.body
        )}
      {floor && !videoURL && (
        <div className="w-[75vw] flex gap-4 relative h-[calc(100vh_-_164px)] overflow-hidden">
          <div className="flex flex-col pt-10 gap-10">
            {floor.compassSrc && <img src={floor.compassSrc} width={50} />}
            {floor.miniSrc && <img src={floor.miniSrc} width={50} />}
            <div className="cursor-pointer" onClick={() => openZoom()}>
              <IconMaximize />
            </div>
          </div>
          <FloorPlan src={floor.floorPlanSrc}>
            {floor.ambients.map((ambient, i, all) => (
              <FloorPlan.Path
                key={ambient.coords}
                title={ambient.title}
                coords={ambient.coords}
                notClickable={ambient.notClickable}
                bgTooltip={ambient.notClickable ? "#9c917c" : undefined}
                onClick={(ev) => openSlideShow(ev, ambient, all)}
              />
            ))}
          </FloorPlan>
          {floor.decorated?.length > 0 &&
            !showDecorated &&
            !selectedAmbient && (
              <div
                className="absolute bg-midnight-950 py-4 px-6 z-50 text-white bottom-4 right-[45vw] uppercase flex items-center gap-4 hover:bg-white hover:text-midnight-950 cursor-pointer transition duration-300 border border-white"
                onClick={() => setShowDecorated(true)}
              >
                <span className="w-7 h-7 inline-block">
                  <IconRuler />
                </span>
                <span>Opções de plantas</span>
              </div>
            )}
        </div>
      )}
    </>
  );
}
