import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Title from "../../components/title";
import { allSettings, filterSubpagesByParent, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import bgMar from "../../public/bg-mar.png";
import Chevron from "../../public/voltar.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  blocks: Page[];
  preview: boolean;
};

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  blocks,
}: indexType) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <section
        className="relative min-h-[calc(100vh_-_174px)] flex bg-cover"
        style={{ backgroundImage: "url(/bg-manifesto.png)" }}
      >
        <div className="w-full h-full">
          <Carousel
            showArrows
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
            {blocks.map((block, i) => (
              <div
                className={
                  "min-h-[calc(100vh_-_175px)] grid grid-cols-2 gap-10 " +
                  (i % 2 === 0 ? "text-left" : "text-right")
                }
              >
                <div className={"m-auto " + (i % 2 === 0 ? 'order-1' : 'order-2')}>
                  <div
                    dangerouslySetInnerHTML={{ __html: block.content }}
                    className="manifesto"
                    data-aos="fade"
                  />
                  <p className="mt-12 uppercase" data-aos="zoom-in">
                    <a  
                      href="/manifesto/video"
                      className="py-4 px-10 border border-white hover:bg-white hover:text-midnight-950 transition duration-500 hover:ease-in-out"
                    >
                      Assista ao video
                    </a>
                  </p>
                </div>
                <div className={'bg-cover bg-center ' + (i % 2 === 0 ? 'order-2' : 'order-1')} style={{ backgroundImage: `url(${block.featuredImage?.mediaItemUrl})` }} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("/manifesto");
  const { menu, generalSettings, subpages } = await allSettings();
  const blocks = filterSubpagesByParent("manifesto", subpages);
  return {
    props: { generalSettings, menu, page, preview, blocks },
  };
};
