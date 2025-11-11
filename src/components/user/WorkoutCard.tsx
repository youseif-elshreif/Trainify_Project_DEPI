/**
 * Workout Card Component
 * Displays individual workout information in a card layout
 */

import React from "react";
import { HiClock, HiLightningBolt, HiFire } from "react-icons/hi";

export interface Workout {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  duration: number; // minutes
  difficulty: "beginner" | "intermediate" | "advanced";
  calories: number;
  exercises?: string[];
}

interface WorkoutCardProps {
  workout: Workout;
  onShowMore: (workout: Workout) => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, onShowMore }) => {
  const getDifficultyBadge = (difficulty: string) => {
    const badges = {
      beginner: "bg-green-100 text-green-700",
      intermediate: "bg-yellow-100 text-yellow-700",
      advanced: "bg-red-100 text-red-700",
    };
    return badges[difficulty as keyof typeof badges];
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={workout.image}
          alt={workout.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop";
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Difficulty Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyBadge(
              workout.difficulty
            )} backdrop-blur-sm`}
          >
            {workout.difficulty.toUpperCase()}
          </span>
        </div>

        {/* Quick Stats */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
            <HiClock className="w-4 h-4" />
            <span className="text-sm font-semibold">
              {workout.duration} min
            </span>
          </div>
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
            <HiFire className="w-4 h-4" />
            <span className="text-sm font-semibold">
              {workout.calories} cal
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {workout.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {workout.description}
        </p>

        {/* Show More Button */}
        <button
          onClick={() => onShowMore(workout)}
          className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          <span>Show More</span>
          <HiLightningBolt className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
