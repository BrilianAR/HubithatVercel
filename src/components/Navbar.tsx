import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../libs/utils";
import hubithat from "../assets/hubithat.png"
import hubithatLogo from "../assets/hubithat-logo.png"

import { Button } from "../components/LoginComponen/Button";
import { Checkbox } from "../components/LoginComponen/Checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/LoginComponen/Dialog";
import { Input } from "../components/LoginComponen/Input";
import { Label } from "../components/LoginComponen/Label";
import { useId } from "react";


const menuItems = [
  { name: "Our Product", href: "/product" },
  { name: "About us", href: "/about-us" },
  { name: "Partnership", href: "/partnership" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const id = useId();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  // Check if current path is home
  const isHomePage = location.pathname === "/" || location.pathname === "/Home";

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set isScrolled state based on scroll position
      setIsScrolled(currentScrollY > 50);
      
      // Determine if scrolling up or down
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide the navbar
        setVisible(false);
      } else {
        // Scrolling up - show the navbar
        setVisible(true);
      }
      
      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Determine text color based on page and scroll position
  const textColor = isHomePage && !isScrolled ? "text-white" : "text-black";

  return (
    <header>
      <nav className={cn(
        "fixed z-20 w-full md:mt-3 px-4 transition-transform duration-300",
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}>
        <div
          className={cn(
            "mx-auto max-w-7xl transition-all duration-400",
            isScrolled ? (menuOpen ? "px-5 mt-3" : "mt-3 px-5 lg:px-8") : "px-0", // Atur padding berdasarkan scroll dan menu
            isScrolled ? "bg-background/30 rounded-2xl border backdrop-blur-lg" : "",
            textColor // Apply dynamic text color
          )}
        >

          <div className="flex items-center justify-between py-4 lg:px-0">
            {/* Logo */}
            <Link to="/" className="no-underline">
              <img src={hubithat} alt="Hubithat" className="w-25 md:w-36 lg:w-40" />
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
              {/* Login */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="mr-2">Login Now</Button>
                </DialogTrigger>
                <DialogContent>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
                      aria-hidden="true"
                    >
                      <img src={hubithatLogo} alt="Hubithat" className="w-20" />

                    </div>
                    <DialogHeader>
                      <DialogTitle className="sm:text-center">Welcome back</DialogTitle>
                      <DialogDescription className="sm:text-center">
                        Enter your credentials to login to your account.
                      </DialogDescription>
                    </DialogHeader>
                  </div>

                  <form className="space-y-5">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor={`${id}-email`}>Email</Label>
                        <Input id={`${id}-email`} placeholder="hi@yourcompany.com" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`${id}-password`}>Password</Label>
                        <Input
                          id={`${id}-password`}
                          placeholder="Enter your password"
                          type="password"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Checkbox id={`${id}-remember`} />
                        <Label htmlFor={`${id}-remember`} className="font-normal text-muted-foreground">
                          Remember me
                        </Label>
                      </div>
                      <a className="text-sm underline hover:no-underline" href="#">
                        Forgot password?
                      </a>
                    </div>
                    <Button type="button" className="w-full">
                      Login
                    </Button>
                  </form>

                  <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                    <span className="text-xs text-muted-foreground">Or</span>
                  </div>

                  <Button variant="outline">Login with Google</Button>
                </DialogContent>
              </Dialog>

              {/* Registrasi */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Register Now</Button>
                </DialogTrigger>
                <DialogContent>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
                      aria-hidden="true"
                    >
                      <img src={hubithatLogo} alt="Hubithat" className="w-20" />
                    </div>
                    <DialogHeader>
                      <DialogTitle className="sm:text-center">Registration</DialogTitle>
                      <DialogDescription className="sm:text-center">
                        We just need a few details to get you started.
                      </DialogDescription>
                    </DialogHeader>
                  </div>

                  <form className="space-y-5">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor={`${id}-name`}>Full name</Label>
                        <Input id={`${id}-name`} placeholder="Matt Welsh" type="text" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`${id}-email`}>Email</Label>
                        <Input id={`${id}-email`} placeholder="hi@yourcompany.com" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`${id}-password`}>Password</Label>
                        <Input
                          id={`${id}-password`}
                          placeholder="Enter your password"
                          type="password"
                          required
                        />
                      </div>
                    </div>
                    <Button type="button" className="w-full">
                      Register
                    </Button>
                  </form>

                  <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                    <span className="text-xs text-muted-foreground">Or</span>
                  </div>

                  <Button variant="outline">Continue with Google</Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By signing up you agree to our{" "}
                    <a className="underline hover:no-underline" href="#">
                      Terms
                    </a>
                    .
                  </p>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden py-4 bg-white backdrop-blur-md rounded-lg mb-4">
              <div className="flex flex-col space-y-2">
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
                  {/* login */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full mb-2">Login Now</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <div className="flex flex-col items-center gap-2 px-2">
                        <div
                          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
                          aria-hidden="true"
                        >
                          <img src={hubithatLogo} alt="Hubithat" className="w-20" />
                        </div>
                        <DialogHeader>
                          <DialogTitle className="sm:text-center">Welcome back</DialogTitle>
                          <DialogDescription className="sm:text-center">
                            Enter your credentials to login to your account.
                          </DialogDescription>
                        </DialogHeader>
                      </div>

                      <form className="space-y-5">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor={`${id}-email`}>Email</Label>
                            <Input id={`${id}-email`} placeholder="hi@yourcompany.com" type="email" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`${id}-password`}>Password</Label>
                            <Input
                              id={`${id}-password`}
                              placeholder="Enter your password"
                              type="password"
                              required
                            />
                          </div>
                        </div>
                        <div className="flex justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Checkbox id={`${id}-remember`} />
                            <Label htmlFor={`${id}-remember`} className="font-normal text-muted-foreground">
                              Remember me
                            </Label>
                          </div>
                          <a className="text-sm underline hover:no-underline" href="#">
                            Forgot password?
                          </a>
                        </div>
                        <Button type="button" className="w-full">
                          Login
                        </Button>
                      </form>

                      <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                        <span className="text-xs text-muted-foreground">Or</span>
                      </div>

                      <Button variant="outline">Login with Google</Button>
                    </DialogContent>
                  </Dialog>

                  {/* Registrasi */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">Register Now</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
                          aria-hidden="true"
                        >
                          <img src={hubithatLogo} alt="Hubithat" className="w-20" />
                        </div>
                        <DialogHeader>
                          <DialogTitle className="sm:text-center">Registration</DialogTitle>
                          <DialogDescription className="sm:text-center">
                            We just need a few details to get you started.
                          </DialogDescription>
                        </DialogHeader>
                      </div>

                      <form className="space-y-5">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor={`${id}-name`}>Full name</Label>
                            <Input id={`${id}-name`} placeholder="Matt Welsh" type="text" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`${id}-email`}>Email</Label>
                            <Input id={`${id}-email`} placeholder="hi@yourcompany.com" type="email" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`${id}-password`}>Password</Label>
                            <Input
                              id={`${id}-password`}
                              placeholder="Enter your password"
                              type="password"
                              required
                            />
                          </div>
                        </div>
                        <Button type="button" className="w-full">
                          Register
                        </Button>
                      </form>

                      <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                        <span className="text-xs text-muted-foreground">Or</span>
                      </div>

                      <Button variant="outline">Continue with Google</Button>

                      <p className="text-center text-xs text-muted-foreground">
                        By signing up you agree to our{" "}
                        <a className="underline hover:no-underline" href="#">
                          Terms
                        </a>
                        .
                      </p>
                    </DialogContent>
                  </Dialog>
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