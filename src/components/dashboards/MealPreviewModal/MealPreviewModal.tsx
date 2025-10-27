import React from "react";
import { HiX, HiClock, HiUsers, HiStar } from "react-icons/hi";
import type { Meal } from "../../../data/sample";

interface MealPreviewModalProps {
  open: boolean;
  onClose: () => void;
  meal: Meal | null;
}

const MealPreviewModal: React.FC<MealPreviewModalProps> = ({
  open,
  onClose,
  meal,
}) => {
  // Handle Escape key to close modal
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  if (!open || !meal) return null;

  // Helper function to get plan colors
  const getPlanColors = (plan: string) => {
    const colors = {
      gold: "from-yellow-400 to-yellow-600",
      platinum: "from-gray-400 to-gray-600",
      diamond: "from-blue-400 to-purple-600",
    };
    return colors[plan as keyof typeof colors];
  };

  // Helper function to get difficulty colors
  const getDifficultyColors = (difficulty: string) => {
    const colors = {
      easy: "from-green-400 to-green-600",
      medium: "from-yellow-400 to-yellow-600",
      hard: "from-red-400 to-red-600",
    };
    return colors[difficulty as keyof typeof colors];
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Enhanced Backdrop */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-lg"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="
          bg-white w-full max-w-4xl rounded-3xl shadow-2xl
          transform transition-all duration-500 scale-100 opacity-100
          border border-gray-100 overflow-hidden max-h-[90vh] overflow-y-auto
        "
          style={{
            animation: "modalSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className={`relative bg-gradient-to-r ${getPlanColors(
              meal.plan
            )} p-6 text-white`}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-3 rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close modal"
              tabIndex={0}
            >
              <HiX className="w-6 h-6 text-white" />
            </button>

            <div className="pr-16">
              <h3 className="text-2xl font-bold mb-2">{meal.name}</h3>
              <p className="text-white/90 text-lg mb-4">{meal.description}</p>

              {/* Plan Badge */}
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-bold">
                {meal.plan.toUpperCase()} PLAN
              </span>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg pointer-events-none"></div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Image and Quick Stats */}
              <div className="lg:col-span-1">
                {/* Meal Image */}
                <div className="mb-6">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=400&h=300&fit=crop";
                    }}
                  />
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <HiClock className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                    <p className="text-2xl font-bold text-gray-900">
                      {meal.cookingTime}
                    </p>
                    <p className="text-sm text-gray-600">Minutes</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <HiUsers className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                    <p className="text-2xl font-bold text-gray-900">
                      {meal.servings}
                    </p>
                    <p className="text-sm text-gray-600">Servings</p>
                  </div>
                </div>

                {/* Difficulty Badge */}
                <div className="text-center mb-6">
                  <span
                    className={`inline-block bg-gradient-to-r ${getDifficultyColors(
                      meal.difficulty
                    )} text-white px-4 py-2 rounded-full font-bold capitalize`}
                  >
                    <HiStar className="w-4 h-4 inline mr-2" />
                    {meal.difficulty} Level
                  </span>
                </div>

                {/* Category & Calories */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Category</p>
                    <p className="font-bold text-gray-900 capitalize">
                      {meal.category}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Calories</p>
                    <p className="font-bold text-gray-900">
                      {meal.calories} cal
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="lg:col-span-2">
                {/* Nutrition Facts */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Nutrition Facts
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-blue-600">
                        {meal.nutritionFacts.protein}g
                      </p>
                      <p className="text-sm text-blue-700">Protein</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-green-600">
                        {meal.nutritionFacts.carbs}g
                      </p>
                      <p className="text-sm text-green-700">Carbs</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-yellow-600">
                        {meal.nutritionFacts.fats}g
                      </p>
                      <p className="text-sm text-yellow-700">Fats</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-purple-600">
                        {meal.nutritionFacts.fiber}g
                      </p>
                      <p className="text-sm text-purple-700">Fiber</p>
                    </div>
                  </div>
                </div>

                {/* Ingredients */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Ingredients
                  </h4>
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {meal.ingredients.map((ingredient, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <span className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3 flex-shrink-0"></span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Preparation Method */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Preparation Method
                  </h4>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-[#FF6B35]">
                    <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                      {meal.preparationMethod}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Created on {new Date(meal.createdAt).toLocaleDateString()}
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPreviewModal;
