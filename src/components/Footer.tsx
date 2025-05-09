"use client";

import React from "react";
import {
  Blocks,
  CodeXml,
  CreditCard,
  Handshake,
  Scale,
  Webhook,
} from "lucide-react";

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
  };
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  copyright?: string;
}

const Footer: React.FC<FooterProps> = ({ brand, socialLinks, columns, copyright }) => {
  return (
    <div className="pt-24">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#" className="text-xl font-semibold">{brand.name}</a>
            <p className="text-sm text-foreground/60">{brand.description}</p>
            <div className="text-sm font-light text-foreground/55 mt-3.5">
              {socialLinks.map((link, index) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 mt-16 md:grid-cols-3 lg:col-span-8 lg:justify-items-end lg:mt-0">
            {columns.map(({ title, links }) => (
              <div key={title} className="last:mt-12 md:last:mt-0">
                <h3 className="text-sm font-semibold">{title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {links.map(({ name, Icon, href }) => (
                    <li key={name}>
                      <a href={href || "#"} className="flex items-center text-sm">
                        <Icon className="mr-2" />
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {copyright && <div className="mt-20 border-t pt-6 pb-8 text-xs">{copyright}</div>}
      </div>
    </div>
  );
};

const FooterDemo = () => {
  return (
    <Footer
      brand={{ name: "webtics", description: "Track and monitor your website traffic." }}
      socialLinks={[
        { name: "Twitter", href: "https://x.com/raymethula" },
        { name: "Github", href: "https://github.com/serafimcloud" },
        { name: "Discord", href: "#" },
      ]}
      columns={[
        { title: "Product", links: [
            { name: "Features", Icon: Blocks, href: "#features" },
            { name: "Pricing", Icon: CreditCard, href: "#pricing" },
            { name: "Integrations", Icon: Webhook, href: "#integrations" },
            { name: "API Documentation", Icon: CodeXml, href: "/docs/api" }
        ] },
        { title: "Legal", links: [
            { name: "Privacy Policy", Icon: Scale, href: "/legal/privacy" },
            { name: "Terms of Service", Icon: Handshake, href: "/legal/terms" }
        ] }
      ]}
      copyright="webtics Inc. © 2024"
    />
  );
};

export default FooterDemo;
