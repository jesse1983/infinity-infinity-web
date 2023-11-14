import { GetStaticProps } from "next/types";
import { allSettings, getEnterprises, getPage } from "../lib/api";

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const page = await getPage("/");
  const enterprises = await getEnterprises();
  const { menu, generalSettings } = await allSettings();
  return {
    props: { generalSettings, menu, page, preview, enterprises },
    revalidate: 10,
  };
};
