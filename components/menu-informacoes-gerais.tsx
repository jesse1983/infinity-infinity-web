import Image from "next/image";
import Link from "next/link";
import Praia from "../public/bg-praia.png";

export default function MenuInformacoes({ currentPage }) {
  const projestistas = "projetistas";
  const bairro = "bairro";
  const descritivo = "descritivo";
  return (
    <div>
      <div>
        <div className="absolute mt-24 ml-[29rem] text-[32px] uppercase">
          Seu Infinito Pé Na Areia
        </div>
        <Image
          src={Praia}
          alt="Areia da praia"
          className="w-full h-[200px] opacity-60"
        />
      </div>
      <div className="container mx-auto mt-14 px-16 flex justify-between">
        <Link
          className={
            currentPage === "/informacoes-gerais"
              ? "text-center text-[18px] py-2 w-[24rem] cursor-default uppercase bg-dusk border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
              : "text-center text-[18px] py-2 w-[24rem] uppercase border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
          }
          href={"/informacoes-gerais"}
        >
          Inovação e Tecnologia
        </Link>
        <Link
          className={
            currentPage.includes(projestistas)
              ? "text-center text-[18px] py-2 w-[14rem] cursor-default uppercase bg-dusk border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
              : "text-center text-[18px] py-2 w-[14rem] uppercase border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
          }
          href={"/informacoes-gerais/projetistas"}
        >
          Projetistas
        </Link>
        <Link
          className={
            currentPage.includes(bairro)
              ? "text-center text-[18px] py-2 w-[14rem] cursor-default uppercase bg-dusk border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
              : "text-center text-[18px] py-2 w-[14rem] uppercase border-solid border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70"
          }
          href={"/informacoes-gerais/bairro"}
        >
          O Bairro
        </Link>
        <Link
          className={
            currentPage.includes(descritivo)
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
