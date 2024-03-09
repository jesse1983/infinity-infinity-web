import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getImagesByText, getPage } from "../../lib/api";
import { Settings, Page, Image } from "../../models";
import Header from "../../components/header";
import MiniMenuLocation from "../../components/mini-menu-location";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  images: Image[];
};

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  images,
}: indexType) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <section className="relative">
        <MiniMenuLocation />

        <div
          className="text-center text-4xl py-7 uppercase w-auto h-16"
          style={{ backgroundImage: "url(/bg-aqua-title.jpg)" }}
        ></div>
        <div>
          <div className="container">
            <div className="grid grid-cols-2 h-[calc(100vh_-_200px)]">
              <div className="font-light text-white bg-[#AFA181] flex flex-col gap-5 justify-center" data-aos="fade-left">
                {images.map((image) => <div><img src={image.mediaItemUrl} className="h-[30vh] m-auto" /></div>)}
              </div>
              <div className="font-light text-white flex" data-aos="fade-right">
                <div className="m-auto p-20">
                  <h1 className=" text-white text-2xl mb-7 uppercase">{page.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: page.content }}
                    className="[&>p]:mb-7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <FloorPlan src="./map-localization.png">
          <FloorPlan.Poi
            title="Shopping Da Praia"
            icon="/icon-shopping-bag.svg"
            y={32}
            x={360}
          />
          <FloorPlan.Poi
            title="Shopping Horizon"
            icon="/icon-shopping-bag.svg"
            y={32}
            x={202}
          />

          <FloorPlan.Path
            title="Infinity Blue"
            coords="m 789.64053,690.2321 129.41851,-33.76135 65.64708,234.45383 -123.79163,58.14455 z"
          />
          <FloorPlan.Path
            title="Infinity Sea"
            coords="m 1149.7616,581.44552 127.5429,307.60343 223.2001,-80.65212 -121.916,-315.10596 z"
          />
        </FloorPlan> */}
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("/movimento");
  const { menu, generalSettings } = await allSettings();
  const images = await getImagesByText("movimento");
  return {
    props: { generalSettings, menu, page, preview, images },
  };
};
