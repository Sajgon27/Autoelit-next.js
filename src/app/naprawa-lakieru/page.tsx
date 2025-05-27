import PageHeader from "@/components/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faShield,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";

export const metadata = {
  title: "Naprawa Lakieru SSR",
};

export default function NaprawaLakieru() {
  const services = [
    {
      title: "Estetyka",
      description: "Twój samochód będzie wyglądał jak nowy przez dłuższy czas.",
      icon: (
        <FontAwesomeIcon icon={faTrophy} size="2x" className="text-primary" />
      ),
    },
    {
      title: "Samonaprawa drobnych rys",
      description: "Oszczędność czasu i pieniędzy na tradycyjnych naprawach.",
      icon: (
        <FontAwesomeIcon
          icon={faMoneyBill}
          size="2x"
          className="text-primary"
        />
      ),
    },
    {
      title: "Długotrwała ochrona",
      description:
        "Powłoka SSR jest bardziej odporna na drobne uszkodzenia niż tradycyjny lakier.",
      icon: (
        <FontAwesomeIcon icon={faShield} size="2x" className="text-primary" />
      ),
    },
  ];

  return (
    <div className="bg-background ">
      <PageHeader title="Naprawa Lakieru SSR" />
      <div className="container py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex w-full md:w-1/2 flex-col pr-4">
            <div className=" mx-auto lg:mx-0">
              <div className="flex flex-col gap-6 text-left">
                <h1 className="text-4xl text-white sm:text-5xl md:text-6xl font-extrabold tracking-tighter">
                  Czym jest lakier <span className="text-primary">SSR?</span>
                </h1>
                <span className=" border-primary border-2 w-[100px]"></span>
                <p className="text-gray-300 text-lg font-normal leading-relaxed md:text-xl">
                  Lakier SSR (Self-Healing Scratch Resistant) to zaawansowana
                  technologicznie powłoka, która ma zdolność do samoczynnego
                  usuwania drobnych rys i zadrapań. <br /> <br />
                  Dzięki specjalnym polimerom zawartym w lakierze, powierzchnia
                  może się regenerować pod wpływem ciepła lub światła UV. To
                  oznacza, że drobne uszkodzenia mogą zniknąć bez konieczności
                  stosowania tradycyjnych metod naprawy.
                </p>
              </div>

              <p className="text-gray-400 font-semibold text-sm leading-relaxed mt-8">
                Naprawa lakieru SSR wymaga specjalistycznej wiedzy i narzędzi.
                Zalecamy skorzystanie z naszych profesjonalnych usług, aby
                uzyskać najlepsze efekty.
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 justify-center  relative">
            <Image
              className="w-full max-h-[700px] object-cover rounded-xl border-4 border-gray-800/50"
              src="/images/ssr.jpg"
              alt="SSR"
              width={700}
              height={700}
            />
          </div>
        </div>

        <div className="pb-12">
          <h2 className="text-3xl text-center mt-16 mb-12 text-white sm:text-4xl md:text-5xl font-extrabold tracking-tighter">
            Zalety lakieru SSR
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div className="h-full" key={idx}>
                <ServiceCard
                  title={service.title}
                  desc={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
