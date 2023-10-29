import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import MenuInformacoes from "../../components/menu-informacoes-gerais";
import { usePathname } from "next/navigation";
import CardProjetista from "../../components/card-projetista";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
};

export default function Projetistas({
  generalSettings,
  menu,
  page,
  preview,
}: indexType) {
  const currentURL = usePathname();
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <MenuInformacoes currentPage={currentURL} />
      <CardProjetista nome="Sidney Quintela" />
      <CardProjetista nome="Laís Galvão" />
      <CardProjetista nome="Tatiana Melo" />
      <CardProjetista nome="Laís Galvão" />
      <CardProjetista nome="Feu Arquitetura (Alexandre Feu)" />
      <CardProjetista nome="GW Arquitetos" />
      <CardProjetista nome="Júlia Leal" />
      <CardProjetista nome="GAM Arquitetos" />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const page = await getPage("/");
  const { menu, generalSettings } = await allSettings();
  return {
    props: { generalSettings, menu, page, preview },
    revalidate: 10,
  };
};
