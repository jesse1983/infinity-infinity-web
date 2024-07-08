import EnterpriseContainer from "../enterprise-container";
import ItemMapa from "../item-mapa";
import InfoMapa from "../info-mapa";
import sortBy from "sort-by";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { ENTERPRISE } from "../../types";
import { DEPOSIT } from "../../types/deposit";
import SeaVideo from "../sea-video";
import { useRouter } from "next/router";
import Link from "next/link";

export default function MapaDeDepositos({
  enterprises,
}: {
  enterprises: ENTERPRISE[];
}) {
  const [selectedDeposit, setSelectedDeposit] = useState<DEPOSIT>();
  const [selectedEnterprise, setSelectedEnterprise] = useState<ENTERPRISE>();

  const router = useRouter();

  const onBack = () => router.push('/infinity-world');

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
        <>
          <SeaVideo />
          <EnterpriseContainer title="Mapa de depósitos" onBack={onBack}>
            <div className="flex flex-col gap-y-24 text-center items-center">
              {enterprises.sort().map((enterprise) => (
                <div key={uuidv4()}>
                  <div
                    className="self-center mb-10 text-3xl uppercase font-light mx-auto"
                    data-aos="zoom-in"
                  >
                    {enterprise.title}
                  </div>
                  <div className="flex flex-row items-center justify-center gap-4">
                    {enterprise.deposits.map((deposit) => (
                      <ItemMapa
                        onClick={() => {
                          setDeposit(enterprise, deposit);
                        }}
                        identifier={deposit.identifier}
                        key={uuidv4()}
                        isFilled
                      />
                    ))}
                  </div>
                </div>
              ))}
              <div><Link href="/infinity-world/mapa-de-depositos/tabela-de-vendas" className="border border-white px-6 py-4 uppercase hover:text-midnight-950 hover:bg-white transition-all duration-300 ">Acesse a tabela de vendas</Link></div>

            </div>
          </EnterpriseContainer>
        </>
      )}
    </>
  );
}
