import axios from 'axios'

const APIURL = "http://localhost:5000/api/property";


export const getProperties = async()=>{
    const response = await axios.get(APIURL);
    return response.data;
}

export const getPropertiesById = async(id)=>{
    const response = await axios.get(`http://localhost:5000/api/property/${id}`);
    return response.data;
}