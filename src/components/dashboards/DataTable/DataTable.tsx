import React, { useMemo } from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import Actions from "./Actions";
import EmptyState from "./EmptyState";
import Pagination from "./Pagination";
import type {
  Column,
  ActionsConfig,
  PaginationConfig,
  SortDirection,
} from "./types";

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  actions?: ActionsConfig<T>;
  rowKey?: string;
  loading?: boolean;
  onSort?: (colKey: string, direction: SortDirection) => void;
  pagination?: PaginationConfig;
  selectable?: boolean;
  compact?: boolean;
}

const DataTable = <T extends Record<string, unknown>>({
  columns,
  data,
  actions,
  rowKey = "id",
  loading = false,
  onSort,
  pagination,
  selectable = false,
  compact = false,
}: DataTableProps<T>) => {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
    new Set()
  );
  const [sortConfig, setSortConfig] = React.useState<{
    key: string;
    direction: SortDirection;
  } | null>(null);

  // Filter visible columns
  const visibleColumns = useMemo(
    () => columns.filter((col) => col.visible !== false),
    [columns]
  );

  // Add actions column if needed
  const allColumns = useMemo(() => {
    const cols = [...visibleColumns];
    if (
      actions &&
      (actions.showEdit || actions.showDelete || actions.showPreview)
    ) {
      cols.push({
        key: "__actions",
        title: "Actions",
        align: "right" as const,
        width: "120px",
      });
    }
    return cols;
  }, [visibleColumns, actions]);

  const handleSort = (column: Column<T>) => {
    if (!column.sortable || !onSort) return;

    const direction: SortDirection =
      sortConfig?.key === column.key && sortConfig?.direction === "asc"
        ? "desc"
        : "asc";

    setSortConfig({ key: column.key, direction });
    onSort(column.key, direction);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = data.map((row) => String(row[rowKey]));
      setSelectedRows(new Set(allIds));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedRows(newSelected);
  };

  const isAllSelected = data.length > 0 && selectedRows.size === data.length;
  const isIndeterminate =
    selectedRows.size > 0 && selectedRows.size < data.length;

  // Loading skeleton
  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="border-b border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4">
            {Array.from({ length: allColumns.length }).map((_, colIndex) => (
              <div key={colIndex} className="h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  if (loading) {
    return (
      <div className="glass rounded-2xl border border-white/20 overflow-hidden">
        <LoadingSkeleton />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="glass rounded-2xl border border-white/20 overflow-hidden">
        <EmptyState
          title="No data available"
          description="There are no items to display in this table."
        />
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl border border-white/20 overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full" role="table">
          {/* Header */}
          <thead className="bg-gray-50/50 border-b border-gray-200">
            <tr>
              {selectable && (
                <th className="w-12 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    ref={(el) => {
                      if (el) el.indeterminate = isIndeterminate;
                    }}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-gray-300 text-[#FF6B35] focus:ring-[#FF6B35]"
                  />
                </th>
              )}

              {allColumns.map((column) => (
                <th
                  key={column.key}
                  className={`
                    px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
                    ${
                      column.sortable
                        ? "cursor-pointer hover:bg-gray-100/50"
                        : ""
                    }
                    ${column.align === "center" ? "text-center" : ""}
                    ${column.align === "right" ? "text-right" : ""}
                    ${compact ? "px-2 py-2" : ""}
                  `}
                  style={{ width: column.width }}
                  onClick={() => handleSort(column)}
                  aria-sort={
                    sortConfig?.key === column.key
                      ? sortConfig.direction === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <div className="flex items-center gap-1">
                    <span>{column.title}</span>
                    {column.sortable && (
                      <div className="flex flex-col">
                        <HiChevronUp
                          className={`w-3 h-3 ${
                            sortConfig?.key === column.key &&
                            sortConfig?.direction === "asc"
                              ? "text-[#FF6B35]"
                              : "text-gray-300"
                          }`}
                        />
                        <HiChevronDown
                          className={`w-3 h-3 -mt-1 ${
                            sortConfig?.key === column.key &&
                            sortConfig?.direction === "desc"
                              ? "text-[#FF6B35]"
                              : "text-gray-300"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-gray-200">
            {data.map((row) => {
              const id = String(row[rowKey]);
              const isSelected = selectedRows.has(id);

              return (
                <tr
                  key={id}
                  className={`
                    hover:bg-gray-50/50 transition-colors
                    ${isSelected ? "bg-blue-50/50" : ""}
                  `}
                >
                  {selectable && (
                    <td className="w-12 px-4 py-3">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={(e) => handleSelectRow(id, e.target.checked)}
                        className="rounded border-gray-300 text-[#FF6B35] focus:ring-[#FF6B35]"
                      />
                    </td>
                  )}

                  {visibleColumns.map((column) => (
                    <td
                      key={column.key}
                      className={`
                        px-4 py-3 text-sm text-gray-900
                        ${column.align === "center" ? "text-center" : ""}
                        ${column.align === "right" ? "text-right" : ""}
                        ${compact ? "px-2 py-2" : ""}
                      `}
                    >
                      {column.render
                        ? column.render(row)
                        : String(row[column.key] ?? "")}
                    </td>
                  ))}

                  {actions && (
                    <td className={`px-4 py-3 ${compact ? "px-2 py-2" : ""}`}>
                      <Actions row={row} config={actions} />
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && <Pagination config={pagination} />}
    </div>
  );
};

export default DataTable;
