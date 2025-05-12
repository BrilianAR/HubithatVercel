// import React from "react";
// import image from "../../assets/ucing.png"
import React from 'react';
import ContactPage from "../../components/ui/ContactPage";
import Button from "../../components/ui/Button";
import BrandSection from "../../components/ui/BrandSelection";
import header from "../../assets/header.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
// import image5 from "../../assets/image5.jpg";
// import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.png";
import map from "../../assets/map.png";
import Riview from "../../components/ui/Review";

interface HubiThatHeroProps {
  // You can add props here if needed
}

import { Rocket, Heart, Lock, Check } from "lucide-react";

import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  darkBg?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  darkBg = true 
}) => {
  return (
    <div className={`flex flex-col justify-start w-full max-w-[300px] px-8 py-20 ${darkBg ? "bg-[var(--bg-color)] text-white" : "bg-[var(--button-second)] text-black"}`}>
      <span className="text-4xl pb-8">
        {icon}
      </span>
      <span className="font-['Kumbh_Sans'] text-2xl font-medium py-2.5 text-left">
        <p>{title}</p>
      </span>
      <span className="font-['Kumbh_Sans'] text-base font-light leading-[26px] pb-2.5 text-left">
        <p>{description}</p>
      </span>
    </div>
  );
};


const HubiThatHero: React.FC<HubiThatHeroProps> = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-4 pb-24 bg-[var(--bg-color)] bg-dark-green min-h-[550px]">
        {/* Hero Content Section */}
        <div className="flex flex-row justify-between items-center pt-[100px] w-full max-w-[1200px] gap-[50px] mt-3">
          {/* Left Content Container */}
          <div className="flex flex-col py-5 max-w-[575px]" style={{ transform: 'rotate(0deg) scale(1) translateX(0px) translateY(0px) translateZ(0px)' }}>
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
              {/* Book Now Button */}
              <a href="#contact" className="no-underline">
                <Button>
                  Book Now
                </Button>
              </a>
              
              {/* Explore More Button */}
              <a href="#contact" className="no-underline">
                <Button variant="outline">
                  Explore More
                </Button>
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
                  <p className="font-['Kumbh_Sans'] text-[16px] font-light text-white leading-[26px] pb-5 text-center" style={{ transform: 'rotate(0deg) scale(1) translateX(0px) translateY(0px) translateZ(0px)' }}>
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
                  <p className="font-['Kumbh_Sans'] text-[16px] font-light text-white leading-[26px] pb-5 text-center" style={{ transform: 'rotate(0deg) scale(1) translateX(0px) translateY(0px) translateZ(0px)' }}>
                    Stars
                  </p>
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <img 
            src={header}
            alt="Rooftop hotel with green space" 
            className="w-full h-[550px] rounded-[20px] object-cover max-w-[550px] min-h-full"
          />
        </div>
      </div>
      <BrandSection/>
      <div className="flex flex-col items-center justify-center w-full max-w-[1980px] py-24 px-4 mx-auto bg-gray-100 gap-y-16">
        <div className="flex flex-wrap justify-between w-full max-w-[1199px] gap-x-24 gap-y-5">
          <span className="block w-full max-w-[300px] mt-3 font-['Kumbh_Sans'] text-xl text-gray-800 leading-[30px]">
            <p>Experience the future of urban hospitality with HubiThat's innovative rooftop sanctuaries.</p>
          </span>
          <span className="block w-full max-w-[800px] font-['Kumbh_Sans'] text-5xl font-medium text-gray-800 leading-[65px]">
            <p>HubiThat: Redefining Urban Escapes with Sustainable Rooftop Capsule Hotels and Green Spaces</p>
          </span>
        </div>
        
        <div className="flex flex-wrap w-full max-w-[1200px] gap-x-24 gap-y-8">
          <span className="block w-full max-w-[550px] h-[370px]">
            <img
              src={image1}
              alt="Rooftop Capsule Hotel"
              className="w-full h-full object-cover rounded-lg"
            />
          </span>
          <span className="block w-full max-w-[550px] h-[370px]">
            <img
              src={image2}
              alt="Green Space"
              className="w-full h-full object-cover rounded-lg"
            />
          </span>
        </div>
      </div>


      <div className="flex flex-col items-center w-full max-w-[1232px] py-24 px-4 mx-auto gap-y-16">
        <span className="block w-full max-w-[550px] text-center">
          <p className="font-['Kumbh_Sans'] text-4xl font-bold text-gray-800 leading-[50px]">
            Discover Elevated Urban Sanctuaries
          </p>
        </span>
        
        <span className="block w-full max-w-[550px] text-center mb-5">
          <p className="font-['Kumbh_Sans'] text-lg font-normal text-gray-800 leading-7">
            HubiThat reimagines urban living by converting underutilized rooftops into thriving green spaces integrated with modern capsule hotels. We offer unique, sustainable escapes with stunning views, blending comfort, innovation, and environmental consciousness for unforgettable experiences.
          </p>
        </span>
        
        <div className="flex flex-wrap justify-center items-stretch w-full">
          <FeatureCard
            icon={<Rocket className="text-white" />}
            title="Green Oasis"
            description="Escape the city bustle in our rooftop gardens, offering tranquility and fresh air."
            darkBg={true}
          />
          
          <FeatureCard
            icon={<Heart className="text-black" />}
            title="Capsule Comfort"
            description="Experience innovative, space-efficient capsule hotels designed for ultimate relaxation and privacy."
            darkBg={false}
          />
          
          <FeatureCard
            icon={<Lock className="text-white" />}
            title="Eco-Friendly"
            description="We prioritize sustainability, integrating green technologies and practices throughout our HubiHats."
            darkBg={true}
          />
          
          <FeatureCard
            icon={<Lock className="text-white" />}
            title="Panoramic Views"
            description="Wake up to breathtaking cityscapes from our elevated rooftop locations. Book today!"
            darkBg={true}
          />
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <div className="flex flex-wrap justify-center items-center gap-y-8 py-24 px-4 ">
          <div className="flex flex-col max-w-[1200px] w-full justify-center">
            {/* First Row - Hero */}
            <div className="flex flex-wrap justify-center items-center gap-y-15 ">
              <div className="flex flex-col items-start gap-8 max-w-[600px] w-full px-20">
                <h1 className="font-bold text-2xl text-gray-800 leading-9 max-w-[400px] font-['Kumbh_Sans']">
                  Rooftop Capsule Hotel: Your Urban Oasis
                </h1>
                <p className="font-normal text-lg text-gray-800 leading-7 max-w-[400px] font-['Kumbh_Sans']">
                  Experience innovative capsule hotels integrated with lush rooftop gardens. 
                  Enjoy comfort, sustainability, and breathtaking city views. Book your stay now!
                </p>
                <div className="flex flex-col max-w-[200px] w-[200px]">
                  <Button>
                    Book Now
                  </Button>
                </div>
              </div>
              <div className="max-w-[600px] w-full h-[450px]">
                <img 
                  src={image3}
                  alt="Rooftop Capsule Hotel exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


            {/* Second Row */}
            <div className="flex flex-wrap justify-center items-center gap-y-8">
              <div className="max-w-[600px] w-full h-[450px]">
                <img 
                  src={image4}
                  alt="Green rooftop garden view" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-stretch max-w-[600px] w-full px-20 gap-12">
                <h2 className="font-bold text-2xl text-gray-800 leading-9 font-['Kumbh_Sans']">
                  Green Rooftops
                </h2>
                <div className="flex flex-col gap-2 max-w-[200px]">
                  <div className="flex items-center gap-4">
                    <Check size={22} className="text-gray-800" />
                    <p className="font-normal text-base text-gray-800 leading-7 font-['Kumbh_Sans']">
                      Privacy
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <Check size={22} className="text-gray-800" />
                    <p className="font-normal text-base text-gray-800 leading-7 font-['Kumbh_Sans']">
                      Comfort
                    </p>
                  </div>
                <Button>
                  See More
                </Button>
                </div>
              </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-wrap justify-center items-center gap-y-8">
              <div className="flex flex-col justify-center items-stretch max-w-[600px] w-full px-20 gap-12">
                <h2 className="font-bold text-2xl text-gray-800 leading-9 font-['Kumbh_Sans']">
                  Urban Oasis Stays
                </h2>
                <div className="flex flex-col gap-2 w-full max-w-[200px]">
                  <div className="flex items-center gap-4 ">
                    <Check size={22} className="text-gray-800" />
                    <p className="font-normal text-base text-gray-800 leading-7 font-['Kumbh_Sans']">
                      Green Living in the City
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mb-3 ">
                    <Check size={22} className="text-gray-800" />
                    <p className="font-normal text-base text-gray-800 leading-7 font-['Kumbh_Sans']">
                      Modern Sustainability
                    </p>
                  </div>
                <Button>
                  Explore
                </Button>
                </div>
              </div>
              <div className="max-w-[600px] w-full h-[450px]">
                <img 
                  src={image7}
                  alt="Sustainable hotel features" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Riview/>

      <ContactPage/>


      <div className="flex flex-col items-center py-24">
        <div className="flex flex-row gap-24 p-0 px-12 rounded-3xl bg-[#f5f5f5] max-w-7xl">
          <div className="flex flex-col justify-center items-stretch py-12 max-w-lg">
            <h1 className="font-['Kumbh_Sans'] text-5xl font-bold text-[#333] leading-[60px] pb-5">
              Ready for an Elevated Escape?
            </h1>
            <p className="font-['Kumbh_Sans'] text-lg font-light text-[#333] leading-7 pb-5">
              Discover a unique urban getaway. Experience comfort, sustainability, and breathtaking views. Book your HubiThat stay today!
            </p>
            <div className="flex flex-row gap-2 pt-7">
              <Button>
                Book Now
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <img 
            src={map}
            alt="Urban getaway" 
            className="w-full h-full max-w-sm min-h-[500px] -mt-12 rounded-t-lg object-cover"
          />
        </div>
      </div>

    </div>




    
  );
};

export default HubiThatHero;
