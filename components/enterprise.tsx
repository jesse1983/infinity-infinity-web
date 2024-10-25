"use client";
import Head from "next/head";
import Layout from "./layout";
import { Settings, Page } from "../models";
import Header from "./header";
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
import FullscreenGallery from "./fullscreen-gallery";

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
  const [imagesRefs, setImageRefs] = useState<React.RefObject<HTMLBaseElement>[]>([]);
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



  const photographedAmbients = useMemo(() => {
    return floor?.ambients?.filter((ambient) => ambient?.photoSrc);
  }, [floor]);

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
      selectedFloor.ambients.forEach((_) => {
        setImageRefs([...imagesRefs, createRef()]);
      });
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
          {selectedAmbient && <FullscreenGallery 
            photographedAmbients={photographedAmbients}  
            selected={currentImage}
            backFn={() => setSelectedAmbient(null)}

            />}
        </div>
        <div className="flex flex-row justify-between w-screen h-[calc(100vh_-_174px)]">
          <div
            className="overflow-hidden w-[20vw] h-full relative"
            data-aos="zoom-in"
          >
            <div className="absolute left-1 top-[calc(50vh_-_160px)] scale-50 z-10">
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
