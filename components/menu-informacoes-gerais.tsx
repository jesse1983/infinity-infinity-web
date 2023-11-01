import Link from "next/link";

export default function MenuInformacoes({ currentPage }) {
  return (
    <div>
      <div
        className="text-center text-4xl py-14 uppercase w-auto mt-20 h-[150px]"
        style={{ backgroundImage: "url(./bg-praia.png)" }}
      >
        <h2>Seu infinito pé na areia</h2>
      </div>
      <div className="container mx-auto mt-14 flex justify-around items-center sm:flex-wrap gap-y-6 flex-col lg:flex-row px-20">
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
              ? "text-center text-[18px] py-2 w-[14rem] cursor-default uppercase bg-dusk border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
              : "text-center text-[18px] py-2 w-[14rem] uppercase border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
          }
          href={"/informacoes-gerais/projetistas"}
        >
          Projetistas
        </Link>
        <Link
          className={
            currentPage.includes("bairro")
              ? "text-center text-[18px] py-2 w-[14rem] cursor-default uppercase bg-dusk border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
              : "text-center text-[18px] py-2 w-[14rem] uppercase border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
          }
          href={"/informacoes-gerais/bairro"}
        >
          O Bairro
        </Link>
        <Link
          className={
            currentPage.includes("descritivo")
              ? "text-center text-[18px] py-2 w-[14rem] cursor-default uppercase bg-dusk border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
              : "text-center text-[18px] py-2 w-[14rem] uppercase border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
          }
          href={"/informacoes-gerais/descritivo"}
        >
          Descritivo
        </Link>
      </div>
    </div>
  );
}
