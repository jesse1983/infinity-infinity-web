import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getEnterprises, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import { InfinityWorldComponent } from "../../components/infinity-world-component";
import { ENTERPRISE } from "../../types";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  enterprises: ENTERPRISE[],
};

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  enterprises,
}: indexType) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <InfinityWorldComponent enterprises={enterprises} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const page = await getPage("/");
  const enterprises = await getEnterprises();
  const { menu, generalSettings } = await allSettings();
  return {
    props: { generalSettings, menu, page, preview, enterprises },
    revalidate: 10,
  };
};
