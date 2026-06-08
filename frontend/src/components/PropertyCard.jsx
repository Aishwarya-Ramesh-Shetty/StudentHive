const PropertyCard = ({property})=>{
    return(
        <div  className="border rounded-lg shadow p-4">
            <img
                src={property.images?.[0]?.url || "https://via.placeholder.com/400x250?text=No+Image"}
                alt={property.title}
                className="h-48 w-full object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-3">{property.title}</h2>
            <p>{property.location}</p>
            <p className="font-bold text-green-600">₹{property.price}</p>

            <p>Status:{property.availabilityStatus}</p>
            <p>Description:{property.description}</p>
        </div>
    )
}

export default PropertyCard;