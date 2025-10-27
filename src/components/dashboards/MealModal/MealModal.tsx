import React, { useState, useEffect } from "react";
import { HiX, HiTrash, HiPlus } from "react-icons/hi";
import type { Meal } from "../../../data/sample";

interface MealModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (meal: Omit<Meal, "id" | "createdAt">) => Promise<void>;
  initialValues?: Meal | null;
  title?: string;
}

const MealModal: React.FC<MealModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialValues,
  title = "Add New Meal",
}) => {
  const [formData, setFormData] = useState<Omit<Meal, "id" | "createdAt">>({
    name: "",
    calories: 0,
    plan: "gold",
    category: "breakfast",
    difficulty: "easy",
    status: "active",
    image: "",
    description: "",
    preparationMethod: "",
    nutritionFacts: {
      protein: 0,
      carbs: 0,
      fats: 0,
      fiber: 0,
    },
    ingredients: [""],
    cookingTime: 0,
    servings: 1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when modal opens/closes or initial values change
  useEffect(() => {
    if (open) {
      if (initialValues) {
        setFormData({
          name: initialValues.name,
          calories: initialValues.calories,
          plan: initialValues.plan,
          category: initialValues.category,
          difficulty: initialValues.difficulty,
          status: initialValues.status,
          image: initialValues.image,
          description: initialValues.description,
          preparationMethod: initialValues.preparationMethod,
          nutritionFacts: initialValues.nutritionFacts,
          ingredients: initialValues.ingredients.length
            ? initialValues.ingredients
            : [""],
          cookingTime: initialValues.cookingTime,
          servings: initialValues.servings,
        });
      } else {
        // Reset to empty form
        setFormData({
          name: "",
          calories: 0,
          plan: "gold",
          category: "breakfast",
          difficulty: "easy",
          status: "active",
          image: "",
          description: "",
          preparationMethod: "",
          nutritionFacts: { protein: 0, carbs: 0, fats: 0, fiber: 0 },
          ingredients: [""],
          cookingTime: 0,
          servings: 1,
        });
      }
    }
  }, [open, initialValues]);

  // Close modal with escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  const handleInputChange = (field: string, value: string | number) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      if (parent === "nutritionFacts") {
        setFormData((prev) => ({
          ...prev,
          nutritionFacts: {
            ...prev.nutritionFacts,
            [child]: value,
          },
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const addIngredient = () => {
    setFormData((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ""],
    }));
  };

  const removeIngredient = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }));
  };

  const updateIngredient = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      ingredients: prev.ingredients.map((item, i) =>
        i === index ? value : item
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Filter out empty ingredients
      const cleanedData = {
        ...formData,
        ingredients: formData.ingredients.filter((item) => item.trim() !== ""),
      };

      await onSubmit(cleanedData);
      onClose();
    } catch (error) {
      console.error("Error submitting meal:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

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
          animate-in slide-in-from-bottom-4 fade-in-0
        "
          style={{
            animation: "modalSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Enhanced Header */}
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 pb-6">
            <h3 className="text-2xl font-bold text-white pr-16">{title}</h3>
            
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="
                absolute top-4 right-4 z-10 p-3 rounded-xl 
                hover:bg-white/20 transition-all duration-200 
                hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50
              "
              aria-label="Close modal"
              tabIndex={0}
            >
              <HiX className="w-6 h-6 text-white" />
            </button>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg pointer-events-none"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meal Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter meal name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Calories *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.calories}
                  onChange={(e) =>
                    handleInputChange("calories", parseInt(e.target.value) || 0)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter calories"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subscription Plan *
                </label>
                <select
                  required
                  value={formData.plan}
                  onChange={(e) => handleInputChange("plan", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="gold">Gold Plan</option>
                  <option value="platinum">Platinum Plan</option>
                  <option value="diamond">Diamond Plan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level *
                </label>
                <select
                  required
                  value={formData.difficulty}
                  onChange={(e) =>
                    handleInputChange("difficulty", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status *
                </label>
                <select
                  required
                  value={formData.status}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Time and Servings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cooking Time (minutes)
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.cookingTime}
                  onChange={(e) =>
                    handleInputChange(
                      "cookingTime",
                      parseInt(e.target.value) || 0
                    )
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Servings
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.servings}
                  onChange={(e) =>
                    handleInputChange("servings", parseInt(e.target.value) || 1)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="1"
                />
              </div>
            </div>

            {/* Nutrition Information */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Nutrition Information
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Protein (g)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={formData.nutritionFacts.protein}
                    onChange={(e) =>
                      handleInputChange(
                        "nutritionFacts.protein",
                        parseFloat(e.target.value) || 0
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="0.0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Carbs (g)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={formData.nutritionFacts.carbs}
                    onChange={(e) =>
                      handleInputChange(
                        "nutritionFacts.carbs",
                        parseFloat(e.target.value) || 0
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="0.0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fats (g)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={formData.nutritionFacts.fats}
                    onChange={(e) =>
                      handleInputChange(
                        "nutritionFacts.fats",
                        parseFloat(e.target.value) || 0
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="0.0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fiber (g)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={formData.nutritionFacts.fiber}
                    onChange={(e) =>
                      handleInputChange(
                        "nutritionFacts.fiber",
                        parseFloat(e.target.value) || 0
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="0.0"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                rows={3}
                placeholder="Enter meal description"
              />
            </div>

            {/* Preparation Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preparation Method
              </label>
              <textarea
                value={formData.preparationMethod}
                onChange={(e) =>
                  handleInputChange("preparationMethod", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                rows={4}
                placeholder="Enter step-by-step preparation instructions"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => handleInputChange("image", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="https://example.com/meal-image.jpg"
              />
            </div>

            {/* Ingredients */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Ingredients
                </h4>
                <button
                  type="button"
                  onClick={addIngredient}
                  className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                >
                  <HiPlus className="w-4 h-4" />
                  Add Ingredient
                </button>
              </div>
              <div className="space-y-3">
                {formData.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="text"
                      value={ingredient}
                      onChange={(e) => updateIngredient(index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder={`Ingredient ${index + 1}`}
                    />
                    {formData.ingredients.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeIngredient(index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <HiTrash className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Form Actions */}
            <div className="flex gap-4 px-8 pb-8 pt-6 border-t border-gray-100 mx-8">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="
                  flex-1 px-6 py-3 text-gray-700 font-semibold rounded-2xl
                  border-2 border-gray-200 hover:border-gray-300
                  transition-all duration-300 hover:shadow-md
                  hover:bg-gray-50 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !formData.name.trim()}
                className="
                  flex-1 px-6 py-3 text-white font-bold rounded-2xl
                  transition-all duration-300 hover:shadow-lg
                  transform hover:scale-105 active:scale-95
                  bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                  hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                "
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"></span>
                    Saving...
                  </>
                ) : initialValues ? (
                  "✏️ Update Meal"
                ) : (
                  "✨ Create Meal"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MealModal;
