import Head from "next/head";
import Layout from "../../../components/layout";
import Header from "../../../components/header";
import { serverSideProps } from "../../../props/getServerSideProps";
import { PROPS } from "../../../props/infinity-world-props";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import AeroMap from "../../../components/aero-map";
import BoxDownload from "../../../components/box-download";
import { ENTERPRISE } from "../../../types";
import MiniMenu from "../../../components/min-menu";
import infinityWorldItems from "../../../components/infinity-world-subitems";

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  enterprises,
}: PROPS) {
  const searchParams = useSearchParams();
  const enterpriseSlug = searchParams.get("enterprise");

  const logo = enterpriseSlug
    ? enterpriseSlug?.replace("infinity-", "").toUpperCase()
    : undefined;

  const slug = searchParams.get("enterprise");
  const enterprise = enterprises.find((e) => e.slug === slug);

  const [selectedEnterprise, setSelectedEnterprise] =
    useState<ENTERPRISE>(enterprise);

  const router = useRouter();
  const onBack = () => {
    setSelectedEnterprise(undefined);
    router.push("/infinity-world/tabela-de-vendas");
  };

  const go = (enterprise: ENTERPRISE) => {
    router.replace(
      "/infinity-world/tabela-de-vendas?enterprise=" + enterprise.slug
    );
    setSelectedEnterprise(enterprise);
  };

  const subPageItems = infinityWorldItems({ enterprises });

  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} logo={logo} />
      <div className={"w-full h-[calc(100vh_-_174px)]  relative flex"}>
        <MiniMenu marginTop="mt-[18vh]" items={subPageItems.map((s) => ({
          icon: s.icon,
          text: s.text,
          path: '/infinity-world/'+s.path,
        }))} />
        {selectedEnterprise?.salesTable && (
          <BoxDownload
            fileurl={selectedEnterprise.salesTable}
            onClose={onBack}
          />
        )}
        {!selectedEnterprise && (
          <AeroMap
            enterprises={enterprises}
            onClick={go}
            title="Tabela de vendas"
          />
        )}
      </div>
    </Layout>
  );
}

const getServerSideProps = serverSideProps;
export { getServerSideProps };
