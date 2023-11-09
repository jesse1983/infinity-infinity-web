export default function ItemMapa({ identifier }) {
  return (
    <div className="w-auto flex flex-col mx-14">
      <div className="bg-dusk rounded-full p-12 text-4xl font-light">
        {identifier}
      </div>
    </div>
  );
}
