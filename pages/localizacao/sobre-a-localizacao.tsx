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
      <section className="relative min-h-[calc(100vh_-_110px)] flex" style={{ backgroundImage: 'url(/bg-sobre-localizacao.jpg)' }}>
        <MiniMenuLocation />
        <div className="m-auto">
          <div className="container m-auto p-10">
            <div className="grid grid-cols-12 gap-5 text-midnight-950">
              <div className="col-span-6 flex items-center">
                <div>
                  <h1 className="text-2xl mb-7 uppercase">
                    {page.title}
                  </h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: page.content }}
                    className="[&>p]:mb-7"
                  />
                </div>
              </div>
              {images.map((image, i) => (
                <div className={'h-60 ' + (i === images.length - 1 ? `col-span-6` : `col-span-3`)}>
                  <div className="w-full h-full bg-cover bg-top" style={{ backgroundImage: `url(${image.mediaItemUrl})` }}></div>
                </div>
              ))}
            </div>
            {/* <div className="grid grid-cols-2 h-[calc(100vh_-_177px)]">
              <div
                className="font-light text-white bg-[#AFA181] flex flex-col gap-5 justify-center p-10"
                _data-aos="fade-left"
              >
                {images.map((image, i) => (
                  <div>
                    <img
                      src={image.mediaItemUrl}
                      className={`h-[30vh] w-[27vw] ${
                        i % 2 === 0 ? "float-right" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div className="font-light text-white flex" data-aos="fade-right">
                <div className="m-auto p-20">
                  <h1 className=" text-white text-2xl mb-7 uppercase">
                    {page.title}
                  </h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: page.content }}
                    className="[&>p]:mb-7"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("/sobre-a-localizacao");
  const { menu, generalSettings } = await allSettings();
  const unSortedImages = await getImagesByText("movimento");
  const images = unSortedImages.sort((a, b) => a.altText > b.altText ? 1 : -1 )
  return {
    props: { generalSettings, menu, page, preview, images },
  };
};
