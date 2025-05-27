"use client";
import Link from "next/link";
import Button from "../ui/Button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Header() {
  const path = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Strona główna", href: "/" },
    { name: "Usługi", href: "/uslugi" },
    { name: "Realizacje", href: "/realizacje" },
    { name: "Naprawa Lakieru SSR", href: "/naprawa-lakieru" },
  ];

  return (
    <header className="flex items-center justify-between px-4 sm:px-10 py-5 bg-transparent top-0 z-50 w-full absolute">
      <div>
        <Link href="/">
          <Image
            className="w-28 sm:w-40"
            src="/logo.png"
            alt="Logo"
            width={160}
            height={64}
          />
        </Link>
      </div>
      {/* Desktop nav */}
      <nav className="hidden lg:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {navItems.map((item) => (
            <Link
              key={item.name}
              className={`text-white hover:text-primary transition-colors text-[1.1rem] font-medium leading-normal ${
                path === item.href ? "text-primary" : ""
              }`}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Button href="/kontakt" variant="primary">
          Kontakt
        </Button>
      </nav>
      {/* Mobile nav toggle */}
      <button
        className={`lg:hidden flex items-center justify-center text-white focus:outline-none ${
          mobileOpen ? "hidden" : "flex"
        }`}
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Open menu"
      >
        <FontAwesomeIcon icon={faBars} size="xl" />
      </button>
      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-start pt-24 lg:hidden">
          <button
            className="absolute top-6 right-4 sm:top-8 sm:right-10 text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faXmark} size="2xl" />
          </button>
          <nav className="flex flex-col gap-8 bg-background w-full px-4 py-8 items-center shadow-gray-800 shadow-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                className={`text-white hover:text-primary transition-colors text-xl font-medium leading-normal ${
                  path === item.href ? "text-primary" : ""
                }`}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              href="/kontakt"
              variant="primary"
              className="w-auto mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Kontakt
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
