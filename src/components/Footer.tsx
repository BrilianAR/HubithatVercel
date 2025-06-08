// Combined Footer Component with AppStore section
"use client";

import React from "react";
import {
  Blocks,
  ArrowRight,
  Twitter,
  Instagram, 
  Facebook, 
  Youtube,
  Building2,
  Users,
  Phone,
  // MapPin,
  Calendar,
  // FileText,
  // Shield
} from "lucide-react";

import hubithat from "../assets/LOGO HUTBITHAT update.png";
import app from "../assets/app-store.png";
import google from "../assets/google-play.png";
import { Link } from "react-router-dom";

interface SocialLink {
  name: string;
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface FooterLink {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string; // Made required instead of optional
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  brand: {
    name: string;
    description: string;
    callToAction?: {
      
      text: string;
      href: string;
    };
    heroText?: string;
  };
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  copyright?: string;
  generateTag?: string;
  showAppStoreLinks?: boolean;
}

const Footer: React.FC<FooterProps> = ({ 
  brand, 
  socialLinks, 
  columns, 
  copyright, 
  generateTag,
  showAppStoreLinks = false,
  className,
  ...props 
}) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className={`w-full bg-gray-100 pt-16 md:pt-24 pb-2 ${className || ''}`}
      {...props}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        {brand.heroText && (
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-24 pb-12 md:pb-16 border-b border-gray-300">
            <div className="flex flex-col max-w-lg">
              <h2 className="font-sans text-3xl md:text-5xl font-semibold text-gray-700 pb-3 md:pb-5 leading-tight">
                {brand.heroText}
              </h2>
              <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed pb-8 md:pb-12 max-w-md">
                {brand.description}
              </p>
            </div>
            {brand.callToAction && (
              <a 
                href={brand.callToAction.href}
                className="px-6 md:px-8 py-2.5 md:py-3 bg-[var(--button-color)] text-white font-semibold rounded-full text-base md:text-lg hover:bg-[var(--bg-color)] hover:bg-opacity-80 transition-all flex items-center"
              >
                {brand.callToAction.text}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            )}
          </div>
        )}

        {/* Navigation Section */}
        <div className="grid grid-cols-1  lg:grid-cols-12 mt-8">
          {/* Brand and Social Media */}
          <div className="lg:col-span-4 mb-10 lg:mb-0">
            <img src={hubithat} alt="Hubithat" className="w-48 md:w-60" />
            {!brand.heroText && (
              <p className="text-sm text-foreground/60 mt-2">{brand.description}</p>
            )}
            <div className="text-sm font-light text-foreground/55 mt-4 flex gap-5">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[var(--bg-color)] transition-colors"
                  aria-label={link.name}
                >
                  <link.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-10 sm:gap-y-0 lg:col-span-8 lg:justify-items-end text-gray">
            {columns.map(({ title, links }, index) => (
              <div key={title} className={`${index === 2 ? "col-span-2 sm:col-span-1 sm:last:justify-self-end" : ""}`}>
                <h3 className="text-sm font-semibold text-[var(--bg-color)] mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map(({ name, Icon, href }) => (
                    <li key={name}>
                      <Link 
                        to={href}
                        className="flex items-center text-sm text-gray-700 hover:text-[var(--bg-color)] transition-colors"
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* App Store Links Section */}
        {showAppStoreLinks && (
          <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t border-gray-300 py-6 gap-6 sm:gap-0">
            {/* Copyright Section */}
            <div className="text-xs order-2 sm:order-1 text-center sm:text-left">
              <p className="font-sans text-gray-700 opacity-80">
                {copyright || `Copyright ${currentYear} ${brand.name}. All rights reserved.`}
              </p>
              {generateTag && (
                <p className="font-sans text-gray-700 opacity-80 mt-1">
                  {generateTag}
                </p>
              )}
            </div>

            {/* App Download Section */}
            <div className="flex gap-3 order-1 sm:order-2">
              <a 
                href="https://apps.apple.com/app/hubithat-app/id1671474896" 
                target="_blank" 
                rel="noopener nofollow"
              >
                <img 
                  src={app} 
                  alt="Apple App Store Badge" 
                  className="h-10 w-auto"
                />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.hubithat.mobile" 
                target="_blank" 
                rel="noopener nofollow"
              >
                <img 
                  src={google}
                  alt="Google Playstore Badge" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

// Example usage with the combined features
const FooterDemo = () => {
  return (
    <Footer
      brand={{ 
        name: "HubiThat", 
        description: "Discover HubiThat: Unique stays atop buildings, blending nature and modern comfort. Book your elevated escape today!",
        heroText: "Experiencing Roofgarden, with Smart Capsule Hotel Stays",
        callToAction: {
          text: "Book Now",
          href: "/product"
        }
      }}
      socialLinks={[
        { name: "Twitter", Icon: Twitter, href: "https://x.com/hubitat" },
        { name: "Instagram", Icon: Instagram, href: "https://www.instagram.com/hubithat/" },
        { name: "Facebook", Icon: Facebook, href: "https://facebook.com/hubitat" },
        { name: "Youtube", Icon: Youtube, href: "https://youtube.com/hubitat" }
      ]}
      columns={[
        { title: "Company", links: [
            { name: "About Us", Icon: Building2, href: "/about-us" },
            { name: "Partnership", Icon: Users, href: "/partnership" },
            { name: "Contact", Icon: Phone, href: "/contact" }
          ] },
        { title: "Services", links: [
            { name: "Rooftop Stays", Icon: Blocks, href: "/product" },
            { name: "Booking", Icon: Calendar, href: "/booking" }
        ] }
      ]}
      copyright="Copyright 2025 HubiThat. All rights reserved."
      generateTag=""
      showAppStoreLinks={true} // Enable the App Store links section
    />
  );
};

export default FooterDemo;