export default function Testimonials({ t }: any) {
  const data = [
    {
      name: "Aline Uwase",
      role: "Event Owner",
      quote:
        "Dukorane Events made planning my wedding so much easier! Everything was in one place."
    },
    {
      name: "Jean UX Pilot Mugabo",
      role: "Service Provider",
      quote:
        "As a photographer, this platform connected me with more clients than ever before."
    },
    {
      name: "Grace Ishimwe",
      role: "Event Owner",
      quote:
        "Budget tracking and scheduling were extremely smooth and helpful!"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center">{t.testimonialsTitle}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-14">
        {data.map((item) => (
          <div key={item.name} className="p-6 shadow bg-gray-50 rounded-xl">
            <p className="italic text-gray-700">"{item.quote}"</p>
            <div className="mt-4 font-bold">{item.name}</div>
            <div className="text-gray-600 text-sm">{item.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
