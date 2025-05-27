import React from "react";
import ServiceCard from "../ServiceCard";
import Button from "../ui/Button";

const services = [
  {
    title: "Naprawa lakieru SSR",
    description:
      "Szybkie i precyzyjne usuwanie drobnych zarysowań oraz uszkodzeń lakieru bez konieczności malowania całego panelu.",
    icon: (
      <svg
        fill="currentColor"
        height="40px"
        viewBox="0 0 256 256"
        width="40px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152Z"></path>
      </svg>
    ),
  },
  {
    title: "Korekta lakieru",
    description:
      "Profesjonalne usuwanie rys i defektów z powierzchni lakieru, przywracające głęboki połysk i ochronę auta.",
    icon: (
      <svg
        fill="currentColor"
        height="40px"
        viewBox="0 0 256 256"
        width="40px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32ZM92,208H34.63C41.38,198.41,48,183.92,48,164a44,44,0,1,1,44,44Zm32.42-94.45q5.14-6.66,10.09-12.55A76.23,76.23,0,0,1,155,121.49q-5.9,4.94-12.55,10.09A60.54,60.54,0,0,0,124.42,113.55Zm42.7-2.68a92.57,92.57,0,0,0-22-22c31.78-34.53,55.75-45,69.9-47.91C212.17,55.12,201.65,79.09,167.12,110.87Z"></path>
      </svg>
    ),
  },
  {
    title: "Detailing wnętrza",
    description:
      "Kompleksowe czyszczenie, renowacja i konserwacja wnętrza samochodu – usunięcie zabrudzeń, odświeżenie tapicerki i ochrona wnętrza przed zużyciem.",
    icon: (
      <svg
        fill="currentColor"
        height="40px"
        viewBox="0 0 256 256"
        width="40px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path>
      </svg>
    ),
  },
  {
    title: "Folie PPF",
    description:
      "Przezroczyste folie ochronne zabezpieczające lakier Twojego samochodu przed zarysowaniami, odpryskami, oraz uszkodzeniami chemicznymi.",
    icon: (
      <svg
        fill="currentColor"
        height="40px"
        viewBox="0 0 256 256"
        width="40px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M237.66,66.34l-48-48a8,8,0,0,0-11.32,11.32L196.69,48,168,76.69,133.66,42.34a8,8,0,0,0-11.32,11.32L128.69,60l-84,84A15.86,15.86,0,0,0,40,155.31v49.38L18.34,226.34a8,8,0,0,0,11.32,11.32L51.31,216h49.38A15.86,15.86,0,0,0,112,211.31l84-84,6.34,6.35a8,8,0,0,0,11.32-11.32L179.31,88,208,59.31l18.34,18.35a8,8,0,0,0,11.32-11.32ZM100.69,200H56V155.31l18-18,20.34,20.35a8,8,0,0,0,11.32-11.32L85.31,126,98,113.31l20.34,20.35a8,8,0,0,0,11.32-11.32L109.31,102,140,71.31,184.69,116Z"></path>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-background border-t border-gray-900">
      <div className="container mx-auto">
        <h2 className="text-white text-4xl font-bold leading-tight tracking-[-0.015em] mb-6 text-center">
          Kompleksowe Usługi Detailingowe
        </h2>
        <p className="text-gray-300 text-lg font-normal leading-relaxed max-w-3xl mx-auto text-center mb-12">
          Zadbaj o swój samochód z najwyższą starannością. Oferujemy pełen
          zakres usług detailingowych, które przywrócą Twojemu autu fabryczny
          blask i zadbają o każdy, nawet najmniejszy detal.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div className="h-full" key={idx}>
              <ServiceCard
                containerClass="h-full"
                title={service.title}
                desc={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <Button className="mt-10 mx-auto" variant="primary" href="/uslugi">
        Zobacz więcej
      </Button>
    </section>
  );
}
