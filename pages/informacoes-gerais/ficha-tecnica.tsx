import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import {
  allSettings,
  filterSubpagesByParent,
  getImagesByText,
  getPage,
} from "../../lib/api";
import { Settings, Page, Image } from "../../models";
import Header from "../../components/header";
import MenuInformacoes from "../../components/menu-informacoes-gerais";
import { usePathname } from "next/navigation";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  subpages: Page[];
  page: Page;
  images: Image[];
  preview: boolean;
};

export default function Descritivo({
  generalSettings,
  menu,
  page,
  preview,
  subpages,
  images,
}: indexType) {
  const currentURL = usePathname();
  const doubleImages = [[]];
  let curr = 0;

  images.forEach((image) => {
    if (doubleImages[curr].length === 2) {
      curr += 1;
      doubleImages[curr] = [];
    }
    doubleImages[curr].push(image);
  });
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <MenuInformacoes currentPage={currentURL} subpages={subpages} />
      <section
        className="relative min-h-[calc(100vh_-_110px)] flex"
        style={{ backgroundImage: "url(/bg-ficha-tecnica.jpg)" }}
      >
        <div className="container descritivo w-9/12 lg:w-2/3 xl:w-1/2 h-full my-auto">
          <div className="my-10" data-aos="flip-right">
          <h1 className="pl-20 pb-3 border-b border-b-yellow-200 uppercase inline text-xl">Ficha Técnica</h1>
          </div>
            <div
              dangerouslySetInnerHTML={{ __html: page.content }}
              className="descritivo pl-20 [&>*]:mb-5 [&>ul>li]:list-disc [&>ul>li]:list-inside font-light"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
            />
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("/ficha-tecnica");
  const { menu, generalSettings, subpages } = await allSettings();
  const filteredSubpages = filterSubpagesByParent(
    "informacoes-gerais",
    subpages
  );
  const images = await getImagesByText("ficha-tecnica");
  return {
    props: {
      generalSettings,
      menu,
      page,
      preview,
      subpages: filteredSubpages,
      images,
    },
  };
};
