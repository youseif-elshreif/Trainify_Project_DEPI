import { HiShoppingCart, HiCalculator } from "react-icons/hi";
import { FaDumbbell, FaUtensils } from "react-icons/fa";
import type { Service } from "./types";

export const servicesData: Service[] = [
  {
    icon: HiShoppingCart,
    title: "Supplements Store",
    description:
      "Premium supplements and nutrition products. Browse freely, login required for purchases.",
    color: "from-[#FF6B35] to-[#e55a2b]",
    hoverColor: "text-[#FF6B35]",
    bgGradient: "from-[#FF6B35]/20 via-transparent to-[#2BC48A]/20",
    delay: "0.1s",
    actionText: "Explore Store",
  },
  {
    icon: HiCalculator,
    title: "Smart Calculator",
    description:
      "Advanced nutrition and fitness calculators. Available to everyone, no login required.",
    color: "from-[#2BC48A] to-[#22a76f]",
    hoverColor: "text-[#2BC48A]",
    bgGradient: "from-[#2BC48A]/20 via-transparent to-[#FF6B35]/20",
    delay: "0.2s",
    actionText: "Try Calculator",
  },
  {
    icon: FaDumbbell,
    title: "Workouts",
    description:
      "Personalized workout plans and tracking. Premium feature requiring user registration.",
    color: "from-[#FF6B35] to-[#2BC48A]",
    hoverColor: "text-purple-400",
    bgGradient: "from-purple-500/20 via-transparent to-[#FF6B35]/20",
    delay: "0.3s",
    actionText: "Start Training",
  },
  {
    icon: FaUtensils,
    title: "Recipes",
    description:
      "Healthy recipes and meal planning. Access our nutrition database with membership.",
    color: "from-[#2BC48A] to-[#FF6B35]",
    hoverColor: "text-green-400",
    bgGradient: "from-green-500/20 via-transparent to-[#2BC48A]/20",
    delay: "0.4s",
    actionText: "View Recipes",
  },
];
