import Head from "next/head";
import Layout from "../../components/layout";
import Header from "../../components/header";
import { InfinityWorldComponent } from "../../components/infinity-world-component";
import { PROPS } from "../../props/infinity-world-props";
import { GetServerSideProps } from "next";
import { getPage, allSettings, filterSubpagesByParent, getImagesByText, getEnterprises } from "../../lib/api";

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  enterprises,
}: PROPS) {
  return (
    <Layout preview={preview} className="hide-scrollbar">
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <InfinityWorldComponent enterprises={enterprises} page={page} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("/infinity-world");
  const { menu, generalSettings } = await allSettings();
  const enterprises = await getEnterprises();
  return {
    props: {
      generalSettings,
      menu,
      page,
      preview,
      enterprises,
    },
  };
};