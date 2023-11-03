import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import { FloorPlanInfinityBlueRooftop } from "../../components/floorplans";

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
        <h1 className="text-midnight-950 text-2xl text-center">Infinity Blue Rooftop</h1>
        <FloorPlanInfinityBlueRooftop />
      </section>

      <section className="container m-auto bg-white my-10">
        <div className="text-midnight-950 text-2xl text-center">Infinity Blue Rooftop</div>
        <FloorPlanInfinityBlueRooftop />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const page = await getPage("/");
  const { menu, generalSettings } = await allSettings();
  return {
    props: { generalSettings, menu, page, preview },
    revalidate: 10,
  };
};
