import PlayIcon from "../public/icone-play.svg";

export default function InfoMapa({ nome }) {
  return (
    <div>
      <div className="text-2xl mb-2 uppercase text-justify font-medium">
        Projeto Arquitetônico
      </div>
      <div className="lg:text-center font-bold text-xl py-2 w-1/4 mb-10 cursor-pointer uppercase bg-dusk flex justify-around px-16">
        <PlayIcon className="w-1/12" />
        Vídeo Depoimento
      </div>
    </div>
  );
}
