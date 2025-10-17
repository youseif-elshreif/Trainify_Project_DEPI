import React from "react";
import { HiLightningBolt } from "react-icons/hi";
import { FaDumbbell } from "react-icons/fa";
import StatCard from "../../shared/StatCard";

const AboutStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6 pt-6">
      <StatCard
        icon={HiLightningBolt}
        value="10K+"
        label="Active Users"
        gradient="from-[#FF6B35] to-[#e55a2b]"
      />
      <StatCard
        icon={FaDumbbell}
        value="50K+"
        label="Workouts Completed"
        gradient="from-[#2BC48A] to-[#22a76f]"
      />
    </div>
  );
};

export default AboutStats;
