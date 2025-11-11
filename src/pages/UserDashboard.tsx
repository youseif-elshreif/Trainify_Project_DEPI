/**
 * User Dashboard Page for Trainify
 *
 * Main dashboard for regular users showing:
 * - Personal trainee information
 * - Assigned workouts
 * - Meal plans
 * - Subscription details
 */

import React, { useState } from "react";
import UserInfoTab from "../components/user/UserInfoTab";
import WorkoutGrid from "../components/user/WorkoutGrid";
import MealGrid from "../components/user/MealGrid";
import PlanDetails from "../components/user/PlanDetails";
import { currentUser, userWorkouts, userMeals, userPlan } from "../data/sample";
import {
  HiUser,
  HiLightningBolt,
  HiCake,
  HiStar,
  HiHand,
} from "react-icons/hi";

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "info" | "workouts" | "meals" | "plan"
  >("info");

  // Tab configuration
  const tabs = [
    { id: "info" as const, label: "Trainee Info", icon: HiUser },
    { id: "workouts" as const, label: "Workouts", icon: HiLightningBolt },
    { id: "meals" as const, label: "Meals", icon: HiCake },
    { id: "plan" as const, label: "Plan", icon: HiStar },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            Welcome Back! <HiHand className="w-8 h-8 text-yellow-500" />
          </h1>
          <p className="text-gray-600 mt-2">
            Track your fitness journey and stay on top of your goals.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center justify-center gap-3 px-6 py-4 rounded-xl
                    font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-in fade-in-50 duration-500">
          {activeTab === "info" && <UserInfoTab traineeInfo={currentUser} />}
          {activeTab === "workouts" && <WorkoutGrid workouts={userWorkouts} />}
          {activeTab === "meals" && <MealGrid meals={userMeals} />}
          {activeTab === "plan" && <PlanDetails plan={userPlan} />}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
