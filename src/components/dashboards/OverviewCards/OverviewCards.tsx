import React from "react";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

export interface OverviewCard {
  id: string;
  title: string;
  value: string | number;
  delta?: string;
  icon?: React.ReactNode;
}

interface OverviewCardsProps {
  cards: OverviewCard[];
}

const OverviewCards: React.FC<OverviewCardsProps> = ({ cards }) => {
  const formatValue = (value: string | number): string => {
    if (typeof value === "number") {
      return value.toLocaleString();
    }
    return value;
  };

  const getDeltaInfo = (delta?: string) => {
    if (!delta) return null;

    const isPositive = delta.startsWith("+");
    const isNegative = delta.startsWith("-");

    return {
      isPositive,
      isNegative,
      value: delta,
      color: isPositive
        ? "text-green-600"
        : isNegative
        ? "text-red-600"
        : "text-gray-600",
      bgColor: isPositive
        ? "bg-green-50"
        : isNegative
        ? "bg-red-50"
        : "bg-gray-50",
      icon: isPositive ? (
        <HiTrendingUp className="w-3 h-3" />
      ) : isNegative ? (
        <HiTrendingDown className="w-3 h-3" />
      ) : null,
    };
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => {
        const deltaInfo = getDeltaInfo(card.delta);

        return (
          <div
            key={card.id}
            className="glass p-6 rounded-2xl hover-lift transition-all duration-300 border border-white/20"
          >
            {/* Header with icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {card.icon && (
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] flex items-center justify-center">
                    <div className="text-white">{card.icon}</div>
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Value */}
            <div className="mb-3">
              <p className="text-3xl font-black text-gray-900">
                {formatValue(card.value)}
              </p>
            </div>

            {/* Delta */}
            {deltaInfo && (
              <div className="flex items-center gap-1">
                <span
                  className={`
                  inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold
                  ${deltaInfo.color} ${deltaInfo.bgColor}
                `}
                >
                  {deltaInfo.icon}
                  {deltaInfo.value}
                </span>
                <span className="text-xs text-gray-500">vs last month</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OverviewCards;
