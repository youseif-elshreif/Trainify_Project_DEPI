import React from "react";
import { HiSearch, HiPlus, HiMenu, HiLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared";
import { useLayout } from "../Layout/useLayout";
import { useAuth } from "../../../context/AuthContext";

interface SearchConfig {
  placeholder?: string;
  onSearch: (query: string) => void;
}

interface TopbarProps {
  title?: string;
  search?: SearchConfig;
  onAdd?: () => void;
  hideMenuButton?: boolean;
}

const Topbar: React.FC<TopbarProps> = ({
  title = "Dashboard",
  search,
  onAdd,
  hideMenuButton = false,
}) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Use layout context only if available (when inside Layout component)
  let setMobileSidebarOpen: ((open: boolean) => void) | undefined;
  try {
    const layout = useLayout();
    setMobileSidebarOpen = layout.setMobileSidebarOpen;
  } catch {
    // Layout context not available - that's fine for standalone usage
    setMobileSidebarOpen = undefined;
  }

  // If search config is provided, a simple search UI could be added later.

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="glass border-b border-white/20 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button - only show if setMobileSidebarOpen is available and not hidden */}
            {setMobileSidebarOpen && !hideMenuButton && (
              <button
                onClick={() => setMobileSidebarOpen(true)}
                className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
                aria-label="Open sidebar"
              >
                <HiMenu className="w-5 h-5 text-gray-600" />
              </button>
            )}

            {/* Title */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Mobile search button */}
            {search && (
              <button
                className="sm:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
                aria-label="Search"
              >
                <HiSearch className="w-5 h-5 text-gray-600" />
              </button>
            )}

            {/* Add button */}
            {onAdd && (
              <Button
                variant="primary"
                size="sm"
                icon={<HiPlus className="w-4 h-4" />}
                iconPosition="left"
                onClick={onAdd}
                className="shadow-lg"
              >
                <span className="hidden sm:inline">Add New</span>
                <span className="sm:hidden">Add</span>
              </Button>
            )}

            {/* Logout Button */}
            <Button
              variant="secondary"
              size="sm"
              icon={<HiLogout className="w-4 h-4" />}
              iconPosition="left"
              onClick={handleLogout}
              className="shadow-lg"
            >
              <span className="hidden sm:inline">Logout</span>
            </Button>

            {/* User menu */}
            <div className="flex items-center gap-2 ml-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {user?.name.charAt(0).toUpperCase() || "U"}
                </span>
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-gray-900">
                  {user?.name || "User"}
                </p>
                <p className="text-xs text-gray-500">
                  {user?.email || "user@trainify.com"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
