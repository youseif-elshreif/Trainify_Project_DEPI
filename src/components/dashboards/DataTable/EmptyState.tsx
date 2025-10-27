import React from "react";
import { HiDocumentText } from "react-icons/hi";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon = <HiDocumentText className="w-12 h-12" />,
  title = "No data found",
  description = "There are no items to display at the moment.",
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <div className="text-gray-400">{icon}</div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

      <p className="text-gray-500 text-center max-w-md mb-6">{description}</p>

      {action && <div>{action}</div>}
    </div>
  );
};

export default EmptyState;
