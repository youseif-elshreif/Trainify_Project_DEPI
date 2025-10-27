import { HiUsers, HiCube, HiDocumentText, HiAcademicCap } from "react-icons/hi";
import type { OverviewCard } from "../components/dashboards/OverviewCards";

// Types
export interface Supplement {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description?: string;
  status: "active" | "inactive";
  createdAt: string;
}

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
    id: "supplements",
    title: "Supplements",
    value: 86,
    delta: "+5.2%",
    icon: <HiCube className="w-5 h-5" />,
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

// Supplements Data
export const supplements: Supplement[] = [
  {
    id: "1",
    name: "Whey Protein Pro",
    category: "protein",
    price: 49.99,
    stock: 120,
    description: "High-quality whey protein concentrate for muscle building",
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "BCAA Energy",
    category: "amino-acids",
    price: 29.99,
    stock: 85,
    description: "Branched-chain amino acids with natural caffeine for energy",
    status: "active",
    createdAt: "2024-01-20",
  },
  {
    id: "3",
    name: "Pre-Workout Max",
    category: "pre-workout",
    price: 39.99,
    stock: 60,
    description: "Maximum energy pre-workout formula with creatine",
    status: "active",
    createdAt: "2024-02-01",
  },
  {
    id: "4",
    name: "Omega-3 Fish Oil",
    category: "health",
    price: 24.99,
    stock: 150,
    description: "Pure omega-3 fatty acids for heart and brain health",
    status: "active",
    createdAt: "2024-02-10",
  },
  {
    id: "5",
    name: "Creatine Monohydrate",
    category: "performance",
    price: 19.99,
    stock: 200,
    description: "Pure creatine monohydrate for strength and power",
    status: "active",
    createdAt: "2024-02-15",
  },
  {
    id: "6",
    name: "Casein Protein",
    category: "protein",
    price: 54.99,
    stock: 45,
    description: "Slow-digesting protein for overnight muscle recovery",
    status: "inactive",
    createdAt: "2024-01-30",
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
