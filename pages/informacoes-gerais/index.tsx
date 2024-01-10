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
        <div className="lg:flex lg:flex-row justify-between mb-20">
          {page.featuredImage && <img
            src={page.featuredImage.mediaItemUrl}
            alt="Drone carregando um pacote enquanto sobrevoa prédios"
            className="block lg:hidden mx-auto mb-5"
          />}
          <div className="container flex flex-col mr-10" data-aos="fade-right">
            <div dangerouslySetInnerHTML={{__html: page.content }} className="[&>p]:text-2xl [&>*]:mb-10 [&>h2]:text-4xl text-justify font-light"  />
          </div>
          <Image
            src={DroneTecnologia}
            alt="Drone carregando um pacote enquanto sobrevoa prédios"
            className="hidden lg:block"
            data-aos="fade-left"
          />
        </div>
        <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <Inovacao
            image={<PredioPalmeira className="w-24" />}
            content="Pé na areia e vista mar permanente"
          />

          <Inovacao
            image={<Diamante className="w-24" />}
            content="Conceitos de casas suspensas exclusivas"
          />

          <Inovacao
            image={<FechaduraEletronica className="w-24" />}
            content="Porta com fechadura eletrônica"
          />

          <Inovacao
            image={<Chuva className="w-24" />}
            content="Reaproveitamento de água de chuva"
          />

          <Inovacao
            image={<PainelSolar className="w-24" />}
            content="Paineis fotovoltáicos para a geração de energia"
          />

          <Inovacao
            image={<Infraestrutura className="w-24" />}
            content="Apartamento com infraestrutura para automação"
          />

          <Inovacao
            image={<CarroEletrico className="w-24" />}
            content="Vagas com infraestrutura para carregamento de carro elétrico"
          />

          <Inovacao
            image={<IPTUVerde className="w-24" />}
            content="Candidato ao IPTU Verde"
          />

          <Inovacao
            image={<MedidorGeral className="w-24" />}
            content="Infraestrutura para medição individual de energia, água e gás"
          />
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
