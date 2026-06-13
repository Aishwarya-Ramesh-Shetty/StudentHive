import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState(
        JSON.parse(localStorage.getItem("userInfo"))
    );

    const login = (userData) => {

        localStorage.setItem(
            "userInfo",
            JSON.stringify(userData)
        );

        setUserInfo(userData);
    };

    const logout = () => {

        localStorage.removeItem("userInfo");

        setUserInfo(null);
    };

    return (
        <AuthContext.Provider
            value={{
                userInfo,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};