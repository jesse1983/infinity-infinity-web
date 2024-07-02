export default function SeaVideo({ number = 0 }) {
  const videos = ['sea.mp4', 'sea2.mp4']
  return (
    <div className="absolute opacity-25 max-h-[calc(100vh_-_174px)] overflow-hidden">
      <video className="w-screen" autoPlay muted loop controls={false}>
        <source src={'/' + videos[number]} type="video/mp4" />
      </video>
    </div>
  );
}
