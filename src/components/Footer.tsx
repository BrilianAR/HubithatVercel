"use client";

import React from "react";
import {
  Blocks,
  CodeXml,
  CreditCard,
  Handshake,
  Scale,
  Webhook,
  ArrowRight,

} from "lucide-react";
import { Twitter, Instagram, Facebook, Youtube } from "lucide-react";

import hubithat from "../assets/hubithat.png"

interface SocialLink {
  name: string;
  href: string;
}

interface FooterLink {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href?: string;
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
}

const Footer: React.FC<FooterProps> = ({ 
  brand, 
  socialLinks, 
  columns, 
  copyright, 
  generateTag,
  className,
  ...props 
}) => {
  return (
    <footer 
      className={`w-full bg-gray-100 pt-24 pb-2 ${className || ''}`}
      {...props}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        {/* Hero Section (from first footer) */}
        {brand.heroText && (
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-24 pb-16 border-b border-gray-700">
            <div className="flex flex-col max-w-lg">
              <h2 className="font-sans text-4xl md:text-5xl font-semibold text-gray-700 pb-5 leading-tight">
                {brand.heroText}
              </h2>
              <p className="font-sans text-lg text-gray-700 leading-relaxed pb-12 max-w-md">
                {brand.description}
              </p>
            </div>
            {brand.callToAction && (
              <a 
                href={brand.callToAction.href}
                className="px-8 py-3 bg-[var(--button-color)]  text-white font-semibold rounded-full text-lg hover:bg-[var(--bg-color)] hover:bg-opacity-80 transition-all flex items-center"
              >
                {brand.callToAction.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            )}
          </div>
        )}

        {/* Navigation Section (from second footer) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-8">
          <div className="lg:col-span-4">
            <img src={hubithat} alt="Hubithat" className="w-60 " />
            {/* <a href="#" className="text-xl font-semibold">{brand.name}</a> */}
            {!brand.heroText && (
              <p className="text-sm text-foreground/60 mt-2">{brand.description}</p>
            )}
            <div className="text-sm font-light text-foreground/55 mt-3.5 flex gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[var(--bg-color)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 mt-16 md:grid-cols-3 lg:col-span-8 lg:justify-items-end text-gray lg:mt-0">
            {columns.map(({ title, links }) => (
              <div key={title} className="last:mt-12 md:last:mt-0 text-[var(--bg-color)]">
                <h3 className="text-sm font-semibold">{title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {links.map(({ name, Icon, href }) => (
                    <li key={name}>
                      <a href={href || "#"} className="flex items-center text-sm hover:text-[var(--bg-color)] transition-colors">
                        <Icon className="mr-2 h-4 w-4" />
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section (combined) */}
        <div className="mt-20 border-t pt-6 pb-8 text-xs flex flex-col md:flex-row justify-between items-center">
          <p className="font-sans text-gray-700 opacity-80">
            {copyright || `Copyright ${new Date().getFullYear()} ${brand.name}. All rights reserved.`}
          </p>
          {generateTag && (
            <p className="font-sans text-gray-700 opacity-80 mt-2 md:mt-0">
              {generateTag}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

// Example usage
const FooterDemo = () => {
  return (
    <Footer
      brand={{ 
        name: "HubiThat", 
        description: "Discover HubiThat: Unique stays atop buildings, blending nature and modern comfort. Book your elevated escape today!",
        heroText: "Experience Green Roofs, Capsule Hotel Stays",
        callToAction: {
          text: "Book Now",
          href: "#book"
        }
      }}
      socialLinks={[
        { name: " ", href: "https://x.com/hubitat" },
        { name: " ", href: "https://instagram.com/hubitat" },
        { name: " ", href: "https://facebook.com/hubitat" },
      ]}
      columns={[
        { title: "Sosial Media", links: [
            { name: "Twitter", Icon: Twitter, href: "https://x.com/hubitat" },
            { name: "Instagram", Icon: Instagram, href: "https://instagram.com/hubitat" },
            { name: "Facebook", Icon: Facebook, href: "https://facebook.com/hubitat" },
            { name: "Youtube", Icon: Youtube, href: "https://youtube.com/hubitat" }
          ] },

        { title: "Services", links: [
            { name: "Rooftop Stays", Icon: Blocks, href: "#rooftop" },
            { name: "Pricing", Icon: CreditCard, href: "#pricing" },
            { name: "Locations", Icon: Webhook, href: "#locations" },
            { name: "Booking", Icon: CodeXml, href: "/booking" }
        ] },
        { title: "Legal", links: [
            { name: "Privacy Policy", Icon: Scale, href: "/legal/privacy" },
            { name: "Terms of Service", Icon: Handshake, href: "/legal/terms" }
        ] }
      ]}
      copyright="Copyright 2025 HubiThat. All rights reserved."
      generateTag=""
    />
  );
};

export default FooterDemo;