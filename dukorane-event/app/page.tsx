"use client";

import { useState } from "react";
import { translations } from "./lib/translations";
import HeroSection from "@/component/HeroSection";
import StatsSection from "@/component/StatsSection";
import WhyChoose from "@/component/WhyChoose";
import HowItWorks from "@/component/HowItWorks";
import Categories from "@/component/Categories";
import Testimonials from "@/component/Testimonials";
import CallToAction from "@/component/CallToAction";
import Footer from "@/component/Footer";

const Navbar = ({ t, setLang }: any) => {
  return (
    <nav className="w-full flex items-center justify-between p-4">
      <div className="text-lg font-bold">{t?.appName ?? "Dukorane"}</div>
      <div>
        <button
          onClick={() => setLang && setLang((prev: string) => (prev === "en" ? "fr" : "en"))}
          className="px-3 py-1 border rounded"
        >
          {t?.switchLang ?? "Switch"}
        </button>
      </div>
    </nav>
  );
};

export default function Home() {
  const [lang, setLang] = useState<keyof typeof translations>("en");
  const t = translations[lang];
  return (
    <div className="">
      <main className="">
        <Navbar {...({ t, setLang } as any)} />

        <HeroSection {...({ t } as any)} />
        <StatsSection {...({ t } as any)} />
        <WhyChoose {...({ t } as any)} />
        <HowItWorks {...({ t } as any)} />
        <Categories {...({ t } as any)} />
        <Testimonials {...({ t } as any)} />
        <CallToAction {...({ t } as any)} />
        <Footer {...({ t } as any)} />
      </main>
    </div>
  );
}
