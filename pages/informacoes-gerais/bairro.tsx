import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import MenuInformacoes from "../../components/menu-informacoes-gerais";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ImageNeighbor from "../../public/predios-praia.png";
import bgPraia from "../../public/bg-praia.png";
import Title from "../../components/title";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
};

export default function Bairro({
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
      <div className="container mx-auto">
        <Image
          src={ImageNeighbor}
          alt="Vista dos prédios Infinity na beira da praia"
          className="w-full mb-10"
        />
        <div className="">
          <p className="text-[24px] text-justify font-medium">
            LOREM IPSUM DOLOT SIT AMET CONSEECCT AKADDKKS ALDAKSKA DJFJF
          </p>
          <p className="text-[22px] mt-2 mb-12 text-justify font-light">
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
