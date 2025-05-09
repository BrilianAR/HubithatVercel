// import React from "react";

const Button = ({ variant = "default", children, onClick }) => {
    const baseStyles = "px-4 py-2 rounded-md font-semibold transition-all duration-200";
    const variantStyles = variant === "outline"
        ? "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
        : "bg-blue-500 text-white hover:bg-blue-600";

    return (
        <button 
            className={`${baseStyles} ${variantStyles}`} 
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
