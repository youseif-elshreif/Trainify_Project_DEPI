import React from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiDotsHorizontal,
} from "react-icons/hi";
import type { PaginationConfig } from "./types";

interface PaginationProps {
  config: PaginationConfig;
}

const Pagination: React.FC<PaginationProps> = ({ config }) => {
  const { page, pageSize, total, onChange } = config;
  const totalPages = Math.ceil(total / pageSize);
  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, total);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      } else if (page >= totalPages - 3) {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = page - 1; i <= page + 1; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between py-4 px-6 border-t border-gray-200">
      {/* Info */}
      <div className="text-sm text-gray-500">
        Showing <span className="font-medium">{startItem}</span> to{" "}
        <span className="font-medium">{endItem}</span> of{" "}
        <span className="font-medium">{total}</span> results
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-2">
        {/* Previous button */}
        <button
          onClick={() => onChange(page - 1)}
          disabled={page === 1}
          className="
            p-2 rounded-lg border border-gray-300 text-gray-500
            hover:bg-gray-50 hover:text-gray-700
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white
            transition-colors
          "
          aria-label="Previous page"
        >
          <HiChevronLeft className="w-4 h-4" />
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((pageNum, index) => {
            if (pageNum === "ellipsis") {
              return (
                <div
                  key={`ellipsis-${index}`}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <HiDotsHorizontal className="w-4 h-4 text-gray-400" />
                </div>
              );
            }

            const isActive = pageNum === page;
            return (
              <button
                key={pageNum}
                onClick={() => onChange(pageNum as number)}
                className={`
                  w-8 h-8 rounded-lg text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-50"
                  }
                `}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {/* Next button */}
        <button
          onClick={() => onChange(page + 1)}
          disabled={page === totalPages}
          className="
            p-2 rounded-lg border border-gray-300 text-gray-500
            hover:bg-gray-50 hover:text-gray-700
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white
            transition-colors
          "
          aria-label="Next page"
        >
          <HiChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
