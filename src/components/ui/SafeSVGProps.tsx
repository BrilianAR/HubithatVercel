// SafeSVG.tsx
import React from "react";

interface SafeSVGProps {
  svgContent?: string;
  altText?: string;
}

const SafeSVG: React.FC<SafeSVGProps> = ({ svgContent, altText }) => {
  if (!svgContent) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-500">
        {altText ?? "SVG tidak ditemukan"}
      </div>
    );
  }

  return (
    <div
      className="h-full w-full"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default SafeSVG;
