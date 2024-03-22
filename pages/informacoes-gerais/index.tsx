import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { allSettings, filterSubpagesByParent, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import MenuInformacoes from "../../components/menu-informacoes-gerais";
import { usePathname } from "next/navigation";
import Image from "next/image";
import bgPraia from "../../public/bg-praia.png";
import Title from "../../components/title";
import Inovacao from "../../components/inovacao";
import DroneTecnologia from "../../public/drone-tecnologia.png";
import PredioPalmeira from "../../public/predio-palmeira.svg";
import Diamante from "../../public/diamante.svg";
import FechaduraEletronica from "../../public/fechadura-eletronica.svg";
import Chuva from "../../public/chuva.svg";
import PainelSolar from "../../public/painel-sol.svg";
import Infraestrutura from "../../public/infraestrutura.svg";
import CarroEletrico from "../../public/carro-eletrico.svg";
import IPTUVerde from "../../public/iptu-verde.svg";
import MedidorGeral from "../../public/medidor-geral.svg";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  subpages: Page[],
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
      <Title imageURL={bgPraia} content="Seu infinito pé na areia" />
      <MenuInformacoes currentPage={currentURL} subpages={subpages} />
      <div className="container mx-auto">
        <div className="justify-between mb-20">
          <div className="container flex flex-col inovation" data-aos="fade-right">
            <div dangerouslySetInnerHTML={{__html: page.content }} className="[&>p]:text-2xl [&>*]:mb-10 [&>h2]:text-4xl text-justify font-light"  />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ preview = false }) => {
  const page = await getPage("inovacao-e-tecnologia");
  const { menu, generalSettings, subpages } = await allSettings();
  const filteredSubpages = filterSubpagesByParent('informacoes-gerais', subpages);
  return {
    props: { generalSettings, menu, page, preview, subpages: filteredSubpages },

  };
};
