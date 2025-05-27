"use client";
import Button from "../ui/Button";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    gsap.to(videoEl, {
      scale: 1.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: videoEl,
        start: "top top",
        end: "bottom top",
        scrub: true,

        markers: false,
      },
    });
  }, []);

  return (
    <section className="relative h-[90vh] sm:h-[100vh] flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      <div className="relative z-20 px-4 sm:px-10 max-w-5xl text-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-[7rem]">
            AutoElit Detailing
          </h1>
          <p className="text-gray-300 text-lg font-normal leading-normal md:text-xl">
            Perfekcyjna estetyka, szybka realizacja, niezrównana jakość. Zadbaj
            o swój samochód z ekspertami, którym możesz zaufać.
          </p>
        </div>
        <Button variant="primary" href='/uslugi' className="mx-auto mt-5 py-6 px-10">
          Zobacz naszą ofertę
        </Button>
      </div>
    </section>
  );
}
