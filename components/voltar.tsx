import BackSVG from "../public/voltar.svg";

export default function Voltar({ onClick = () => undefined }) {
  return (
    <div className="flex flex-col mx-14">
      <div
        className="bg-white rounded-full h-24 w-24 flex items-center justify-center font-light cursor-pointer"
        onClick={onClick}
      >
        <BackSVG />
      </div>
    </div>
  );
}
