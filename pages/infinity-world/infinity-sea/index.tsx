"use client";
import Enterprise from "../../../components/enterprise";
import { getStaticProps } from "../../../props/getStaticProps";
import { PROPS } from "../../../props/infinity-world-props";

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  enterprises,
}: PROPS) {
  return (
    <Enterprise
      generalSettings={generalSettings}
      menu={menu}
      page={page}
      preview={preview}
      enterprises={enterprises}
      enterprise="infinity-sea"
    />
  );
}

export { getStaticProps };
