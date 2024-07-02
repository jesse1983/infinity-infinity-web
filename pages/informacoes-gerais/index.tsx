import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { allSettings, filterSubpagesByParent, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import MenuInformacoes from "../../components/menu-informacoes-gerais";
import { usePathname } from "next/navigation";
import Info from "../../public/informacoes-gerais.svg";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  subpages: Page[];
};

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  subpages,
}: indexType) {
  const currentURL = usePathname();
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <MenuInformacoes currentPage={currentURL} subpages={subpages} />
      <div
        className="h-[calc(100vh_-_174px)] w-screen border border-white/0"
        style={{ backgroundImage: "url(/bg-info.png)" }}
      >
        <div
          className="container mx-auto max-h-[calc(100vh_-_174px)]"
          data-aos="fade"
        >
          <div className="container flex mt-[80px] relative">
            <h1
              className=" w-36 absolute font-thin text-[4em] uppercase"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              Além mar
            </h1>
            <Info className=" h-[calc(100vh_-_300px)] mx-auto" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("inovacao-e-tecnologia");
  const { menu, generalSettings, subpages } = await allSettings();
  const filteredSubpages = filterSubpagesByParent(
    "informacoes-gerais",
    subpages
  );
  return {
    props: { generalSettings, menu, page, preview, subpages: filteredSubpages },
  };
};
