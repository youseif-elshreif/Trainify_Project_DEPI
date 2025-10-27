import { useState } from "react";
import { HiPencil, HiEye, HiTrash, HiDotsVertical } from "react-icons/hi";
import type { ActionsConfig } from "./types";

interface ActionsProps<T> {
  row: T;
  config: ActionsConfig<T>;
}

const Actions = <T,>({ row, config }: ActionsProps<T>) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const actions = [
    {
      key: "preview",
      label: "Preview",
      icon: <HiEye className="w-4 h-4" />,
      onClick: config.onPreview,
      show: config.showPreview,
      className: "text-blue-600 hover:text-blue-700",
    },
    {
      key: "edit",
      label: "Edit",
      icon: <HiPencil className="w-4 h-4" />,
      onClick: config.onEdit,
      show: config.showEdit,
      className: "text-gray-600 hover:text-gray-700",
    },
    {
      key: "delete",
      label: "Delete",
      icon: <HiTrash className="w-4 h-4" />,
      onClick: config.onDelete,
      show: config.showDelete,
      className: "text-red-600 hover:text-red-700",
    },
  ];

  const visibleActions = actions.filter(
    (action) => action.show && action.onClick
  );

  if (visibleActions.length === 0) return null;

  // Desktop view - show individual buttons
  const DesktopActions = () => (
    <div className="hidden sm:flex items-center gap-2">
      {visibleActions.map((action) => (
        <button
          key={action.key}
          onClick={() => action.onClick?.(row)}
          className={`
            p-2 rounded-lg hover:bg-gray-50 transition-colors
            ${action.className}
          `}
          aria-label={action.label}
          {...config.actionButtonProps}
        >
          {action.icon}
        </button>
      ))}
    </div>
  );

  // Mobile view - show dropdown menu
  const MobileActions = () => (
    <div className="sm:hidden relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="p-2 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors"
        aria-label="More actions"
      >
        <HiDotsVertical className="w-4 h-4" />
      </button>

      {dropdownOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setDropdownOpen(false)}
          />

          {/* Dropdown menu */}
          <div
            className="
            absolute right-0 top-full mt-1 w-32 z-20
            glass border border-white/20 rounded-xl shadow-lg
            py-1
          "
          >
            {visibleActions.map((action) => (
              <button
                key={action.key}
                onClick={() => {
                  action.onClick?.(row);
                  setDropdownOpen(false);
                }}
                className={`
                  w-full flex items-center gap-2 px-3 py-2 text-sm
                  hover:bg-white/10 transition-colors text-left
                  ${action.className}
                `}
              >
                {action.icon}
                {action.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="flex justify-end">
      <DesktopActions />
      <MobileActions />
    </div>
  );
};

export default Actions;
