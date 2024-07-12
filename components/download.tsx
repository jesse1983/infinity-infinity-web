import BackSVG from "../public/download.svg";

export default function Download({ onClick = () => undefined }) {
  return (
    <div className={"flex flex-col group bg-midnight-50"}>
      <div>Fazer o download</div>
      <div
        className="bg-white text-midnight-950 rounded-full h-20 w-20 flex items-center justify-center font-light cursor-pointer group-hover:bg-midnight-950 group-hover:text-white"
        onClick={onClick}
      >
        <BackSVG />
      </div>
    </div>
  );
}
