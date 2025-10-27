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
