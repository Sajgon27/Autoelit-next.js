import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Footer() {
  const menuItems = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Realizacje", href: "/realizacje" },
    { label: "Naprawa Lakieru SSR", href: "/naprawa-lakieru" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  return (
    <footer className="bg-foreground border-t border-solid border-t-[#3F3F46]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 text-white">
            <Image src="/logo.png" width={100} height={100} alt="Logo" />
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                className="text-gray-400 hover:text-white text-sm font-medium leading-normal transition-colors"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex justify-center gap-6">
            <a
              className="text-gray-400 hover:text-primary transition-colors"
              href="https://www.facebook.com/AutoElitDetailing/?locale=pl_PL"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            </a>
            <a
              className="text-gray-400 hover:text-primary transition-colors"
              href="https://www.instagram.com/autoelitdetailing/"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-solid border-t-[#3F3F46] text-center">
          <p className="text-gray-500 text-sm">© 2025 Auto-Elit Detailing.</p>
          <p className="text-gray-500 text-xs mt-2">
            Projekt i wykonanie:{" "}
            <a
              className="text-gray-400 hover:text-[#e92933] transition-colors"
              href="https://smdweb.pl/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Szymon Mudrak
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
