import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import MenuInformacoes from "../../components/menu-informacoes-gerais";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
  const currentURL = usePathname();
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <MenuInformacoes currentPage={currentURL} />
      <div className="container mx-auto mt-14 px-16 flex justify-between">
        <div className="container flex flex-col mr-10">
          <p className="text-[23px] text-justify font-medium">
            LOREM IPSUM DOLOT SIT AMET CONSEECCT AKADDKKS ALDAKSKA DJFJF
          </p>
          <p className="text-[21px] text-justify mt-2 mb-12 font-light">
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
        <Image
          src="/drone-tecnologia.png"
          width={365}
          height={365}
          alt="Drone carregando um pacote enquanto sobrevoa prédios"
          className="h-[365px]"
        />
      </div>
      {/* <div className="container mx-auto mt-14 px-16 flex justify-between">
        <Image
          src="/icones-1.svg"
          width={800}
          height={200}
          alt="Drone carregando um pacote enquanto sobrevoa prédios"
          className="h-[365px]"
        />
        <Image
          src="/icones-2.svg"
          width={450}
          height={400}
          alt="Drone carregando um pacote enquanto sobrevoa prédios"
          className="h-[365px]"
        />
        <Image
          src="/icones-3.svg"
          width={365}
          height={365}
          alt="Drone carregando um pacote enquanto sobrevoa prédios"
          className="h-[365px]"
        />
        <Image
          src="/icones-4.svg"
          width={365}
          height={365}
          alt="Drone carregando um pacote enquanto sobrevoa prédios"
          className="h-[365px]"
        />
      </div> */}
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