import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import header from "../../assets/header.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image5.jpg";

const HeroSection = () => {
  // State untuk slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Data gambar untuk slider
  const sliderImages = [
    { src: header, alt: "Rooftop hotel with green space" },
    { src: image1, alt: "Another rooftop view" },
    { src: image2, alt: "Third rooftop view" }
  ];

  // Effect untuk autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Effect untuk menandai bahwa komponen telah dimuat
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center pb-24 bg-[var(--bg-color)] bg-dark-green min-h-[550px]">
      {/* Hero Content Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center pt-[50px] md:pt-[100px] w-full max-w-[1200px] gap-[30px] md:gap-[50px] mt-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Custom Image Slider with Framer Motion */}
        <motion.div
          className="md:order-2 w-full flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full md:max-w-[550px] h-[300px] md:h-[550px] overflow-hidden md:rounded-lg">
            {/* Slider content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={sliderImages[currentSlide].src}
                  alt={sliderImages[currentSlide].alt}
                  className="w-full h-full object-cover"
                  loading={currentSlide === 0 ? "eager" : "lazy"}
                  onLoad={() => currentSlide === 0 && setIsLoaded(true)}
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-white w-4" : "bg-white/50"
                  }`}
                  aria-label={'Go to slide ${index + 1}'}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all z-10"
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))}
              aria-label="Previous slide"
            >
              <span className="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all z-10"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)}
              aria-label="Next slide"
            >
              <span className="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
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
            <p className=" text-[36px] md:text-[60px] font-bold text-white leading-[44px] md:leading-[70px] pb-5">
              Elevate Your Stay, Literally Above.
            </p>
          </span>

          {/* Description */}
          <span className="block w-fit h-fit mx-auto md:mx-0">
            <p className=" text-[16px] md:text-[18px] font-light text-white leading-[24px] md:leading-[28px] pb-5">
              HubiThat transforms rooftops into vibrant green spaces with unique capsule hotels, offering sustainable urban escapes and breathtaking panoramic views. Experience the city differently.
            </p>
          </span>

          {/* Buttons Container */}
          <div className="flex flex-row gap-[10px] w-full justify-center md:justify-start">
            <a href="#contact" className="no-underline">
              <Button>Book Now</Button>
            </a>
            <a href="#contact" className="no-underline">
              <Button variant="outline">Partnership</Button>
            </a>
          </div>

          {/* Stats Section */}
          <div className="flex flex-row gap-5 md:gap-10 pt-[50px] md:pt-[100px] w-full justify-center md:justify-start">
            {/* Happy Guests Stat */}
            <div className="flex flex-col items-center md:items-start max-w-[165px]">
              <span className="block z-[1] w-fit h-fit">
                <p className=" text-[28px] md:text-[38px] font-bold text-white leading-[36px] md:leading-[48px] pb-2.5">
                  10k+
                </p>
              </span>
              <span className="block z-[1] w-fit h-fit">
                <p className=" text-[14px] md:text-[16px] font-light text-white leading-[20px] md:leading-[26px] pb-5 text-center md:text-left">
                  Happy Guests
                </p>
              </span>
            </div>

            {/* Locations Stat */}
            <div className="flex flex-col items-center md:items-start max-w-[165px]">
              <span className="block z-[1] w-fit h-fit">
                <p className=" text-[28px] md:text-[38px] font-bold text-white leading-[36px] md:leading-[48px] pb-2.5">
                  50+
                </p>
              </span>
              <span className="block z-[1] w-fit h-fit">
                <p className=" text-[14px] md:text-[16px] font-light text-white leading-[20px] md:leading-[26px] pb-5 text-center md:text-left">
                  Locations
                </p>
              </span>
            </div>

            {/* Stars Stat */}
            <div className="flex flex-col items-center md:items-start max-w-[165px]">
              <span className="block z-[1] w-fit h-fit">
                <p className=" text-[28px] md:text-[38px] font-bold text-white leading-[36px] md:leading-[48px] pb-2.5">
                  4.8
                </p>
              </span>
              <span className="block z-[1] w-fit h-fit">
                <p className=" text-[14px] md:text-[16px] font-light text-white leading-[20px] md:leading-[26px] pb-5 text-center md:text-left">
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