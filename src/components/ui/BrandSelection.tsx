import React from 'react';
// NOTE: Add these imports to your global CSS or index.css file

const BrandSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-25 px-4 w-full max-w-7xl mx-auto">
      {/* Heading */}
      <span className="block w-full max-w-xl text-center mb-5 font-['Kumbh_Sans']">
        <p className="font-semibold text-lg text-gray-800 leading-7 mb-5">
          Trusted by leading hospitality and sustainability-focused brands.
        </p>
      </span>

      {/* Logo Section */}
      <div className="flex flex-wrap justify-center items-center w-full gap-x-24 gap-y-12 mb-10">
        <div className="flex flex-wrap justify-between items-center gap-2 max-w-6xl w-full">
          {/* Brand Logos */}
          <span className="text-3xl font-bold text-gray-800 leading-tight">
            <p className="font-['Pacifico']">GreenCo</p>
          </span>
          
          <span className="text-3xl font-bold text-gray-800 leading-tight">
            <p className="font-['Abril_Fatface']">RoofTop</p>
          </span>
          
          <span className="text-3xl font-bold text-gray-800 leading-tight">
            <p className="font-['Great_Vibes']">EcoStay</p>
          </span>
          
          <span className="text-3xl font-bold text-gray-800 leading-tight">
            <p className="font-['Cardo']">UrbanZen</p>
          </span>
          
          <span className="text-3xl font-bold text-gray-800 leading-tight">
            <p className="font-['Architects_Daughter']">SkyHigh</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;