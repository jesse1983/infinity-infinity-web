import Head from "next/head";
import Layout from "../../../components/layout";
import Header from "../../../components/header";
import { InfinityWorldComponent } from "../../../components/infinity-world-component";
import { serverSideProps } from "../../../props/getServerSideProps";
import { PROPS } from "../../../props/infinity-world-props";
import Script from "next/script";

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  enterprises,
}: PROPS) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
        <Script onLoad={() => { document.body.style = "overflow: hidden"; }} />
      </Head>
      <Header menu={menu} />
      <InfinityWorldComponent enterprises={enterprises} />
    </Layout>
  );
}

const getServerSideProps = serverSideProps;
export { getServerSideProps };

