import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import Header from "../../components/header";
import {
  allSettings,
  getImagesByText,
  getPage,
} from "../../lib/api";
import { Settings, Page, Image } from "../../models";
import VideoFull from "../../components/video-full";


type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  videos: Image[];
  preview: boolean;
};

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  videos,
}: indexType) {
  const [video] = videos;

  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <div className="relative flex items-center justify-center h-[calc(100vh-110px)] w-screen overflow-hidden">
        <VideoFull video={video} backLink="/localizacao/requalificacao" />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("/manifesto");
  const { menu, generalSettings } = await allSettings();
  const videos = await getImagesByText("requalificacao");
  return {
    props: { generalSettings, menu, page, preview, videos },
  };
};
