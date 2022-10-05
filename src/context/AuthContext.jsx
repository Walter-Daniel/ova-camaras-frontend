import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const AuthContext = createContext();

const { VITE_API_URL } = getEnvVariables();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [product, setProduct] = useState([]);

    const navigation = useNavigate();

    const register = async(formData) => {
        try {
            const response = await axios.post( `${VITE_API_URL}/auth/register` , formData);

        } catch (error) {
            console.log(error)
        }
    };

    const login = async( formData ) => {
        try {
            const response = await axios.post( `${VITE_API_URL}/auth/login`, formData );
            const newUser = response.data.user;
            setUser( newUser );

            const newToken = response.data.token;
            setToken( newToken )
            localStorage.setItem('token', newToken);

            const newProduct = await axios( `${VITE_API_URL}/products` )
            const productList = newProduct.data.products;    
            setProduct(productList);     


        } catch (error) {
            console.log(error)
            
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        navigation('/login');
    };

    const auth = {
        user,
        token,
        register,
        login,
        logout   
    }

  return (
    <AuthContext.Provider value={ auth }>{ children }</AuthContext.Provider>
  )
};

export function useAuth() {
    return useContext( AuthContext )
};
