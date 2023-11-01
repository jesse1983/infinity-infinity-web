import Image from "next/image";
import PlayIcon from "../public/icone-play.svg";

export default function CardProjetista({ nome }) {
  return (
    <div className="container mx-auto px-16 flex flex-col">
      <p className="text-[22px] mt-12 mb-2 uppercase text-justify font-medium">
        Projeto Arquitetônico
      </p>
      <p className="text-[22px] mt-2 mb-2 text-justify font-light">{nome}</p>
      <p className="text-[22px] mt-2 mb-8 text-justify font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultrices nulla non accumsan cursus. Aenean facilisis aliquam lobortis.
        Vivamus elementum orci nunc, sit amet sodales nisi fringilla iaculis.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus
        sed urna ut ipsum porta porttitor. Proin luctus condimentum est, ac
        gravida justo condimentum elementum. Nunc scelerisque dui risus, ut
        hendrerit quam malesuada nec. Suspendisse feugiat, mi in faucibus
        tristique, lorem purus tempor magna, sit amet hendrerit urna enim
        maximus nisi.
      </p>
      <div className="lg:text-center font-bold text-[18px] py-2 lg:w-[24rem] mb-2 cursor-pointer uppercase bg-dusk flex justify-around px-16">
        <PlayIcon className="w-[16px]" />
        Vídeo Depoimento
      </div>
    </div>
  );
}
