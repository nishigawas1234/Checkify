import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { createBrowserHistory } from "history";
import { useToast } from "@chakra-ui/react";
import api from '../../Api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const toast = useToast();
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || null
  );
  const history = createBrowserHistory();

  const login = async (username, password) => {
      api.post("/login", {
          email: username,
          password: password,
        })
        .then((response) => {
          const token = response.data.token;
          console.log(response,"response")
          setAuthToken(token);
          localStorage.setItem("token", token);
          window.location.href = "/dashboard";
        })
        .catch((error) => {
          toast({
            title: "Something went wrong.",
            description: "Unable to login. Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          console.error("Error registering user:", error);
        });
    
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("token");
    history.push("/login");
  };

  useEffect(() => {
    if (authToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [authToken, history]);

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
