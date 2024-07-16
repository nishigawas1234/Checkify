import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import api from "../../Api/axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useState(() => Cookies.get("token") || null);
  const [userData, setUserData] = useState(() => {
    const userDataCookie = Cookies.get("userData");
    return userDataCookie ? JSON.parse(userDataCookie) : null;
  });

  const login = async (username, password) => {
    try {
      const response = await api.post("/login", {
        email: username,
        password: password,
      });
      const token = response.data.token;
      const user = response.data.user;
      setAuthToken(token);
      setUserData(user);
      Cookies.set("token", token, { expires: 7 }); // Set the token to expire in 7 days
      Cookies.set("userData", JSON.stringify(user), { expires: 7 });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Unable to login. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error logging in:", error);
    }
  };

  const logout = () => {
    setAuthToken(null);
    setUserData(null);
    Cookies.remove("token");
    Cookies.remove("userData");
    navigate("/login");
  };

  useEffect(() => {
    if (authToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ authToken, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
