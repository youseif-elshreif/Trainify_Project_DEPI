import { createContext } from "react";

export interface LayoutContextType {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
}

export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined
);
