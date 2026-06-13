import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { userInfo } = useContext(AuthContext);

    console.log(userInfo);
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-[#6e9887]">
                    Student<span className="text-[#c9184a]">Hive</span>
                </h1>

                <div className="space-x-6">

                    <Link to="/" className="bg-[#c9184a] text-white px-5 py-2 rounded-xl hover:bg-[#6e9887]">
                        Home
                    </Link>

                    {
                        userInfo ? (
                            <>
                                <span className="font-semibold">
                                    Welcome {userInfo.name}
                                </span>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="bg-[#c9184a] text-white px-5 py-2 rounded-xl hover:bg-[#6e9887]"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="bg-[#c9184a] text-white px-5 py-2 rounded-xl hover:bg-[#6e9887]"
                                >
                                    Register
                                </Link>
                            </>
                        )
                    }

                </div>

            </div>

        </nav>
    )
}

export default Navbar;