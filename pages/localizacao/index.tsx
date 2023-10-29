import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import Panorama from "../../components/panorama";
import FloorPlain from "../../components/floor-plan";

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
      <section>
        <Panorama />
        <div className="text-center text-4xl py-7 uppercase w-auto" style={{ backgroundImage: 'url(./bg-aqua-title.jpg)' }}>
          <h2>Onde o movimento acontece</h2>
        </div>
        <div className=" bg-white ">
          <div className="container lg:grid lg:grid-cols-3 gap-7 m-auto text-midnight-900 p-7 text-2xl leading-relaxed">
            <div className="text-4xl uppercase text-center lg:text-left">
              <p className="mb-7">
                Exclusividade, segurança e qualidade de vida
              </p>
              <img
                src="https://picsum.photos/500/300"
                alt=""
                className="w-full"
              />
            </div>
            <div className="col-span-2 font-light">
              <p className="mb-7">
                Com a requalificação do Rio Vermelho, o seu novo bairro te
                proporcionará ainda mais qualidade de vida, segurança e maior
                valorização no seu empreendimento pé na areia.
              </p>
              <p className="mb-7">
                Com a requalificação do Rio Vermelho, o seu novo bairro te
                proporcionará ainda mais qualidade de vida, segurança e maior
                valorização no seu empreendimento pé na areia.
              </p>
              <p className="mb-7">
                Com a requalificação do Rio Vermelho, o seu novo bairro te
                proporcionará ainda mais qualidade de vida, segurança e maior
                valorização no seu empreendimento pé na areia.
              </p>
            </div>
          </div>
        </div>
        <FloorPlain
          src="./map-localization.png"
          paths={[
            {
              coords:
                "m 789.64053,690.2321 129.41851,-33.76135 65.64708,234.45383 -123.79163,58.14455 z",
              title: 'Infinity Blue',
            },
            {
              coords:
                "m 1149.7616,581.44552 127.5429,307.60343 223.2001,-80.65212 -121.916,-315.10596 z",
              title: 'Infinity Sea'
            },
          ]}
        />
      </section>
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
