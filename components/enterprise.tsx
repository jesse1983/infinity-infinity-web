"use client";
import Head from "next/head";
import Layout from "./layout";
import { Settings, Page } from "../models";
import Header from "./header";
import MiniMenuContainer from "./mini-menu-container";
import LogoInfinityBlue from "../public/logo-infinity-blue-white.svg";
import LogoInfinitySea from "../public/logo-infinity-sea-white.svg";
import { createRef, useEffect, useMemo, useRef, useState } from "react";
import React from "react";
import FloorPlan from "./floor-plan";
import { Carousel } from "react-responsive-carousel";
import IconClose from '../public/icon-close.svg';
import IconFullscreen from '../public/icon-fullscreen.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AMBIENT, ENTERPRISE, FLOOR } from "../types";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  enterprises: ENTERPRISE[],
  enterprise: string,
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
  const imagesRefs = useRef([]);
  const floors = enterprises.find((e) => e.slug === enterprise).floors;

  const openSlideShow = (ev, ambient: AMBIENT) => {
    ev.preventDefault();
    if (ambient.photoSrc) setSelectedAmbient(ambient);
  };

  const setFullScreen = (imageIndex) => {
    const el = imagesRefs.current[imageIndex].current;
    el.requestFullscreen({ navigationUI: "show" });
  }

  const photographedAmbients = useMemo(() => {
    return floor?.ambients.filter((ambient) => ambient.photoSrc);
  }, [floor])

  const logo = (
    <div className="w-full">
      {enterprise === 'infinity-blue' ? <LogoInfinityBlue /> : <LogoInfinitySea />}
    </div>
  );
  const getFloorPlan = (): FLOOR | undefined => {
    const url = new URLSearchParams(location.search);
    const area = url.get("area").toLowerCase();
    if (area) return floors.find((a) => a.slug === area);
  };

  useEffect(() => {
    const selectedFloor = getFloorPlan();
    if (selectedFloor) {
      imagesRefs.current = selectedFloor.ambients.map((_, i) => imagesRefs.current[i] ?? createRef());
      setFloor(selectedFloor);
      document.addEventListener('keydown', (ev) => ev.key === 'Escape' ? setSelectedAmbient(undefined) : undefined, false);
    }
  }, []);
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <div className="w-full relative h-[calc(100vh_-_140px)] flex">
        <div
          className={`absolute bg-midnight-950/70 w-full h-full z-40 transition-opacity duration-500 ${
            selectedAmbient ? "opacity-100" : "opacity-0 invisible"
          }`}
        >
          {selectedAmbient && (
            <Carousel
              showArrows
              centerMode
              infiniteLoop
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              centerSlidePercentage={80}
              selectedItem={floor?.ambients.findIndex(
                (a) => a.photoSrc === selectedAmbient.photoSrc
              )}
            >
              {photographedAmbients.map((ambient, i) => (
                <div className="p-7 flex flex-col relative items-center" key={ambient.coords}>
                  <img
                    src={ambient.photoSrc}
                    className="w-auto h-[calc(100vh_-_300px)]"
                    ref={imagesRefs.current[i]}
                  />
                  <div className="absolute z-50 bottom-0 border border-white p-2 bg-midnight-950 uppercase text-xl">{ambient.title}</div>
                  <div className="absolute z-50 top-10 right-10 w-12 cursor-pointer" onClick={() => setSelectedAmbient(undefined)}><IconClose /></div>
                  {document?.fullscreenEnabled && <div className="absolute z-50 bottom-10 right-10 w-12 cursor-pointer" onClick={() => setFullScreen(i)}><IconFullscreen /></div>}
                </div>
              ))}
            </Carousel>
          )}
        </div>

        <MiniMenuContainer title={logo} noBorder>
          {floor && (
            <div className="w-full p-24">
              <FloorPlan src={floor.floorPlanSrc}>
                {floor.ambients.map((ambient) => (
                  <FloorPlan.Path
                    key={ambient.coords}
                    title={ambient.title}
                    coords={ambient.coords}
                    onClick={(ev) => openSlideShow(ev, ambient)}
                  />
                ))}
              </FloorPlan>
            </div>
          )}
        </MiniMenuContainer>
      </div>
    </Layout>
  );
}
