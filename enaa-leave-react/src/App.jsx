import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/loginPage";
import Dashboard from "./pages/employee/emlpoyeeDashboard";
import Sidebar from "./components/layout/Sidebar";
// import Navbar from "./components/layout/Navbar";
import Navbar from "./components/layout/Navbar"
import Intro from "./pages/Intro";
import ProtectedRoute from "./components/layout/ProtectedRoute"
import ManagerDashboard from "./pages/manager/ManagerDashboard"
import RhDashboard from "./pages/Rh/RhDashboard"
function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Page d'accueil */}
                <Route path="/" element={<Intro />} />

                {/* Login */}
                <Route path="/login" element={<Login />} />

                {/* Dashboard Employee */}
                <Route element={<ProtectedRoute role="employe" />}>
                    <Route
                        path="/dashboard"
                        element={
                            <div className="min-h-screen bg-gray-50">

                                <Navbar />

                                <div className="flex">
                                    <Sidebar />

                                    <main className="flex-1 p-6">
                                        <Dashboard />
                                    </main>
                                </div>

                            </div>
                        }
                    />
                </Route>
                 <Route
        path="/unauthorized"
        element={<h1>Accès non autorisé</h1>}
    />
                {/* Dashboard Manager */}
                <Route element={<ProtectedRoute role="manager" />}>
                    <Route
                        path="/manager"
                        element={
                            <div className="min-h-screen bg-gray-50">
                                <Navbar />

                                <div className="flex">
                                    <Sidebar />

                                    <main className="flex-1 p-6">
                                        <ManagerDashboard />
                                    </main>
                                </div>
                            </div>
                        }
                    />
                </Route>

                {/* Dashboard RH */}
                <Route element={<ProtectedRoute role="hr" />}>
                    <Route
                        path="/rh"
                        element={
                            <div className="min-h-screen bg-gray-50">
                                <Navbar />

                                <div className="flex">
                                    <Sidebar />

                                    <main className="flex-1 p-6">
                                        <RhDashboard />
                                    </main>
                                </div>
                            </div>
                        }
                    />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}



export default App;
