import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertiesById } from "../services/propertyService";

const PropertyDetails = () => {

    const { id } = useParams();

    const [property, setProperty] = useState(null);

    useEffect(() => {
        fetchProperty();
    }, []);

    const fetchProperty = async () => {
        try {
            const data = await getPropertiesById(id);

            console.log(data);

            setProperty(data);

        } catch (error) {
            console.log(error);
        }
    }

    if (!property) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="min-h-screen bg-slate-50 py-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={
                            property.images?.[0]?.url ||
                            "https://via.placeholder.com/800x400"
                        }
                        alt={property.title}
                        className="w-full h-[400px] object-cover rounded-xl"
                    />

                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    {/* Left Side */}
                    <div className="md:col-span-2">
                        <h1 className="text-4xl font-bold text-slate-800">
                            {property.title}
                        </h1>
                        <p className="text-gray-600 mt-2">
                            📍 {property.location}
                        </p>
                        <div className="flex items-center gap-4 mt-5">
                            <p className="text-3xl font-bold text-indigo-600 ">
                                ₹ {property.price.toLocaleString()}
                            </p>
                            <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${property.availabilityStatus === "available"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {property.availabilityStatus}
                            </span>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-3">
                                Description
                            </h2>

                            <p className="text-slate-600 leading-7 mb-10">
                                {property.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div>

                    <div className="bg-white rounded-2xl shadow-md p-6">

                        <h3 className="text-xl font-semibold mb-4">
                            Owner Information
                        </h3>

                        <p className="font-medium">
                            👤 {property.owner?.name}
                        </p>

                        <p className="text-slate-500 mt-2">
                            📧 {property.owner?.email}
                        </p>

                        <button
                            className="w-full mt-6 bg-[#c9184a] text-white py-3 rounded-xl hover:bg-[#6e9887] transition"
                        >
                            ❤️ Save Property
                        </button>

                        <button
                            className="w-full mt-3 bg-[#6e9887] text-white py-3 rounded-xl hover:bg-[#c9184a] transition"
                        >
                            📅 Request Booking
                        </button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default PropertyDetails;