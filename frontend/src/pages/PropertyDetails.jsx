import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertiesById } from "../services/propertyService";

const PropertyDetails = () => {

    const { id } = useParams();

    const [property,setProperty] = useState(null);

    useEffect(()=>{
        fetchProperty();
    },[]);

    const fetchProperty = async()=>{
        try{
            const data = await getPropertiesById(id);

            console.log(data);

            setProperty(data);

        }catch(error){
            console.log(error);
        }
    }

    if(!property){
        return <h1>Loading...</h1>
    }

    return(
        <div className="max-w-6xl mx-auto p-8">

            <img
                src={
                    property.images?.[0]?.url ||
                    "https://via.placeholder.com/800x400"
                }
                alt={property.title}
                className="w-full h-[400px] object-cover rounded-xl"
            />

            <h1 className="text-4xl font-bold mt-6">
                {property.title}
            </h1>

            <p className="text-gray-600 mt-2">
                📍 {property.location}
            </p>

            <p className="text-3xl font-bold text-green-600 mt-4">
                ₹ {property.price.toLocaleString()}
            </p>

            <p className="mt-6 text-gray-700">
                {property.description}
            </p>

        </div>
    )
}

export default PropertyDetails;