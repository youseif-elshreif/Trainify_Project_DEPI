import type { ButtonProps } from "../../shared/Button";

export interface Column<T> {
  key: string;
  title: string;
  render?: (row: T) => React.ReactNode;
  sortable?: boolean;
  width?: string;
  align?: "left" | "center" | "right";
  visible?: boolean;
}

export interface ActionsConfig<T> {
  showEdit?: boolean;
  showDelete?: boolean;
  showPreview?: boolean;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  onPreview?: (row: T) => void;
  actionButtonProps?: Partial<ButtonProps>;
}

export interface PaginationConfig {
  page: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
}

export type SortDirection = "asc" | "desc";
