export default function Inovacao({ image, alt, content }) {
  console.log(image);
  return (
    <div className="w-auto flex flex-col items-center text-center">
      <div className="bg-white flex justify-center items-center rounded-full mb-4 p-2 w-36 h-36">
        {image}
      </div>
      <div className="text-[15px] w-[10rem] text-center">{content}</div>
    </div>
  );
}
