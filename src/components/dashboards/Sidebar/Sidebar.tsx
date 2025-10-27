import React from "react";
import { HiX } from "react-icons/hi";
import {
  HiHome,
  HiCube,
  HiDocumentText,
  HiAcademicCap,
  HiUsers,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

export interface SidebarItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
  href?: string;
  badge?: number;
  active?: boolean;
}

interface SidebarProps {
  items: SidebarItem[];
  collapsed?: boolean;
  onToggle?: () => void;
}

const defaultIcons: { [key: string]: React.ReactNode } = {
  dashboard: <HiHome className="w-5 h-5" />,
  supplements: <HiCube className="w-5 h-5" />,
  meals: <HiDocumentText className="w-5 h-5" />,
  training: <HiAcademicCap className="w-5 h-5" />,
  users: <HiUsers className="w-5 h-5" />,
};

const Sidebar: React.FC<SidebarProps> = ({
  items,
  collapsed = false,
  onToggle,
}) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`
          hidden lg:flex lg:flex-col
          ${collapsed ? "w-16" : "w-64"} 
          bg-white border-r border-gray-200 
          transition-all duration-300 ease-in-out
          relative
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {!collapsed && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="font-bold text-gray-900 text-lg">
                  Trainify
                </span>
              </div>
            )}
            <button
              onClick={onToggle}
              className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <HiChevronRight className="w-4 h-4 text-gray-600" />
              ) : (
                <HiChevronLeft className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {items.map((item) => {
            const icon = item.icon || defaultIcons[item.id] || (
              <HiHome className="w-5 h-5" />
            );

            return (
              <a
                key={item.id}
                href={item.href || "#"}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl 
                  transition-all duration-200 group
                  ${
                    item.active
                      ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                  ${collapsed ? "justify-center" : ""}
                `}
              >
                <span
                  className={`${
                    item.active
                      ? "text-white"
                      : "text-gray-500 group-hover:text-gray-700"
                  }`}
                >
                  {icon}
                </span>

                {!collapsed && (
                  <>
                    <span className="font-medium flex-1">{item.title}</span>
                    {item.badge && (
                      <span
                        className={`
                        text-xs px-2 py-1 rounded-full font-semibold
                        ${
                          item.active
                            ? "bg-white/20 text-white"
                            : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                        }
                      `}
                      >
                        {item.badge > 999 ? "999+" : item.badge}
                      </span>
                    )}
                  </>
                )}

                {collapsed && item.badge && (
                  <div className="absolute left-10 top-1 w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                )}
              </a>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          {!collapsed && (
            <div className="glass p-3 rounded-xl">
              <p className="text-xs text-gray-600 font-medium">
                Trainify Dashboard
              </p>
              <p className="text-xs text-gray-500">v1.0.0</p>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Sidebar - Hidden by default, shown via Layout context */}
      <aside className="lg:hidden fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-50 transform -translate-x-full transition-transform duration-300 ease-in-out">
        {/* Mobile Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-gray-900 text-lg">Trainify</span>
            </div>
            <button
              className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close sidebar"
            >
              <HiX className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {items.map((item) => {
            const icon = item.icon || defaultIcons[item.id] || (
              <HiHome className="w-5 h-5" />
            );

            return (
              <a
                key={`mobile-${item.id}`}
                href={item.href || "#"}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl 
                  transition-all duration-200 group
                  ${
                    item.active
                      ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                <span
                  className={`${
                    item.active
                      ? "text-white"
                      : "text-gray-500 group-hover:text-gray-700"
                  }`}
                >
                  {icon}
                </span>
                <span className="font-medium flex-1">{item.title}</span>
                {item.badge && (
                  <span
                    className={`
                    text-xs px-2 py-1 rounded-full font-semibold
                    ${
                      item.active
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                    }
                  `}
                  >
                    {item.badge > 999 ? "999+" : item.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
