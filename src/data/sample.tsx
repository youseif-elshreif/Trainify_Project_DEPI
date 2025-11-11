import { HiUsers, HiDocumentText, HiAcademicCap } from "react-icons/hi";
import type { OverviewCard } from "../components/dashboards/OverviewCards";

// Types
export interface MealPlan {
  id: string;
  name: string;
  type: "weight-loss" | "muscle-gain" | "maintenance";
  calories: number;
  duration: number; // days
  price: number;
  status: "active" | "inactive";
}

export interface Meal {
  id: string;
  name: string;
  calories: number;
  plan: "gold" | "platinum" | "diamond";
  description: string;
  preparationMethod: string;
  image: string;
  ingredients: string[];
  nutritionFacts: {
    protein: number;
    carbs: number;
    fats: number;
    fiber: number;
  };
  cookingTime: number; // minutes
  servings: number;
  difficulty: "easy" | "medium" | "hard";
  category: "breakfast" | "lunch" | "dinner" | "snack";
  status: "active" | "inactive";
  createdAt: string;
}

export interface TrainingProgram {
  id: string;
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: number; // weeks
  workoutsPerWeek: number;
  price: number;
  status: "active" | "inactive";
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "trainer" | "member";
  status: "active" | "inactive";
  joinedAt: string;
  lastActive: string;
}

// Overview Cards Data
export const overview: OverviewCard[] = [
  {
    id: "users",
    title: "Total Users",
    value: 1234,
    delta: "+12.5%",
    icon: <HiUsers className="w-5 h-5" />,
  },
  {
    id: "meals",
    title: "Meal Plans",
    value: 42,
    delta: "+8.1%",
    icon: <HiDocumentText className="w-5 h-5" />,
  },
  {
    id: "training",
    title: "Training Programs",
    value: 28,
    delta: "+3.7%",
    icon: <HiAcademicCap className="w-5 h-5" />,
  },
];

// Meal Plans Data
export const mealPlans: MealPlan[] = [
  {
    id: "1",
    name: "Fat Loss Accelerator",
    type: "weight-loss",
    calories: 1500,
    duration: 30,
    price: 79.99,
    status: "active",
  },
  {
    id: "2",
    name: "Muscle Builder Pro",
    type: "muscle-gain",
    calories: 2800,
    duration: 60,
    price: 129.99,
    status: "active",
  },
  {
    id: "3",
    name: "Balanced Lifestyle",
    type: "maintenance",
    calories: 2200,
    duration: 90,
    price: 99.99,
    status: "active",
  },
  {
    id: "4",
    name: "Quick Start Weight Loss",
    type: "weight-loss",
    calories: 1200,
    duration: 14,
    price: 39.99,
    status: "inactive",
  },
];

// Individual Meals Data
export const meals: Meal[] = [
  {
    id: "1",
    name: "Grilled Chicken & Quinoa Bowl",
    calories: 450,
    plan: "gold",
    description:
      "A protein-packed meal with grilled chicken breast, quinoa, and fresh vegetables",
    preparationMethod:
      "1. Season chicken breast with salt, pepper, and herbs\n2. Grill chicken for 6-8 minutes each side\n3. Cook quinoa according to package instructions\n4. Steam broccoli and carrots\n5. Combine all ingredients in a bowl\n6. Drizzle with olive oil and lemon juice",
    image: "/images/meals/chicken-quinoa-bowl.jpg",
    ingredients: [
      "200g chicken breast",
      "1 cup quinoa",
      "1 cup broccoli",
      "1/2 cup carrots",
      "2 tbsp olive oil",
      "1 lemon",
      "Salt and pepper to taste",
    ],
    nutritionFacts: {
      protein: 35,
      carbs: 40,
      fats: 12,
      fiber: 8,
    },
    cookingTime: 25,
    servings: 1,
    difficulty: "easy",
    category: "lunch",
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Salmon & Sweet Potato",
    calories: 520,
    plan: "platinum",
    description: "Wild-caught salmon with roasted sweet potato and asparagus",
    preparationMethod:
      "1. Preheat oven to 400°F (200°C)\n2. Season salmon with herbs and lemon\n3. Cut sweet potato into cubes\n4. Roast sweet potato for 20 minutes\n5. Add salmon and asparagus to the pan\n6. Bake for another 12-15 minutes\n7. Serve with a side of mixed greens",
    image: "/images/meals/salmon-sweet-potato.jpg",
    ingredients: [
      "180g wild salmon fillet",
      "1 medium sweet potato",
      "200g asparagus",
      "2 tbsp avocado oil",
      "1 lemon",
      "Fresh dill",
      "Mixed greens",
    ],
    nutritionFacts: {
      protein: 32,
      carbs: 35,
      fats: 18,
      fiber: 6,
    },
    cookingTime: 35,
    servings: 1,
    difficulty: "medium",
    category: "dinner",
    status: "active",
    createdAt: "2024-01-18",
  },
  {
    id: "3",
    name: "Wagyu Steak & Truffle Risotto",
    calories: 680,
    plan: "diamond",
    description:
      "Premium wagyu steak with creamy truffle risotto and seasonal vegetables",
    preparationMethod:
      "1. Let wagyu come to room temperature\n2. Start risotto by sautéing onions in butter\n3. Gradually add warm stock to arborio rice\n4. Stir continuously for 18-20 minutes\n5. Season wagyu and sear in hot pan\n6. Cook to medium-rare (3-4 minutes per side)\n7. Finish risotto with truffle oil and parmesan\n8. Plate elegantly with microgreens",
    image: "/images/meals/wagyu-truffle-risotto.jpg",
    ingredients: [
      "200g wagyu beef steak",
      "1 cup arborio rice",
      "4 cups beef stock",
      "1 onion, diced",
      "100g parmesan cheese",
      "2 tbsp truffle oil",
      "Butter",
      "Microgreens for garnish",
    ],
    nutritionFacts: {
      protein: 45,
      carbs: 42,
      fats: 28,
      fiber: 3,
    },
    cookingTime: 45,
    servings: 1,
    difficulty: "hard",
    category: "dinner",
    status: "active",
    createdAt: "2024-01-20",
  },
  {
    id: "4",
    name: "Greek Yogurt Parfait",
    calories: 280,
    plan: "gold",
    description: "Healthy breakfast with Greek yogurt, berries, and granola",
    preparationMethod:
      "1. Layer Greek yogurt in a glass\n2. Add mixed berries\n3. Sprinkle granola\n4. Drizzle with honey\n5. Repeat layers\n6. Top with fresh mint",
    image: "/images/meals/yogurt-parfait.jpg",
    ingredients: [
      "200g Greek yogurt",
      "1/2 cup mixed berries",
      "1/4 cup granola",
      "1 tbsp honey",
      "Fresh mint leaves",
    ],
    nutritionFacts: {
      protein: 20,
      carbs: 32,
      fats: 8,
      fiber: 5,
    },
    cookingTime: 5,
    servings: 1,
    difficulty: "easy",
    category: "breakfast",
    status: "active",
    createdAt: "2024-01-22",
  },
  {
    id: "5",
    name: "Tuna Poke Bowl",
    calories: 420,
    plan: "platinum",
    description:
      "Fresh sushi-grade tuna with rice, vegetables, and sesame dressing",
    preparationMethod:
      "1. Cut tuna into cubes\n2. Marinate in soy sauce and sesame oil\n3. Cook sushi rice\n4. Prepare vegetables (cucumber, avocado, edamame)\n5. Arrange in bowl\n6. Top with sesame seeds and nori",
    image: "/images/meals/tuna-poke-bowl.jpg",
    ingredients: [
      "180g sushi-grade tuna",
      "1 cup sushi rice",
      "1/2 avocado",
      "1/2 cucumber",
      "1/4 cup edamame",
      "Soy sauce",
      "Sesame oil",
      "Sesame seeds",
      "Nori sheets",
    ],
    nutritionFacts: {
      protein: 28,
      carbs: 38,
      fats: 14,
      fiber: 4,
    },
    cookingTime: 20,
    servings: 1,
    difficulty: "medium",
    category: "lunch",
    status: "active",
    createdAt: "2024-01-25",
  },
  {
    id: "6",
    name: "Lobster Thermidor",
    calories: 580,
    plan: "diamond",
    description: "Classic French lobster dish with rich cheese sauce and herbs",
    preparationMethod:
      "1. Steam lobster tails until cooked\n2. Remove meat and chop\n3. Make béchamel sauce with butter and flour\n4. Add cream, cheese, and seasonings\n5. Mix lobster with sauce\n6. Stuff back into shells\n7. Broil until golden\n8. Garnish with fresh herbs",
    image: "/images/meals/lobster-thermidor.jpg",
    ingredients: [
      "2 lobster tails",
      "2 tbsp butter",
      "2 tbsp flour",
      "1/2 cup cream",
      "50g gruyere cheese",
      "White wine",
      "Mustard",
      "Fresh herbs",
    ],
    nutritionFacts: {
      protein: 38,
      carbs: 8,
      fats: 22,
      fiber: 1,
    },
    cookingTime: 40,
    servings: 1,
    difficulty: "hard",
    category: "dinner",
    status: "active",
    createdAt: "2024-01-28",
  },
];

// Training Programs Data
export const trainingPrograms: TrainingProgram[] = [
  {
    id: "1",
    name: "Beginner Strength Foundation",
    level: "beginner",
    duration: 8,
    workoutsPerWeek: 3,
    price: 49.99,
    status: "active",
  },
  {
    id: "2",
    name: "Intermediate Power Building",
    level: "intermediate",
    duration: 12,
    workoutsPerWeek: 4,
    price: 79.99,
    status: "active",
  },
  {
    id: "3",
    name: "Advanced Competition Prep",
    level: "advanced",
    duration: 16,
    workoutsPerWeek: 6,
    price: 149.99,
    status: "active",
  },
  {
    id: "4",
    name: "Home Workout Essentials",
    level: "beginner",
    duration: 6,
    workoutsPerWeek: 4,
    price: 29.99,
    status: "inactive",
  },
];

// Users Data
export const users: User[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "member",
    status: "active",
    joinedAt: "2024-01-15",
    lastActive: "2024-03-10",
  },
  {
    id: "2",
    name: "Mike Chen",
    email: "mike.chen@example.com",
    role: "trainer",
    status: "active",
    joinedAt: "2023-11-20",
    lastActive: "2024-03-09",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    role: "member",
    status: "active",
    joinedAt: "2024-02-01",
    lastActive: "2024-03-08",
  },
  {
    id: "4",
    name: "David Thompson",
    email: "david.thompson@example.com",
    role: "admin",
    status: "active",
    joinedAt: "2023-08-15",
    lastActive: "2024-03-10",
  },
  {
    id: "5",
    name: "Lisa Wang",
    email: "lisa.wang@example.com",
    role: "member",
    status: "inactive",
    joinedAt: "2023-12-10",
    lastActive: "2024-02-15",
  },
];

// Helper functions
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getStatusBadge = (status: string) => {
  const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full";

  switch (status) {
    case "active":
      return `${baseClasses} bg-green-100 text-green-800`;
    case "inactive":
      return `${baseClasses} bg-red-100 text-red-800`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-800`;
  }
};

// User Dashboard Data
export interface TraineeInfo {
  fullName: string;
  phone: string;
  height: number;
  weight: number;
  age: number;
  gender: "male" | "female";
  email: string;
  joinedDate: string;
}

export interface UserWorkout {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  duration: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  calories: number;
  exercises: string[];
}

export interface UserMeal {
  id: string;
  name: string;
  description: string;
  image: string;
  calories: number;
  prepTime: number;
  servings: number;
  category: "breakfast" | "lunch" | "dinner" | "snack";
  ingredients: string[];
  instructions: string;
  nutrition: {
    protein: number;
    carbs: number;
    fats: number;
    fiber: number;
  };
}

export interface UserPlan {
  name: "Gold" | "Platinum" | "Diamond";
  duration: number;
  startDate: string;
  endDate: string;
  price: number;
  status: "active" | "expiring" | "expired";
  features: string[];
}

// Sample User Data
export const currentUser: TraineeInfo = {
  fullName: "Ahmed Mohamed",
  phone: "+20 123 456 7890",
  height: 178,
  weight: 82,
  age: 28,
  gender: "male",
  email: "ahmed.mohamed@trainify.com",
  joinedDate: "January 2024",
};

export const userWorkouts: UserWorkout[] = [
  {
    id: "1",
    title: "Full Body Strength Training",
    description:
      "A comprehensive workout targeting all major muscle groups for balanced strength development.",
    fullDescription:
      "This full-body strength training program is designed to build muscle mass and increase overall strength. Perfect for intermediate lifters looking to maximize their gains in minimal time. Each exercise is carefully selected to target multiple muscle groups for maximum efficiency.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    duration: 60,
    difficulty: "intermediate",
    calories: 450,
    exercises: [
      "Barbell Squats - 4 sets x 8-10 reps",
      "Bench Press - 4 sets x 8-10 reps",
      "Deadlifts - 3 sets x 6-8 reps",
      "Overhead Press - 3 sets x 10-12 reps",
      "Bent Over Rows - 4 sets x 10-12 reps",
      "Pull-ups - 3 sets to failure",
      "Planks - 3 sets x 60 seconds",
    ],
  },
  {
    id: "2",
    title: "HIIT Cardio Blast",
    description:
      "High-intensity interval training to torch calories and boost cardiovascular endurance.",
    fullDescription:
      "Get your heart pumping with this intense HIIT cardio workout. Alternate between maximum effort and active recovery to maximize fat burning and improve cardiovascular fitness. This workout is perfect for those short on time but wanting maximum results.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    duration: 30,
    difficulty: "advanced",
    calories: 400,
    exercises: [
      "Jumping Jacks - 45 seconds",
      "Burpees - 45 seconds",
      "Mountain Climbers - 45 seconds",
      "High Knees - 45 seconds",
      "Jump Squats - 45 seconds",
      "Sprint in Place - 45 seconds",
      "Rest - 15 seconds between exercises",
      "Repeat circuit 4 times",
    ],
  },
  {
    id: "3",
    title: "Yoga Flow for Flexibility",
    description:
      "Gentle yoga sequences to improve flexibility, balance, and mental clarity.",
    fullDescription:
      "This relaxing yoga flow is perfect for beginners and those looking to improve flexibility. Focus on breathing and mindful movement through various poses that will help you feel centered and energized.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    duration: 45,
    difficulty: "beginner",
    calories: 180,
    exercises: [
      "Sun Salutation A - 5 rounds",
      "Warrior Sequence - 3 sets each side",
      "Triangle Pose - Hold 1 minute each side",
      "Tree Pose - Hold 1 minute each side",
      "Pigeon Pose - Hold 2 minutes each side",
      "Seated Forward Fold - Hold 3 minutes",
      "Savasana - 5 minutes",
    ],
  },
  {
    id: "4",
    title: "Core Crusher Abs Workout",
    description:
      "Intense core workout targeting abs, obliques, and lower back for a strong midsection.",
    fullDescription:
      "Build a rock-solid core with this comprehensive abs workout. Targeting all areas of your midsection including upper abs, lower abs, obliques, and lower back for complete core development.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    duration: 25,
    difficulty: "intermediate",
    calories: 200,
    exercises: [
      "Crunches - 3 sets x 25 reps",
      "Russian Twists - 3 sets x 30 reps",
      "Leg Raises - 3 sets x 15 reps",
      "Bicycle Crunches - 3 sets x 30 reps",
      "Plank - 3 sets x 60 seconds",
      "Side Planks - 2 sets x 45 seconds each side",
      "Mountain Climbers - 3 sets x 30 reps",
    ],
  },
  {
    id: "5",
    title: "Upper Body Power",
    description:
      "Focus on building strength and definition in chest, back, shoulders, and arms.",
    fullDescription:
      "This upper body workout is designed to build muscle mass and strength in your chest, back, shoulders, and arms. Perfect for those looking to develop an impressive upper body physique.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    duration: 50,
    difficulty: "intermediate",
    calories: 380,
    exercises: [
      "Incline Dumbbell Press - 4 sets x 10-12 reps",
      "Lat Pulldowns - 4 sets x 10-12 reps",
      "Dumbbell Shoulder Press - 3 sets x 12 reps",
      "Dumbbell Rows - 4 sets x 10 reps each arm",
      "Bicep Curls - 3 sets x 12-15 reps",
      "Tricep Dips - 3 sets x 12-15 reps",
      "Face Pulls - 3 sets x 15 reps",
    ],
  },
  {
    id: "6",
    title: "Leg Day Destroyer",
    description:
      "Complete lower body workout for building powerful legs and glutes.",
    fullDescription:
      "Never skip leg day! This comprehensive lower body workout will help you build strong, powerful legs and glutes. Includes a mix of compound and isolation exercises for complete leg development.",
    image:
      "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?w=600&h=400&fit=crop",
    duration: 55,
    difficulty: "advanced",
    calories: 500,
    exercises: [
      "Back Squats - 5 sets x 6-8 reps",
      "Romanian Deadlifts - 4 sets x 8-10 reps",
      "Leg Press - 4 sets x 12-15 reps",
      "Walking Lunges - 3 sets x 20 steps",
      "Leg Curls - 3 sets x 12-15 reps",
      "Leg Extensions - 3 sets x 15 reps",
      "Calf Raises - 4 sets x 20 reps",
    ],
  },
];

export const userMeals: UserMeal[] = [
  {
    id: "1",
    name: "Protein Power Breakfast",
    description:
      "High-protein breakfast bowl to fuel your morning workouts and kickstart your metabolism.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop",
    calories: 520,
    prepTime: 15,
    servings: 1,
    category: "breakfast",
    ingredients: [
      "3 large eggs",
      "2 slices whole grain toast",
      "1 avocado, sliced",
      "1 cup spinach",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "1 tbsp feta cheese",
    ],
    instructions: `1. Heat olive oil in a pan over medium heat.
2. Add spinach and sauté until wilted (2-3 minutes).
3. Crack eggs into the pan and cook to your preference.
4. Toast the bread until golden brown.
5. Assemble: place eggs and spinach on toast, top with avocado slices and feta.
6. Season with salt and pepper. Serve immediately.`,
    nutrition: {
      protein: 32,
      carbs: 38,
      fats: 28,
      fiber: 12,
    },
  },
  {
    id: "2",
    name: "Grilled Chicken & Quinoa Bowl",
    description:
      "Balanced lunch packed with lean protein, complex carbs, and fresh vegetables.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
    calories: 580,
    prepTime: 30,
    servings: 1,
    category: "lunch",
    ingredients: [
      "200g chicken breast",
      "1 cup cooked quinoa",
      "1 cup mixed vegetables (broccoli, bell peppers, carrots)",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "2 cloves garlic, minced",
      "Fresh herbs (parsley, cilantro)",
      "Salt, pepper, paprika",
    ],
    instructions: `1. Season chicken breast with salt, pepper, paprika, and garlic.
2. Grill chicken for 6-7 minutes per side until fully cooked.
3. Steam or roast vegetables until tender-crisp.
4. Cook quinoa according to package instructions.
5. Assemble bowl: quinoa as base, add vegetables and sliced chicken.
6. Drizzle with olive oil and lemon juice.
7. Garnish with fresh herbs.`,
    nutrition: {
      protein: 48,
      carbs: 52,
      fats: 18,
      fiber: 8,
    },
  },
  {
    id: "3",
    name: "Salmon & Sweet Potato Dinner",
    description:
      "Nutrient-dense dinner rich in omega-3s, vitamins, and minerals for optimal recovery.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop",
    calories: 620,
    prepTime: 35,
    servings: 1,
    category: "dinner",
    ingredients: [
      "200g salmon fillet",
      "1 large sweet potato",
      "2 cups asparagus",
      "2 tbsp olive oil",
      "1 lemon",
      "2 cloves garlic",
      "Fresh dill",
      "Salt and pepper",
    ],
    instructions: `1. Preheat oven to 400°F (200°C).
2. Cut sweet potato into wedges, toss with 1 tbsp olive oil, salt, and pepper.
3. Roast sweet potato for 25-30 minutes until tender.
4. Season salmon with salt, pepper, garlic, and lemon juice.
5. Pan-sear salmon skin-side down for 4 minutes, flip and cook 3 more minutes.
6. Sauté asparagus in remaining olive oil for 5-6 minutes.
7. Plate all components and garnish with fresh dill and lemon wedges.`,
    nutrition: {
      protein: 42,
      carbs: 48,
      fats: 24,
      fiber: 10,
    },
  },
  {
    id: "4",
    name: "Greek Yogurt Parfait",
    description:
      "Protein-rich snack with probiotics, antioxidants, and natural energy.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
    calories: 280,
    prepTime: 5,
    servings: 1,
    category: "snack",
    ingredients: [
      "1 cup Greek yogurt (plain, non-fat)",
      "1/2 cup mixed berries",
      "2 tbsp granola",
      "1 tbsp honey",
      "1 tbsp chia seeds",
      "Fresh mint for garnish",
    ],
    instructions: `1. In a glass or bowl, add half the Greek yogurt as base.
2. Layer with half the berries and granola.
3. Add remaining yogurt.
4. Top with remaining berries, granola, and chia seeds.
5. Drizzle with honey.
6. Garnish with fresh mint. Serve immediately.`,
    nutrition: {
      protein: 24,
      carbs: 38,
      fats: 6,
      fiber: 6,
    },
  },
  {
    id: "5",
    name: "Turkey & Veggie Wrap",
    description:
      "Quick and portable lunch option loaded with lean protein and fresh vegetables.",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&h=400&fit=crop",
    calories: 420,
    prepTime: 10,
    servings: 1,
    category: "lunch",
    ingredients: [
      "1 large whole wheat tortilla",
      "150g sliced turkey breast",
      "2 tbsp hummus",
      "1/2 cup lettuce, shredded",
      "1/2 cup tomatoes, diced",
      "1/4 cucumber, sliced",
      "1/4 red onion, sliced",
      "2 tbsp feta cheese",
    ],
    instructions: `1. Lay tortilla flat on a clean surface.
2. Spread hummus evenly across the tortilla.
3. Layer turkey slices in the center.
4. Add lettuce, tomatoes, cucumber, and onion.
5. Sprinkle with feta cheese.
6. Fold in sides and roll tightly.
7. Cut in half diagonally. Serve immediately or wrap for later.`,
    nutrition: {
      protein: 38,
      carbs: 42,
      fats: 12,
      fiber: 8,
    },
  },
  {
    id: "6",
    name: "Overnight Oats Power Bowl",
    description:
      "Prep-ahead breakfast with slow-release energy and customizable toppings.",
    image:
      "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=600&h=400&fit=crop",
    calories: 380,
    prepTime: 5,
    servings: 1,
    category: "breakfast",
    ingredients: [
      "1/2 cup rolled oats",
      "1 cup almond milk",
      "1 scoop protein powder (vanilla)",
      "1 tbsp chia seeds",
      "1 banana, sliced",
      "2 tbsp almond butter",
      "1 tbsp dark chocolate chips",
      "Cinnamon to taste",
    ],
    instructions: `1. In a jar or container, combine oats, almond milk, protein powder, and chia seeds.
2. Stir well and refrigerate overnight (or minimum 4 hours).
3. In the morning, stir the oats mixture.
4. Top with banana slices, almond butter, and chocolate chips.
5. Sprinkle with cinnamon.
6. Enjoy cold or heat for 1-2 minutes in microwave.`,
    nutrition: {
      protein: 28,
      carbs: 48,
      fats: 18,
      fiber: 12,
    },
  },
];

export const userPlan: UserPlan = {
  name: "Platinum",
  duration: 6,
  startDate: "2024-09-01",
  endDate: "2025-03-01",
  price: 599,
  status: "active",
  features: [
    "Personalized workout plans",
    "Custom meal planning",
    "24/7 trainer support",
    "Progress tracking & analytics",
    "Access to premium content",
    "Monthly fitness assessments",
    "Nutrition guidance",
    "Community forum access",
    "Mobile app premium features",
    "Video exercise library",
    "Live virtual classes",
    "Priority customer support",
  ],
};
