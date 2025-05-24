import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import ContactPage from "../../components/ui/ContactPage";
import Button from "../../components/ui/Button";
import BrandSection from "../../components/ui/BrandSelection";
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
import image7 from "../../assets/image7.png";
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
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [isWrapperFixed, setIsWrapperFixed] = useState<boolean>(false);
  const [imageHeight, setImageHeight] = useState<number>(0);
  const [imageWrapperOpacity, setImageWrapperOpacity] = useState<number>(0);
  const [imageBlurAmount, setImageBlurAmount] = useState<number>(5); // State baru untuk mengontrol blur (dalam piksel)

  const interactiveSectionRef = useRef<HTMLDivElement>(null);
  const currentImageRef = useRef<HTMLImageElement>(null);
  const fixTriggerRef = useRef<HTMLDivElement>(null); // Ref untuk tulisan "Discover a New Way..."
  const unfixTriggerRef = useRef<HTMLDivElement>(null); // Ref untuk tulisan setelah gambar interaktif

  const updateInteractiveImage = useCallback(() => {
    setIsLocked(true);
    setTimeout(() => {
      setIsLocked(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (currentImageRef.current) {
      setImageHeight(currentImageRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (currentImageRef.current) {
        setImageHeight(currentImageRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [interactiveImageIndex]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isWrapperFixed) {
        return;
      }
      if (isLocked) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && interactiveImageIndex < numImages - 1) {
        setInteractiveImageIndex(prevIndex => prevIndex + 1);
        updateInteractiveImage();
      } else if (e.deltaY < 0 && interactiveImageIndex > 0) {
        setInteractiveImageIndex(prevIndex => prevIndex - 1);
        updateInteractiveImage();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [interactiveImageIndex, isLocked, isWrapperFixed, numImages, updateInteractiveImage]);

  useEffect(() => {
    const handleScroll = () => {
      if (!fixTriggerRef.current || !unfixTriggerRef.current || !interactiveSectionRef.current) return;

      const fixRect = fixTriggerRef.current.getBoundingClientRect();
      const unfixRect = unfixTriggerRef.current.getBoundingClientRect();

      // Determine fixing state
      const shouldFixNow = fixRect.bottom <= 0 && unfixRect.top >= window.innerHeight;
      const shouldUnfixNow = fixRect.bottom > 0 || unfixRect.top <= 0;

      if (shouldFixNow && !isWrapperFixed) {
        setIsWrapperFixed(true);
      } else if (shouldUnfixNow && isWrapperFixed) {
        // Reset index only if scrolling back up PAST the fixTriggerRef
        // or if scrolling entirely past the interactive section
        if (fixRect.bottom > 0 || unfixRect.top <= 0) {
          setInteractiveImageIndex(0);
        }
        setIsWrapperFixed(false); // Changed order to unfix first
      }

      // --- Logic for Opacity and Blur ---
      let currentOpacity = 0;
      let currentBlur = 0;
      const maxBlur = 5;

      // =====================================================================
      // PHASE A: Image NOT fixed (Still in document flow, moving up)
      // This is the phase where the image will fade-in and blur-out as it scrolls down
      // =====================================================================
      if (!isWrapperFixed) {
        // Animation starts when the top of the interactive section is at 80% viewport height
        const startAnimationScrollTop = interactiveSectionRef.current.offsetTop - window.innerHeight * 0.8;
        // Animation ends when the top of the interactive section is at 0% viewport height (just enters fixed zone)
        const endAnimationScrollTop = interactiveSectionRef.current.offsetTop;

        let entryProgress = 0;
        const scrollDistance = window.scrollY;

        if (scrollDistance >= startAnimationScrollTop && scrollDistance < endAnimationScrollTop) {
            entryProgress = (scrollDistance - startAnimationScrollTop) / (endAnimationScrollTop - startAnimationScrollTop);
        } else if (scrollDistance >= endAnimationScrollTop) {
            entryProgress = 1; // Fully visible
        } else {
            entryProgress = 0; // Still hidden
        }

        currentOpacity = entryProgress;
        currentBlur = maxBlur - (entryProgress * maxBlur);
        currentBlur = Math.max(0, currentBlur); // Ensure blur doesn't go negative
        currentOpacity = Math.min(1, Math.max(0, currentOpacity)); // Clamp opacity

      }
      // =====================================================================
      // PHASE B: Image IS fixed (Stays in the middle of the screen)
      // This is the phase where the image remains clear, then fades-out and blurs-in
      // as the unfixTriggerRef approaches
      // =====================================================================
      else { // isWrapperFixed === true
        currentOpacity = 1;
        currentBlur = 0;

        // Start fade out and blur in, relative to unfixTriggerRef's top
        const fadeOutStartPoint = window.innerHeight * 0.7; // Start fade out when unfixTriggerRef is at 70% from top
        const fadeOutEndPoint = window.innerHeight * 0.2; // Finish fade out when unfixTriggerRef is at 20% from top

        const blurInStartPoint = window.innerHeight * 0.5; // Start blur in when unfixTriggerRef is at 50% from top
        const blurInEndPoint = window.innerHeight * 0.1; // Finish blur in when unfixTriggerRef is at 10% from top

        // Opacity Logic (Fade Out)
        if (unfixRect.top <= fadeOutStartPoint && unfixRect.top >= fadeOutEndPoint) {
          const opacityProgress = 1 - (unfixRect.top - fadeOutEndPoint) / (fadeOutStartPoint - fadeOutEndPoint);
          currentOpacity = Math.max(0, 1 - opacityProgress);
        } else if (unfixRect.top < fadeOutEndPoint) {
          currentOpacity = 0; // Fully hidden
        }
        // else currentOpacity remains 1 (before fadeOutStartPoint)

        // Blur Logic (Blur In)
        if (unfixRect.top <= blurInStartPoint && unfixRect.top >= blurInEndPoint) {
            const blurProgress = 1 - (unfixRect.top - blurInEndPoint) / (blurInStartPoint - blurInEndPoint);
            currentBlur = Math.min(maxBlur, Math.max(0, blurProgress * maxBlur));
        } else if (unfixRect.top < blurInEndPoint) {
            currentBlur = maxBlur; // Fully blurred
        }
        // else currentBlur remains 0 (before blurInStartPoint)
      }

      setImageWrapperOpacity(Math.min(1, Math.max(0, currentOpacity)));
      setImageBlurAmount(Math.min(maxBlur, Math.max(0, currentBlur)));

      // Logic to control interactive image index based on scroll within the fixed section
      if (isWrapperFixed && interactiveSectionRef.current && unfixTriggerRef.current) {
        const fixedSectionStartScroll = interactiveSectionRef.current.offsetTop;
        const fixedSectionEndScroll = unfixTriggerRef.current.offsetTop - window.innerHeight; // Adjusted to end where unfixTriggerRef hits top
        const totalScrollRangeInFixed = fixedSectionEndScroll - fixedSectionStartScroll;

        if (totalScrollRangeInFixed > 0) {
          const currentScrollInFixed = window.scrollY - fixedSectionStartScroll;
          let scrollProgress = Math.max(0, Math.min(1, currentScrollInFixed / totalScrollRangeInFixed));
          const calculatedIndex = Math.floor(scrollProgress * numImages);
          setInteractiveImageIndex(Math.min(numImages - 1, Math.max(0, calculatedIndex)));
        } else {
          setInteractiveImageIndex(0);
        }
      } else if (!isWrapperFixed && interactiveSectionRef.current && window.scrollY < interactiveSectionRef.current.offsetTop) {
        // When not fixed and above the interactive section, reset to 0
        setInteractiveImageIndex(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [numImages, isWrapperFixed]);

  useEffect(() => {
    images.forEach(imageSrc => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, [images]);

  // Kita bisa mengurangi ini lebih jauh jika masih ada ruang kosong yang terlalu banyak
  const INTERACTIVE_SECTION_SCROLL_DURATION_VH = 150; // Mengurangi dari 200
  const interactiveSectionMinHeight = `${INTERACTIVE_SECTION_SCROLL_DURATION_VH}vh`;

  // Define className for motion.img as a variable
  const interactiveImageClassName = "w-[700px] h-auto md:w-[900px]";

  // Define className for image containers as variables
  const smallImageContainerClassName = "block w-full max-w-[250px] h-[150px] md:max-w-[550px] md:h-[370px]";
  const largeImageContainerClassName = "max-w-[600px] w-full h-[300px] md:h-[500px]";


  return (
    <div>
      <HeroSection />
      <CheckHubithat />
      <BrandSection />

      {/* Main title section */}
      <motion.div
        ref={fixTriggerRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        // **PERBAIKAN LEBIH LANJUT: Hapus pt-16 sepenuhnya, dan pastikan pb-0**
        className="flex flex-col items-center justify-center px-4 bg-white" // Dihapus pt-16, hanya pb-0
      >
        <h1 className="text-2xl md:text-4xl font-semibold text-black dark:text-white text-center mb-4">
          Discover a New Way to Stay in the City
        </h1>
        <span className="text-2xl md:text-[6rem] font-bold leading-tight md:leading-none text-center">
          Cozy Stays on Roofgarden
        </span>
      </motion.div>

      {/* Interactive image section */}
      <div
        ref={interactiveSectionRef}
        style={{ minHeight: interactiveSectionMinHeight }}
        // **PERBAIKAN LEBIH LANJUT: Hapus pb-10, hanya pt-0**
        className="relative w-full flex items-center justify-center bg-white" // Dihapus py-10 sepenuhnya
      >
        <motion.div
          animate={{ opacity: imageWrapperOpacity }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`
            image-wrapper
            ${isWrapperFixed ? 'fixed' : ''}
          `}
          style={{
            position: isWrapperFixed ? 'fixed' : 'relative',
            top: isWrapperFixed ? '50%' : 'auto',
            left: isWrapperFixed ? '50%' : 'auto',
            transform: isWrapperFixed ? 'translate(-50%, -50%)' : 'none',
            zIndex: isWrapperFixed ? 999 : 'auto',
            textAlign: 'center',
            width: isWrapperFixed ? 'auto' : '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: imageWrapperOpacity > 0.01 ? 'auto' : 'none',
          }}
        >
          <motion.img
            ref={currentImageRef}
            key={interactiveImageIndex}
            src={images[interactiveImageIndex]}
            alt="Scroll Image"
            className={interactiveImageClassName}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: `blur(${imageBlurAmount}px)`
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 15,
            }}
          />
        </motion.div>
      </div>

      {/* Content after interactive image */}
      <div
        className={`
          flex flex-col items-center justify-center w-full max-w-[1980px]
          py-10 px-4 mx-auto bg-gray-100 gap-y-5 md:gap-y-16
        `}
        style={{ paddingTop: isWrapperFixed ? `${imageHeight + 80}px` : '0px' }}
      >
        <motion.div
          ref={unfixTriggerRef}
          className="flex flex-wrap justify-between w-full max-w-[1199px] gap-x-24 gap-y-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="block w-full max-w-[300px] mt-3 text-base md:text-xl text-gray-800 leading-[30px]">
            <p>Experience the future of urban hospitality with HubiThat's innovative roofgarden sanctuaries.</p>
          </span>
          <span className="block w-full max-w-[800px] text-3xl md:text-5xl font-medium text-gray-800 md:leading-[65px]">
            <p>HubiThat: Redefining Urban Living with Roof Forest built for Megapolitans to recharge the soul and find calmness ASAP</p>
          </span>
        </motion.div>
        <motion.div
          className="flex flex-wrap w-full max-w-[1200px] justify-center items-center md:gap-x-24 gap-x-4 md:gap-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {/* Changed this line to use the variable */}
          <span className={smallImageContainerClassName}>
            <img src={image1} alt="Rooftop Capsule Hotel" className="w-full h-full object-cover rounded-lg" />
          </span>
          {/* Changed this line to use the variable */}
          <span className={smallImageContainerClassName}>
            <img src={image2} alt="Green Space" className="w-full h-full object-cover rounded-lg" />
          </span>
        </motion.div>
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
              {/* Changed this line to use the variable */}
              <div className={largeImageContainerClassName}>
                <img src={image3} alt="Rooftop Capsule Hotel exterior" className="w-full h-full object-cover" />
              </div>
              <div className="flex md:hidden flex-col w-full mt-4">
                <Button>Book Now</Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-8 py-10 md:py-0">
              {/* Changed this line to use the variable */}
              <div className={largeImageContainerClassName + " order-2 md:order-1"}> {/* Combined with template literal for conditional order */}
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
              {/* Changed this line to use the variable */}
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