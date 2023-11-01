import Image from "next/image";

export default function Inovacao({ image, alt, content }) {
  return (
    <div className="w-[100px]">
      <Image
        src={image}
        width={150}
        height={150}
        alt={alt}
        className="p-2 bg-white rounded-full ml-8"
      />
      <div className="text-[15px] w-[10rem] text-center mt-4">{content}</div>
    </div>
  );
}
