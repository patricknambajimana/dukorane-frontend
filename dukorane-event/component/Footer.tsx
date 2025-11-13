export default function Footer({ t }: any) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h1 className="text-2xl font-bold">Dukorane Events</h1>
          <p className="mt-4 text-gray-400">{t.footerTitle}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">{t.platform}</h3>
          <ul className="space-y-2 text-gray-400">
            <li>{t.howItWorks}</li>
            <li>For Event Owners</li>
            <li>For Providers</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">{t.support}</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Dispute Resolution</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">{t.company}</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-10">
        © 2024 Dukorane Events — Made in Rwanda 🇷🇼
      </p>
    </footer>
  );
}
