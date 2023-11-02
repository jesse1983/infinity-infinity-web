export default function Inovacao({ imageURL, content }) {
  return (
    <div
      className="text-center text-4xl py-11 sm:py-20 uppercase w-auto h-[150px]"
      style={{ backgroundImage: `url(${imageURL.src})` }}
    >
      <h2>{content}</h2>
    </div>
  );
}
