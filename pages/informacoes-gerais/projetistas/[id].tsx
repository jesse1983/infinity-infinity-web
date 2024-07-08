import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../../components/layout";
import { allSettings, filterSubpagesByParent, getPage } from "../../../lib/api";
import { Settings, Page } from "../../../models";
import Header from "../../../components/header";
import MenuInformacoes from "../../../components/menu-informacoes-gerais";
import { usePathname, useRouter } from "next/navigation";
import Chevron from "../../../public/voltar.svg";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  subpages: Page[];
  page: Page;
  preview: boolean;
};

export default function Index({
  generalSettings,
  menu,
  subpages,
  page,
  preview,
}: indexType) {
  const currentURL = usePathname();
  const router = useRouter();
  
  const clickHandler = () =>
    router.push("/informacoes-gerais/projetistas");
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <MenuInformacoes currentPage={currentURL} subpages={subpages} />
      <section
        className="min-h-[calc(100vh_-_174px)] bg-cover flex flex-col items-center justify-center"
        style={{ backgroundImage: "url(/bg-projetistas.jpg)" }}
      >
        <div className="container max-h-[calc(100vh_-_220px)]">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-1 flex justify-end items-end">
              <div
                className="rounded-full w-16 h-16 cursor-pointer flex items-center justify-center bg-white"
                onClick={clickHandler}
              >
                <Chevron className="scale-50" />
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: page.content }}
              data-aos="fade"
              className="flex flex-col justify-center col-span-6 [&>p]:text-md [&>*]:mb-10 [&>h2]:text-4xl font-light"
            />
            <div className="col-span-4" data-aos="zoom-in" >
              <img src={page.featuredImage.mediaItemUrl} className="h-full" />
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  preview = false,
}) => {
  const page = await getPage(params.id);
  const { menu, generalSettings, subpages } = await allSettings();
  const filteredSubpages = filterSubpagesByParent(
    "informacoes-gerais",
    subpages
  );
  return {
    props: { generalSettings, menu, page, preview, subpages: filteredSubpages },
  };
};
