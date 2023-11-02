import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../components/layout";
import Header from "../components/header";
import Title from "../components/title";
import { allSettings, getPage } from "../lib/api";
import { Settings, Page } from "../models";
import Image from "next/image";
import bgMar from "../public/bg-mar.png";
import CasalDobrado from "../public/casal-dobrado.png";
import CasalCortado from "../public/casal-cortado.png";
import InfinityLinha from "../public/infinity-linha.png";

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
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <div>
        <Title imageURL={bgMar} content="Mergulhe no seu mar" />
      </div>
      <div className="mt-8 lg:ml-20 lg:grid lg:grid-cols-2 lg:gap-x-64">
        <div className="lg:mt-24 lg:ml-20">
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-justify">
            Estar onde se é
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-justify">
            Ser o que se quer
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-justify">
            Tocar o <span className="font-bold">infinito</span> e acalmar o seu
            mar
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-justify">
            Sentir a areia fria ao amanhecer
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-justify">
            deixar a branca espuma tocar o caminhar
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-justify">
            O laranja que aquece e invade por inteiro
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-justify">
            são pinceladas de quem vive o{" "}
            <span className="font-bold">Rio Vermelho</span>
          </p>
        </div>
        <Image
          src={CasalDobrado}
          alt="Foto dobrada de um casal se abraçando em uma praia"
          className="w-[240px] h-[240px] md:w-[350px] md:h-[350px] mx-auto mt-6 lg:mt-1 lg:mx-2"
        />
        <Image
          src={CasalCortado}
          alt="Foto cortada de um casal observando o mar num prédio Infinity"
          className="w-[500px] h-[370px] md:w-[500px] md:h-[550px] mx-auto mt-6 lg:mt-1 lg:mx-2 lg:pb-8"
        />
        <div className="lg:mt-40 lg:mr-60">
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-right">
            Se encontrar no mar
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-right">
            que também é morar
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-right">
            tocar o infinito e fluir
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-right">
            Permita-se <span className="font-bold">mergulhar</span>
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-right">
            transbordar limites
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-right">
            O mar conecta, acalma e inspira
          </p>
          <p className="font-medium text-[14px] md:text-[16px] leading-loose text-center lg:text-right">
            ele é vista e guia.
          </p>
        </div>
      </div>
      {/* <div>
        <Image
          src={InfinityLinha}
          alt="Vista em alto-mar"
          className="absolute z-50"
        />
      </div> */}
      <div>
        <video
          className=" w-auto min-w-full min-h-full max-h-none"
          autoPlay
          muted
          loop
        >
          <source src="./bg-alto-mar.mp4" type="video/mp4" />
        </video>
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
