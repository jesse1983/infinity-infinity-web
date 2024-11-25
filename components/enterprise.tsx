"use client";
import Head from "next/head";
import Layout from "./layout";
import { Settings, Page } from "../models";
import Header from "./header";
import { createRef, useEffect, useState } from "react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AMBIENT, ENTERPRISE, FLOOR } from "../types";
import { Decorated } from "./decorated";
import { CircleText } from "./circle-text";
import { useRouter } from "next/router";
import BackButton from "./voltar";
import { slugify } from "../helpers/slugify";
import FullFloorPlan from "./full-floor-plan";


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
  const [videoURL, setVideoURL] = useState('');
  const [imagesRefs, setImageRefs] = useState<React.RefObject<HTMLBaseElement>[]>([]);
  const floors = enterprises.find((e) => e.slug === enterprise).floors;



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
  
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} logo={enterprise.includes("sea") ? "SEA" : "BLUE"} />
      <div className="w-full relative h-[calc(100vh_-_174px)] flex overflow-hidden">
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
          <FullFloorPlan floor={floor} selected={selected} setShowDecorated={setShowDecorated} showDecorated={showDecorated}  />
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
