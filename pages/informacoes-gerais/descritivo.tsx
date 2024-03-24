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
import bgPraia from "../../public/bg-praia.png";
import Title from "../../components/title";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Chevron from "../../public/voltar.svg";


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
  const doubleImages = [[]];
  let curr = 0;

  images.forEach((image) => {
    if (doubleImages[curr].length === 2) {
      curr += 1;
      doubleImages[curr] = [];
    }
    doubleImages[curr].push(image);
  });
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <Title imageURL={bgPraia} content="Seu infinito pé na areia" />
      <MenuInformacoes currentPage={currentURL} subpages={subpages} />
      <div className="container mx-auto descritivo" data-aos="fade-right">
        <div className="grid grid-cols-12">
          <div
            dangerouslySetInnerHTML={{ __html: page.content }}
            className="descritivo [&>*]:mb-10 [&>*]:text-2xl [&>ul>li]:list-disc [&>ul>li]:list-inside font-light col-span-6 lg:col-span-8"
          />
          <div className="col-span-6 lg:col-span-4">
            <Carousel
              showArrows
              autoPlay
              infiniteLoop
              showStatus={false}
              showThumbs={false}
              // showIndicators={false}
              renderArrowPrev={(clickHandler, hasPrev) =>
                hasPrev && (
                  <div className="absolute z-50 h-full flex scale-75">
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
                  <div className="absolute z-50 right-0 top-0 float-right h-full flex scale-75">
                    <div
                      className="m-auto rounded-full w-12 h-12 cursor-pointer flex items-center justify-center bg-white rotate-180"
                      onClick={clickHandler}
                    >
                      <Chevron className="scale-50" />
                    </div>
                  </div>
                )
              }
            >
              {doubleImages.map((row) => (
                <div className="grid grid-cols-2 gap-5 px-14 h-80">
                  {row.map((image) => (
                    <img src={image.mediaItemUrl} className=" h-72" />
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("/descritivo");
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
