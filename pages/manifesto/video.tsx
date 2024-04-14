import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import Header from "../../components/header";
import {
  allSettings,
  filterSubpagesByParent,
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
      <VideoFull video={video} backLink="/manifesto" />
      <Header menu={menu} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("/manifesto");
  const { menu, generalSettings, subpages } = await allSettings();
  const videos = await getImagesByText("manifesto");
  return {
    props: { generalSettings, menu, page, preview, videos },
  };
};
