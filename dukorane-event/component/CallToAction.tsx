export default function CallToAction({ t }: any) {
  return (
    <section className="py-20 bg-cyan-600 text-white text-center">
      <h2 className="text-4xl font-bold">{t.ctaTitle}</h2>
      <p className="mt-4 text-lg">{t.ctaSubtitle}</p>

      <div className="flex justify-center gap-6 mt-8">
        <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold">
          {t.ctaPrimary}
        </button>
        <button className="border px-8 py-3 rounded-lg font-semibold">
          {t.ctaSecondary}
        </button>
      </div>
    </section>
  );
}
