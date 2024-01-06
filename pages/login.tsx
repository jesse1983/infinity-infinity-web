import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../components/layout";
import { allSettings, getPage } from "../lib/api";
import { Settings, Page } from "../models";
import LogoWhite from "../public/logo-infinity-white.svg";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
};

export default function Index({ generalSettings, page, preview }: indexType) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <div className="mb-24">
        <div className="w-[330px] h-[80px] block m-auto my-7">
          <LogoWhite className="m-auto" />
        </div>
      </div>
      {/* com tudo */}
      <div
        className="flex flex-col text-center items-center justify-center mx-auto container"
        // data-aos="zoom-in"
      >
        {/*todo o texto */}
        <div className="w-1/4 font-light">
          {/* texto login */}
          <div className="bg-dusk rounded-t-3xl py-5">
            <div className="text-2xl">
              <div className="text-center">Login</div>
            </div>
          </div>
          {/* inputs & lembre-me*/}
          <form className="text-left">
            <div className="flex flex-col text-left items-center leading-tight text-xl border-x-[1px] pt-5">
              <label className="mb-2 w-3/4">Usuário:</label>
              <input
                className="bg-night w-3/4 border-b-[1px] rounded-t-lg py-1 mb-8"
                type="text"
                name="user"
              />
              <label className="w-3/4 mb-2">Senha:</label>
              <input
                className="bg-night w-3/4 border-b-[1px] rounded-t-lg py-1 mb-2"
                type="text"
                name="password"
              />
              <div className="flex items-center w-3/4 mb-8">
                <input type="checkbox" />
                <label className="text-xs ml-[2px]">Lembre-me</label>
              </div>
            </div>
            {/* botão login */}
            <div className="flex justify-center uppercase border-white border border-t-0 w-full rounded-b-3xl">
              <button className="bg-dusk w-3/4 rounded-md py-1 mb-10 uppercase">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ preview = false }) => {
  const page = await getPage("/");
  const { menu, generalSettings } = await allSettings();
  return {
    props: { generalSettings, menu, page, preview },

  };
};
