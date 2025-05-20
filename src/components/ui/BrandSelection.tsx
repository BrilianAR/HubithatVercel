import React from 'react';

const BrandSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-16 md:pt-40 px-4 w-full max-w-7xl mx-auto">
      {/* Heading */}
      <span className="block w-full max-w-xl text-center mb-5">
        <p className="font-semibold text-sm md:text-lg text-gray-800 leading-5 md:leading-7 mb-4">
          Trusted by leading hospitality and sustainability-focused brands.
        </p>
      </span>

      {/* Logo Section */}
      <div className="flex flex-wrap justify-center items-center w-full gap-x-8 md:gap-x-24 gap-y-6 md:gap-y-12">
        <div className="flex flex-wrap justify-between items-center gap-3 md:gap-2 max-w-full md:max-w-6xl w-full">
          {/* Brand Logos */}
          <span className="text-base md:text-3xl font-bold text-gray-800 leading-tight">
            <p className="">GreenCo</p>
          </span>

          <span className="text-base md:text-3xl font-bold text-gray-800 leading-tight">
            <p className="">RoofTop</p>
          </span>

          <span className="text-base md:text-3xl font-bold text-gray-800 leading-tight">
            <p className="">EcoStay</p>
          </span>

          <span className="text-base md:text-3xl font-bold text-gray-800 leading-tight">
            <p className="">UrbanZen</p>
          </span>

          <span className="text-base md:text-3xl font-bold text-gray-800 leading-tight">
            <p className="">SkyHigh</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;