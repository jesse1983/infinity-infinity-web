import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import MenuInformacoes from "../../components/menu-informacoes-gerais";
import { usePathname } from "next/navigation";
import Image from "next/image";
import DroneTecnologia from '../../public/drone-tecnologia.png';

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
      <MenuInformacoes currentPage={currentURL} />
      <div className="container mx-auto mt-14 px-16 flex justify-between">
        <div className="container flex flex-col mr-10">
          <p className="text-[23px] text-justify font-medium">
            LOREM IPSUM DOLOT SIT AMET CONSEECCT AKADDKKS ALDAKSKA DJFJF
          </p>
          <p className="text-[21px] text-justify mt-2 mb-12 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultrices nulla non accumsan cursus. Aenean facilisis
            aliquam lobortis. Vivamus elementum orci nunc, sit amet sodales nisi
            fringilla iaculis. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Phasellus sed urna ut ipsum porta porttitor. Proin
            luctus condimentum est, ac gravida justo condimentum elementum. Nunc
            scelerisque dui risus, ut hendrerit quam malesuada nec. Suspendisse
            feugiat, mi in faucibus tristique, lorem purus tempor magna, sit
            amet hendrerit urna enim maximus nisi.
          </p>
        </div>
        <Image
          src={DroneTecnologia}
          width={365}
          height={365}
          alt="Drone carregando um pacote enquanto sobrevoa prédios"
          className="h-[365px]"
        />
      </div>
      <div className="container mx-auto mt-14 px-16 grid grid-cols-5 grid-rows-2 gap-x-36 gap-y-12">
        <div className="w-[100px]">
          <Image
            src="/predio-palmeira.svg"
            width={150}
            height={150}
            alt="Prédio próximo de uma palmeira"
            className="p-2 bg-white rounded-full ml-8"
          />
          <div className="text-[15px] w-[10rem] text-center">
            Pé na areia e vista mar permanente
          </div>
        </div>

        <div className="w-[100px]">
          <Image
            src="/diamante.svg"
            width={150}
            height={150}
            alt="Diamante"
            className="p-2 bg-white rounded-full ml-8"
          />
          <div className="text-[15px] w-[10rem] text-center">
            Conceitos de casas suspensas exclusivas
          </div>
        </div>

        <div className="w-[100px]">
          <Image
            src="/fechadura-eletronica.svg"
            width={150}
            height={150}
            alt="Fechadura eletrônica"
            className="p-2 bg-white rounded-full ml-8"
          />
          <div className="text-[15px] w-[10rem] text-center">
            Porta com fechadura eletrônica
          </div>
        </div>

        <div className="w-[100px]">
          <Image
            src="/chuva.svg"
            width={150}
            height={150}
            alt="Núvem com chuva"
            className="p-2 bg-white rounded-full ml-8"
          />
          <div className="text-[15px] w-[10rem] text-center">
            Reaproveitamento de água de chuva
          </div>
        </div>

        <div className="w-[100px]">
          <Image
            src="/painel-sol.svg"
            width={150}
            height={150}
            alt="Painél solar abaixo do Sol"
            className="p-2 bg-white rounded-full ml-8"
          />
          <div className="text-[15px] w-[10rem] text-center">
            Painéis fotovoltáicos para a geração de energia
          </div>
        </div>

        <div className="w-[100px]">
          <Image
            src="/infraestrutura.svg"
            width={150}
            height={150}
            alt="Infraestrutura de uma casa"
            className="p-2 bg-white rounded-full ml-8"
          />
          <div className="text-[15px] w-[10rem] text-center">
            Apartamento com infraestrutura para automação
          </div>
        </div>

        <div className="w-[100px]">
          <Image
            src="/carro-eletrico.svg"
            width={150}
            height={150}
            alt="Veículo elétrico com uma tomada"
            className="p-2 bg-white rounded-full ml-8"
          />
          <div className="text-[15px] w-[10rem] text-center">
            Vagas com infraestrutura para carregamento de carro elétrico
          </div>
        </div>

        <div className="w-[100px]">
          <Image
            src="/iptu-verde.svg"
            width={150}
            height={150}
            alt="Planeta Terra e IPTU Verde"
            className="p-2 bg-white rounded-full ml-8"
          />
          <div className="text-[15px] w-[10rem] text-center">
            Candidato ao IPTU Verde
          </div>
        </div>

        <div className="w-[100px]">
          <Image
            src="/medidor-geral.svg"
            width={150}
            height={150}
            alt="Medidor de energia, água e gás"
            className="p-2 bg-white rounded-full ml-8"
          />
          <div className="text-[15px] w-[10rem] text-center">
            Infraestrutura para medição individual de energia, água e gás
          </div>
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
