import Head from "next/head";
import Layout from "../../../components/layout";
import Header from "../../../components/header";
import { PROPS } from "../../../props/infinity-world-props";
import { GetServerSideProps } from "next";
import { allSettings, getImagesByText } from "../../../lib/api";
import { Image } from "../../../models";
import { useRouter } from "next/router";
import IconClose from "../../../public/icon-close-filled-dark.svg";
import BoxDownload from "../../../components/box-download";

type TableProps = PROPS & {
  files: Image[];
};

export default function Index({
  generalSettings,
  menu,
  preview,
  files,
}: TableProps) {
  const router = useRouter();

  const goBack = () => router.push('/infinity-world/mapa-de-depositos');

  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
      </Head>
      <Header menu={menu} />
      <div className="h-[calc(100vh_-_174px)] w-full flex items-center">
          <BoxDownload fileurl={files[0].mediaItemUrl} onClose={goBack} />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const { menu, generalSettings } = await allSettings();
  const unsorted = await getImagesByText("Depósitos");
  const files = unsorted.sort((a) => (a.title > a.title ? 1 : -1));
  return {
    props: {
      menu,
      generalSettings,
      files,
    },
  };
};
