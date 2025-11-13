export default function Categories({ t }: any) {
  const cats = [
    "Photography",
    "Catering",
    "Entertainment",
    "Decoration",
    "Venues",
    "Transport"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">{t.categoriesTitle}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto mt-12">
        {cats.map((item) => (
          <div
            key={item}
            className="p-4 bg-white shadow rounded-lg text-center font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
