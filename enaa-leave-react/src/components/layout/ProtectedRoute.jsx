import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ role }) {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
console.log("USER :", user);
console.log("ROLE USER :", user?.role);
console.log("ROLE ATTENDU :", role);
    // Pas connecté
    if (!token || !user) {
        return <Navigate to="/login" />;
    }

    // Mauvais rôle
    if (user.role !== role) {
        return <Navigate to="/unauthorized" />;
    }

    return <Outlet />;
}