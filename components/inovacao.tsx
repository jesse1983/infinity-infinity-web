import Image from "next/image";

export default function Inovacao({ image, alt, content }) {
  return (
    <div className="w-auto flex flex-col items-center text-center">
      <div className="bg-white flex justify-center items-center rounded-full mb-4 p-2 w-36 h-36">
        <Image
          src={image}
          width={150}
          height={150}
          alt={alt}
          className="w-24"
        />
      </div>
      <div className="text-[15px] w-[10rem] text-center">{content}</div>
    </div>
  );
}
