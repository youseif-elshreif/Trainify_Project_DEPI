/**
 * NavbarWrapper Component
 * Conditionally renders Navbar based on current route
 * Shows Navbar everywhere except admin dashboard pages
 */

import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuth } from "../../context/AuthContext";

const NavbarWrapper: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Hide Navbar on admin dashboard pages (paths starting with /dashboard)
  const isAdminDashboard = location.pathname.startsWith("/dashboard");

  // Don't show Navbar on admin dashboard pages
  if (isAdminDashboard) {
    return null;
  }

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  // For landing page, we need smooth scroll functionality
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      isLoggedIn={isAuthenticated}
      onScrollToSection={scrollToSection}
      forceScrolled={!isHomePage}
    />
  );
};

export default NavbarWrapper;
