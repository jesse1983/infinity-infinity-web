import MiniMenuContainer from "../mini-menu-container";
import ItemMapa from "../item-mapa";
import InfoMapa from "../info-mapa";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { ENTERPRISE } from "../../types";
import { DEPOSIT } from "../../types/deposit";

export default function MapaDeDepositos({
  enterprises,
}: {
  enterprises: ENTERPRISE[];
}) {
  const [selectedDeposit, setSelectedDeposit] = useState<DEPOSIT>();
  const [selectedEnterprise, setSelectedEnterprise] = useState<ENTERPRISE>();

  const setDeposit = (enterprise, deposit) => {
    setSelectedEnterprise(enterprise);
    setSelectedDeposit(deposit);
  };
  return (
    <>
      {selectedDeposit && (
        <InfoMapa
          // parkingSpace={selectedDeposit.}
          identifier={selectedDeposit.identifier}
          apartment={selectedEnterprise.title}
          mainImage={selectedDeposit.image}
          bgImage={selectedEnterprise.bgImage}
          onBack={() => setSelectedDeposit(undefined)}
        />
      )}
      {!selectedDeposit && (
        <MiniMenuContainer title="Mapa de Depósitos">
          <div className="flex flex-col gap-y-24 text-center">
            {enterprises.map((enterprise) => (
              <div key={uuidv4()}>
                <div
                  className="self-center mb-10 text-3xl uppercase font-light mx-auto"
                  data-aos="zoom-in"
                >
                  {enterprise.title}
                </div>
                <div className="flex flex-row">
                  {enterprise.deposits.map((deposit) => (
                    <ItemMapa
                      onClick={() => {
                        setDeposit(enterprise, deposit);
                      }}
                      identifier={deposit.identifier}
                      key={uuidv4()}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </MiniMenuContainer>
      )}
    </>
  );
}
