"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("");

  const contactData = [
    {
      icon: faEnvelope,
      label: "Adres email",
      value: "biuro@autoelit.pl",
      href: "mailto:biuro@autoelit.pl",
    },
    {
      icon: faPhone,
      label: "Nr telefonu",
      value: "518 610 430",
      href: "tel:518 610 430",
    },
    {
      icon: faMapLocation,
      label: "Adres",
      value: "Romualda Traugutta 14, 05-270 Marki",
      href: null,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      phone: formData.get("phone"),
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();
      console.log(result);
      setStatus(
        result.success ? "Wiadomość została wysłana" : "Coś poszło nie tak"
      );
    } catch (err) {
      console.error("Error sending email:", err);
      setStatus("Błąd. Coś poszło nie tak ");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Dane kontaktowe
          </h3>
          <div className="space-y-6">
            {contactData.map((item, idx) => (
              <div className="flex items-center gap-4" key={idx}>
                <div className="text-[#e92932] flex items-center justify-center rounded-lg bg-[#2e2020] shrink-0 size-12">
                  <FontAwesomeIcon icon={item.icon} size="lg" />
                </div>
                <div>
                  <p className="text-white text-lg font-medium">{item.label}</p>
                  {item.href ? (
                    <a
                      className="text-gray-300 hover:text-[#e92932] transition-colors duration-300"
                      href={item.href}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-gray-300">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Media społecznościowe
          </h3>
          <div className="flex space-x-6">
            <a
              className="text-gray-400 hover:text-white transition-colors duration-300"
              href="https://www.instagram.com/autoelitdetailing/"
            >
              <div className="rounded-full bg-[#2e2020] p-3 hover:bg-[#382929]">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </div>
            </a>
            <a
              className="text-gray-400 hover:text-white transition-colors duration-300"
              href="https://www.facebook.com/AutoElitDetailing/?locale=pl_PL"
            >
              <div className="rounded-full bg-[#2e2020] p-3 hover:bg-[#382929]">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#221818] p-8 rounded-xl shadow-2xl">
        <h3 className="text-2xl font-semibold text-white mb-6">
          Wyślij wiadomość
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6" method="POST">
          <div className="md:flex md:gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium leading-6 text-gray-300">
                Imię i nazwisko
              </label>
              <div className="mt-2">
                <input
                  className="form-input block w-full rounded-lg border-0 bg-[#382929] p-3 text-white shadow-sm ring-1 ring-inset ring-[#4f3c3c] placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#e92932] sm:text-sm sm:leading-6 transition-all duration-300"
                  id="name"
                  name="name"
                  placeholder="n.p. Jan Kowalski"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:gap-4">
            <div className="md:w-1/2">
              <label className="block text-sm font-medium leading-6 text-gray-300">
                Numer telefonu
              </label>
              <div className="mt-2">
                <input
                  className="form-input block w-full rounded-lg border-0 bg-[#382929] p-3 text-white shadow-sm ring-1 ring-inset ring-[#4f3c3c] placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#e92932] sm:text-sm sm:leading-6 transition-all duration-300"
                  id="phone"
                  name="phone"
                  placeholder="n.p. 500 600 700"
                  type="tel"
                  required
                />
              </div>
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className=" mt-6 md:mt-0">
                <label className="block text-sm font-medium leading-6 text-gray-300">
                  Adres email
                </label>
                <div className="mt-2">
                  <input
                    className="form-input block w-full rounded-lg border-0 bg-[#382929] p-3 text-white shadow-sm ring-1 ring-inset ring-[#4f3c3c] placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#e92932] sm:text-sm sm:leading-6 transition-all duration-300"
                    id="email"
                    name="email"
                    placeholder="n.p. jan.kowalski@test.pl"
                    type="email"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-300">
              Wiadomość
            </label>
            <div className="mt-2">
              <textarea
                className="form-textarea block w-full rounded-lg border-0 bg-[#382929] p-3 text-white shadow-sm ring-1 ring-inset ring-[#4f3c3c] placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#e92932] sm:text-sm sm:leading-6 transition-all duration-300 resize-none"
                id="message"
                name="message"
                placeholder="Twoja widomość tutaj..."
                required
              ></textarea>
            </div>
          </div>
          <div>
            {status && (
              <div className="mb-4  text-white font-medium">{status}</div>
            )}
            <button
              className="flex w-full justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#c6232b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e92932] transition-all duration-300 transform hover:scale-105"
              type="submit"
            >
              Wyślij wiadomość
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
