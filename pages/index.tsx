import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { allSettings, getImagesByText, getPage } from "../lib/api";
import { Settings, Page, Image } from "../models";
import Header from "../components/header";
import PlayButton from "../public/play.svg";
import { useState } from "react";
import VideoFull from "../components/video-full";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  video: Image;
  intro?: Image;
};

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  video,
  intro,
}: indexType) {
  const [playInitialVideo, setPlayInitialVideo] = useState(false);
  return (
    <>
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      {intro && playInitialVideo &&  <VideoFull video={intro} onClose={() => setPlayInitialVideo(false)} />}

      <Header menu={menu} />
      <div className="relative flex items-center justify-center h-[calc(100vh-174px)] w-screen overflow-hidden">
        <video
          className={`absolute z-10 w-auto min-w-full min-h-full max-h-none`}
          autoPlay
          muted
          loop
          data-aos="zoom-in"
          // poster="./home.jpg"
        >
          {/* <source src="./banner01.webm" type="video/webm" /> */}
          <source src={video?.mediaItemUrl} type="video/mp4" />
        </video>
        {intro && !playInitialVideo && <div className="absolute m-auto z-50 scale-50 md:scale-75 2xl:scale-100 cursor-pointer" onClick={() => setPlayInitialVideo(true)}>
          <PlayButton />
        </div>}

      </div>
    </Layout>
    </>
  );
}

export const getServerSideProps: GetStaticProps = async ({ preview = false }) => {
  console.log(process.env.WORDPRESS_API_URL);
  const page = await getPage("/");
  const { menu, generalSettings } = await allSettings();
  const [video] = await getImagesByText("home");
  const intro = await getImagesByText("inicial");
  return {
    props: { generalSettings, menu, page, preview, video: video ?? {}, intro: intro.length ? intro[0] : null },
  };
};
