import { Link } from 'react-router-dom'


const PropertyCard = ({ property }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
                src={property.images?.[0]?.url || "https://via.placeholder.com/400x250?text=No+Image"}
                alt={property.title}
                className="w-full h-52 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h2>
                <p className="text-gray-500 mb-2">📍{property.location}</p>
                <p className="text-2xl font-bold text-green-600 mb-3">₹{property.price.toLocaleString()}</p>

                <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${property.availabilityStatus === "available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                >
                    {property.availabilityStatus}
                </span>
                <p className="text-gray-500 mb-2 mt-3">{property.description}</p>
                <Link to={`/property/${property._id}`}>
                    <button
                        className="w-full mt-4 bg-[#c9184a] text-white py-2 rounded-lg hover:bg-[#6e9887] transition"
                    >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default PropertyCard;