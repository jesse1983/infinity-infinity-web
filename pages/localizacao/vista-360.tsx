import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getImagesByText, getPage } from "../../lib/api";
import { Settings, Page, Image } from "../../models";
import Header from "../../components/header";
import Panorama from "../../components/panorama";
import FloorPlan from "../../components/floor-plan";
import MiniMenuLocation from "../../components/mini-menu-location";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  images360: Image[],
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
        <Panorama images={images360} />
        <div
          className="text-center text-4xl py-7 uppercase w-auto h-16"
          style={{ backgroundImage: "url(/bg-aqua-title.jpg)" }}
        >
        </div>
        {/* <div className=" bg-white ">
          <div className="container lg:grid lg:grid-cols-3 gap-7 m-auto text-midnight-900 p-7 text-2xl leading-relaxed">
            {page.featuredImage && <div
              className="text-4xl uppercase text-center lg:text-left mb-7"
              data-aos="fade-right"
            >
              <p className="mb-7">
              { page.featuredImage.altText }
              </p>
              <img
                src={ page.featuredImage.mediaItemUrl }
                alt=""
                className="w-full"
              />
            </div>}
            <div className="col-span-2 font-light" data-aos="fade-left">


                <div dangerouslySetInnerHTML={{__html: page.content }} className="[&>p]:mb-7"  />

            </div>
          </div>
        </div>
        <FloorPlan src="./map-localization.png">
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


export const getServerSideProps: GetServerSideProps = async ({ preview = false }) => {
  const page = await getPage("/localizacao/vista-360");
  const { menu, generalSettings } = await allSettings();
  const images360 = await getImagesByText('360');
  return {
    props: { generalSettings, menu, page, preview, images360 },
  };
};
