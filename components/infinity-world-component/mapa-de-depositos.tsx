import MiniMenuContainer from "../mini-menu-container";
import ItemMapa from "../item-mapa";

export default function MapaDeDepositos() {
  return (
    <MiniMenuContainer title="Mapa de Depositos">
      <div className="flex flex-col items-center bg-midnight-900">
        <div className="flex self-center mb-10 text-3xl uppercase font-light mx-auto">
          Infinity Blue
        </div>
        <div className="flex flex-row mb-24">
          <ItemMapa identifier={"G1"} />
          <ItemMapa identifier={"G2"} />
        </div>
        <div className="mb-10 text-3xl uppercase font-light">Infinity Sea</div>
        <div className="flex flex-row">
          <ItemMapa identifier={"G1"} />
          <ItemMapa identifier={"G2"} />
        </div>
      </div>
    </MiniMenuContainer>
  );
}
