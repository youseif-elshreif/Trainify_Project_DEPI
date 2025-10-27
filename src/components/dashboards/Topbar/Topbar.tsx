import React, { useState, useCallback } from "react";
import { HiSearch, HiPlus, HiMenu } from "react-icons/hi";
import { Button } from "../../shared";
import { useLayout } from "../Layout/useLayout";

interface SearchConfig {
  placeholder?: string;
  onSearch: (query: string) => void;
}

interface TopbarProps {
  title?: string;
  search?: SearchConfig;
  onAdd?: () => void;
}

const Topbar: React.FC<TopbarProps> = ({
  title = "Dashboard",
  search,
  onAdd,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setMobileSidebarOpen } = useLayout();

  // Debounced search handler
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchQuery(value);

      if (search?.onSearch) {
        // Simple debounce implementation
        const timeoutId = setTimeout(() => {
          search.onSearch(value);
        }, 300);

        return () => clearTimeout(timeoutId);
      }
    },
    [search]
  );

  return (
    <header className="glass border-b border-white/20 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Open sidebar"
            >
              <HiMenu className="w-5 h-5 text-gray-600" />
            </button>

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

            {/* User menu placeholder */}
            <div className="flex items-center gap-2 ml-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] flex items-center justify-center">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-gray-900">Admin</p>
                <p className="text-xs text-gray-500">admin@trainify.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
