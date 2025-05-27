import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/home/ContactSection";

export const metadata = {
  title: "Kontakt",
};

export default function Kontakt() {
  return (
    <div className="w-full bg-background">
      <PageHeader title="Kontakt" />
      <div className="container py-16">
        <p className="mt-4 text-lg text-center mb-20 leading-8 text-gray-300">
          Serdecznie zapraszamy do kontaktu z naszym salonem detailingowym.{" "}
          <br />
          Jesteśmy do Państwa dyspozycji, aby odpowiedzieć na wszelkie pytania
          oraz umówić wizytę
        </p>

        <ContactSection />
      </div>
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.9006506877067!2d21.10511107702068!3d52.317805251179394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecf064dd29bf9%3A0xc93ef1fadcec3e2e!2sAutoElit%20Auto%20Detailing%20Pow%C5%82oki%20Ceramiczne!5e0!3m2!1spl!2spl!4v1748265063035!5m2!1spl!2spl"
        width="1500"
        height="400"
        loading="lazy"
      ></iframe>
    </div>
  );
}
