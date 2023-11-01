import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { allSettings, getPage } from "../lib/api";
import { Settings, Page } from "../models";
import Header from "../components/header";
import Image from "next/image";
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
        <div
          className="text-center text-4xl py-7 uppercase w-auto mt-20 h-[100px]"
          style={{ backgroundImage: "url(./bg-mar.png)" }}
        >
          <h2>Mergulhe no seu mar</h2>
        </div>
      </div>
      <div className="mt-8 ml-20 grid grid-cols-2 gap-x-64">
        <div className="mt-24 ml-20">
          <p className="font-medium leading-loose text-justify">
            Estar onde se é
          </p>
          <p className="font-medium leading-loose text-justify">
            Ser o que se quer
          </p>
          <p className="font-medium leading-loose text-justify">
            Tocar o <span className="font-bold">infinito</span> e acalmar o seu
            mar
          </p>
          <p className="font-medium leading-loose text-justify">
            Sentir a areia fria ao amanhecer
          </p>
          <p className="font-medium leading-loose text-justify">
            deixar a branca espuma tocar o caminhar
          </p>
          <p className="font-medium leading-loose text-justify">
            O laranja que aquece e invade por inteiro
          </p>
          <p className="font-medium leading-loose text-justify">
            são pinceladas de quem vive o{" "}
            <span className="font-bold">Rio Vermelho</span>
          </p>
        </div>
        <Image
          src={CasalDobrado}
          alt="Foto dobrada de um casal se abraçando em uma praia"
          className="w-[350px] h-[350px]"
        />
        <Image
          src={CasalCortado}
          alt="Foto cortada de um casal observando o mar num prédio Infinity"
          className="w-[500px] h-[550px] pb-8"
        />
        <div className="mt-40 mr-60">
          <p className="font-medium leading-loose text-right">
            Se encontrar no mar
          </p>
          <p className="font-medium leading-loose text-right">
            que também é morar
          </p>
          <p className="font-medium leading-loose text-right">
            tocar o infinito e fluir
          </p>
          <p className="font-medium leading-loose text-right">
            Permita-se <span className="font-bold">mergulhar</span>
          </p>
          <p className="font-medium leading-loose text-right">
            transbordar limites
          </p>
          <p className="font-medium leading-loose text-right">
            O mar conecta, acalma e inspira
          </p>
          <p className="font-medium leading-loose text-right">
            ele é vista e guia.
          </p>
        </div>
      </div>
      <div>
        <Image
          src={InfinityLinha}
          alt="Vista em alto-mar"
          className="absolute z-50"
        />
      </div>
      <div>
        <video
          className="absolute z-10 w-auto min-w-full min-h-full max-h-none"
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
