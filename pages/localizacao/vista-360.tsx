import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getImagesByText, getPage } from "../../lib/api";
import { Settings, Page, Image } from "../../models";
import Header from "../../components/header";
import MiniMenuLocation from "../../components/mini-menu-location";
import { Carousel } from "react-responsive-carousel";
import Chevron from "../../public/voltar.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  images360: Image[];
};

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  images360,
}: indexType) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <section>
        <MiniMenuLocation />
        <Carousel
          showArrows
          infiniteLoop
          // centerMode
          // centerSlidePercentage={80}
          // dynamicHeight
          animationHandler="fade"
          showStatus={false}
          showThumbs={false}
          showIndicators
          renderArrowPrev={(clickHandler, hasPrev) =>
            hasPrev && (
              <div className="absolute z-50 right-0 bottom-0 flex p-4 mr-[calc(50vw_+_90px)] scale-75 mb-5">
                <div
                  className="m-auto rounded-full w-12 h-12 cursor-pointer flex items-center justify-center bg-white"
                  onClick={clickHandler}
                >
                  <Chevron className="scale-50" />
                </div>
              </div>
            )
          }
          renderArrowNext={(clickHandler, hasNext) =>
            hasNext && (
              <div className="absolute z-50 right-0 bottom-0 flex p-4 mr-[calc(50vw_-_170px)] scale-75 mb-5">
                <div
                  className="m-auto rounded-full w-12 h-12 cursor-pointer flex items-center justify-center bg-white rotate-180"
                  onClick={clickHandler}
                >
                  <Chevron className="scale-50" />
                </div>
              </div>
            )
          }
          selectedItem={0}
        >
          {images360.map((image) => (
            <div
              className="h-[calc(100vh_-_174px)] bg-bottom bg-cover"
              style={{ backgroundImage: `url(${image.mediaItemUrl})` }}
            >
              <img src={image.mediaItemUrl} className=" opacity-0" />
              <div className="absolute z-50 bg-white rounded-3xl text-black bottom-0 mb-9 ml-[calc(50vw_-_100px)] w-[200px] py-3 px-2 whitespace-nowrap uppercase overflow-hidden tracking-tighter text-center">
                {image.altText}
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("/localizacao/vista-360");
  const { menu, generalSettings } = await allSettings();
  const images360 = await getImagesByText("360");
  return {
    props: { generalSettings, menu, page, preview, images360 },
  };
};
