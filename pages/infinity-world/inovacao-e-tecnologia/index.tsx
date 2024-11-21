import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../../components/layout";
import { allSettings, filterSubpagesByParent, getEnterprises, getPage } from "../../../lib/api";
import { Settings, Page } from "../../../models";
import Header from "../../../components/header";
import { usePathname, useRouter } from "next/navigation";
import MiniMenuCais from "../../../components/infinity-world-component/mini-menu-cais";
import { ENTERPRISE } from "../../../types";
import BackButton from "../../../components/voltar";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  subpages: Page[];
  enterprises: ENTERPRISE[],
};

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  subpages,
  enterprises,
}: indexType) {
  const router = useRouter();

  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <MiniMenuCais enterprises={enterprises} />
      <div
        className="h-[calc(100vh_-_174px)] w-screen border border-white/0 bg-cover"
        style={{ backgroundImage: "url(/bg-info.png)" }}
      >
        <div
          className="container mx-auto max-h-[calc(100vh_-_174px)]"
          data-aos="fade"
        >
          <div className="container flex mt-[80px] relative">
            <div
              dangerouslySetInnerHTML={{ __html: page.content }}
              className="pl-5 w-36 absolute font-thin text-[3.2em] uppercase"
            />
            <img
              src={page.featuredImage?.mediaItemUrl}
              className="h-[calc(100vh_-_270px)] mx-auto"
            />
          </div>
          <div className="fixed bottom-5 left-5 z-50 scale-50">
            <BackButton margin="m-0" onClick={() => router.push("/infinity-world")} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("inovacao-e-tecnologia");
  const enterprises = await getEnterprises();
  const { menu, generalSettings, subpages } = await allSettings();
  const filteredSubpages = filterSubpagesByParent(
    "informacoes-gerais",
    subpages
  );
  return {
    props: { generalSettings, menu, page, preview, enterprises, subpages: filteredSubpages },
  };
};
