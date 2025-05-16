import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import React from "react";
// import image from "../../assets/ucing.png"
import ContactPage from "../../components/ui/ContactPage";
import Button from "../../components/ui/Button";
import BrandSection from "../../components/ui/BrandSelection";
// import header from "../../assets/header.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import svg1 from "../../assets/1.svg";
import svg2 from "../../assets/2.svg";
import svg3 from "../../assets/3.svg";
import svg4 from "../../assets/4.svg";
import svg5 from "../../assets/5.svg";
import svg6 from "../../assets/6.svg";
// import image5 from "../../assets/image5.jpg";
// import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.png";
import map from "../../assets/map.png";
import Riview from "../../components/ui/Review";
import CheckHubithat from "../../components/ui/CheckHubithat";
import Produc from "../../components/ui/Produc";
import PricingTiers from '../../components/ui/Pricing';
// import ModelViewer from "../../components/ModelViewer";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";

interface HubiThatHeroProps {
  // You can add props here if needed
}

import { Rocket, Heart, Lock, Check } from "lucide-react";

import type { ReactNode } from "react";
import HeroSection from "../../components/ui/Herosection";

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
  const images = [svg1, svg2, svg3, svg4, svg5, svg6]; // Array gambar
  const [currentIndex, setCurrentIndex] = useState(0); // State untuk indeks gambar saat ini

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Perbarui indeks secara berulang
    }, 1000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen dilepas
  }, [images.length]);

  return (
    <div>
      <HeroSection/>
      <CheckHubithat/>
      <BrandSection/>
      {/* <div className="flex justify-center items-center py-16">
        <ModelViewer modelPath="/src/assets/3d.glb" />
      </div> */}
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Discover a New Way to Stay in the City <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Cozy stays on rooftops
              </span>
            </h1>
          </>
        }
      >
        <img
          src={images[currentIndex]} // Gambar berdasarkan indeks saat ini
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      {/* <ModelViewer modelPath="/assets/3d.glb" /> */}
      <div className="flex flex-col items-center justify-center w-full max-w-[1980px] py-24 px-4 mx-auto bg-gray-100 gap-y-16">
        <motion.div
          className="flex flex-wrap justify-between w-full max-w-[1199px] gap-x-24 gap-y-5"
          initial={{ opacity: 0, y: 50 }} // Awal: Transparan dan bergeser sedikit ke bawah
          whileInView={{ opacity: 1, y: 0 }} // Akhir: Muncul di posisi semula
          viewport={{ once: true, amount: 0.2 }} // Animasi hanya terjadi sekali saat 20% elemen terlihat
          transition={{ duration: 0.6, ease: "easeOut" }} // Durasi lebih cepat
        >
          <span className="block w-full max-w-[300px] mt-3 font-['Kumbh_Sans'] text-xl text-gray-800 leading-[30px]">
            <p>Experience the future of urban hospitality with HubiThat's innovative rooftop sanctuaries.</p>
          </span>
          <span className="block w-full max-w-[800px] font-['Kumbh_Sans'] text-5xl font-medium text-gray-800 leading-[65px]">
            <p>HubiThat: Redefining Urban Living with Roof Forest built for Megapolitans to recharge the soul and find calmness ASAP</p>
          </span>
        </motion.div>

        <motion.div
          className="flex flex-wrap w-full max-w-[1200px] gap-x-24 gap-y-8"
          initial={{ opacity: 0, y: 50 }} // Awal: Transparan dan bergeser sedikit ke bawah
          whileInView={{ opacity: 1, y: 0 }} // Akhir: Muncul di posisi semula
          viewport={{ once: true, amount: 0.2 }} // Animasi hanya terjadi sekali saat 20% elemen terlihat
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} // Tambahkan delay untuk animasi bertahap
        >
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
        </motion.div>
      </div>


      <div className="flex flex-col items-center w-full max-w-[1232px] py-24 px-4 mx-auto gap-y-5">
        <motion.span
          className="block w-full max-w-[550px] text-center"
          initial={{ opacity: 0, y: 50 }} // Awal: Transparan dan bergeser ke bawah
          whileInView={{ opacity: 1, y: 0 }} // Akhir: Muncul di posisi semula
          viewport={{ once: true, amount: 0.2 }} // Animasi hanya terjadi sekali saat 20% elemen terlihat
          transition={{ duration: 0.8, ease: "easeOut" }} // Durasi dan jenis transisi
        >
          <p className="font-['Kumbh_Sans'] text-4xl font-bold text-gray-800 leading-[50px]">
            Discover Elevated Urban Sanctuaries
          </p>
        </motion.span>

        <motion.span
          className="block w-full max-w-[550px] text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // Tambahkan delay untuk animasi bertahap
        >
          <p className="font-['Kumbh_Sans'] text-lg font-normal text-gray-800 leading-7">
            HubiThat reimagines longstay living in the modern cities by converting underutilized rooftops into forest and garden integrated with smart and compact cabin. We offer unique, sustainable escapes with stunning views, blending comfort, innovation, and nature integragtion definitely to make you more productive.
          </p>
        </motion.span>

        <motion.div
          className="flex flex-wrap justify-center items-stretch w-full py-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} // Tambahkan delay untuk animasi bertahap
        >
          <FeatureCard
            icon={<Rocket className="text-white" />}
            title="Green Oasis"
            description="Escape the city bustle in our forest garden, with breathtaking cityscapes views."
            darkBg={true}
          />

          <FeatureCard
            icon={<Heart className="text-black" />}
            title="Smart Capsule"
            description="Experience smart and sleek design capsule designed for ultimate relaxation and privacy."
            darkBg={false}
          />

          <FeatureCard
            icon={<Lock className="text-white" />}
            title="Eco-Friendly"
            description="We make sustainable design with renewable energy and reusing and recycling water for the habitat."
            darkBg={true}
          />
        </motion.div>
      </div>
      
      <div className="max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <div className="flex flex-wrap justify-center items-center gap-y-8 py-24 px-4 ">
          <div className="flex flex-col max-w-[1200px] w-full justify-center">
            {/* First Row - Hero */}
            <div className="flex flex-wrap justify-center items-center gap-y-15 ">
              <div className="flex flex-col items-start gap-8 max-w-[600px] w-full px-0">
                <h1 className="font-bold text-2xl text-gray-800 leading-9 max-w-[400px] font-['Kumbh_Sans']">
                  Oasis Capsule living : Your Villa’s like space in bustles cities
                </h1>
                <p className="font-normal text-lg text-gray-800 leading-7 max-w-[400px] font-['Kumbh_Sans']">
                  Experience innovative capsule space integrated with lush rooftop gardens. Enjoy comfort, sustainability, and breathtaking city views. Book your stay now!
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

      <Produc/>

      <PricingTiers/>
      
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
            className="w-full h-full max-w-sm min-h-[400px] my-10 rounded-lg object-cover"
          />
        </div>
      </div>

    </div>




    
  );
};

export default HubiThatHero;
