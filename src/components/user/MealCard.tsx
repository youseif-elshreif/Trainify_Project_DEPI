/**
 * Meal Card Component
 * Displays individual meal information in a card layout
 */

import React from "react";
import { HiClock, HiFire, HiUserGroup } from "react-icons/hi";

export interface UserMeal {
  id: string;
  name: string;
  description: string;
  image: string;
  calories: number;
  prepTime: number; // minutes
  servings: number;
  category: "breakfast" | "lunch" | "dinner" | "snack";
  ingredients?: string[];
  instructions?: string;
  nutrition?: {
    protein: number;
    carbs: number;
    fats: number;
    fiber: number;
  };
}

interface MealCardProps {
  meal: UserMeal;
  onShowMore: (meal: UserMeal) => void;
}

const MealCard: React.FC<MealCardProps> = ({ meal, onShowMore }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      breakfast: "bg-yellow-100 text-yellow-700",
      lunch: "bg-green-100 text-green-700",
      dinner: "bg-blue-100 text-blue-700",
      snack: "bg-purple-100 text-purple-700",
    };
    return colors[category as keyof typeof colors];
  };

  const getCategoryEmoji = (category: string) => {
    const emojis = {
      breakfast: "🌅",
      lunch: "🍱",
      dinner: "🌙",
      snack: "🍪",
    };
    return emojis[category as keyof typeof emojis];
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={meal.image}
          alt={meal.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=400&h=300&fit=crop";
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(
              meal.category
            )} backdrop-blur-sm flex items-center gap-1`}
          >
            <span>{getCategoryEmoji(meal.category)}</span>
            {meal.category.toUpperCase()}
          </span>
        </div>

        {/* Quick Stats */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
            <HiClock className="w-4 h-4" />
            <span className="text-sm font-semibold">{meal.prepTime} min</span>
          </div>
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
            <HiFire className="w-4 h-4" />
            <span className="text-sm font-semibold">{meal.calories} cal</span>
          </div>
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
            <HiUserGroup className="w-4 h-4" />
            <span className="text-sm font-semibold">{meal.servings}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {meal.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {meal.description}
        </p>

        {/* Nutrition Preview */}
        {meal.nutrition && (
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="text-center p-2 bg-blue-50 rounded-lg">
              <div className="text-xs text-gray-600 mb-1">Protein</div>
              <div className="text-sm font-bold text-blue-600">
                {meal.nutrition.protein}g
              </div>
            </div>
            <div className="text-center p-2 bg-orange-50 rounded-lg">
              <div className="text-xs text-gray-600 mb-1">Carbs</div>
              <div className="text-sm font-bold text-orange-600">
                {meal.nutrition.carbs}g
              </div>
            </div>
            <div className="text-center p-2 bg-yellow-50 rounded-lg">
              <div className="text-xs text-gray-600 mb-1">Fats</div>
              <div className="text-sm font-bold text-yellow-600">
                {meal.nutrition.fats}g
              </div>
            </div>
            <div className="text-center p-2 bg-green-50 rounded-lg">
              <div className="text-xs text-gray-600 mb-1">Fiber</div>
              <div className="text-sm font-bold text-green-600">
                {meal.nutrition.fiber}g
              </div>
            </div>
          </div>
        )}

        {/* Show More Button */}
        <button
          onClick={() => onShowMore(meal)}
          className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          <span>Show Recipe</span>
          <HiFire className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default MealCard;
