import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getPage } from "../../lib/api";
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
  page: Page;
  preview: boolean;
};

export default function Descritivo({
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
      <div className="container mx-auto md:w-[50rem] lg:w-[61rem] min-[1300px]:w-[77rem] 2xl:w-[89rem]">
        <div className="container mx-auto px-16 mt-14">
          <div className="">
            <p className="uppercase font-medium text-justify text-[20px]">
              Geral:
            </p>
          </div>
        </div>
        <ul className="list-disc text-justify container mx-auto mt-2 px-24 font-light text-[18px]">
          <li>Área do terreno de 1.043,00m²;</li>
          <li>Infinity Blue com 15 andares + Rooftop no 16º andar;</li>
          <li>Infinity Sea com 16 andares;</li>
          <li>
            01 apartamento por andar no Infinity Blue e 02 apartamentos por
            andar;
          </li>
          <li>3 pavimentos de garagem por torre;</li>
          <li>
            4 vagas de garagem por apartamento no Infinity Blue, com 6 vagas de
            garagem para o 15º pavimento e 4 vagas por apartamento no Infinity
            Sea;
          </li>
        </ul>
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
