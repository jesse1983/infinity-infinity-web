import Head from "next/head";
import Layout from "../../../components/layout";
import Header from "../../../components/header";
import { serverSideProps } from "../../../props/getServerSideProps";
import { PROPS } from "../../../props/infinity-world-props";
import { Carousel } from "react-responsive-carousel";
import Chevron from "../../../public/voltar.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMemo, useState } from "react";
import { GetServerSideProps } from "next";
import { allSettings, getImagesByText } from "../../../lib/api";
import { Image } from "../../../models";
import { useRouter } from "next/router";

type ViewProps = PROPS & {
  images: Image[];
};
export default function Index({
  generalSettings,
  menu,
  preview,
  images,
}: ViewProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();

  const currentTitle = useMemo(() => {
    return images[currentImage].title;
  }, [currentImage]);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
      </Head>
      <Header menu={menu} />
      <div className="w-full relative h-[calc(100vh_-_174px)] " data-aos="fade">
        <Carousel
          className="m-0"
          useKeyboardArrows
          centerSlidePercentage={70}
          // dynamicHeight
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          selectedItem={currentImage}
          // renderArrowPrev={(clickHandler, hasPrev) => hasPrev && <div className="absolute z-50 h-full flex p-4"><div className="m-auto rounded-full w-24 h-24 cursor-pointer flex items-center justify-center bg-white" onClick={clickHandler}><Chevron /></div></div>}
          // renderArrowNext={(clickHandler, hasNext) => hasNext && <div className="absolute z-50 right-0 top-0 float-right h-full flex p-4"><div className="m-auto rounded-full w-24 h-24 cursor-pointer flex items-center justify-center bg-white rotate-180" onClick={clickHandler}><Chevron /></div></div>}
        >
          {images.map((view) => (
            <div
              key={view.mediaItemUrl}
              className="w-screen h-[calc(100vh_-_174px)] bg-cover "
              style={{ backgroundImage: `url(${view.mediaItemUrl})` }}
            ></div>
          ))}
        </Carousel>
        <div className="w-screen fixed -bottom-5 flex flex-col justify-center items-center z-50 scale-50 gap-5">
          <div className="w-[1000px] flex justify-around gap-5">
            <div
              className={
                `m-auto rounded-full w-24 h-24 cursor-pointer flex items-center justify-center bg-white ` +
                (currentImage === 0 ? "opacity-0 pointer-events-none" : "")
              }
              onClick={() => setCurrentImage(currentImage - 1)}
            >
              <Chevron />
            </div>
            <div className="bg-white rounded-full text-midnight-900 flex items-center justify-center text-4xl grow h-28 font-light">
              {currentTitle}
            </div>
            <div
              className={
                `m-auto rounded-full w-24 h-24 cursor-pointer flex items-center justify-center bg-white rotate-180 overflow-hidden ` +
                (currentImage === images.length - 1
                  ? "opacity-0 pointer-events-none"
                  : "")
              }
              onClick={() => setCurrentImage(currentImage + 1)}
            >
              <Chevron />
            </div>
          </div>
          <div className="flex flex-row gap-5 justify-center">
            {images.map((e, i) => (
              <div
                key={e.title}
                className={`rounded-full border border-white w-8 h-8 ${
                  currentImage === i ? "bg-white" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="fixed bottom-5 left-5 z-50">
          <div
            className="m-auto rounded-full w-24 h-24 cursor-pointer flex items-center justify-center bg-white scale-75"
            onClick={() => router.push("/infinity-world")}
          >
            <Chevron />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const { menu, generalSettings } = await allSettings();
  const unsorted = await getImagesByText("Vista");
  const images = unsorted.sort((a) => (a.title > a.title ? 1 : -1));
  return {
    props: {
      menu,
      generalSettings,
      images,
    },
  };
};
