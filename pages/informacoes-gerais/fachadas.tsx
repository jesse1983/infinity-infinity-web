import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import {
  allSettings,
  filterSubpagesByParent,
  getImagesByText,
  getPage,
} from "../../lib/api";
import { Settings, Page, Image } from "../../models";
import Header from "../../components/header";
import MenuInformacoes from "../../components/menu-informacoes-gerais";
import { usePathname } from "next/navigation";
import IconClose from "../../public/icon-close-filled.svg";
import IconMaximize from "../../public/maximize.svg";
import { useRef, useState } from "react";
import SeaVideo from "../../components/sea-video";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  subpages: Page[];
  page: Page;
  images: Image[];
  preview: boolean;
};

export default function Descritivo({
  generalSettings,
  menu,
  page,
  preview,
  subpages,
  images,
}: indexType) {
  const currentURL = usePathname();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imagesRefs = [
    useRef(null),
    useRef(null),
  ];

  const doubleImages = [[]];
  let curr = 0;

  images.forEach((image) => {
    if (doubleImages[curr].length === 2) {
      curr += 1;
      doubleImages[curr] = [];
    }
    doubleImages[curr].push(image);
  });

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

  const exitFullScreen = () => {
    document.exitFullscreen();
  };

  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <MenuInformacoes currentPage={currentURL} subpages={subpages} />
      <SeaVideo />
      <section
        className="min-h-[calc(100vh_-_174px)] "
      >
        <div className="min-h-[calc(100vh_-_174px)] w-full grid grid-cols-4">
          <h1 className="uppercase inline text-2xl m-auto" data-aos="flip-down">Fachadas</h1>
          <div className="min-h-[calc(100vh_-_174px)] col-span-2">
            <div className="flex items-center justify-center gap-8 h-full">
              {['/fachada-blue.jpg', '/fachada-sea.jpg'].map((e, i) => (
              <div className="relative" ref={imagesRefs[i]} data-aos="flip-up" data-aos-duration={(i+1) * 500}>
                <span className="absolute right-1 top-1 scale-75 cursor-pointer hover:scale-95 transition-all" onClick={() => isFullscreen ? exitFullScreen() : setFullScreen(i)}>
                  {isFullscreen ? <IconClose />: <IconMaximize />}
                </span>
                <img src={e} className="m-auto" />
              </div>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("/fachadas");
  const { menu, generalSettings, subpages } = await allSettings();
  const filteredSubpages = filterSubpagesByParent(
    "informacoes-gerais",
    subpages
  );
  const images = await getImagesByText("ficha-tecnica");
  return {
    props: {
      generalSettings,
      menu,
      page,
      preview,
      subpages: filteredSubpages,
      images,
    },
  };
};
