import { useState } from 'react'
import {loginUser} from '../services/authService'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Login = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(formData);
            login(data);

            alert("Login Successful");
        }
        catch (error) {
            console.log(error);

            alert("Invalid Credentials");
        }
    }



    return (
        <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-xl shadow">
            <h1 className="text-3xl font-bold mb-6">Login</h1>

            <form  onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange = {handleChange}
                    className="w-full border p-3 rounded-lg"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg"
                />
                <button
                    type="submit"
                    className="w-full bg-[#c9184a] text-white py-3 rounded-lg hover:bg-[#6e9887]"
                >
                    Login
                </button>

            </form>
        </div>
    )
}

export default Login;