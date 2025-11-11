import React from "react";
import { HiExclamationCircle, HiX, HiInformationCircle } from "react-icons/hi";

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  variant?: "danger" | "warning" | "info";
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title = "Confirm Action",
  description = "Are you sure you want to proceed with this action?",
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "danger",
}) => {
  // Handle Escape key to close dialog
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        onCancel();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when dialog is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, onCancel]);

  if (!open) return null;

  const variantStyles = {
    danger: {
      icon: "text-red-500",
      iconBg: "bg-red-50",
      button: "primary" as const,
    },
    warning: {
      icon: "text-yellow-500",
      iconBg: "bg-yellow-50",
      button: "primary" as const,
    },
    info: {
      icon: "text-blue-500",
      iconBg: "bg-blue-50",
      button: "primary" as const,
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Enhanced Backdrop */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-lg"
        onClick={onCancel}
      />

      {/* Dialog Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="
          bg-white w-full max-w-md rounded-3xl shadow-2xl
          transform transition-all duration-500 scale-100 opacity-100
          border border-gray-100 overflow-hidden
          animate-in slide-in-from-bottom-4 fade-in-0
        "
          style={{
            animation: "modalSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Enhanced Header */}
          <div className="p-8 pb-6">
            <div className="flex items-start gap-5">
              {/* Enhanced Icon */}
              <div
                className={`
                w-16 h-16 rounded-2xl ${styles.iconBg} flex items-center justify-center flex-shrink-0
                shadow-lg border-4 border-white
              `}
              >
                <HiExclamationCircle className={`w-8 h-8 ${styles.icon}`} />
              </div>

              {/* Enhanced Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={onCancel}
              className="
                absolute top-4 right-4 z-10 p-3 rounded-xl 
                hover:bg-gray-100 transition-all duration-200 
                hover:scale-110 flex-shrink-0 cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-gray-300
              "
              aria-label="Close dialog"
              tabIndex={0}
            >
              <HiX className="w-6 h-6 text-gray-500 hover:text-gray-700" />
            </button>
          </div>

          {/* Enhanced Actions */}
          <div className="flex gap-4 px-8 pb-8 pt-4 border-t border-gray-100 mx-8">
            <button
              onClick={onCancel}
              className="
                flex-1 px-6 py-3 text-gray-700 font-semibold rounded-2xl
                border-2 border-gray-200 hover:border-gray-300
                transition-all duration-300 hover:shadow-md
                hover:bg-gray-50 active:scale-95
              "
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              className={`
                flex-1 px-6 py-3 text-white font-bold rounded-2xl
                transition-all duration-300 hover:shadow-lg
                transform hover:scale-105 active:scale-95
                ${
                  variant === "danger"
                    ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:shadow-red-500/25"
                    : variant === "warning"
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 hover:shadow-yellow-500/25"
                    : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-blue-500/25"
                }
              `}
            >
              {variant === "danger" ? (
                <>
                  <HiExclamationCircle className="w-4 h-4 inline-block mr-1" />
                  {confirmText}
                </>
              ) : variant === "warning" ? (
                <>
                  <HiExclamationCircle className="w-4 h-4 inline-block mr-1" />
                  {confirmText}
                </>
              ) : (
                <>
                  <HiInformationCircle className="w-4 h-4 inline-block mr-1" />
                  {confirmText}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
