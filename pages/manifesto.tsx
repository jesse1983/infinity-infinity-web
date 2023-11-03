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
      <div className="container mx-auto flex flex-col lg:flex-row justify-around items-center mb-10 lg:mb-1">
        <div className="font-medium text-2xl leading-loose text-center lg:text-justify mb-10 lg:mb-1">
          <p>Estar onde se é</p>
          <p>Ser o que se quer</p>
          <p>
            Tocar o <span className="font-bold">infinito</span> e acalmar o seu
            mar
          </p>
          <p>Sentir a areia fria ao amanhecer</p>
          <p>deixar a branca espuma tocar o caminhar</p>
          <p>O laranja que aquece e invade por inteiro</p>
          <p>
            são pinceladas de quem vive o{" "}
            <span className="font-bold">Rio Vermelho</span>
          </p>
        </div>
        <Image
          src={CasalDobrado}
          alt="Foto dobrada de um casal se abraçando em uma praia"
        />
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-around items-center mb-10">
        <Image
          src={CasalCortado}
          alt="Foto cortada de um casal observando a praia"
          className="mb-10 lg:mb-1"
        />
        <div className="font-medium text-2xl leading-loose text-center lg:text-right mr-20">
          <p>Se encontar no mar</p>
          <p>que também é morar</p>
          <p>que também é morar</p>
          <p>tocar o infinito e fluir</p>
          <p>
            Permita-se <span className="font-bold">mergulhar</span>
          </p>
          <p>transbordar limites</p>
          <p>O mar conecta, acalma e inspira</p>
          <p>ele é vista e guia.</p>
        </div>
      </div>
      {/* <div>
        <Image
          src={InfinityLinha}
          alt="Logo Infinity em Azul"
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
