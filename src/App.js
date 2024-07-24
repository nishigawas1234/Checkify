import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ChakraProvider, Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./store";
import Sidebar from "./Components/Common/Sidebar";
import Dashboard from "./Pages/dashboard";
import Notes from "./Pages/notes";
import Login from "./Pages/login";
import SignIn from "./Pages/signIn";
import Personal from "./Pages/personal";
import Work from "./Pages/work";
import AuthContext, { AuthProvider } from "./Services/context/AuthContext";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box display="flex" flexDirection={{ base: "column", md: "row" }} h="100vh">
      {!isSideBar && (
        <>
        <Box>  <IconButton
            icon={<HamburgerIcon />}
            display={{ base: "block", md: "none" }}
            position="absolute"
            top="1rem"
            left="1rem"
            zIndex="overlay"
            onClick={toggleSidebar}
          /></Box>
        
          <Box display={{ base: isSidebarOpen ? "block" : "none", md: "block" }} w={{ base: "100%", md: "250px" }} h="100vh" bg="#191919">
            <Sidebar onClose={toggleSidebar} />
          </Box>
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <Sidebar onClose={onClose} />
            </DrawerContent>
          </Drawer>
        </>
      )}
      <Box flex="1" bg="#0f0f0f" overflow="auto">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/notes" element={<PrivateRoute><Notes /></PrivateRoute>} />
          <Route path="/personal" element={<PrivateRoute><Personal /></PrivateRoute>} />
          <Route path="/work" element={<PrivateRoute><Work /></PrivateRoute>} />
        </Routes>
      </Box>
    </Box>
  );
}

const PrivateRoute = ({ children }) => {
  const { authToken } = useContext(AuthContext);
  return authToken ? children : <Navigate to="/login" />;
};

export default App;
