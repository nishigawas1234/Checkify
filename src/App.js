import React ,{useContext} from "react";
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme";
import { Provider } from 'react-redux';
import store from './store';
import Sidebar from './Components/Common/Sidebar';
import Dashboard from './Pages/dashboard';
import Notes from './Pages/notes';
import Login from "./Pages/login"; 
import SignIn from "./Pages/signIn";
import AuthContext, { AuthProvider } from './Services/context/AuthContext';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <AuthProvider>
            <BrowserRouter>
              <AppLayout />
            </BrowserRouter> 
          </AuthProvider>
        </ChakraProvider>
      </Provider>
    </React.StrictMode>
  );
}

function AppLayout() {
  const { authToken } = useContext(AuthContext);
  console.log(authToken,"authToken")

  const isSideBar = window.location.href.includes("/login") ||  window.location.href.includes("/sign-in")
  return (
    <div className="app-container">
      {!isSideBar &&   <Sidebar />}
      <div className="main-content">
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<SignIn />} /> 
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
          <Route path="/notes" element={<PrivateRoute><Notes/></PrivateRoute>} />
        </Routes>
      </div>
    </div>
  );
}

const PrivateRoute = ({ children }) => {
  const { authToken } = useContext(AuthContext);
  console.log("Auth Token (PrivateRoute):",children , authToken);
  return authToken ? children : <Navigate to="/login" />;
};


export default App;
