import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import Layout from "../../components/layout";
import { allSettings, filterSubpagesByParent, getPage } from "../../lib/api";
import { Settings, Page } from "../../models";
import Header from "../../components/header";
import MenuInformacoes from "../../components/menu-informacoes-gerais";
import { usePathname } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import Chevron from "../../public/voltar.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";

type indexType = {
  generalSettings: Settings;
  menu: Page[];
  page: Page;
  preview: boolean;
  subpages: Page[];
  designers: Page[];
  groupedDesigners: Page[][];
};

function divideArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function Projetistas({
  generalSettings,
  menu,
  page,
  preview,
  subpages,
  designers,
  groupedDesigners,
}: indexType) {
  const currentURL = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams()
  const pageNumber = searchParams.get('page') ? Number.parseInt(searchParams.get('page')) : 0;

  const [selectedItem, setSelectedItem] = useState(pageNumber);
  const onChangeNav = (e) => {
    router.push('?page=' + e);
    setSelectedItem(e);
  }

  const nav = (slug) => router.push("projetistas/" + slug);
  return (
    <Layout preview={preview}>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={page.title}></meta>
      </Head>
      <Header menu={menu} />
      <MenuInformacoes currentPage={currentURL} subpages={subpages} />
      <section
        className="min-h-[calc(100vh_-_174px)] bg-cover"
        style={{ backgroundImage: "url(/bg-projetistas.jpg)" }}
      >
        <div className="container mx-auto flex min-h-[calc(100vh_-_174px)]">
          <div className="grid grid-cols-12 m-auto gap-5 mr-[70px]">
            <div className="col-span-3 flex pt-6 text-5xl uppercase" data-aos="slide-right">
              <span className="pl-24">Permita-se fluir </span></div>
            <div className="col-span-9">
              <Carousel
                showArrows
                // infiniteLoop
                // centerMode
                // centerSlidePercentage={80}
                // dynamicHeight
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                selectedItem={selectedItem}
                onChange={onChangeNav}
                renderArrowPrev={(clickHandler, hasPrev) =>
                  hasPrev && (
                    <div className="absolute z-50 h-full flex p-4">
                      <div
                        className="m-auto rounded-full w-12 h-12 cursor-pointer flex items-center justify-center bg-white"
                        onClick={clickHandler}
                      >
                        <Chevron className="scale-50" />
                      </div>
                    </div>
                  )
                }
                renderArrowNext={(clickHandler, hasNext) =>
                  hasNext && (
                    <div className="absolute z-50 right-0 top-0 float-right h-full flex p-4">
                      <div
                        className="m-auto rounded-full w-12 h-12 cursor-pointer flex items-center justify-center bg-white rotate-180"
                        onClick={clickHandler}
                      >
                        <Chevron className="scale-50" />
                      </div>
                    </div>
                  )
                }
              >
                {groupedDesigners.map((group) => (
                  <div className="grid grid-cols-3 gap-10 mx-24" data-aos="fade">
                    {group.map((designer, i) => (
                      <div
                        className="text-center cursor-pointer hover:-translate-y-6 transition-all"
                        onClick={() => nav(designer.slug)}
                      >
                        <img
                          src={designer.featuredImage.mediaItemUrl}
                          className="mb-6 pt-10"
                          data-aos="fade-up"
                          data-aos-delay={(i + 1) * 100 }
                        />
                        <p className="font-bold">{designer.title}</p>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: designer.featuredImage.description,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getPage("projetistas");
  const { menu, generalSettings, subpages } = await allSettings();
  const filteredSubpages = filterSubpagesByParent(
    "informacoes-gerais",
    subpages
  );
  const designers = filterSubpagesByParent("projetistas", subpages).filter(
    (p) => p.featuredImage
  );
  const groupedDesigners: Page[][] = divideArray(designers, 3);

  return {
    props: {
      generalSettings,
      menu,
      page,
      preview,
      subpages: filteredSubpages,
      designers,
      groupedDesigners,
    },
  };
};
