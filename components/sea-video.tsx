export default function SeaVideo() {
  return (
    <div className="absolute opacity-25 max-h-[calc(100vh_-_174px)] overflow-hidden">
      <video className="w-screen" autoPlay muted loop controls={false}>
        <source src="/sea.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
