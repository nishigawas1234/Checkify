import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme";
import { Provider } from 'react-redux';
import store from './store';
import Sidebar from './Components/Common/Sidebar';
import Dashboard from './Pages/dashboard';
import Notes from './Pages/notes';
import Login from "./Pages/login";
import SignIn from "./Pages/signIn";
import Personal from "./Pages/personal";
import Work from "./Pages/work";
import AuthContext, { AuthProvider } from './Services/context/AuthContext';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <AuthProvider>
              <AppLayout />
            </AuthProvider>
          </BrowserRouter>
        </ChakraProvider>
      </Provider>
    </React.StrictMode>
  );
}

function AppLayout() {
  const location = useLocation();
  const isSideBar = location.pathname === "/login" || location.pathname === "/sign-in";

  return (
    <div className="app-container">
      {!isSideBar && <Sidebar />}
      <div className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/notes" element={<PrivateRoute><Notes /></PrivateRoute>} />
          <Route path="/personal" element={<PrivateRoute><Personal /></PrivateRoute>} />
          <Route path="/work" element={<PrivateRoute><Work /></PrivateRoute>} />
        </Routes>
      </div>
    </div>
  );
}

const PrivateRoute = ({ children }) => {
  const { authToken } = useContext(AuthContext);
  return authToken ? children : <Navigate to="/login" />;
};

export default App;
