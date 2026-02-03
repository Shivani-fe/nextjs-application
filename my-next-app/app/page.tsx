import PropertyCard from "./components/PropertyCard";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const properties = [
    {
      title: "Cozy 1BHK",
      subtitle: "Near City Park",
      image: "/property1.svg",
      price: "₹12,000 / month",
    },
    {
      title: "Modern Studio",
      subtitle: "Downtown",
      image: "/property2.svg",
      price: "₹18,500 / month",
    },
    {
      title: "Spacious 2BHK",
      subtitle: "Lakeside View",
      image: "/property3.svg",
      price: "₹22,000 / month",
    },
  ];

  return (
    <div className="space-y-12">
      <section className="relative rounded-lg p-12 shadow-md overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500">
        <div className="relative z-10 flex flex-col gap-4 text-white">
          <h2 className="text-4xl font-extrabold">Sarthi Rentals</h2>
          <p className="text-lg text-white max-w-2xl leading-relaxed">
            Discover verified rental homes across neighborhoods with transparent
            pricing and clear photos. Sarthi Rentals helps you compare options,
            save favorites, and message property owners directly for a faster,
            safer rental experience.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href="#featured" className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow hover:bg-gray-100 transition">Explore listings</a>
            <a href="#how-it-works" className="inline-block rounded-full border-2 border-white px-4 py-2 text-sm text-white font-medium hover:bg-white/10 transition">How it works</a>
          </div>

          <div className="mt-6 grid max-w-2xl grid-cols-1 gap-2 text-sm text-white sm:grid-cols-2">
            <div>✓ Verified listings with professional photos</div>
            <div>✓ Flexible options: studios, 1BHK, 2BHK and more</div>
            <div>✓ Transparent pricing and neighborhood insights</div>
            <div>✓ Local support to simplify your move</div>
          </div>
        </div>
      </section>

      <section id="featured">
        <h3 className="mb-4 text-2xl font-semibold">Featured Properties</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <PropertyCard key={p.title} title={p.title} subtitle={p.subtitle} image={p.image} price={p.price} />
          ))}
        </div>
      </section>

      <section id="how-it-works" className="rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-sm text-white">
        <h3 className="mb-6 text-3xl font-bold">How Sarthi Rentals Works</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
            <div className="mb-2 text-3xl font-bold text-cyan-400">1</div>
            <h4 className="mb-2 font-semibold">Browse Listings</h4>
            <p className="text-sm text-gray-300">Explore verified rental properties with photos, prices, and neighborhood details.</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
            <div className="mb-2 text-3xl font-bold text-cyan-400">2</div>
            <h4 className="mb-2 font-semibold">Save Favorites</h4>
            <p className="text-sm text-gray-300">Bookmark properties you like and compare them side-by-side.</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
            <div className="mb-2 text-3xl font-bold text-cyan-400">3</div>
            <h4 className="mb-2 font-semibold">Message Owners</h4>
            <p className="text-sm text-gray-300">Contact landlords directly to ask questions and schedule viewings.</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
            <div className="mb-2 text-3xl font-bold text-cyan-400">4</div>
            <h4 className="mb-2 font-semibold">Find Your Home</h4>
            <p className="text-sm text-gray-300">Complete your rental agreement and move into your perfect home.</p>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-2xl font-semibold">Contact Us</h3>
        <p className="mb-4 text-gray-600">Have a question or want to list a property? Send us a message.</p>
        <ContactForm />
      </section>
    </div>
  );
}
