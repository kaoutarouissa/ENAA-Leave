import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/loginPage";
import EmployeeDashboard from "./pages/employee/emlpoyeeDashboard";
import DashboardShell from "./components/layout/DashboardShell";
import Intro from "./pages/Intro";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import ManagerDashboard from "./pages/manager/ManagerDashboard";
import RhDashboard from "./pages/Rh/RhDashboard";
import Dashboardformateur from "./pages/Formateur/formateur"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />

        {/* Routes protégées */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/employee/dashboard"
            element={
              <DashboardShell>
                <EmployeeDashboard />
              </DashboardShell>
            }
          />

          <Route
            path="/manager/dashboard"
            element={
              <DashboardShell>
                <ManagerDashboard />
              </DashboardShell>
            }
          />

          <Route
            path="/rh/dashboard"
            element={
              <DashboardShell>
                <RhDashboard />
              </DashboardShell>
            }
          />
          <Route
            path="/formateur/dashboard"
            element={
              <DashboardShell>
                <Dashboardformateur />
              </DashboardShell>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
