import Link from "next/link";

export default function MenuInformacoes({ currentPage }) {
  return (
    <div>
      <div className="container mx-auto mt-14 flex justify-around 2xl:px-[7rem] items-center sm:flex-wrap gap-y-6 flex-col lg:flex-row px-20">
        <Link
          className={
            currentPage === "/informacoes-gerais"
              ? "text-center min-[320px]:w-[14rem] sm:text-[16px] lg:text-[18px] py-2 sm:w-[14rem] lg:w-[24rem] cursor-default uppercase bg-dusk border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
              : "text-center min-[320px]:w-[14rem] sm:text-[16px] lg:text-[18px] py-2 sm:w-[14rem] lg:w-[24rem] uppercase border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
          }
          href={"/informacoes-gerais"}
        >
          Inovação e Tecnologia
        </Link>
        <Link
          className={
            currentPage.includes("projetistas")
              ? "text-center text-[18px] py-2 w-[14rem] 2xl:w-[18rem] cursor-default uppercase bg-dusk border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
              : "text-center text-[18px] py-2 w-[14rem] 2xl:w-[18rem] uppercase border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
          }
          href={"/informacoes-gerais/projetistas"}
        >
          Projetistas
        </Link>
        <Link
          className={
            currentPage.includes("bairro")
              ? "text-center text-[18px] py-2 w-[14rem] 2xl:w-[18rem] cursor-default uppercase bg-dusk border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
              : "text-center text-[18px] py-2 w-[14rem] 2xl:w-[18rem] uppercase border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
          }
          href={"/informacoes-gerais/bairro"}
        >
          O Bairro
        </Link>
        <Link
          className={
            currentPage.includes("descritivo")
              ? "text-center text-[18px] py-2 w-[14rem] 2xl:w-[18rem] cursor-default uppercase bg-dusk border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
              : "text-center text-[18px] py-2 w-[14rem] 2xl:w-[18rem] uppercase border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
          }
          href={"/informacoes-gerais/descritivo"}
        >
          Descritivo
        </Link>
      </div>
    </div>
  );
}
