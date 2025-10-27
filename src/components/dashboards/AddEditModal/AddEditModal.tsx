import React, { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";

interface AddEditModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: Record<string, unknown>) => void;
  initialValues?: Record<string, unknown>;
  title?: string;
  fields?: FieldConfig[];
}

interface FieldConfig {
  name: string;
  label: string;
  type: "text" | "number" | "email" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

const defaultFields: FieldConfig[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    placeholder: "Enter name",
  },
  {
    name: "category",
    label: "Category",
    type: "select",
    required: true,
    options: [
      { value: "protein", label: "Protein" },
      { value: "amino-acids", label: "Amino Acids" },
      { value: "pre-workout", label: "Pre-Workout" },
      { value: "health", label: "Health" },
    ],
  },
  {
    name: "price",
    label: "Price",
    type: "number",
    required: true,
    placeholder: "0.00",
  },
  {
    name: "stock",
    label: "Stock",
    type: "number",
    required: true,
    placeholder: "0",
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Enter description",
  },
];

const AddEditModal: React.FC<AddEditModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialValues = {},
  title,
  fields = defaultFields,
}) => {
  const [values, setValues] = useState<Record<string, unknown>>(initialValues);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setValues(initialValues);
    }
  }, [open, initialValues]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onSubmit(values);
      onClose();
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (name: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  if (!open) return null;

  const isEdit = Object.keys(initialValues).length > 0;
  const modalTitle = title || (isEdit ? "Edit Item" : "Add New Item");

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Enhanced Backdrop */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="
          bg-white w-full max-w-lg rounded-3xl shadow-2xl
          transform transition-all duration-500 scale-100 opacity-100
          border border-gray-100 overflow-hidden
          animate-in slide-in-from-bottom-4 fade-in-0
        "
          style={{
            animation: "modalSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Enhanced Header */}
          <div className="relative bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] p-6 text-white">
            {/* Close button - positioned absolutely for better accessibility */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-3 rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
            >
              <HiX className="w-6 h-6 text-white" />
            </button>

            <div className="pr-16">
              <h3 className="text-xl font-bold mb-1">{modalTitle}</h3>
              <p className="text-white/80 text-sm">
                {isEdit
                  ? "Update the information below"
                  : "Fill in the details to create a new item"}
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg pointer-events-none"></div>
          </div>

          {/* Enhanced Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {fields.map((field) => (
              <div key={field.name} className="group">
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  {field.label}
                  {field.required && (
                    <span className="text-red-500 ml-1 text-lg">*</span>
                  )}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    value={String(values[field.name] || "")}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    required={field.required}
                    rows={4}
                    className={`
                      w-full px-4 py-3 border-2 border-gray-200 rounded-2xl
                      focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10 focus:border-[#FF6B35]
                      transition-all duration-300 resize-none text-gray-700
                      hover:border-gray-300 hover:shadow-sm
                      placeholder:text-gray-400
                      ${loading ? "input-shimmer bg-gray-50" : "bg-white"}
                    `}
                  />
                ) : field.type === "select" ? (
                  <select
                    value={String(values[field.name] || "")}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    required={field.required}
                    className="
                      w-full px-4 py-3 border-2 border-gray-200 rounded-2xl
                      focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10 focus:border-[#FF6B35]
                      transition-all duration-300 text-gray-700 bg-white
                      hover:border-gray-300 hover:shadow-sm cursor-pointer
                    "
                  >
                    <option value="" className="text-gray-400">
                      Select {field.label}
                    </option>
                    {field.options?.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="text-gray-700"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    value={String(values[field.name] || "")}
                    onChange={(e) =>
                      handleChange(
                        field.name,
                        field.type === "number"
                          ? Number(e.target.value)
                          : e.target.value
                      )
                    }
                    placeholder={field.placeholder}
                    required={field.required}
                    step={field.type === "number" ? "0.01" : undefined}
                    className="
                      w-full px-4 py-3 border-2 border-gray-200 rounded-2xl
                      focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10 focus:border-[#FF6B35]
                      transition-all duration-300 text-gray-700
                      hover:border-gray-300 hover:shadow-sm
                      placeholder:text-gray-400
                    "
                  />
                )}
              </div>
            ))}

            {/* Enhanced Actions */}
            <div className="flex gap-4 pt-6 border-t border-gray-100">
              <button
                type="button"
                onClick={onClose}
                className="
                  flex-1 px-6 py-3 text-gray-700 font-semibold rounded-2xl
                  border-2 border-gray-200 hover:border-gray-300
                  transition-all duration-300 hover:shadow-md
                  hover:bg-gray-50 active:scale-95
                "
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="
                  flex-1 px-6 py-3 text-white font-bold rounded-2xl
                  bg-gradient-to-r from-[#FF6B35] to-[#2BC48A]
                  hover:from-[#FF5722] hover:to-[#26A69A]
                  transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B35]/25
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transform hover:scale-105 active:scale-95
                  relative overflow-hidden
                "
              >
                {loading && (
                  <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <span className={loading ? "opacity-0" : "opacity-100"}>
                  {isEdit ? "✨ Update" : "🚀 Create"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditModal;
