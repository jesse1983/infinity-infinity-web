import Close from "./close";
import Download from "./download";

export default function BoxDownload({
  fileurl = "",
  onClose = () => undefined,
}) {
  return (
    <div
      className="m-auto w-11/12 h-[70vh] bg-[length:100%_100%] text-center relative"
      data-aos="zoom-out"
    >
      <iframe
        src={fileurl + "#toolbar=0&navpanes=0&scrollbar=0"}
        className="m-auto w-full h-full"
      />
      <div className="absolute z-50 cursor-pointer top-6 right-14">
        <Close onClick={onClose} />
      </div>
      <div className="absolute z-50 cursor-pointer bottom-4 right-14">
        <Download file={fileurl} />
      </div>
    </div>
  );
}
