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
        {video && (
          <>
            <div
              className="flex items-end justify-start relative z-30 w-auto h-full sm:w-screen"
              data-aos="fade-up-left"
            >
              <a
                href="/manifesto"
                className="pular uppercase px-10 py-5 mb-7 ml-7 border border-slate-200 hover:bg-slate-200 hover:text-midnight-950 transition duration-500 hover:ease-in-out"
              >
                <span>Voltar</span>
              </a>
            </div>
            <video
              className="absolute z-10 w-auto min-w-full min-h-full max-h-none"
              autoPlay
              muted
              loop
              data-aos="zoom-in"
              // poster="./home.jpg"
            >
              {/* <source src="./banner01.webm" type="video/webm" /> */}
              <source src={video.mediaItemUrl} type="video/mp4" />
            </video>
          </>
        )}
      </div>
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
