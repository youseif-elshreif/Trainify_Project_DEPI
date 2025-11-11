import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LandingPage } from "./components";
import {
  DashboardPage,
  MealPlansPage,
  TrainingProgramsPage,
  UsersPage,
} from "./pages";
import UserDashboard from "./pages/UserDashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import NavbarWrapper from "./components/common/NavbarWrapper";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavbarWrapper />
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* User Dashboard Route - Protected (User Role) */}
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute requireRole="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          {/* Admin Dashboard Routes - Protected (Admin Role) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requireRole="admin">
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/meals"
            element={
              <ProtectedRoute requireRole="admin">
                <MealPlansPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/training"
            element={
              <ProtectedRoute requireRole="admin">
                <TrainingProgramsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <ProtectedRoute requireRole="admin">
                <UsersPage />
              </ProtectedRoute>
            }
          />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
