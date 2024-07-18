import Link from "next/link";

const cards = [
  {
    title: "Mobile phone",
    subtitle: "3G",
    description: "For everything to do with your mobile phone",
    link: "/link-to-page",
  },
  // Add more card objects here...
];

export default function CardList() {
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <Link href={card.link} key={card.title}>
          <div className=" mt-6 m-4 p-6 w-custom-card-list h-custom-card-list bg-white-200 border-[1px] border-custom-gray rounded-lg hover:bg-custom-gray cursor-pointer">
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-3 ...">
                <h1 className="text-xl text-custom-ee-blue">{card.subtitle}</h1>
              </div>
              <div className="col-span-2 ...">
                <h2 className="font-[700] text-[20px] leading-11 text-custom-ee-blue mb-2">
                  {card.title}
                </h2>
              </div>
              <div className="row-span-2 col-span-2 ...">
                <p className="font-[400] text-[16px] leading-11">
                  {card.description}
                </p>
              </div>
              <div className="row-span-3 ...">
                <h3 className="text-xl text-teal-700">"-"</h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
