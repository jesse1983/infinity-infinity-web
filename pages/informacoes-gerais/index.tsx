import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { allSettings, filterSubpagesByParent, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import MenuInformacoes from "../../components/menu-informacoes-gerais";
import { usePathname } from "next/navigation";

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
        className="h-[calc(100vh_-_174px)] w-screen border border-white/0 bg-cover"
        style={{ backgroundImage: "url(/bg-info.png)" }}
      >
        <div
          className="container mx-auto max-h-[calc(100vh_-_174px)]"
          data-aos="fade"
        >
          <div className="container flex mt-[80px] relative">
            <div
              dangerouslySetInnerHTML={{ __html: page.content }}
              className="w-36 absolute font-thin text-[4em] leading-tight uppercase"
            />
            <img
              src={page.featuredImage?.mediaItemUrl}
              className="h-[calc(100vh_-_270px)] mx-auto"
            />
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
