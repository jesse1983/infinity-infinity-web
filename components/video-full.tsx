import PlayButtonWhite from "../public/play-white.svg";
import PauseButtonWhite from "../public/pause-white.svg";
import { useState, useRef, useEffect, useMemo } from "react";
import { Image } from "../models";

export default function VideoFull({
  video,
  backLink,
}: {
  video: Image;
  backLink?: string;
}) {
  const [domLoaded, setDomLoaded] = useState(false);
  const videoPlayer = useRef<HTMLVideoElement | null>(null);

  const setTogglePlay = () => {
    return videoPlayer.current?.paused
      ? videoPlayer.current?.play()
      : videoPlayer.current?.pause();
  };

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    video &&
    domLoaded && (
      <>
        {backLink && (
          <div className="absolute z-30 bottom-10 left-4">
            <a
              href={backLink}
              className="uppercase px-10 py-5 mb-7 ml-7 border border-slate-200 hover:bg-slate-200 hover:text-midnight-950 transition duration-500 hover:ease-in-out"
            >
              <span>Voltar</span>
            </a>
          </div>
        )}
        <div
          className="absolute m-auto z-50 scale-50 md:scale-75 2xl:scale-100 cursor-pointer opacity-30 hover:opacity-100 transition-all duration-300"
          onClick={() => setTogglePlay()}
        >
          <PlayButtonWhite />
        </div>
        <video
          className={`w-auto min-w-full min-h-full`}
          autoPlay
          loop
          ref={videoPlayer}
        >
          <source src={video.mediaItemUrl} type="video/mp4" />
        </video>
      </>
    )
  );
}
