import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { userInfo, logout } = useContext(AuthContext);

    console.log(userInfo);
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-[#6e9887]">
                    Student<span className="text-[#c9184a]">Hive</span>
                </h1>

                <div className="flex items-center gap-4">

                    <Link to="/" className="bg-[#c9184a] text-white px-5 py-2 rounded-xl hover:bg-[#6e9887]">
                        Home
                    </Link>

                    {
                        userInfo ? (
                            <>
                                <div className="flex items-center gap-4">

                                    <span className="bg-[#c9184a] text-white px-5 py-2 rounded-xl hover:bg-[#6e9887]">
                                        Welcome {userInfo.name}
                                    </span>

                                    <button
                                        onClick={logout}
                                        className="bg-[#c9184a] text-white px-5 py-2 rounded-xl hover:bg-[#9448bc]"
                                    >
                                        Logout
                                    </button>

                                </div>
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