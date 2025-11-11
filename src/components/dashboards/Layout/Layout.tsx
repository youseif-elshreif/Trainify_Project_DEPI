import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import type { SidebarItem } from "../Sidebar/Sidebar";
import { LayoutContext } from "./context";
import type { LayoutContextType } from "./context";

interface SidebarConfig {
  title?: string;
  menuItems?: SidebarItem[];
}

interface LayoutProps {
  children: React.ReactNode;
  sidebarConfig?: SidebarConfig;
}

const Layout: React.FC<LayoutProps> = ({ children, sidebarConfig }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Get current path to determine active menu item
  const getCurrentPath = () => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "/dashboard";
  };

  const [currentPath, setCurrentPath] = useState(getCurrentPath);

  // Update active state when component mounts or path changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for browser back/forward navigation
    window.addEventListener("popstate", handleLocationChange);

    // Update on initial load
    handleLocationChange();

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const menuItems: SidebarItem[] = [
    {
      id: "dashboard",
      title: "Dashboard",
      href: "/dashboard",
      active: currentPath === "/dashboard",
    },
    {
      id: "meals",
      title: "Meal Plans",
      href: "/dashboard/meals",
      badge: 42,
      active: currentPath === "/dashboard/meals",
    },
    {
      id: "training",
      title: "Training",
      href: "/dashboard/training",
      badge: 28,
      active: currentPath === "/dashboard/training",
    },
    {
      id: "users",
      title: "Users",
      href: "/dashboard/users",
      badge: 1234,
      active: currentPath === "/dashboard/users",
    },
  ];

  const contextValue: LayoutContextType = {
    sidebarCollapsed,
    setSidebarCollapsed,
    mobileSidebarOpen,
    setMobileSidebarOpen,
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar
          items={sidebarConfig?.menuItems || menuItems}
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Mobile backdrop */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Main content */}
          <main className="flex-1 overflow-auto">
            <div className="min-h-full">{children}</div>
          </main>
        </div>
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;
