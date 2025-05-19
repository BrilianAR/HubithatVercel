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
import Test from "../../components/ui/Goals";

interface HubiThatHeroProps {
  // You can add props here if needed
}

import { Check } from "lucide-react";

import HeroSection from "../../components/ui/Herosection";



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
            <h1 className="text-2xl md:text-4xl font-semibold text-black dark:text-white text-cente">
              Discover a New Way to Stay in the City <br />
              <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-tight md:leading-none">
                Cozy stays on rooftops
              </span>
            </h1>
          </>
        }
      >
        <img
          src={images[currentIndex]} // Gambar berdasarkan indeks saat ini
          alt="hero"
          className="mx-auto rounded-lg md:rounded-2xl pt-0 md:pl-10 md:w-[1320px] md:h-[620px] object-cover h-[200px] object-center md:object-left-top"
          draggable={false}
      />
      </ContainerScroll>
      {/* <ModelViewer modelPath="/assets/3d.glb" /> */}
      <div className="flex flex-col items-center justify-center w-full max-w-[1980px] py-6 md:py-24 px-4 mx-auto bg-gray-100 gap-y-5 md:gap-y-16">
        <motion.div
          className="flex flex-wrap justify-between w-full max-w-[1199px] gap-x-24 gap-y-5"
          initial={{ opacity: 0, y: 50 }} // Awal: Transparan dan bergeser sedikit ke bawah
          whileInView={{ opacity: 1, y: 0 }} // Akhir: Muncul di posisi semula
          viewport={{ once: true, amount: 0.2 }} // Animasi hanya terjadi sekali saat 20% elemen terlihat
          transition={{ duration: 0.6, ease: "easeOut" }} // Durasi lebih cepat
        >
          <span className="block w-full max-w-[300px] mt-3 font-['Kumbh_Sans'] text-base md:text-xl text-gray-800 leading-[30px]">
            <p>Experience the future of urban hospitality with HubiThat's innovative rooftop sanctuaries.</p>
          </span>
          <span className="block w-full max-w-[800px] font-['Kumbh_Sans'] text-3xl md:text-5xl font-medium text-gray-800 md:leading-[65px]">
            <p>HubiThat: Redefining Urban Living with Roof Forest built for Megapolitans to recharge the soul and find calmness ASAP</p>
          </span>
        </motion.div>
        

        <motion.div
          className="flex flex-wrap w-full max-w-[1200px] justify-center items-center md:gap-x-24 gap-x-4 md:gap-y-8"
          initial={{ opacity: 0, y: 50 }} // Awal: Transparan dan bergeser sedikit ke bawah
          whileInView={{ opacity: 1, y: 0 }} // Akhir: Muncul di posisi semula
          viewport={{ once: true, amount: 0.2 }} // Animasi hanya terjadi sekali saat 20% elemen terlihat
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} // Tambahkan delay untuk animasi bertahap
        >
          <span className="block w-full max-w-[170px] h-[100px] md:max-w-[550px] md:h-[370px]">
            <img
              src={image1}
              alt="Rooftop Capsule Hotel"
              className="w-full h-full object-cover rounded-lg"
            />
          </span>
          <span className="block w-full max-w-[170px] h-[100px] md:max-w-[550px] md:h-[370px]">
            <img
              src={image2}
              alt="Green Space"
              className="w-full h-full object-cover rounded-lg"
            />
          </span>
        </motion.div>
      </div>

      <Test/>

      <div className="max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <div className="flex flex-wrap justify-center items-center gap-y-8 py-24 px-4 ">
          <div className="flex flex-col max-w-[1200px] w-full justify-center">
            {/* First Row - Hero */}
            <div className="flex flex-wrap justify-center items-center gap-y-5 md:gap-y-15 ">
              <div className="flex flex-col items-start gap-2 md:gap-8 max-w-[600px] w-full px-0">
                <h1 className="font-bold text-2xl text-gray-800 leading-9 max-w-[400px] font-['Kumbh_Sans']">
                  Oasis Capsule living : Your Villa's like space in bustles cities
                </h1>
                <p className="font-normal text-lg text-gray-800 leading-7 max-w-[400px] font-['Kumbh_Sans']">
                  Experience innovative capsule space integrated with lush rooftop gardens. Enjoy comfort, sustainability, and breathtaking city views. Book your stay now!
                </p>
                <div className="hidden md:flex flex-col w-full md:w-[200px]">
                  <Button>
                    Book Now
                  </Button>
                </div>
              </div>
              <div className="max-w-[600px] w-full h-[250px] md:h-[450px]">
                <img 
                  src={image3}
                  alt="Rooftop Capsule Hotel exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex md:hidden flex-col w-full mt-4">
                <Button>
                  Book Now
                </Button>
              </div>
            </div>


            {/* Second Row */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-8 py-10 md:py-0">
              {/* Gambar pada mobile tetap di posisi awal */}
              <div className="max-w-[600px] w-full h-[250px] md:h-[450px] order-2 md:order-1">
                <img
                  src={image4}
                  alt="Green rooftop garden view"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Konten deskripsi tetap di posisi asli */}
              <div className="flex flex-col justify-center items-stretch max-w-[600px] w-full md:px-20 gap-4 md:gap-12 order-1 md:order-2">
                <h2 className="font-bold text-2xl text-gray-800 md:leading-9 font-['Kumbh_Sans']">
                  Green Rooftops
                </h2>
                <div className="flex flex-col gap-2 w-full md:max-w-[200px]">
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
                  {/* Tombol desktop (hanya ditampilkan di desktop) */}
                  <div className="hidden md:flex flex-col w-full md:w-[200px]">
                    <Button>
                      See More
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Tombol mobile di bawah gambar (hanya ditampilkan di mobile) */}
              <div className="flex md:hidden flex-col w-full order-3">
                <Button>
                  See More
                </Button>
              </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-wrap justify-center items-center gap-y-4 md:gap-y-8">
              <div className="flex flex-col justify-right items-stretch max-w-[600px] w-full md:px-20 gap-4 md:gap-12">
                <h2 className="font-bold text-2xl text-gray-800 leading-9 font-['Kumbh_Sans']">
                  Urban Oasis Stays
                </h2>
                <div className="flex flex-col gap-2 w-full md:max-w-[200px]">
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
                {/* Tombol desktop (hanya ditampilkan di desktop) */}
                  <div className="hidden md:flex flex-col w-full md:w-[200px]">
                    <Button>
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
              <div className="max-w-[600px] w-full h-[250px] md:h-[450px]">
                <img 
                  src={image7}
                  alt="Sustainable hotel features" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Tombol mobile di bawah gambar (hanya ditampilkan di mobile) */}
              <div className="flex md:hidden flex-col w-full order-3">
                <Button>
                  Explore
                </Button>
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
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 p-0 px-6 md:px-12 rounded-3xl bg-[#f5f5f5] max-w-7xl">
          <div className="flex flex-col justify-center items-stretch py-6 md:py-12 max-w-full md:max-w-lg md:order-1">
            {/* Text section - remains at the top on mobile */}
            <h1 className="font-['Kumbh_Sans'] text-3xl md:text-5xl font-bold text-[#333] leading-[40px] md:leading-[60px] pb-5">
              Ready for an Elevated Escape?
            </h1>
            <p className="font-['Kumbh_Sans'] text-base md:text-lg font-light text-[#333] leading-6 md:leading-7 pb-5">
              Discover a unique urban getaway. Experience comfort, sustainability, and breathtaking views. Book your HubiThat stay today!
            </p>
            
            {/* Image inserted between text and buttons on mobile only */}
            <div className="block md:hidden w-full my-4">
              <img
                src={map}
                alt="Urban getaway"
                className="w-full h-auto rounded-lg object-cover min-h-[200px]"
              />
            </div>
            
            {/* Buttons section - now below the image on mobile */}
            <div className="flex flex-col md:flex-row gap-2 pt-5 md:pt-7">
              <Button>
                Book Now
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Desktop image - hidden on mobile */}
          <div className="hidden md:block md:order-2">
            <img
              src={map}
              alt="Urban getaway"
              className="w-full h-auto max-w-full md:py-8 md:max-w-sm min-h-[400px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

    </div>




    
  );
};

export default HubiThatHero;
