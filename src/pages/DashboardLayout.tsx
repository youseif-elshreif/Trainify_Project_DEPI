import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/dashboards/Layout";
import {
  HiHome,
  HiCube,
  HiDocumentText,
  HiAcademicCap,
  HiUsers,
} from "react-icons/hi";
import type { SidebarItem } from "../components/dashboards/Sidebar/Sidebar";

const DashboardLayout: React.FC = () => {
  // إعداد عناصر السايدبار مع الروابط الصحيحة
  const sidebarItems: SidebarItem[] = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: <HiHome className="w-5 h-5" />,
      href: "/dashboard",
      active: window.location.pathname === "/dashboard",
    },
    {
      id: "supplements",
      title: "Supplements",
      icon: <HiCube className="w-5 h-5" />,
      href: "/dashboard/supplements",
      badge: 86,
      active: window.location.pathname === "/dashboard/supplements",
    },
    {
      id: "meals",
      title: "Meal Plans",
      icon: <HiDocumentText className="w-5 h-5" />,
      href: "/dashboard/meals",
      badge: 42,
      active: window.location.pathname === "/dashboard/meals",
    },
    {
      id: "training",
      title: "Training",
      icon: <HiAcademicCap className="w-5 h-5" />,
      href: "/dashboard/training",
      badge: 28,
      active: window.location.pathname === "/dashboard/training",
    },
    {
      id: "users",
      title: "Users",
      icon: <HiUsers className="w-5 h-5" />,
      href: "/dashboard/users",
      badge: 1234,
      active: window.location.pathname === "/dashboard/users",
    },
  ];

  return (
    <Layout sidebarConfig={{ menuItems: sidebarItems }}>
      {/* هنا سيتم عرض المحتوى حسب الصفحة المختارة */}
      <Outlet />
    </Layout>
  );
};

export default DashboardLayout;
