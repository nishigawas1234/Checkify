import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider,useColorMode} from '@chakra-ui/react';
import Login from "./Pages/login"; 
import SignIn from "./Pages/signIn";
import theme from "./theme"



function App() {
  return (
    <React.StrictMode>
    <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/sign-in" element={<SignIn/>}/>
      </Routes>
      </BrowserRouter> 
    </ChakraProvider>
    
  </React.StrictMode>
  )
}

export default App;
