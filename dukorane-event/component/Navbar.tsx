import React from "react";
import Link from "next/link";

type Props = {
  t: any;
  setLang: (lang: string) => void;
};

export default function Navbar({ t, setLang }: Props) {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">Dukorane</div>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="#">{t?.nav?.home ?? "Home"}</Link>
          <Link href="#how">{t?.nav?.how ?? "How It Works"}</Link>
          <Link href="#services">{t?.nav?.services ?? "Services"}</Link>
          <Link href="#about">{t?.nav?.about ?? "About"}</Link>
          <Link href="#contact">{t?.nav?.contact ?? "Contact"}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang("rw")}
            className="px-3 py-1 border rounded text-sm"
            aria-label="Kinyarwanda"
          >
            RW
          </button>
          <button
            onClick={() => setLang("en")}
            className="px-3 py-1 border rounded text-sm"
            aria-label="English"
          >
            EN
          </button>

          <Link href="/signin">
            <a className="ml-2 px-4 py-1 bg-blue-600 text-white rounded text-sm">
              {t?.nav?.signIn ?? "Sign In"}
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
