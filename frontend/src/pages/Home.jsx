import { useEffect, useState } from "react";
import { getProperties } from "../services/propertyService";
import PropertyCard from "../components/PropertyCard";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const data = await getProperties();
      setProperties(data.properties);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        StudentHive Properties
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            property={property}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;