import { useState, useEffect } from 'react';
import { TrendingUp, Users, Building, ArrowRight, Home, Star, MapPin, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import img12 from '../../assets/12.png'; 
import img16 from '../../assets/16.png';
import img14 from '../../assets/14.png';
import img17 from '../../assets/17.png';

// Partnership Page Component
export default function PartnershipPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  
  const images = [
    {
      src: img17,
      alt: "SkyBox exterior view showing modular units on a rooftop"
    },
    {
      src: img12,
      alt: "SkyBox interior showing modern design and city views"
    },
    {
      src: img14,
      alt: "SkyBox rooftop common area with guests enjoying the view"
    },
    {
      src: img16,
      alt: "SkyBox night view with illuminated units against the city skyline"
    }
  ];

  // Check if the device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIsMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Product Image Carousel Component
  const ProductImagesCarousel = () => (
    <div className="relative h-96 rounded-lg overflow-hidden">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setCurrentIndex(index);
              setTimeout(() => setIsAnimating(false), 500);
            }}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? 'w-8 bg-white' : 'w-2 bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );

  // Product Description Component
  const ProductDescription = () => (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">SkyBox Urban Retreat</h3>
      <p className="text-gray-700 mb-6">
        SkyBox offers a revolutionary accommodation concept: luxurious modular box-style rooms 
        perched atop prime city center buildings, providing unparalleled urban experiences with 
        stunning panoramic views and sustainable design.
      </p>
      
      <h4 className="text-xl font-semibold text-gray-900 mb-3">Why SkyBox Stands Out</h4>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[var(--bg-color)] text-white">
              <MapPin size={20} />
            </div>
          </div>
          <div className="ml-4">
            <h5 className="text-lg font-medium text-gray-900">Prime Locations</h5>
            <p className="text-gray-600">
              Positioned on rooftops of landmark buildings in the heart of major cities, offering 
              unmatched accessibility to business districts and cultural hotspots.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[var(--bg-color)] text-white">
              <Home size={20} />
            </div>
          </div>
          <div className="ml-4">
            <h5 className="text-lg font-medium text-gray-900">Innovative Design</h5>
            <p className="text-gray-600">
              Each modular box room features contemporary design, premium amenities, and 
              floor-to-ceiling windows for immersive cityscape views.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[var(--bg-color)] text-white">
              <Star size={20} />
            </div>
          </div>
          <div className="ml-4">
            <h5 className="text-lg font-medium text-gray-900">Exclusive Experience</h5>
            <p className="text-gray-600">
              Private rooftop access, personalized service, and unique social spaces create 
              an exclusive community feel above the bustling city.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[var(--bg-color)] text-white">
              <Shield size={20} />
            </div>
          </div>
          <div className="ml-4">
            <h5 className="text-lg font-medium text-gray-900">Sustainable Innovation</h5>
            <p className="text-gray-600">
              Eco-friendly construction, smart energy systems, and adaptive reuse of urban 
              spaces set new standards in sustainable hospitality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-12 pt-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:tracking-tight">
            Partner With Us
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
            Join our network of strategic investors and help us build the future of innovation
          </p>
        </div>
        
        {/* Our Product Section */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Product
          </h2>
          
          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {isMobile ? (
              // Mobile layout: Image first, then description
              <>
                <ProductImagesCarousel />
                <ProductDescription />
              </>
            ) : (
              // Desktop layout: Description first, then image (original layout)
              <>
                <ProductDescription />
                <ProductImagesCarousel />
              </>
            )}
          </div>
        </div>
        
        {/* Investment Highlights */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Why Partner With Us
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow p-6 lg:p-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[var(--bg-color)] text-white">
                <TrendingUp size={24} />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Strong ROI</h3>
              <p className="mt-2 text-gray-500">
                Our projects consistently deliver above-market returns with clear exit strategies
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[var(--bg-color)] text-white">
                <Users size={24} />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Strategic Network</h3>
              <p className="mt-2 text-gray-500">
                Access to our exclusive network of industry leaders and investment opportunities
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[var(--bg-color)] text-white">
                <Building size={24} />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Proven Track Record</h3>
              <p className="mt-2 text-gray-500">
                15+ years of successful ventures and partnerships across multiple industries
              </p>
            </div>
          </div>
        </div>
        
       {/* Partnership Process */}
      <div className="mt-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Partnership Process
        </h2>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on larger screens */}
            <div className="absolute   inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t  hidden md:block  pt-20 border-gray-300"></div>
            </div>
          
          {/* Process steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {/* Step 1 */}
            <div className="text-center flex flex-col items-center">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-color)]">
                <span className="text-white font-medium">1</span>
              </span>
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900">Initial Consultation</h3>
                <p className="mt-1 text-sm text-gray-500 max-w-xs">
                  We discuss your investment goals and explore alignment
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="text-center flex flex-col items-center">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-color)]">
                <span className="text-white font-medium">2</span>
              </span>
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900">Due Diligence</h3>
                <p className="mt-1 text-sm text-gray-500 max-w-xs">
                  Comprehensive review of opportunities and documentation
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="text-center flex flex-col items-center">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-color)]">
                <span className="text-white font-medium">3</span>
              </span>
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900">Partnership Agreement</h3>
                <p className="mt-1 text-sm text-gray-500 max-w-xs">
                  Structuring terms that benefit all stakeholders
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="text-center flex flex-col items-center">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-color)]">
                <span className="text-white font-medium">4</span>
              </span>
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900">Ongoing Collaboration</h3>
                <p className="mt-1 text-sm text-gray-500 max-w-xs">
                  Regular updates and strategic involvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        {/* Testimonials */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Partners Say
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow p-8">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[var(--button-second)] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JP</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">John Parker</h4>
                  <p className="text-gray-500">CEO, Venture Capital Group</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Working with InvestNext has been transformative for our portfolio. Their due diligence process and market insights are unmatched in the industry."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-8">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[var(--button-second)] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SW</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Sarah Wilson</h4>
                  <p className="text-gray-500">Managing Partner, Growth Equity</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The returns on our partnership have consistently exceeded projections. Their team's expertise and strategic approach have been invaluable."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-8">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[var(--button-second)] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RL</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Robert Lee</h4>
                  <p className="text-gray-500">Investment Director, Global Fund</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "InvestNext doesn't just provide investment opportunities—they create true partnerships. Their transparency and communication set them apart."
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 bg-[var(--bg-color)] rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:px-12 md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Ready to explore partnership opportunities?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-[var(--button-second)]">
                Schedule a confidential consultation with our investment team today.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[var(--bg-color)] bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-color)] focus:ring-white"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}