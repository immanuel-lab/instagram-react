
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const navigate = useNavigate(); 

    useEffect(() => {
        // Check if the user is authenticated when the component mounts
        const validateToken = async () => {
            if (token) {
                try {
                    const response = await axios.get('/api/user/', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setUser(response.data);
                } catch (error) {
                    // If the token is invalid or expired
                    console.error("Authentication token is invalid:", error);
                    setToken(null);
                    localStorage.removeItem('token');
                }
            }
            else {
                navigate('/login'); // Redirect to login if no token is present
            }
        };

        validateToken();
    }, [token]);

    const login = async (username, password) => {
        try {
            const response = await axios.post('/api/token/', { username, password });
            localStorage.setItem('token', response.data.access);
            setToken(response.data.access);
        } catch (error) {
            console.error("Login failed:", error);
            throw error; // Rethrow to handle it in login form
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    const value = { user, login, logout };

    return <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>;
};
