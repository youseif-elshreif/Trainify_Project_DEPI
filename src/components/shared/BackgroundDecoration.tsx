import React from "react";

interface BackgroundDecorationProps {
  variant?: "gradient" | "particles" | "both";
}

const BackgroundDecoration: React.FC<BackgroundDecorationProps> = ({
  variant = "gradient",
}) => {
  return (
    <>
      {(variant === "gradient" || variant === "both") && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/10 to-[#2BC48A]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#2BC48A]/10 to-[#FF6B35]/10 rounded-full blur-3xl"></div>
        </>
      )}

      {(variant === "particles" || variant === "both") && (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF6B35]/10 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2BC48A]/10 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      )}
    </>
  );
};

export default BackgroundDecoration;
