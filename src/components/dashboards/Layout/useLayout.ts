import { useContext } from "react";
import { LayoutContext } from "./context";

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a Layout component");
  }
  return context;
};
