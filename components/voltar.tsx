import BackSVG from "../public/voltar.svg";

export default function BackButton({ onClick = () => undefined, margin = 'mx-14' }) {
  return (
    <div className={'flex flex-col scale-75 -translate-x-5 ' + margin}>
      <div
        className="bg-white rounded-full h-24 w-24 flex items-center justify-center font-light transition-all hover:-translate-x-2 hover:bg-slate-200 ease-in-out cursor-pointer"
        onClick={onClick}
      >
        <BackSVG />
      </div>
    </div>
  );
}
