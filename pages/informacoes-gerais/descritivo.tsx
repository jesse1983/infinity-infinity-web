import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { allSettings, filterSubpagesByParent, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import Link from "next/link";
import MenuInformacoes from "../../components/menu-informacoes-gerais";
import { usePathname } from "next/navigation";
import bgPraia from "../../public/bg-praia.png";
import Title from "../../components/title";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  subpages: Page[];
  page: Page;
  preview: boolean;
};

export default function Descritivo({
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
      <Title imageURL={bgPraia} content="Seu infinito pé na areia" />
      <MenuInformacoes currentPage={currentURL} subpages={subpages} />
      <div className="container mx-auto" data-aos="fade-right">
        <div dangerouslySetInnerHTML={{__html: page.content }} className="descritivo [&>*]:mb-10 [&>*]:text-2xl [&>ul>li]:list-disc [&>ul>li]:list-inside font-light"  />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ preview = false }) => {
  const page = await getPage("/descritivo");
  const { menu, generalSettings, subpages } = await allSettings();
  const filteredSubpages = filterSubpagesByParent('informacoes-gerais', subpages);
  return {
    props: { generalSettings, menu, page, preview, subpages: filteredSubpages },

  };
};

