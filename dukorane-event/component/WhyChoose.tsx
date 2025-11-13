export default function WhyChoose({ t }: any) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">{t.whyChoose}</h2>
        <p className="text-gray-600 mt-4">{t.whyDescription}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-10 mt-12">

        <div className="p-6 shadow-md bg-white rounded-xl">
          <h3 className="font-semibold text-xl mb-2">{t.verified}</h3>
          <p className="text-gray-600">{t.verifiedText}</p>
        </div>

        <div className="p-6 shadow-md bg-white rounded-xl">
          <h3 className="font-semibold text-xl mb-2">{t.communication}</h3>
          <p className="text-gray-600">{t.communicationText}</p>
        </div>

        <div className="p-6 shadow-md bg-white rounded-xl">
          <h3 className="font-semibold text-xl mb-2">{t.scheduling}</h3>
          <p className="text-gray-600">{t.schedulingText}</p>
        </div>

        <div className="p-6 shadow-md bg-white rounded-xl">
          <h3 className="font-semibold text-xl mb-2">{t.budgeting}</h3>
          <p className="text-gray-600">{t.budgetingText}</p>
        </div>

      </div>
    </section>
  );
}
