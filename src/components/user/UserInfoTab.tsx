/**
 * User Info Tab Component
 * Displays trainee's personal information in a clean card layout
 */

import React from "react";
import {
  HiUser,
  HiPhone,
  HiScale,
  HiTrendingUp,
  HiCalendar,
  HiUserCircle,
} from "react-icons/hi";

export interface TraineeInfo {
  fullName: string;
  phone: string;
  height: number; // cm
  weight: number; // kg
  age: number;
  gender: "male" | "female";
  email?: string;
  joinedDate?: string;
}

interface UserInfoTabProps {
  traineeInfo: TraineeInfo;
}

const UserInfoTab: React.FC<UserInfoTabProps> = ({ traineeInfo }) => {
  const infoCards = [
    {
      icon: HiUser,
      label: "Full Name",
      value: traineeInfo.fullName,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: HiPhone,
      label: "Phone Number",
      value: traineeInfo.phone,
      color: "from-green-500 to-green-600",
    },
    {
      icon: HiScale,
      label: "Height",
      value: `${traineeInfo.height} cm`,
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: HiTrendingUp,
      label: "Weight",
      value: `${traineeInfo.weight} kg`,
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: HiCalendar,
      label: "Age",
      value: `${traineeInfo.age} years`,
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: HiUserCircle,
      label: "Gender",
      value:
        traineeInfo.gender.charAt(0).toUpperCase() +
        traineeInfo.gender.slice(1),
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  // Calculate BMI
  const bmi = (
    traineeInfo.weight / Math.pow(traineeInfo.height / 100, 2)
  ).toFixed(1);
  const getBMIStatus = (bmi: number) => {
    if (bmi < 18.5) return { text: "Underweight", color: "text-yellow-600" };
    if (bmi < 25) return { text: "Normal", color: "text-green-600" };
    if (bmi < 30) return { text: "Overweight", color: "text-orange-600" };
    return { text: "Obese", color: "text-red-600" };
  };

  const bmiStatus = getBMIStatus(parseFloat(bmi));

  return (
    <div className="space-y-6">
      {/* Profile Header Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Avatar */}
          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30 shadow-lg">
            <HiUser className="w-16 h-16 text-white" />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">{traineeInfo.fullName}</h2>
            <p className="text-white/90 text-lg mb-4">
              {traineeInfo.email || "trainee@trainify.com"}
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm flex items-center gap-2">
                <HiCalendar className="w-4 h-4" /> Joined{" "}
                {traineeInfo.joinedDate || "January 2024"}
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm flex items-center gap-2">
                <HiUserCircle className="w-4 h-4" />{" "}
                {traineeInfo.gender.charAt(0).toUpperCase() +
                  traineeInfo.gender.slice(1)}
              </span>
            </div>
          </div>

          {/* BMI Badge */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-sm font-medium text-white/80 mb-2">
              BMI Index
            </div>
            <div className="text-4xl font-bold mb-2">{bmi}</div>
            <div
              className={`text-sm font-semibold px-3 py-1 rounded-full bg-white/20`}
            >
              {bmiStatus.text}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {infoCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`,
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    {card.label}
                  </p>
                  <p className="text-xl font-bold text-gray-900 truncate">
                    {card.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Stats */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <HiTrendingUp className="w-6 h-6 text-blue-600" />
          Health Metrics
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* BMI Details */}
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <div className="text-3xl font-bold text-gray-900 mb-2">{bmi}</div>
            <div className="text-sm text-gray-600">Body Mass Index</div>
            <div className={`mt-2 text-sm font-semibold ${bmiStatus.color}`}>
              {bmiStatus.text}
            </div>
          </div>

          {/* Ideal Weight Range */}
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {(18.5 * Math.pow(traineeInfo.height / 100, 2)).toFixed(0)}-
              {(24.9 * Math.pow(traineeInfo.height / 100, 2)).toFixed(0)}
            </div>
            <div className="text-sm text-gray-600">Ideal Weight Range (kg)</div>
            <div className="mt-2 text-sm font-semibold text-green-600">
              Based on your height
            </div>
          </div>

          {/* Calories Target */}
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {Math.round(
                traineeInfo.gender === "male"
                  ? 88.362 +
                      13.397 * traineeInfo.weight +
                      4.799 * traineeInfo.height -
                      5.677 * traineeInfo.age
                  : 447.593 +
                      9.247 * traineeInfo.weight +
                      3.098 * traineeInfo.height -
                      4.33 * traineeInfo.age
              )}
            </div>
            <div className="text-sm text-gray-600">Daily Calories (BMR)</div>
            <div className="mt-2 text-sm font-semibold text-orange-600">
              Basal Metabolic Rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoTab;
