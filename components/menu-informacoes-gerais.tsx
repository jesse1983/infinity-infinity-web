import Link from "next/link";

export default function MenuInformacoes({ currentPage, subpages = [] }) {
  const items = subpages.map((page, i) => ({
    title: page.title,
    href: '/informacoes-gerais' + (i === 1 ? '' : ('/' + page.slug)),
    basis: i === 0 ? 'sm:basis-[40%]' : 'sm:basis-[20%]',
  }));
  // const items = [
  //   {
  //     title: "Inovação e Tecnologia",
  //     href: "/informacoes-gerais",
  //     basis: " sm:basis-[40%]",
  //   },
  //   {
  //     title: "Projetistas",
  //     href: "/informacoes-gerais/projetistas",
  //     basis: " sm:basis-[20%]",
  //   },
  //   {
  //     title: "O Bairro",
  //     href: "/informacoes-gerais/bairro",
  //     basis: " sm:basis-[20%]",
  //   },
  //   {
  //     title: "Descritivo",
  //     href: "/informacoes-gerais/descritivo",
  //     basis: " sm:basis-[20%]",
  //   },
  // ];
  return (
    <div>
      <div
        className="container mx-auto flex-col flex sm:flex-row gap-4 mb-10 justify-center"
        data-aos="zoom-out"
      >
        {items.map((item) => (
          <Link
            className={`text-center py-2 px-10 uppercase border-2 border-dusk hover:bg-dusk transition ease-in-out delay-90 
            ${currentPage === item.href ? "bg-dusk" : ""}`}
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
