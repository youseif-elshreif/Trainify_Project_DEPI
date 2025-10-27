/**
 * Dashboard Page for Trainify Admin Panel
 *
 * This is the main dashboard overview page showing key metrics and overview cards.
 * Individual sections (supplements, meals, training, users) have their own dedicated pages.
 *
 * Project Structure:
 * - This is a Vite + React project (not Next.js)
 * - Components follow the existing project patterns with glass styling and custom CSS classes
 * - Route handling can be implemented with React Router if needed
 *
 * Usage:
 * Import this component and add it to your routing system (e.g., React Router)
 */

import React from "react";
import Layout from "../components/dashboards/Layout";
import Topbar from "../components/dashboards/Topbar";
import OverviewCards from "../components/dashboards/OverviewCards";
import { overview } from "../data/sample";

const DashboardPage: React.FC = () => {
  // Event handlers
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Topbar */}
        <Topbar
          title="Dashboard"
          search={{
            placeholder: "Search...",
            onSearch: handleSearch,
          }}
        />

        <div className="p-4 sm:p-6 lg:p-8">
          {/* Overview Cards */}
          <div className="mb-8">
            <OverviewCards cards={overview} />
          </div>

          {/* Welcome Section */}
          <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Trainify Dashboard
            </h3>
            <p className="text-gray-700 mb-8 text-lg">
              Manage your supplements, meal plans, training programs, and users
              from this central dashboard. Use the sidebar navigation to access
              different sections.
            </p>

            {/* Quick Navigation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <button
                className="group bg-gradient-to-br from-[#FF6B35] to-[#FF8A50] hover:from-[#FF5722] hover:to-[#FF6B35] text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white/20"
                onClick={() =>
                  (window.location.href = "/dashboard/supplements")
                }
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">💊</div>
                  <span className="block text-xl font-bold mb-2">
                    Supplements
                  </span>
                  <span className="text-white/90 text-sm">
                    Manage products & inventory
                  </span>
                </div>
              </button>

              <button
                className="group bg-gradient-to-br from-[#2BC48A] to-[#4ECDC4] hover:from-[#26A69A] hover:to-[#2BC48A] text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white/20"
                onClick={() => (window.location.href = "/dashboard/meals")}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">🍽️</div>
                  <span className="block text-xl font-bold mb-2">
                    Meal Plans
                  </span>
                  <span className="text-white/90 text-sm">
                    Create nutrition plans
                  </span>
                </div>
              </button>

              <button
                className="group bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] hover:from-[#5B21B6] hover:to-[#6366F1] text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white/20"
                onClick={() => (window.location.href = "/dashboard/training")}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">💪</div>
                  <span className="block text-xl font-bold mb-2">Training</span>
                  <span className="text-white/90 text-sm">
                    Workout programs
                  </span>
                </div>
              </button>

              <button
                className="group bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] hover:from-[#D97706] hover:to-[#F59E0B] text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white/20"
                onClick={() => (window.location.href = "/dashboard/users")}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">👥</div>
                  <span className="block text-xl font-bold mb-2">Users</span>
                  <span className="text-white/90 text-sm">
                    Member management
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
