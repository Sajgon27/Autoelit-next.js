"use client";
import { useEffect, useRef } from "react";

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stats = [
    { value: "20 +", label: "LAT DOŚWIADCZENIA" },
    { value: "500 +", label: "OBSŁUŻONYCH AUT" },
    { value: "4.9", label: "ŚREDNIA OPINI" },
    { value: "100 +", label: "POZYTYWNYCH OPINI" },
  ];
  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement("script");
      script.src =
        "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      containerRef.current.appendChild(script);
    }
  }, []);
  return (
    <>
      <section className="py-24 relative w-full flex items-center justify-center overflow-hidden text-white">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/cta.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="container z-10">
          <div className="container mx-auto px-4">
            <h3 className="text-white text-4xl font-bold leading-tight tracking-[-0.015em] mb-6 text-center">
              Opinie naszych klientów
            </h3>
            <p className="text-center mb-12 text-gray-300">
              Zobacz, co mówią o nas nasi klienci
            </p>
          </div>
          <div ref={containerRef} className="elfsight-app-ca3e1842-5451-45fe-ac2d-1048181299af" data-elfsight-app-lazy></div>
         
        </div>
        <div className="absolute inset-0 bg-black/90" />
      </section>
      <section className="bg-background">
        <div className="container py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
