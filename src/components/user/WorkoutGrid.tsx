/**
 * Workout Grid Component with Modal
 * Displays workouts in a responsive 3-column grid
 */

import React, { useState } from "react";
import WorkoutCard, { type Workout } from "./WorkoutCard";
import { HiX, HiClock, HiFire, HiCheckCircle, HiPlay } from "react-icons/hi";

interface WorkoutGridProps {
  workouts: Workout[];
}

const WorkoutGrid: React.FC<WorkoutGridProps> = ({ workouts }) => {
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = (workout: Workout) => {
    setSelectedWorkout(workout);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedWorkout(null), 300);
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
      {/* Workouts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            onShowMore={handleShowMore}
          />
        ))}
      </div>

      {/* Workout Details Modal */}
      {isModalOpen && selectedWorkout && (
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
                  src={selectedWorkout.image}
                  alt={selectedWorkout.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop";
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
                    {selectedWorkout.title}
                  </h2>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold flex items-center gap-2">
                      <HiClock className="w-5 h-5" />
                      {selectedWorkout.duration} minutes
                    </span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold flex items-center gap-2">
                      <HiFire className="w-5 h-5" />
                      {selectedWorkout.calories} calories
                    </span>
                    <span
                      className={`px-4 py-2 backdrop-blur-md rounded-full text-white font-semibold
                      ${
                        selectedWorkout.difficulty === "beginner"
                          ? "bg-green-500/80"
                          : selectedWorkout.difficulty === "intermediate"
                          ? "bg-yellow-500/80"
                          : "bg-red-500/80"
                      }`}
                    >
                      {selectedWorkout.difficulty.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    About This Workout
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedWorkout.fullDescription ||
                      selectedWorkout.description}
                  </p>
                </div>

                {/* Exercises List */}
                {selectedWorkout.exercises &&
                  selectedWorkout.exercises.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Exercises Included
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedWorkout.exercises.map((exercise, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                          >
                            <HiCheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-800 font-medium">
                              {exercise}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Action Button */}
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
                      bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                      hover:shadow-blue-500/25
                      flex items-center justify-center gap-2
                    "
                  >
                    <HiPlay className="w-5 h-5" /> Start Workout
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

export default WorkoutGrid;
