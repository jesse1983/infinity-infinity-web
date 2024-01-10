"use client";
import Enterprise from "../../../components/enterprise";
import { serverSideProps } from "../../../props/getServerSideProps";
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

const getServerSideProps = serverSideProps;
export { getServerSideProps };
