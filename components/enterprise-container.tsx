import BackButton from "./voltar";

export default function EnterpriseContainer({
  children,
  title,
  onBack = () => undefined,
}) {
  return (
    <div className="grid grid-cols-12 w-full min-h-[calc(100vh_-_174px)] z-0">
      <div className="col-span-3 flex justify-start items-center">
        <div className="flex flex-col justify-between h-full pl-10 ">
          <div></div>
          <h1
            className="w-72 uppercase font-light text-5xl"
            data-aos="zoom-in"
          >
            {title}
          </h1>
          <div className="scale-75">
            <BackButton
              margin="m-0"
              onClick={onBack}
            />
          </div>
        </div>
      </div>
      <div className="col-span-7">
        {children}
      </div>
  </div>
  );
}
