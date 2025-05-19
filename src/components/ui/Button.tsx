import { useNavigate } from "react-router-dom";
import type { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
    variant?: "default" | "outline";
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    href?: string; // Menambahkan prop href
}

const Button: React.FC<ButtonProps> = ({ variant = "default", children, onClick, href }) => {
    const navigate = useNavigate();
    const baseStyles =
        "px-4 py-2 rounded-[100px] font-semibold transition-all duration-200";
    const variantStyles =
        variant === "outline"
            ? "border border-[var(--button-second)] text-[var(--button-second)] hover:bg-[var(--button-second)] hover:text-black"
            : "bg-[var(--button-color)] text-white hover:bg-[var(--bg-color)] hover:bg-opacity-100";

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        if (onClick) onClick(event);
        if (href) navigate(href); // Arahkan ke URL menggunakan useNavigate
    };

    return (
        <button className={`${baseStyles} ${variantStyles}`} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
