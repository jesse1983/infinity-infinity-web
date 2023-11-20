import BackSVG from "../public/voltar.svg";

export default function BackButton({ onClick = () => undefined }) {
  return (
    <div className="flex flex-col mx-14">
      <div
        className="bg-white rounded-full h-24 w-24 flex items-center justify-center font-light transition-all hover:scale-75 hover:bg-slate-200 ease-in-out delay-110 cursor-pointer"
        onClick={onClick}
      >
        <BackSVG />
      </div>
    </div>
  );
}
