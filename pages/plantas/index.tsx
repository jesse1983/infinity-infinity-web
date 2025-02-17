import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import {
  FloorPlanInfinityBlueApartment,
  FloorPlanInfinityBlueRooftop,
  FloorPlanInfinityBluePavimento,
  FloorPlanInfinityBlueLounge,
  FloorPlanInfinitySeaClub,
  FloorPlanInfinitySeaPavimento,
  FloorPlanInfinitySeaApartment,
  FloorPlanInfinityWorldMapa,
} from "../../components/floorplans";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
};

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
}: indexType) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <section className="container m-auto bg-white my-10">
        <h1 className="text-midnight-950 text-2xl text-center">
          Cais 218 Rooftop
        </h1>
        <FloorPlanInfinityBlueRooftop />
      </section>
      <section className="container m-auto bg-white my-10">
        <div className="text-midnight-950 text-2xl text-center">
          Cais 218 Apartment
        </div>
        <FloorPlanInfinityBlueApartment />
      </section>
      <section className="container m-auto bg-white my-10">
        <div className="text-midnight-950 text-2xl text-center">
          Cais 218 Pavimento
        </div>
        <FloorPlanInfinityBluePavimento />
      </section>
      <section className="container m-auto h-1/4 w-1/4 bg-white my-10">
        <div className="text-midnight-950 text-2xl text-center">
          Cais 218 Lounge
        </div>
        <FloorPlanInfinityBlueLounge />
      </section>
      <section className="container m-auto bg-white my-10">
        <div className="text-midnight-950 text-2xl text-center">
          Cais 292 Beach Club
        </div>
        <FloorPlanInfinitySeaClub />
      </section>
      <section className="container m-auto bg-white my-10">
        <div className="text-midnight-950 text-2xl text-center">
          Cais 292 Pavimento Térreo
        </div>
        <FloorPlanInfinitySeaPavimento />
      </section>
      <section className="container m-auto bg-white my-10">
        <div className="text-midnight-950 text-2xl text-center">
          Cais 292 Apartment
        </div>
        <FloorPlanInfinitySeaApartment />
      </section>
      <section className="container m-auto bg-white my-10">
        <div className="text-midnight-950 text-2xl text-center">
          Infinity World Mapa
        </div>
        <FloorPlanInfinityWorldMapa isSalesTable={false} />
      </section>
      <section className="container m-auto bg-white my-10">
        <div className="text-midnight-950 text-2xl text-center">
          Infinity World Mapa (Tabela)
        </div>
        <FloorPlanInfinityWorldMapa isSalesTable={true} />
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ preview = false }) => {
  const page = await getPage("/");
  const { menu, generalSettings } = await allSettings();
  return {
    props: { generalSettings, menu, page, preview },

  };
};
