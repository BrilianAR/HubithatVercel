import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../libs/utils";
import Button from "./ui/Button";
import hubithat from "../assets/hubithat.png"

const menuItems = [
  { name: "Our Product", href: "#products" },
  { name: "About us", href: "#about" },
  { name: "Partnership", href: "#feature" },
  { name: "Contact", href: "#testimonial" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className="fixed z-20 w-full mt-3 px-5">
        <div
        className={cn(
            "mx-auto max-w-7xl transition-all duration-400",
            isScrolled ? (menuOpen ? "px-5" : "px-5 lg:px-10") : "px-0", // Atur padding berdasarkan scroll dan menu
            isScrolled ? "bg-background/30 rounded-2xl border backdrop-blur-lg text-black" : "text-white"
        )}
        >

          <div className="flex items-center justify-between py-4 lg:px-0">
            {/* Logo */}
            <Link to="/" className="no-underline">
              {/* <p className="font-['Kumbh_Sans'] text-2xl font-bold leading-9">
                HubiThat
              </p> */}
              <img src={hubithat} alt="Hubithat" className="w-40" />
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center justify-center">
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.href}
                  className="no-underline z-10"
                >
                  <p className="font-['Kumbh_Sans'] text-base font-normal leading-7 px-4 py-2">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex">
              <Link to="#contact" className="no-underline pr-3">
                <Button variant="outline" className="px-8 py-2 bg-green-600 rounded-full border-0 font-['Kumbh_Sans'] text-base font-semibold text-white min-h-[56px] hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition-colors">
                  Login Now
                </Button>
              </Link>
              <Link to="#contact" className="no-underline">
                <Button className=" py-2 bg-green-600 rounded-full border-0 font-['Kumbh_Sans'] text-base font-semibold text-white min-h-[56px] hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition-colors">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden py-4 bg-white backdrop-blur-md rounded-lg mb-4">
              <div className="flex flex-col space-y-2"> {/* Added px-4 here for mobile menu items */}
                {menuItems.map((item, index) => (
                  <Link 
                    key={index} 
                    to={item.href}
                    className="no-underline px-4 py-2 hover:bg-gray-800/30 rounded-md"
                    onClick={() => setMenuOpen(false)}
                  >
                    <p className="font-['Kumbh_Sans'] text-base font-normal text-black">
                      {item.name}
                    </p>
                  </Link>
                ))}
                <div className="pt-2 px-4">
                  <Link 
                    to="#contact" 
                    className="no-underline block mb-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    <button className="w-full px-6 py-2 rounded-[100px] font-['Kumbh_Sans'] font-semibold transition-all duration-200 border border-[var(--button-second)] text-[var(--button-second)] hover:bg-[var(--button-second)] hover:text-black">
                      Login Now
                    </button>
                  </Link>
                  <Link 
                    to="#contact" 
                    className="no-underline block"
                    onClick={() => setMenuOpen(false)}
                  >
                    <button className="w-full px-6 py-2 rounded-[100px] font-['Kumbh_Sans'] font-semibold transition-all duration-200 bg-[var(--button-color)] text-white hover:opacity-60">
                      Register Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;