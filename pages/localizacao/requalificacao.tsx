import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import MiniMenuLocation from "../../components/mini-menu-location";

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
        <div className="h-16"></div>
        <div className=" bg-white grid grid-cols-[45%_55%] bg-right bg-no-repeat bg-contain" style={{ backgroundImage: 'url(/requalificacao.png)' }}>
          <div dangerouslySetInnerHTML={{__html: page.content }} className="[&>h2]:mb-10 [&>h2]:text-xl p-10 list-numbers text-midnight-950 " data-aos="fade-left"  />          
          <div></div>
        </div>
       
      </section>
    </Layout>
  );
}


export const getServerSideProps: GetServerSideProps = async ({ preview = false }) => {
  const page = await getPage("/requalificacao");
  const { menu, generalSettings } = await allSettings();
  return {
    props: { generalSettings, menu, page, preview },
  };
};
