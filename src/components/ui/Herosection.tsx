import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import header from "../../assets/header.png";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 pb-24 bg-[var(--bg-color)] bg-dark-green min-h-[550px]">
      {/* Hero Content Section */}
      <motion.div
        className="flex flex-row justify-between items-center pt-[100px] w-full max-w-[1200px] gap-[50px] mt-3"
        initial={{ opacity: 0, y: 50 }} // Awal: Transparan dan bergeser ke bawah
        animate={{ opacity: 1, y: 0 }} // Akhir: Muncul dan bergeser ke posisi semula
        transition={{ duration: 0.8, ease: "easeOut" }} // Durasi dan jenis transisi
      >
        {/* Left Content Container */}
        <motion.div
          className="flex flex-col py-5 max-w-[575px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // Tambahkan delay untuk animasi bertahap
        >
          {/* Heading */}
          <span className="block w-fit h-fit">
            <p className="font-['Kumbh_Sans'] text-[60px] font-bold text-white leading-[70px] pb-5">
              Elevate Your Stay, Literally Above.
            </p>
          </span>

          {/* Description */}
          <span className="block w-fit h-fit">
            <p className="font-['Kumbh_Sans'] text-[18px] font-light text-white leading-[28px] pb-5">
              HubiThat transforms rooftops into vibrant green spaces with unique capsule hotels, offering sustainable urban escapes and breathtaking panoramic views. Experience the city differently.
            </p>
          </span>

          {/* Buttons Container */}
          <div className="flex flex-row gap-[10px] w-full">
            <a href="#contact" className="no-underline">
              <Button>Book Now</Button>
            </a>
            <a href="#contact" className="no-underline">
              <Button variant="outline">Explore More</Button>
            </a>
          </div>

          {/* Stats Section */}
          <div className="flex flex-row gap-10 pt-[100px] w-full">
            {/* Happy Guests Stat */}
            <div className="flex flex-col items-center max-w-[165px]">
              <span className="block z-[1] w-fit h-fit">
                <p className="font-['Kumbh_Sans'] text-[38px] font-bold text-white leading-[48px] pb-2.5">
                  10k+
                </p>
              </span>
              <span className="block z-[1] w-fit h-fit">
                <p className="font-['Kumbh_Sans'] text-[16px] font-light text-white leading-[26px] pb-5 text-center">
                  Happy Guests
                </p>
              </span>
            </div>

            {/* Locations Stat */}
            <div className="flex flex-col items-center max-w-[165px]">
              <span className="block z-[1] w-fit h-fit">
                <p className="font-['Kumbh_Sans'] text-[38px] font-bold text-white leading-[48px] pb-2.5">
                  50+
                </p>
              </span>
              <span className="block z-[1] w-fit h-fit">
                <p className="font-['Kumbh_Sans'] text-[16px] font-light text-white leading-[26px] pb-5 text-center">
                  Locations
                </p>
              </span>
            </div>

            {/* Stars Stat */}
            <div className="flex flex-col items-center max-w-[165px]">
              <span className="block z-[1] w-fit h-fit">
                <p className="font-['Kumbh_Sans'] text-[38px] font-bold text-white leading-[48px] pb-2.5">
                  4.8
                </p>
              </span>
              <span className="block z-[1] w-fit h-fit">
                <p className="font-['Kumbh_Sans'] text-[16px] font-light text-white leading-[26px] pb-5 text-center">
                  Stars
                </p>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.img
          src={header}
          alt="Rooftop hotel with green space"
          className="w-full h-[550px] rounded-[20px] object-cover max-w-[550px] min-h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} // Tambahkan delay untuk animasi bertahap
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;