import React from "react";
import { Field, ErrorMessage } from "formik";

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  as?: string;
  rows?: number;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  as,
  rows,
  className = "",
}) => {
  const baseInputStyles =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all";

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <Field
        type={type}
        name={name}
        as={as}
        rows={rows}
        className={`${baseInputStyles} ${
          as === "textarea" ? "resize-none" : ""
        }`}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default FormField;
