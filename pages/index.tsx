import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { allSettings, getPage } from "../lib/api";
import { Settings, Page } from "../models";
import Header from "../components/header";

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
      <Header menu={menu} />
      <div className="h-[calc(100vh-210px)] w-screen overflow-hidden">
        <div className="mt-[-10vh] sm:w-screen">
          <video
            className="h-screen w-auto sm:w-screen"
            autoPlay
            // poster="./home.jpg"
          >
            {/* <source src="./banner01.webm" type="video/webm" /> */}
            <source src="./home.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
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
