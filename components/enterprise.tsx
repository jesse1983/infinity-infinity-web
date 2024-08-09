"use client";
import Head from "next/head";
import Layout from "./layout";
import { Settings, Page } from "../models";
import Header from "./header";
import MiniMenuContainer from "./mini-menu-container";
import LogoInfinityBlue from "../public/logo-infinity-blue-white.svg";
import LogoInfinitySea from "../public/logo-infinity-sea-white.svg";
import Chevron from "../public/voltar.svg";
import { createRef, useEffect, useMemo, useRef, useState } from "react";
import React from "react";
import FloorPlan from "./floor-plan";
import { Carousel } from "react-responsive-carousel";
import IconMaximize from "../public/maximize.svg";
import IconRuler from "../public/icon-ruler.svg";
import IconClose from "../public/icon-close-filled.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AMBIENT, ENTERPRISE, FLOOR } from "../types";
import { Decorated } from "./decorated";
import { CircleText } from "./circle-text";
import { useRouter } from "next/router";
import BackButton from "./voltar";
import { slugify } from "../helpers/slugify";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  enterprises: ENTERPRISE[];
  enterprise: string;
};

export default function Enterprise({
  generalSettings,
  menu,
  page,
  preview,
  enterprises,
  enterprise,
}: indexType) {
  const router = useRouter();
  const [selectedAmbient, setSelectedAmbient] = useState<AMBIENT | undefined>();
  const [floor, setFloor] = useState<FLOOR | undefined>();
  const [showDecorated, setShowDecorated] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imagesRefs = useRef([]);
  const floors = enterprises.find((e) => e.slug === enterprise).floors;

  const openSlideShow = (ev, ambient: AMBIENT, ambients: AMBIENT[]) => {
    ev.preventDefault();
    if (ambient.photoSrc) {
      setSelectedAmbient(ambient);
      setCurrentImage(
        ambients
          .filter((a) => a.photoSrc)
          .findIndex((a) => a.photoSrc === ambient.photoSrc)
      );
    }
  };

  const setFullScreen = (imageIndex) => {
    setIsFullscreen(true);
    const el = imagesRefs.current[imageIndex]?.current;
    setTimeout(() => {
      el.requestFullscreen({ navigationUI: "show" });
    }, 10);
    el.addEventListener("fullscreenchange", function () {
      const fullScreen = !!document.fullscreenElement;
      setIsFullscreen(fullScreen);
    });
  };

  const exitFullScreen = (imageIndex) => {
    const el = imagesRefs.current[imageIndex].current;
    document.exitFullscreen();
  };

  const photographedAmbients = useMemo(() => {
    return floor?.ambients?.filter((ambient) => ambient?.photoSrc);
  }, [floor]);

  const logo = (
    <div className="w-full">
      {enterprise === "infinity-blue" ? (
        <LogoInfinityBlue />
      ) : (
        <LogoInfinitySea />
      )}
    </div>
  );
  const getFloorPlan = (): FLOOR | undefined => {
    const url = new URLSearchParams(location.search);
    const area = url.get("area").toLowerCase();
    if (area) return floors.find((a) => a.slug === area);
  };

  const rotateNav = (selectedFloor) => {
    const found = floors.find((f) => slugify(f.title) === selectedFloor);
    setFloor(found);
  };

  useEffect(() => {
    const selectedFloor = getFloorPlan();
    if (selectedFloor) {
      setFloor(selectedFloor);
      imagesRefs.current = selectedFloor.ambients.map(
        (_, i) => imagesRefs.current[i] ?? createRef()
      );
      document.addEventListener(
        "keydown",
        (ev) =>
          ev.key === "Escape" ? setSelectedAmbient(undefined) : undefined,
        false
      );
    }
  }, []);
  const selected =
    floor?.ambients?.findIndex(
      (a) => selectedAmbient && a?.photoSrc === selectedAmbient?.photoSrc
    ) || 0;
  const [currentImage, setCurrentImage] = useState(selected);
  const onChangeImage = (index) => setCurrentImage(index);
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} logo={enterprise.includes("sea") ? "SEA" : "BLUE"} />
      <div className="w-full relative h-[calc(100vh_-_174px)] flex overflow-hidden">
        <div
          className={`absolute bg-midnight-950 w-full h-full z-40 transition-opacityx  duration-500 flex flex-col justify-center ${
            selectedAmbient ? "opacity-100" : "opacity-0 invisible"
          }`}
        >
          {selectedAmbient && (
            <>
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
                      ref={imagesRefs.current[i]}
                    >
                      <span
                        className={`relative flex items-center justify-center ${
                          isFullscreen
                            ? "w-screen h-screen"
                            : "h-[calc(100%_-_25px)]"
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
                  onClick={() => setSelectedAmbient(null)}
                >
                  <Chevron />
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-row justify-between w-screen h-[calc(100vh_-_174px)]">
          <div
            className="overflow-hidden w-[20vw] h-full relative"
            data-aos="zoom-in"
          >
            <div className="absolute left-1 top-[calc(50vh_-_160px)] scale-75 z-10">
              <BackButton onClick={() => router.back()} />
            </div>
            <div
              className={`${
                enterprise.includes("blue") ? "-ml-[540px]" : "-ml-[440px]"
              } mt-[calc(-160px_+_5vh)] scale-[0.9] `}
            >
              <CircleText
                enterprise={enterprise}
                texts={floors.map((floor) => floor.title)}
                active={floor?.title}
                onClick={rotateNav}
              />
            </div>
          </div>
          {floor && (
            <div className="w-[75vw] relative h-[calc(100vh_-_164px)] overflow-hidden">
              <FloorPlan src={floor.floorPlanSrc}>
                {floor.ambients.map((ambient, i, all) => (
                  <FloorPlan.Path
                    key={ambient.coords}
                    title={ambient.title}
                    coords={ambient.coords}
                    notClickable={ambient.notClickable}
                    bgTooltip={ambient.notClickable ? '#9c917c' : undefined}
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
        </div>
        {floor?.decorated?.length > 0 && showDecorated && (
          <Decorated
            decorated={floor.decorated}
            onClose={() => setShowDecorated(undefined)}
          />
        )}
      </div>
    </Layout>
  );
}
