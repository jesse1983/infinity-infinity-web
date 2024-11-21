import Head from "next/head";
import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { allSettings, getImagesByText, getPage } from "../../lib/api";
import { Settings, Page, Image } from "../../models";
import Header from "../../components/header";
import MiniMenuLocation from "../../components/mini-menu-location";
import { useState } from "react";
import { slugify } from '../../helpers/slugify'
import Conv01 from '../../public/conv01.svg';
import Conv02 from '../../public/conv02.svg';
import Conv03 from '../../public/conv03.svg';
// import Conv04 from '../../public/conv04.svg';
import Conv05 from '../../public/conv05.svg';
import Conv06 from '../../public/conv06.svg';
import Conv07 from '../../public/conv07.svg';
import PoiSVG from '../../public/poi.svg';

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  images360: Image[];
};

const points = [
  { title: "Gastronomia", icon: <Conv01 className="scale-[0.7]" /> },
  { title: "Supermercado ", icon: <Conv02 className="scale-[0.6]" /> },
  { title: "Serviços / Comércio", icon: <Conv03 className="scale-[0.65]" /> },
  // { title: "Educação", icon: <Conv04 className="scale-[0.7]" /> },
  { title: "Lazer", icon: <Conv05 className="scale-[0.7]" /> },
  { title: "Saúde", icon: <Conv06 className="scale-[0.8]" /> },
  { title: "Bem-estar", icon: <Conv07  className="scale-[0.7]" /> },
].map((e) => ({ ...e, image: `url(/map-convivencia-${slugify(e.title)}.png)` }));

export default function Index({
  generalSettings,
  menu,
  page,
  preview,
  images360,
}: indexType) {
  const [active, setActive] = useState(0);
  const getIconClass = (index) => {
    return index === (active - 1) ? 'bg-blue-500 border-none' : '';
  }

  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <section className="relative">
        <MiniMenuLocation />
        <div className="grid grid-cols-[70%_30%] min-h-[calc(100vh_-_170px)]" data-aos="fade">
          <div className="relative bg-[length:100%_auto] bg-no-repeat flex items-end bg-" style={{ backgroundImage: 'url(/mapa-convivencia-inativo.png)' }}>
            {points.map((point, i) => (
              <div className={`absolute z-10 w-full h-full transition-opacity duration-300 bg-[length:100%_auto] bg-no-repeat ${ active === i+1 ? 'opacity-100' : 'opacity-0' }`} style={{ backgroundImage: point.image }}></div>
            ))}
            {/* <img src="/conveniencias.png" className="w-[100%] max-h-[calc(100vh_-_180px)]" /> */}
            <div
              className="flex rid-flow-row items-center gap-4 uppercase px-6 py-3 mr-10 mb-5 text-2x z-50"
            >
              <PoiSVG /> Rio Vermelho
            </div>
          </div>
          <div className="flex m-auto pr-32">
            <ul data-aos="fade-left">
              {points.map((point, i) => (
                <li className="flex items-top cursor-pointer" onClick={() => active != (i + 1) ? setActive(i + 1) : setActive(0)}>
                  <span
                    className={`w-10 h-10 mr-2 mb-5 border rounded-full transition-all duration-300 text-center flex justify-center items-center ` + getIconClass(i)}
                  >{point.icon}</span>
                  <span className="pt-2">{point.title}</span>
                </li>
              ))}
              {active > 0 &&  <li className="mt-4">
                <a href="#" className="px-4 py-2 border border-white" onClick={(ev) => { ev.preventDefault(); setActive(0); }}> Ver todos </a>
              </li>}
            </ul>

          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("/localizacao");
  const { menu, generalSettings } = await allSettings();
  const images360 = await getImagesByText("360");
  return {
    props: { generalSettings, menu, page, preview, images360 },
  };
};
