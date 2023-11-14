import Link from "next/link";

export default function MenuInformacoes({ currentPage }) {
  const items = [
    {
      title: "Inovação e Tecnologia",
      href: "/informacoes-gerais",
      basis: " sm:basis-[40%]",
    },
    {
      title: "Projetistas",
      href: "/informacoes-gerais/projetistas",
      basis: " sm:basis-[20%]",
    },
    {
      title: "O Bairro",
      href: "/informacoes-gerais/bairro",
      basis: " sm:basis-[20%]",
    },
    {
      title: "Descritivo",
      href: "/informacoes-gerais/descritivo",
      basis: " sm:basis-[20%]",
    },
  ];
  return (
    <div>
      <div className="container mx-auto flex-col flex sm:flex-row gap-4 mb-10">
        {items.map((item) => (
          <Link
            className={`text-center py-2 uppercase border-2 border-dusk hover:bg-dusk transition ease-in-out delay-70 ${
              item.basis
            } ${currentPage === item.href ? "bg-dusk" : ""}`}
            href={item.href}
            key={item.title}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
