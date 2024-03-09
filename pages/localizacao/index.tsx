import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getImagesByText, getPage } from "../../lib/api";
import { Settings, Page, Image } from "../../models";
import Header from "../../components/header";
import MiniMenuLocation from "../../components/mini-menu-location";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  images360: Image[];
};

const points = [
  { title: "Gastronomia", icon: "/conv01.png" },
  { title: "Supermercados", icon: "/conv02.png" },
  { title: "Serviços / Comércio", icon: "/conv03.png" },
  { title: "Educação", icon: "/conv04.png" },
  { title: "Lazer", icon: "/conv05.png" },
  { title: "Saúde", icon: "/conv06.png" },
  { title: "Bem estar", icon: "/conv07.png" },
];

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  images360,
}: indexType) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <section className="relative border">
        <MiniMenuLocation />
        <div className="h-16"></div>
        <div className="grid grid-cols-[70%_30%] min-h-[calc(100vh_-_200px)]">
          <div className="relative">
            <img src="/conveniencias.png" className="w-full h-full" />
            <a
              href="/localizacao/vista-360"
              className="absolute bottom-0 right-0 border border-white rounded-full px-6 py-3 mr-10 mb-5"
            >
              VISTA 360º
            </a>
          </div>
          <div className="flex m-auto p-16">
            <ul data-aos="fade-left">
              {points.map((point) => (
                <li className="flex items-top">
                  <span
                    className="w-7 h-7 inline-block mr-2 bg-cover mb-5"
                    style={{ backgroundImage: `url(${point.icon})` }}
                  ></span>
                  <span className="pt-1">{point.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("/localizacao");
  const { menu, generalSettings } = await allSettings();
  const images360 = await getImagesByText("360");
  return {
    props: { generalSettings, menu, page, preview, images360 },
  };
};
