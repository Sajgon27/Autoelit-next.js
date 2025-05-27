"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faPhone } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const redCar = useRef(null);

  useEffect(() => {
    const carEl = redCar.current;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: carEl,
          start: "top 95%",
          end: "bottom -15%",

          scrub: true,
        },
      })
      .to(carEl, {
        x: "-100vw",
        duration: 1,
        ease: "power2.out",
      });
  }, []);

  return (
    <div className=" bg-background  ">
      <div className="relative flex py-20 size-full gap-10 lg:gap-20 min-h-screen flex-col md:flex-row container">
        <div className="flex w-full md:w-1/2 flex-col ">
          <div className=" mx-auto lg:mx-0">
            <div className="flex flex-col gap-6 text-left">
              <h1 className="text-4xl text-white sm:text-5xl md:text-6xl font-extrabold tracking-tighter">
                <span className="text-primary">Perfekcja</span> w Każdym Detalu
              </h1>
              <span className=" border-primary border-2 w-[100px]"></span>
              <p className="text-gray-300 text-lg font-normal leading-relaxed md:text-xl">
                Studio detailingowe AutoElit Marki zostało stworzone z pasji i
                miłości do motoryzacji i czterech kółek. Jako nastoletni chłopak
                wyjechałem do skandynawi do pracy przy samochodach 20 lat temu.
                Na rynku Polskim działamy już od 2017 roku.
              </p>
            </div>
            <div className="mt-10 bg-[#2A2A2A] p-6 rounded-lg shadow-xl">
              <span className="flex gap-4 items-center mb-3">
                <FontAwesomeIcon
                  icon={faTrophy}
                  width={24}
                  className="text-primary text-2xl"
                />
                <h3 className="text-primary text-2xl font-bold leading-tight tracking-tight ">
                  Pasja i Precyzja
                </h3>
              </span>

              <p className="text-gray-400 text-base font-normal leading-relaxed">
                Zebrane doświadczenie i poznane sposoby zabezpieczenia aut,
                pozwala mi być exspertem w dziedzinie szeroko rozumianego auto
                detailingowego. Co przekłada się na gwarancję wysokiej jakości,
                estetyki i tempa pracy. Będzie nam niezmiennie miło zająć się
                waszym autem. Pozdro
              </p>
            </div>
            <Button
              className="mt-8"
              variant="primary"
              href="/kontakt"
              icon={<FontAwesomeIcon icon={faPhone} />}
            >
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
        <div className="flex w-full md:w-1/2 justify-center relative">
          <Image
            className="w-full max-h-[550px] object-cover rounded-xl border-4 border-gray-800/50"
            src="/images/about.jpg"
            alt="About"
            width={700}
            height={550}
          />
          <div className="absolute -top-4 -right-20 sm:-top-12 sm:-right-40 -translate-x-1/2 flex gap-3 z-10">
            <Image
              src="/images/awards/2018.png"
              alt="Award 2018"
              width={96}
              height={96}
              className="w-12 h-12 sm:w-24 sm:h-24 object-contain rounded shadow-lg bg-white/80"
            />
            <Image
              src="/images/awards/2020.png"
              alt="Award 2020"
              width={96}
              height={96}
              className="w-12 h-12 sm:w-24 sm:h-24 object-contain rounded shadow-lg bg-white/80"
            />
            <Image
              src="/images/awards/2021.png"
              alt="Award 2021"
              width={96}
              height={96}
              className="w-12 h-12 sm:w-24 sm:h-24 object-contain rounded shadow-lg bg-white/80"
            />
          </div>
        </div>
        <Image
          ref={redCar}
          src={"/svg/red-car.svg"}
          alt="Red car"
          width={100}
          height={100}
          className="absolute -bottom-8 right-0"
        />
      </div>
    </div>
  );
}
