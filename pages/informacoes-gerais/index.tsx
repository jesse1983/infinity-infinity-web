import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getPage } from "../../lib/api";
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
};

export default function Index({
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
      <Title imageURL={bgPraia} content="Seu infinito pé na areia" />
      <MenuInformacoes currentPage={currentURL} />
      <div className="container mx-auto">
        <div className="lg:flex lg:flex-row justify-between mb-20">
          <Image
            src={DroneTecnologia}
            alt="Drone carregando um pacote enquanto sobrevoa prédios"
            className="block lg:hidden mx-auto mb-5"
          />
          <div className="container flex flex-col mr-10" data-aos="fade-right">
            <p className="text-3xl text-justify font-medium mb-6">
              LOREM IPSUM DOLOT SIT AMET CONSEECCT AKADDKKS ALDAKSKA DJFJF
            </p>
            <p className="text-2xl text-justify font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ultrices nulla non accumsan cursus. Aenean facilisis
              aliquam lobortis. Vivamus elementum orci nunc, sit amet sodales
              nisi fringilla iaculis. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Phasellus sed urna ut ipsum porta porttitor.
              Proin luctus condimentum est, ac gravida justo condimentum
              elementum. Nunc scelerisque dui risus, ut hendrerit quam malesuada
              nec. Suspendisse feugiat, mi in faucibus tristique, lorem purus
              tempor magna, sit amet hendrerit urna enim maximus nisi.
            </p>
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

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const page = await getPage("/");
  const { menu, generalSettings } = await allSettings();
  return {
    props: { generalSettings, menu, page, preview },
    revalidate: 10,
  };
};
