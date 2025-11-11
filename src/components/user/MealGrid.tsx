/**
 * Meal Grid Component with Modal
 * Displays meals in a responsive 3-column grid
 */

import React, { useState } from "react";
import MealCard, { type UserMeal } from "./MealCard";
import {
  HiX,
  HiClock,
  HiFire,
  HiUserGroup,
  HiCheckCircle,
} from "react-icons/hi";

interface MealGridProps {
  meals: UserMeal[];
}

const MealGrid: React.FC<MealGridProps> = ({ meals }) => {
  const [selectedMeal, setSelectedMeal] = useState<UserMeal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = (meal: UserMeal) => {
    setSelectedMeal(meal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMeal(null), 300);
  };

  // Handle Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Meals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} onShowMore={handleShowMore} />
        ))}
      </div>

      {/* Meal Details Modal */}
      {isModalOpen && selectedMeal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Enhanced Backdrop */}
          <div
            className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-lg"
            onClick={closeModal}
          />

          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div
              className="
                bg-white w-full max-w-4xl rounded-3xl shadow-2xl
                transform transition-all duration-500 scale-100 opacity-100
                border border-gray-100 overflow-hidden max-h-[90vh] overflow-y-auto
                animate-in slide-in-from-bottom-4 fade-in-0
              "
              style={{
                animation: "modalSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Image */}
              <div className="relative h-80">
                <img
                  src={selectedMeal.image}
                  alt={selectedMeal.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=800&h=400&fit=crop";
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Close button */}
                <button
                  type="button"
                  onClick={closeModal}
                  className="
                    absolute top-4 right-4 z-10 p-3 rounded-xl 
                    bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-200 
                    hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50
                  "
                  aria-label="Close modal"
                >
                  <HiX className="w-6 h-6 text-white" />
                </button>

                {/* Title and Stats */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    {selectedMeal.name}
                  </h2>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold flex items-center gap-2">
                      <HiClock className="w-5 h-5" />
                      {selectedMeal.prepTime} minutes
                    </span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold flex items-center gap-2">
                      <HiFire className="w-5 h-5" />
                      {selectedMeal.calories} calories
                    </span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold flex items-center gap-2">
                      <HiUserGroup className="w-5 h-5" />
                      {selectedMeal.servings} servings
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    About This Meal
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedMeal.description}
                  </p>
                </div>

                {/* Nutrition Facts */}
                {selectedMeal.nutrition && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Nutrition Facts
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {selectedMeal.nutrition.protein}g
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          Protein
                        </div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                        <div className="text-3xl font-bold text-orange-600 mb-2">
                          {selectedMeal.nutrition.carbs}g
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          Carbs
                        </div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl">
                        <div className="text-3xl font-bold text-yellow-600 mb-2">
                          {selectedMeal.nutrition.fats}g
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          Fats
                        </div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {selectedMeal.nutrition.fiber}g
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          Fiber
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Ingredients */}
                {selectedMeal.ingredients &&
                  selectedMeal.ingredients.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ingredients
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedMeal.ingredients.map((ingredient, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl"
                          >
                            <HiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-800">{ingredient}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Instructions */}
                {selectedMeal.instructions && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Cooking Instructions
                    </h3>
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {selectedMeal.instructions}
                      </p>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={closeModal}
                    className="
                      flex-1 px-6 py-4 text-gray-700 font-semibold rounded-2xl
                      border-2 border-gray-200 hover:border-gray-300
                      transition-all duration-300 hover:shadow-md
                      hover:bg-gray-50 active:scale-95
                    "
                  >
                    Close
                  </button>
                  <button
                    className="
                      flex-1 px-6 py-4 text-white font-bold rounded-2xl
                      transition-all duration-300 hover:shadow-lg
                      transform hover:scale-105 active:scale-95
                      bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 
                      hover:shadow-green-500/25
                    "
                  >
                    🍳 Add to My Meals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MealGrid;
