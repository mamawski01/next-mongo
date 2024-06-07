import PropertyCard from "../_components/PropertyCard";

async function fetchProperties() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/property`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default async function Page() {
  const properties = await fetchProperties();
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.length === 0 && <div>No properties found.</div>}
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property}></PropertyCard>
          ))}
        </div>
      </div>
    </section>
  );
}
