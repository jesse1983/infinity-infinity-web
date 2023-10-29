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
      <div className="relative flex items-center justify-center h-[calc(100vh-150px)] w-screen overflow-hidden">
        <div className="flex items-end justify-end relative z-30 w-auto h-full sm:w-screen">
          <a
            href="./infinity-world"
            className="px-10 py-5 mb-7 mr-7 border hover:bg-white hover:text-midnight-950 transition duration-500 hover:ease-in-out"
          >
            Pular
          </a>
        </div>
        <video
          className="absolute z-10 w-auto min-w-full min-h-full max-h-none"
          autoPlay
          muted
          loop
          // poster="./home.jpg"
        >
          {/* <source src="./banner01.webm" type="video/webm" /> */}
          <source src="/home.mp4" type="video/mp4" />
        </video>
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
