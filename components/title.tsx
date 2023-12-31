export default function Inovacao({ imageURL, content }) {
  return (
    <div
      className="text-center text-4xl sm:pt-24 mb-14 uppercase w-auto sm:py-12 bg-cover"
      style={{ backgroundImage: `url(${imageURL.src})` }}
    >
      <h2 data-aos="zoom-out">{content}</h2>
    </div>
  );
}
