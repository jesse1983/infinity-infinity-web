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
      setCurrentImage(ambients.filter((a) => a.photoSrc).findIndex((a) => a.photoSrc === ambient.photoSrc));
    }
  };

  const setFullScreen = (imageIndex) => {
    setIsFullscreen(true);
    const el = imagesRefs.current[imageIndex].current;
    setTimeout(() => {
      el.requestFullscreen({ navigationUI: "show" });
    }, 10);
    el.addEventListener('fullscreenchange', function () {
      const fullScreen = !!document.fullscreenElement
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
    const found = floors[selectedFloor];
    setFloor(found);
  };

  const buildingCircle = (enterprise: string) => (
    <div
      className="left-[10%] fixed z-50 overflow-hidden h-[calc(100vh/2_-_25vh)] w-[calc(100vh/2)] bottom-0 hidden lg:block"
      data-aos="zoom-in"
    >
      <CircleText enterprise={enterprise} texts={floors.map((floor) => floor.title)} active={floor?.title} onClick={rotateNav} />
    </div>
  );

  useEffect(() => {
    const selectedFloor = getFloorPlan();
    if (selectedFloor) {
      imagesRefs.current = selectedFloor.ambients.map(
        (_, i) => imagesRefs.current[i] ?? createRef()
      );
      setFloor(selectedFloor);
      document.addEventListener(
        "keydown",
        (ev) =>
          ev.key === "Escape" ? setSelectedAmbient(undefined) : undefined,
        false
      );
    }
    
  }, []);
  const selected = floor?.ambients?.findIndex(
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
      <Header menu={menu} />
      <div className="w-full relative h-[calc(100vh_-_110px)] flex border border-white">

        <div
          className={`absolute bg-midnight-950 w-full h-full z-40 transition-opacity duration-500 flex flex-col justify-center ${
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
                centerSlidePercentage={75}
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
                    className={'cursor-pointer p-7 flex flex-col relative items-center m-auto transition-all duration-300 ' + (currentImage === i ? '' : ' opacity-30 scale-y-75') }
                    key={ambient.coords}
                    onClick={() => setCurrentImage(i)}
                    style={{ backgroundImage: i !== currentImage ? `url(${ambient.photoSrc})` : '' }}
                  >
                    <span className="relative flex items-center justify-center" ref={imagesRefs.current[i]}>
                      <span className="relative">
                        <img
                          src={ambient.photoSrc}
                          className="w-auto max-h-[calc(100vh_-_300px)] self-center"
                        />
                        <div
                          className={'absolute z-50 top-3 right-3 w-12 cursor-pointer transition-all duration-300 ease-in-out delay-300 hover:scale-100'
                          + (i === currentImage ? ' scale-75' : ' scale-0')}
                          onClick={() => isFullscreen ? exitFullScreen(i) : setFullScreen(i) }
                        >
                          {isFullscreen ? <IconClose /> : <IconMaximize />}
                          
                        </div>
                      </span>
                    </span>
                    <div className="absolute z-50 bottom-0 border border-white p-2 bg-midnight-950 uppercase text-xl">
                      {ambient.title}
                    </div>

                  </div>
                ))}
              </Carousel>
              <div className="absolute bottom-4 left-16 scale-75" >
                <div className="m-auto rounded-full w-24 h-24 cursor-pointer flex items-center justify-center bg-white" onClick={() => setSelectedAmbient(null)}><Chevron /></div>
              </div>
            </>
          )}
        </div>
        <MiniMenuContainer
          title={logo}
          noBorder
          slot={!showDecorated && !selectedAmbient && buildingCircle(enterprise)}
        >
          {floor && (
            <div className="w-full p-24 relative max-h-[calc(100vh_-_200px)]">
              <FloorPlan src={floor.floorPlanSrc}>
                {floor.ambients.map((ambient, i, all) => (
                  <FloorPlan.Path
                    key={ambient.coords}
                    title={ambient.title}
                    coords={ambient.coords}
                    notClickable={ambient.notClickable}
                    onClick={(ev) => openSlideShow(ev, ambient, all)}
                  />
                ))}
              </FloorPlan>
              {floor.decorated?.length > 0 &&
                !showDecorated &&
                !selectedAmbient && (
                  <div
                    className="absolute bg-midnight-950 p-4 z-50 text-white bottom-14 right-14 border border-white uppercase flex items-center gap-4 hover:bg-white hover:text-midnight-950 cursor-pointer transition duration-300"
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
        </MiniMenuContainer>
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
