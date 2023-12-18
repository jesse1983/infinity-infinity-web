import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { allSettings, filterSubpagesByParent, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import MenuInformacoes from "../../components/menu-informacoes-gerais";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ImageNeighbor from "../../public/predios-praia.png";
import bgPraia from "../../public/bg-praia.png";
import Title from "../../components/title";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  subpages: Page[];
  page: Page;
  preview: boolean;
};

export default function Bairro({
  generalSettings,
  menu,
  page,
  preview,
  subpages
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
      <div className="container mx-auto">
        <img
          src={page.featuredImage.mediaItemUrl}
          alt={page.featuredImage.altText}
          className="w-full mb-10"
          data-aos="zoom-in-down"
        />
        <div data-aos="zoom-in-down">
          <div dangerouslySetInnerHTML={{__html: page.content }} className="[&>*]:mb-10 [&>p]:text-2xl [&>h2]:text-4xl [&>h3]:text-3xl text-justify font-light"  />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const page = await getPage("/o-bairro");
  const { menu, generalSettings, subpages } = await allSettings();
  const filteredSubpages = filterSubpagesByParent('informacoes-gerais', subpages);
  return {
    props: { generalSettings, menu, page, preview, subpages: filteredSubpages },
    revalidate: 10,
  };
};

