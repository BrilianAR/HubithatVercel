import React from "react";
import { Link } from "react-router-dom";
import Button  from "./ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "../libs/utils";

const menuItems = [
    { name: "Features", href: "/features" },
    { name: "Solution", href: "/solution" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
];

const Navbar = () => {
    const [menuState, setMenuState] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <nav className="fixed z-20 w-full px-2">
                <div className={cn("mx-auto max-w-6xl px-6", isScrolled && "bg-background/50 rounded-2xl border backdrop-blur-lg")}>                    
                    <div className="flex items-center justify-between py-4">
                        <Link to="/" aria-label="home">Brand</Link>
                        <button onClick={() => setMenuState(!menuState)} className="lg:hidden">
                            {menuState ? <X /> : <Menu />}
                        </button>
                        <ul className={cn("hidden lg:flex space-x-6", menuState ? "block" : "hidden")}>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.href}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden lg:flex space-x-3">
                            <Button variant="outline">Login</Button>
                            <Button>Sign Up</Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
