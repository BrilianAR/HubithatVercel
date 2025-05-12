import type { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
    variant?: "default" | "outline";
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ variant = "default", children, onClick }) => {
    const baseStyles =
        "px-6 py-4 rounded-[100px] font-['Kumbh_Sans'] font-semibold transition-all duration-200";
    const variantStyles =
        variant === "outline"
            ? "border border-[var(--button-second)] text-[var(--button-second)] hover:bg-[var(--button-second)] hover:text-black"
            : "bg-[var(--button-color)] text-white hover:bg-[var(--bg-color)] hover:bg-opacity-100";

    return (
        <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
