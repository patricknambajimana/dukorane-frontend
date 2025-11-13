export default function StatsSection({ t }: any) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10">
        
        <div>
          <h2 className="text-4xl font-bold text-cyan-600">500+</h2>
          <p className="text-gray-600">{t.verifiedProviders}</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-cyan-600">2,000+</h2>
          <p className="text-gray-600">{t.eventsPlanned}</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-cyan-600">4.9/5</h2>
          <p className="text-gray-600">{t.clientRating}</p>
        </div>

      </div>
    </section>
  );
}
