import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import MiniMenuLocation from "../../components/mini-menu-location";
import Link from "next/link";

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
      <section className="relative">
        <MiniMenuLocation />
        <div
          className=" bg-white grid grid-cols-[45%_55%] h-[calc(100vh_-_170px)] bg-right bg-no-repeat bg-contain"
          data-aos="fade-right"
          data-aos-duration="250"
          style={{ backgroundImage: "url(/requalificacao.png)" }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: page.content }}
            className="[&>h2]:mb-10 [&>h2]:text-xl p-10 list-numbers text-midnight-950 "
            data-aos="fade-left"
          />
          <div>
            <div className="text-midnight-950 w-[350px] mx-auto mt-10 leading-tight">
              <h1 className="text-5xl uppercase mb-6"  data-aos="zoom-in-up">Requalificação Urbana</h1>
              <p data-aos="zoom-in-down">
                <Link
                  href="video-requalificacao"
                  className="border border-midnight-950 py-3 px-6 uppercase"
                  
                >
                  Assista ao video
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("/requalificacao");
  const { menu, generalSettings } = await allSettings();
  return {
    props: { generalSettings, menu, page, preview },
  };
};
