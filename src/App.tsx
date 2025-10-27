import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LandingPage } from "./components";
import {
  DashboardPage,
  SupplementsPage,
  MealPlansPage,
  TrainingProgramsPage,
  UsersPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/supplements" element={<SupplementsPage />} />
        <Route path="/dashboard/meals" element={<MealPlansPage />} />
        <Route path="/dashboard/training" element={<TrainingProgramsPage />} />
        <Route path="/dashboard/users" element={<UsersPage />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
