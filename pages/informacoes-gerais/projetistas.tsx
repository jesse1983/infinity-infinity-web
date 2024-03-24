import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { allSettings, filterSubpagesByParent, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import MenuInformacoes from "../../components/menu-informacoes-gerais";
import { usePathname } from "next/navigation";
import bgPraia from "../../public/bg-praia.png";
import Title from "../../components/title";
import { Carousel } from "react-responsive-carousel";
import Chevron from "../../public/voltar.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";



type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  subpages: Page[];
  designers: Page[];
};

export default function Projetistas({
  generalSettings,
  menu,
  page,
  preview,
  subpages,
  designers,
}: indexType) {
  const currentURL = usePathname();
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <Title imageURL={bgPraia} content="Seu infinito pé na areia" />
      <MenuInformacoes currentPage={currentURL} subpages={subpages} />
      <div className="container mx-auto">
        <Carousel
          showArrows
          infiniteLoop
          // centerMode
          // centerSlidePercentage={80}
          // dynamicHeight
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          renderArrowPrev={(clickHandler, hasPrev) =>
            hasPrev && (
              <div className="absolute z-50 h-full flex p-4">
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
              <div className="absolute z-50 right-0 top-0 float-right h-full flex p-4">
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
          {designers.map((designer) => (
            <div className=" text-left px-24">
              <div
                dangerouslySetInnerHTML={{ __html: designer.content }}
                className="[&>*]:mb-10 [&>p]:text-2xl [&>h2]:text-4xl [&>h3]:text-3xl text-justify font-light"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("projetistas");
  const { menu, generalSettings, subpages } = await allSettings();
  const filteredSubpages = filterSubpagesByParent(
    "informacoes-gerais",
    subpages
  );
  const designers = filterSubpagesByParent("projetistas", subpages);
  return {
    props: {
      generalSettings,
      menu,
      page,
      preview,
      subpages: filteredSubpages,
      designers,
    },
  };
};
