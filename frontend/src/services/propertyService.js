import axios from 'axios'

const APIURL = "http://localhost:5000/api/property";


export const getProperties = async()=>{
    const response = await axios.get(APIURL);
    return response.data;
}