import Head from "next/head";
import Layout from "../../../components/layout";
import Header from "../../../components/header";
import { InfinityWorldComponent } from "../../../components/infinity-world-component";
import { serverSideProps } from "../../../props/getServerSideProps";
import { PROPS } from "../../../props/infinity-world-props";
import { useSearchParams } from "next/navigation";

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  enterprises,
}: PROPS) {
  const searchParams = useSearchParams()
  const enterprise = searchParams.get('enterprise');
  const logo = enterprise ? enterprise?.replace('infinity-', '').toUpperCase() : undefined;
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} logo={logo} />
      <InfinityWorldComponent enterprises={enterprises} />
    </Layout>
  );
}

const getServerSideProps = serverSideProps;
export { getServerSideProps };
