import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../../../components/layout";
import { allSettings, getPage } from "../../../lib/api";
import { Settings, Page } from "../../../models";
import Header from "../../../components/header";
import { InfinityWorldComponent } from "../../../components/infinity-world-component";
import { getStaticProps } from "..";
import { PROPS } from "../props";

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  enterprises
}: PROPS) {
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

export { getStaticProps };
