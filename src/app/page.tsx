import About from "@/components/home/About";
import ContactSection from "@/components/home/ContactSection";

import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Reviews from "@/components/home/Reviews";
import Services from "@/components/home/Services";

export const metadata = {
  title: "Strona Główna - AutoElit Detailing",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Reviews />

      <Gallery />
      <div className="bg-background ">
        <div className="container py-16 mb-12">
          <ContactSection />
        </div>
      </div>
    </>
  );
}
