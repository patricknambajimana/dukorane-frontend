export default function HowItWorks({ t }: any) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">{t.howItWorksTitle}</h2>
        <p className="text-gray-600 mt-4">{t.howSteps}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-14">
        
        <div className="p-8 bg-gray-50 rounded-xl shadow">
          <span className="text-5xl font-bold text-cyan-600">1</span>
          <h3 className="text-xl font-semibold mt-3">{t.step1}</h3>
          <p className="text-gray-600 mt-2">{t.step1Text}</p>
        </div>

        <div className="p-8 bg-gray-50 rounded-xl shadow">
          <span className="text-5xl font-bold text-cyan-600">2</span>
          <h3 className="text-xl font-semibold mt-3">{t.step2}</h3>
          <p className="text-gray-600 mt-2">{t.step2Text}</p>
        </div>

        <div className="p-8 bg-gray-50 rounded-xl shadow">
          <span className="text-5xl font-bold text-cyan-600">3</span>
          <h3 className="text-xl font-semibold mt-3">{t.step3}</h3>
          <p className="text-gray-600 mt-2">{t.step3Text}</p>
        </div>

      </div>
    </section>
  );
}
