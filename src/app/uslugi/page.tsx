import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Usługi",
};

export default function UslugiPage() {
  const services = [
    {
      title: "Korekta i polerowanie lakieru",
      description:
        "Profesjonalne usuwanie zarysowań i niedoskonałości lakieru, przywracanie głębi koloru oraz nadawanie połysku.",
    },
    {
      title: "Powłoki ceramiczne",
      description:
        "Nakładanie zaawansowanych powłok ceramicznych, które chronią lakier, zwiększają jego odporność na zarysowania i ułatwiają czyszczenie.",
    },
    {
      title: "Folie ochronne PPF",
      description:
        "Aplikacja przezroczystych folii ochronnych, które zabezpieczają lakier przed uszkodzeniami mechanicznymi i chemicznymi.",
    },
    {
      title: "Powłoki grafenowe",
      description:
        "Innowacyjne powłoki z nanocząsteczkami grafenu, zapewniające wyjątkową ochronę i trwałość lakieru oraz łatwiejsze utrzymanie w czystości.",
    },
    {
      title: "Detailing wnętrza",
      description:
        "Dogłębne czyszczenie, odświeżanie i konserwacja wnętrza pojazdu, obejmujące tapicerkę, plastiki i elementy metalowe.",
    },
    {
      title: "Woski ochronne",
      description:
        "Aplikacja wysokiej jakości wosków, które nadają lakierowi głęboki połysk oraz zabezpieczają go przed czynnikami atmosferycznymi.",
    },
    {
      title: "Impregnacja dachu Cabrio",
      description:
        "Specjalistyczna impregnacja dachów cabrio, chroniąca materiał przed warunkami atmosferycznymi, zabrudzeniami i blaknięciem.",
    },
    {
      title: "Przyciemnianie szyb",
      description:
        "Profesjonalne przyciemnianie szyb samochodowych, poprawiające komfort jazdy, redukujące nagrzewanie wnętrza i zapewniające prywatność.",
    },
    {
      title: "Impregnacja wnętrza",
      description:
        "Zabezpieczanie tapicerki i innych powierzchni wewnętrznych przed zabrudzeniami i wilgocią poprzez aplikację impregnatów.",
    },
    {
      title: "Przygotowanie auta do sprzedaży",
      description:
        "Kompleksowe przygotowanie pojazdu do sprzedaży, obejmujące mycie, polerowanie, detailing wnętrza oraz naprawy kosmetyczne, aby zwiększyć jego atrakcyjność i wartość.",
    },
    {
      title: "Naprawa lakieru SSR",
      description:
        "Specjalistyczne usługi naprawy lakierów odpornej na zarysowania (Scratch Resistant Clearcoat), przywracające jego idealny wygląd.",
    },
  ];

  return (
    <div className="bg-background ">
      <PageHeader title="Usługi" />
      <div className="container py-16">
        <p className="mt-4 text-lg text-center mb-20 leading-8 text-gray-300">
          Oferujemy szeroki wachlarz usług, które zapewnią Twojemu samochodowi
          perfekcyjny wygląd oraz długotrwałą ochronę.
          <br /> Nasze zaawansowane technologie i wysokiej jakości produkty
          sprawiają, że każda wizyta u nas to gwarancja satysfakcji.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              desc={service.description}
              containerClass="w-full sm:w-[30%]  flex-grow-1 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
