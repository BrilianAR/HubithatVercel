import React, { useState, useEffect, useRef } from "react";
import ContactPage from "../../components/ui/ContactPage";
import Button from "../../components/ui/Button";
import BrandSection from "../../components/ui/BrandSelection";
import image1 from "../../assets/6.jpg";
import image2 from "../../assets/7.jpg";
import image3 from "../../assets/8.jpg";
import image4 from "../../assets/9.jpg";
import svg1 from "../../assets/1.svg";
import svg2 from "../../assets/2.svg";
import svg3 from "../../assets/3.svg";
import svg4 from "../../assets/4.svg";
import svg5 from "../../assets/5.svg";
import svg6 from "../../assets/6.svg";
import image7 from "../../assets/10.jpg";
import map from "../../assets/map.png";
import Riview from "../../components/ui/Review";
import CheckHubithat from "../../components/ui/CheckHubithat";
import Produc from "../../components/ui/Produc";
import PricingTiers from '../../components/ui/Pricing';
import Test from "../../components/ui/Goals";
import { Check } from "lucide-react";
import HeroSection from "../../components/ui/Herosection";

interface HubiThatHeroProps {
  // You can add props here if needed
}

const HubiThatHero: React.FC<HubiThatHeroProps> = () => {
  const images = [svg1, svg2, svg3, svg4, svg5, svg6];
  const numImages = images.length;

  const [interactiveImageIndex, setInteractiveImageIndex] = useState<number>(0);
  const [imageWrapperOpacity, setImageWrapperOpacity] = useState<number>(0);
  const [imageBlurAmount, setImageBlurAmount] = useState<number>(0); 
  const [imageTranslateY, setImageTranslateY] = useState<number>(100); 
  const [imageScale, setImageScale] = useState<number>(0.8); 

  const interactiveSectionRef = useRef<HTMLDivElement>(null);
  const fixTriggerRef = useRef<HTMLDivElement>(null);
  const unfixTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!interactiveSectionRef.current || !fixTriggerRef.current || !unfixTriggerRef.current) return;

      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const maxBlur = 5; 

      let currentOpacity = 0;
      let currentBlur = 0; 
      let currentIndex = 0;
      let currentTranslateY = 100; 
      let currentScale = 0.8; 

      // Define scroll points for different animation phases
      // Entry Phase: Image fades in and "jumps" into place
      const entryStartScroll = fixTriggerRef.current.offsetTop + fixTriggerRef.current.offsetHeight - viewportHeight / 2;
      const entryEndScroll = fixTriggerRef.current.offsetTop + fixTriggerRef.current.offsetHeight;

      // Interactive Phase: Image is fully visible, index changes
      const interactiveStartScroll = entryEndScroll;
      const interactiveEndScroll = unfixTriggerRef.current.offsetTop - viewportHeight;

      // Exit Phase: Image "jumps" out (upwards) and fades out (no blur)
      const exitStartScroll = interactiveEndScroll;
      const exitEndScroll = unfixTriggerRef.current.offsetTop - viewportHeight * 0.8; 

      // --- Animation Logic based on Scroll Position ---

      if (scrollY < entryStartScroll) {
        // Before entry phase: Image is transparent, below, and scaled down
        currentOpacity = 0;
        currentBlur = 0; 
        currentIndex = 0;
        currentTranslateY = 100;
        currentScale = 0.8;
      } else if (scrollY >= entryStartScroll && scrollY < entryEndScroll) {
        // Entry phase: Image fades in, moves up, and scales up
        const progress = (scrollY - entryStartScroll) / (entryEndScroll - entryStartScroll);
        currentOpacity = progress; 
        currentBlur = 0; 
        currentIndex = 0;
        currentTranslateY = 100 * (1 - progress); 
        currentScale = 0.8 + (0.2 * progress); 
      } else if (scrollY >= interactiveStartScroll && scrollY < interactiveEndScroll) {
        // Interactive phase: Image is fully visible, no blur, at center, full scale, index changes
        currentOpacity = 1;
        currentBlur = 0; 
        currentTranslateY = 0; 
        currentScale = 1; 

        const totalInteractiveScrollRange = interactiveEndScroll - interactiveStartScroll;
        if (totalInteractiveScrollRange > 0) {
          const scrollProgress = (scrollY - interactiveStartScroll) / totalInteractiveScrollRange;
          currentIndex = scrollProgress * (numImages - 1);
        } else {
          currentIndex = 0;
        }
      } else if (scrollY >= exitStartScroll && scrollY < exitEndScroll) {
        // Exit phase: Image fades out, moves UP, and scales down
        const progress = (scrollY - exitStartScroll) / (exitEndScroll - exitStartScroll);
        currentOpacity = Math.max(0, 1 - progress); 
        currentBlur = 0; 
        currentIndex = numImages - 1; 
        currentTranslateY = 0 - (100 * progress); // Moves from 0px to -100px (upwards)
        currentScale = 1 - (0.2 * progress); // Scales from 1 to 0.8
      } else if (scrollY >= exitEndScroll) {
        // After exit phase: Image is fully transparent, above, and scaled down (reset state)
        currentOpacity = 0;
        currentBlur = 0; 
        currentIndex = numImages - 1;
        currentTranslateY = -100; // Off-screen above
        currentScale = 0.8; 
      }

      // Update state
      setImageWrapperOpacity(Math.min(1, Math.max(0, currentOpacity)));
      setImageBlurAmount(Math.min(maxBlur, Math.max(0, currentBlur))); 
      setInteractiveImageIndex(currentIndex);
      setImageTranslateY(currentTranslateY); 
      setImageScale(currentScale); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [numImages]);

  useEffect(() => {
    images.forEach(imageSrc => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, [images]);

  const INTERACTIVE_CONTENT_SCROLL_BUFFER_VH = 100;
  const ANIMATION_DURATION_VH = 150;
  const interactiveSectionMinHeight = `${ANIMATION_DURATION_VH + INTERACTIVE_CONTENT_SCROLL_BUFFER_VH * 2}vh`;

  const interactiveImageClassName = "w-[700px] h-auto md:w-[900px]";
  const smallImageContainerClassName = "block w-full max-w-[250px] h-[150px] md:max-w-[550px] md:h-[370px]";
  const largeImageContainerClassName = "max-w-[600px] w-full h-[300px] md:h-[500px]";

  return (
    <div>
      <HeroSection />
      <CheckHubithat />
      <BrandSection />

      <div
        ref={fixTriggerRef}
        className="flex flex-col items-center justify-center px-4 bg-white py-16"
      >
        <h1 className="text-2xl md:text-4xl font-semibold text-black text-center mb-4">
          Discover a New Way to Stay in the City
        </h1>
        <span className="text-2xl md:text-[6rem] font-bold leading-tight md:leading-none text-center">
          Cozy Stays on Roofgarden
        </span>
      </div>

      <div
        ref={interactiveSectionRef}
        style={{ minHeight: interactiveSectionMinHeight }}
        className="relative w-full flex items-center justify-center bg-white"
      >
        <div
          className="image-wrapper"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, calc(-50% + ${imageTranslateY}px)) scale(${imageScale})`,
            zIndex: 999,
            textAlign: 'center',
            width: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: imageWrapperOpacity,
            pointerEvents: imageWrapperOpacity > 0.01 ? 'auto' : 'none',
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
          }}
        >
          <img
            src={images[Math.floor(interactiveImageIndex)]}
            alt="Scroll Image"
            className={interactiveImageClassName}
            style={{
              filter: `blur(${imageBlurAmount}px)`,
              transition: 'filter 0.3s ease-out',
            }}
          />
        </div>
      </div>

      <div
        ref={unfixTriggerRef}
        className={`
          flex flex-col items-center justify-center w-full max-w-[1980px]
          py-10 px-4 mx-auto bg-gray-100 gap-y-5 md:gap-y-16
        `}
      >
        <div
          className="flex flex-wrap justify-between w-full max-w-[1199px] gap-x-24 gap-y-5"
        >
          <span className="block w-full max-w-[300px] mt-3 text-base md:text-xl text-gray-800 leading-[30px]">
            <p>Experience the future of urban hospitality with HubiThat's innovative roofgarden sanctuaries.</p>
          </span>
          <span className="block w-full max-w-[800px] text-3xl md:text-5xl font-medium text-gray-800 md:leading-[65px]">
            <p>HubiThat: Redefining Urban Living with Roof Forest built for Megapolitans to recharge the soul and find calmness ASAP</p>
          </span>
        </div>
        <div
          className="flex flex-wrap w-full max-w-[1200px] justify-center items-center md:gap-x-24 gap-x-4 md:gap-y-8"
        >
          <span className={smallImageContainerClassName}>
            <img src={image1} alt="Rooftop Capsule Hotel" className="w-full h-full object-cover rounded-lg" />
          </span>
          <span className={smallImageContainerClassName}>
            <img src={image2} alt="Green Space" className="w-full h-full object-cover rounded-lg" />
          </span>
        </div>
      </div>

      <Test />

      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-y-8 py-24 px-4">
          <div className="flex flex-col max-w-[1200px] w-full justify-center">
            <div className="flex flex-wrap justify-center items-center gap-y-5 md:gap-y-15">
              <div className="flex flex-col items-start gap-2 md:gap-8 max-w-[600px] w-full px-0">
                <h1 className="font-bold text-2xl text-gray-800 leading-9 max-w-[400px]">
                  Oasis Capsule living : Your Villa's like space in bustles cities
                </h1>
                <p className="font-normal text-lg text-gray-800 leading-7 max-w-[400px]">
                  Experience innovative capsule space integrated with lush rooftop gardens. Enjoy comfort, sustainability, and breathtaking city views. Book your stay now!
                </p>
                <div className="hidden md:flex flex-col w-full md:w-[200px]">
                  <Button>Book Now</Button>
                </div>
              </div>
              <div className={largeImageContainerClassName}>
                <img src={image3} alt="Rooftop Capsule Hotel exterior" className="w-full h-full object-cover" />
              </div>
              <div className="flex md:hidden flex-col w-full mt-4">
                <Button>Book Now</Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-8 py-10 md:py-0">
              <div className={`${largeImageContainerClassName} order-2 md:order-1`}>
                <img src={image4} alt="Green rooftop garden view" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center items-stretch max-w-[600px] w-full md:px-20 gap-4 md:gap-12 order-1 md:order-2">
                <h2 className="font-bold text-2xl text-gray-800 md:leading-9">Green Rooftops</h2>
                <div className="flex flex-col gap-2 w-full md:max-w-[200px]">
                  <div className="flex items-center gap-4">
                    <Check size={22} className="text-gray-800" />
                    <p className="font-normal text-base text-gray-800 leading-7">Privacy</p>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <Check size={22} className="text-gray-800" />
                    <p className="font-normal text-base text-gray-800 leading-7">Comfort</p>
                  </div>
                  <div className="hidden md:flex flex-col w-full md:w-[200px]">
                    <Button>See More</Button>
                  </div>
                </div>
              </div>
              <div className="flex md:hidden flex-col w-full order-3">
                <Button>See More</Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-y-4 md:gap-y-8">
              <div className="flex flex-col justify-right items-stretch max-w-[600px] w-full md:px-20 gap-4 md:gap-12">
                <h2 className="font-bold text-2xl text-gray-800 leading-9">Urban Oasis Stays</h2>
                <div className="flex flex-col gap-2 w-full md:max-w-[200px]">
                  <div className="flex items-center gap-4">
                    <Check size={22} className="text-gray-800" />
                    <p className="font-normal text-base text-gray-800 leading-7">Green Living in the City</p>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <Check size={22} className="text-gray-800" />
                    <p className="font-normal text-base text-gray-800 leading-7">Modern Sustainability</p>
                  </div>
                  <div className="hidden md:flex flex-col w-full md:w-[200px]">
                    <Button>Explore</Button>
                  </div>
                </div>
              </div>
              <div className={largeImageContainerClassName}>
                <img src={image7} alt="Sustainable hotel features" className="w-full h-full object-cover" />
              </div>
              <div className="flex md:hidden flex-col w-full order-3">
                <Button>Explore</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Produc />
      <PricingTiers />
      <Riview />
      <ContactPage />

      <div
        className={`
          flex flex-col items-center py-24
        `}
      >
        <div
          className={`
            flex flex-col md:flex-row gap-8 md:gap-24 p-0 px-6 md:px-12
            rounded-3xl bg-[#f5f5f5] max-w-7xl
          `}
        >
          <div className="flex flex-col justify-center items-stretch py-6 md:py-12 max-w-full md:max-w-lg md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold text-[#333] leading-[40px] md:leading-[60px] pb-5">
              Ready for an Elevated Escape?
            </h1>
            <p className="text-base md:text-lg font-light text-[#333] leading-6 md:leading-7 pb-5">
              Discover a unique urban getaway. Experience comfort, sustainability, and breathtaking views. Book your HubiThat stay today!
            </p>
            <div className="block md:hidden w-full my-4">
              <img src={map} alt="Urban getaway" className="w-full h-auto rounded-lg object-cover min-h-[200px]" />
            </div>
            <div className="flex flex-col md:flex-row gap-2 pt-5 md:pt-7">
              <Button>Book Now</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="hidden md:block md:order-2">
            <img src={map} alt="Urban getaway" className="w-full h-auto max-w-full md:py-8 md:max-w-sm min-h-[400px] rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubiThatHero;