"use client";
import Head from "next/head";
import Header from "../../../../components/header";
import Layout from "../../../../components/layout";
import { serverSideProps } from "../../../../props/getServerSideProps";
import { PROPS } from "../../../../props/infinity-world-props";
import { Decorated } from "../../../../components/decorated";

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  enterprises,
}: PROPS) {
  const enterprise = enterprises.find((e) => e.slug === 'infinity-sea')
  const decorated = enterprise.floors.find((f) => f.decorated.length > 0).decorated;
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} logo="SEA" />
          <Decorated
            decorated={decorated}
            onClose={() => undefined}
          />
    </Layout>
  );
}

const getServerSideProps = serverSideProps;
export { getServerSideProps };
