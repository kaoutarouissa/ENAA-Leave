import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/loginPage";
import Dashboard from "./pages/employee/Dashboard";
import Sidebar from "./components/layout/Sidebar";
// import Navbar from "./components/layout/Navbar";
import Navbar from "./components/layout/Navbar"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <Sidebar />
     <Navbar /> */}
    </>
  );
}

export default App;
