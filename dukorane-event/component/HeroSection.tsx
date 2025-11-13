"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [lang, setLang] = useState<"en" | "rw">("en");

  const t = {
    en: {
      title: "Rwanda's #1 Event Planning Platform",
      subtitle: "Let's Work Together to Create Unforgettable Events",
      description:
        "Connect with verified service providers, manage bookings, and coordinate every detail of your wedding or event in one seamless platform.",
      plan: "Plan Your Event",
      provider: "Join as Provider",
      stats1: "Verified Providers",
      stats2: "Events Planned",
      stats3: "Client Rating",
    },
    rw: {
      title: "Urubuga Rwa Mbere mu Gutegura Ibirori mu Rwanda",
      subtitle: "Dukorane Dutegure Ibirori bidatakirwa",
      description:
        "Hura n’abatanga serivisi bemewe, utegure gahunda, ukurikirane buri kintu cyose cy'ubukwe cyangwa ibirori mu buryo bworoshye kandi buhuye.",
      plan: "Tegura Ibirori",
      provider: "Injira nk’Umutanga Serivisi",
      stats1: "Abatanga Serivisi Bemejwe",
      stats2: "Ibirori Byatunganijwe",
      stats3: "Amanota y’Abakiriya",
    },
  };

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          {/* Language Toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-2 rounded ${lang === "en" ? "bg-black text-white" : "bg-gray-200"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("rw")}
              className={`px-4 py-2 rounded ${lang === "rw" ? "bg-black text-white" : "bg-gray-200"}`}
            >
              RW
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            {t[lang].title}
          </h1>

          <p className="text-xl text-cyan-700 mt-4 font-semibold">
            {t[lang].subtitle}
          </p>

          <p className="text-gray-600 mt-4">
            {t[lang].description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-cyan-600 text-white rounded-lg shadow hover:bg-cyan-700">
              {t[lang].plan}
            </button>

            <button className="px-6 py-3 border border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50">
              {t[lang].provider}
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-3xl font-bold text-cyan-700">500+</h3>
              <p className="text-gray-600">{t[lang].stats1}</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-700">2,000+</h3>
              <p className="text-gray-600">{t[lang].stats2}</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-700">4.9/5</h3>
              <p className="text-gray-600">{t[lang].stats3}</p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative w-full h-96">
          <Image
            src="/wedding-hero.jpg"
            alt="Rwanda elegant wedding"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
