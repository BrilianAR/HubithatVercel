import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import header from "../../assets/header.png";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center  pb-24 bg-[var(--bg-color)] bg-dark-green min-h-[550px]">
      {/* Hero Content Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center pt-[50px] md:pt-[100px] w-full max-w-[1200px] gap-[30px] md:gap-[50px] mt-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Image positioned first on mobile, second on desktop */}
        <motion.div 
          className="md:order-2 w-full flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img
            src={header}
            alt="Rooftop hotel with green space"
            className="w-full h-[300px] md:h-[550px] md:rounded-[20px] object-cover md:max-w-[550px]"
          />
        </motion.div>

        {/* Text content positioned second on mobile, first on desktop */}
        <motion.div
          className="flex px-4 flex-col py-5 md:max-w-[575px] text-center md:text-left md:order-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Heading */}
          <span className="block w-fit h-fit mx-auto md:mx-0">
            <p className="font-['Kumbh_Sans'] text-[36px] md:text-[60px] font-bold text-white leading-[44px] md:leading-[70px] pb-5">
              Elevate Your Stay, Literally Above.
            </p>
          </span>

          {/* Description */}
          <span className="block w-fit h-fit mx-auto md:mx-0">
            <p className="font-['Kumbh_Sans'] text-[16px] md:text-[18px] font-light text-white leading-[24px] md:leading-[28px] pb-5">
              HubiThat transforms rooftops into vibrant green spaces with unique capsule hotels, offering sustainable urban escapes and breathtaking panoramic views. Experience the city differently.
            </p>
          </span>

          {/* Buttons Container */}
          <div className="flex flex-row gap-[10px] w-full justify-center md:justify-start">
            <a href="#contact" className="no-underline">
              <Button>Book Now</Button>
            </a>
            <a href="#contact" className="no-underline">
              <Button variant="outline">Explore More</Button>
            </a>
          </div>

          {/* Stats Section */}
          <div className="flex flex-row gap-5 md:gap-10 pt-[50px] md:pt-[100px] w-full justify-center md:justify-start">
            {/* Happy Guests Stat */}
            <div className="flex flex-col items-center md:items-start max-w-[165px]">
              <span className="block z-[1] w-fit h-fit">
                <p className="font-['Kumbh_Sans'] text-[28px] md:text-[38px] font-bold text-white leading-[36px] md:leading-[48px] pb-2.5">
                  10k+
                </p>
              </span>
              <span className="block z-[1] w-fit h-fit">
                <p className="font-['Kumbh_Sans'] text-[14px] md:text-[16px] font-light text-white leading-[20px] md:leading-[26px] pb-5 text-center md:text-left">
                  Happy Guests
                </p>
              </span>
            </div>

            {/* Locations Stat */}
            <div className="flex flex-col items-center md:items-start max-w-[165px]">
              <span className="block z-[1] w-fit h-fit">
                <p className="font-['Kumbh_Sans'] text-[28px] md:text-[38px] font-bold text-white leading-[36px] md:leading-[48px] pb-2.5">
                  50+
                </p>
              </span>
              <span className="block z-[1] w-fit h-fit">
                <p className="font-['Kumbh_Sans'] text-[14px] md:text-[16px] font-light text-white leading-[20px] md:leading-[26px] pb-5 text-center md:text-left">
                  Locations
                </p>
              </span>
            </div>

            {/* Stars Stat */}
            <div className="flex flex-col items-center md:items-start max-w-[165px]">
              <span className="block z-[1] w-fit h-fit">
                <p className="font-['Kumbh_Sans'] text-[28px] md:text-[38px] font-bold text-white leading-[36px] md:leading-[48px] pb-2.5">
                  4.8
                </p>
              </span>
              <span className="block z-[1] w-fit h-fit">
                <p className="font-['Kumbh_Sans'] text-[14px] md:text-[16px] font-light text-white leading-[20px] md:leading-[26px] pb-5 text-center md:text-left">
                  Stars
                </p>
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;