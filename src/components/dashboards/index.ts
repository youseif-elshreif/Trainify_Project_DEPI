// Dashboard Components - Reusable admin dashboard components following project patterns
export { default as Layout } from "./Layout";
export { default as Sidebar } from "./Sidebar";
export { default as Topbar } from "./Topbar";
export { default as OverviewCards } from "./OverviewCards";
export { default as DataTable } from "./DataTable";
export { default as AddEditModal } from "./AddEditModal";
export { default as ConfirmDialog } from "./ConfirmDialog";

// Re-export DataTable sub-components
export { Actions, EmptyState, Pagination } from "./DataTable";

// Re-export types
export type { SidebarItem } from "./Sidebar";
export type { OverviewCard } from "./OverviewCards";
export type {
  Column,
  ActionsConfig,
  PaginationConfig,
  SortDirection,
} from "./DataTable/types";

// Re-export Layout context hook
export { useLayout } from "./Layout/useLayout";
