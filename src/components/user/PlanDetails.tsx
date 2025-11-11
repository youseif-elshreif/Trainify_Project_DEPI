/**
 * Plan Details Component
 * Displays subscription plan information and upgrade options
 */

import React from "react";
import {
  HiStar,
  HiCalendar,
  HiClock,
  HiCurrencyDollar,
  HiCheckCircle,
  HiLightningBolt,
  HiExclamationCircle,
} from "react-icons/hi";

export interface SubscriptionPlan {
  name: "Gold" | "Platinum" | "Diamond";
  duration: number; // months
  startDate: string;
  endDate: string;
  price: number;
  status: "active" | "expiring" | "expired";
  features: string[];
}

interface PlanDetailsProps {
  plan: SubscriptionPlan;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan }) => {
  // Calculate remaining days
  const endDate = new Date(plan.endDate);
  const today = new Date();
  const remainingDays = Math.max(
    0,
    Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  );
  const totalDays = plan.duration * 30;
  const progressPercentage = ((totalDays - remainingDays) / totalDays) * 100;

  // Get plan colors
  const getPlanColors = () => {
    switch (plan.name) {
      case "Gold":
        return {
          gradient: "from-yellow-400 to-yellow-600",
          bg: "from-yellow-50 to-yellow-100",
          text: "text-yellow-700",
          badge: "bg-yellow-100 text-yellow-700",
        };
      case "Platinum":
        return {
          gradient: "from-gray-400 to-gray-600",
          bg: "from-gray-50 to-gray-100",
          text: "text-gray-700",
          badge: "bg-gray-100 text-gray-700",
        };
      case "Diamond":
        return {
          gradient: "from-blue-400 to-purple-600",
          bg: "from-blue-50 to-purple-100",
          text: "text-purple-700",
          badge: "bg-purple-100 text-purple-700",
        };
    }
  };

  const colors = getPlanColors();

  // Get status badge
  const getStatusBadge = () => {
    if (remainingDays === 0) {
      return {
        text: "Expired",
        color: "bg-red-100 text-red-700",
        IconComponent: HiExclamationCircle,
      };
    } else if (remainingDays <= 7) {
      return {
        text: "Expiring Soon",
        color: "bg-orange-100 text-orange-700",
        IconComponent: HiExclamationCircle,
      };
    } else {
      return {
        text: "Active",
        color: "bg-green-100 text-green-700",
        IconComponent: HiCheckCircle,
      };
    }
  };

  const statusBadge = getStatusBadge();

  return (
    <div className="space-y-6">
      {/* Main Plan Card */}
      <div
        className={`relative bg-gradient-to-r ${colors.gradient} rounded-3xl shadow-2xl p-8 md:p-12 text-white overflow-hidden`}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <HiStar className="w-8 h-8" />
                <h2 className="text-4xl font-bold">{plan.name} Plan</h2>
              </div>
              <p className="text-white/90 text-lg">Your Premium Subscription</p>
            </div>

            {/* Status Badge */}
            <span
              className={`px-6 py-3 rounded-full font-bold text-sm ${statusBadge.color} backdrop-blur-sm flex items-center gap-2`}
            >
              <statusBadge.IconComponent className="w-5 h-5" />
              {statusBadge.text}
            </span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <HiCalendar className="w-6 h-6 mb-2" />
              <div className="text-2xl font-bold mb-1">{plan.duration}</div>
              <div className="text-sm text-white/80">Months</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <HiClock className="w-6 h-6 mb-2" />
              <div className="text-2xl font-bold mb-1">{remainingDays}</div>
              <div className="text-sm text-white/80">Days Left</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <HiCurrencyDollar className="w-6 h-6 mb-2" />
              <div className="text-2xl font-bold mb-1">${plan.price}</div>
              <div className="text-sm text-white/80">Total Price</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <HiLightningBolt className="w-6 h-6 mb-2" />
              <div className="text-2xl font-bold mb-1">
                {Math.round(progressPercentage)}%
              </div>
              <div className="text-sm text-white/80">Completed</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium">Plan Progress</span>
              <span className="text-sm font-medium">
                {remainingDays} days remaining
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
              <div
                className="bg-white h-full rounded-full transition-all duration-1000 ease-out shadow-lg"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-sm text-white/80 mb-2">Start Date</div>
              <div className="text-lg font-bold">
                {new Date(plan.startDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-sm text-white/80 mb-2">End Date</div>
              <div className="text-lg font-bold">
                {new Date(plan.endDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2">
              <HiClock className="w-5 h-5" /> Renew Plan
            </button>
            <button className="flex-1 px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/30 flex items-center justify-center gap-2">
              <HiStar className="w-5 h-5" /> Upgrade Plan
            </button>
          </div>
        </div>
      </div>

      {/* Features Card */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <HiCheckCircle className="w-7 h-7 text-green-600" />
          Plan Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plan.features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 p-4 bg-gradient-to-r ${colors.bg} rounded-xl`}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`,
              }}
            >
              <HiCheckCircle
                className={`w-6 h-6 ${colors.text} flex-shrink-0 mt-0.5`}
              />
              <span className="text-gray-800 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade Options */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl shadow-lg p-8 border border-purple-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <HiStar className="w-7 h-7 text-purple-600" />
          Want More Benefits?
        </h3>
        <p className="text-gray-700 mb-6">
          Upgrade to a higher tier plan and unlock premium features,
          personalized training programs, and exclusive content!
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2">
          <HiLightningBolt className="w-5 h-5" /> Explore Upgrade Options
        </button>
      </div>
    </div>
  );
};

export default PlanDetails;
