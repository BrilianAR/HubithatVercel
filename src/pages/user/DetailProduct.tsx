import { useState, useEffect, useRef } from 'react';
import { Calendar, Star, MapPin, ChevronRight, Users, Waves, Coffee, Wifi, Car, AirVent, Phone, Clock, LandPlot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import h1 from '../../assets/h1.png';
import h2 from '../../assets/h2.png';
import h3 from '../../assets/h3.png';
import h4 from '../../assets/h4.png';
import h5 from '../../assets/h5.png';

export default function HotelDetailPage() {
  const [showModal, setShowModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeReviewsTab, setActiveReviewsTab] = useState('all');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState('overview');
  const [scrollPosition, setScrollPosition] = useState(0);
  // Explicitly type the ref as HTMLDivElement
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'location', label: 'Location' },
    { id: 'reviews', label: 'Reviews' }
  ];
  
  // Handle scrolling of mobile tab container
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 100;
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);
    
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    
    setScrollPosition(newPosition);
  };
  
  // Check if we can scroll in a specific direction
  const canScroll = (direction: 'left' | 'right'): boolean => {
    const container = scrollContainerRef.current;
    if (!container) return false;
    
    if (direction === 'left') {
      return scrollPosition > 0;
    } else {
      return scrollPosition < container.scrollWidth - container.clientWidth;
    }
  };
  
  // Update scroll position when container scrolls
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setScrollPosition(container.scrollLeft);
    }
  };

  // Add effect to set up scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    };
  });
  const photos = [
    {
      id: 1,
      main: true,
      src: h3,
      alt: "exterior building Hubithat alun alun by Bobobox"
    },
    {
      id: 2,
      src: h2,
      alt: "lobby Hubithat alun alun by Bobobox"
    },
    {
      id: 3,
      src: h4,
      alt: "bpad Hubithat alun alun by Bobobox"
    },
    {
      id: 4,
      src: h1,
      alt: "bedroom Hubithat alun alun by Bobobox"
    },
    {
      id: 5,
      src: h2,
      alt: "bathroom Hubithat alun alun by Bobobox"
    },
    {
      id: 6,
      src: h5,
      alt: "reception Hubithat alun alun by Bobobox"
    }
  ];

  const rooms = [
    {
      id: 1,
      name: "Standard Pod",
      size: "12 m²",
      occupancy: "2 guests",
      bed: "1 Queen bed",
      price: 210000,
      discountPrice: 189000,
      amenities: ["Air Conditioning", "Free WiFi", "Smart TV", "Private Bathroom"],
      image: h1,
      available: 3
    },
    {
      id: 2,
      name: "Deluxe Pod",
      size: "16 m²",
      occupancy: "2 guests",
      bed: "1 King bed",
      price: 350000,
      discountPrice: 315000,
      amenities: ["Air Conditioning", "Free WiFi", "Smart TV", "Private Bathroom", "City View"],
      image: h3,
      available: 1
    },
    {
      id: 3,
      name: "Family Pod",
      size: "24 m²",
      occupancy: "4 guests",
      bed: "1 King bed + 2 Singles",
      price: 520000,
      discountPrice: 468000,
      amenities: ["Air Conditioning", "Free WiFi", "Smart TV", "Private Bathroom", "Balcony"],
      image: h5,
      available: 0
    }
  ];

  const facilities = [
    { name: "Free WiFi", icon: <Wifi className="h-5 w-5" /> },
    { name: "Restaurant", icon: <Coffee className="h-5 w-5" /> },
    { name: "Swimming Pool", icon: <Waves className="h-5 w-5" /> },
    { name: "Parking", icon: <Car className="h-5 w-5" /> },
    { name: "Air Conditioning", icon: <AirVent className="h-5 w-5" /> },
    { name: "24/7 Reception", icon: <Clock className="h-5 w-5" /> },
    { name: "Garden", icon: <LandPlot className="h-5 w-5" /> },
    { name: "Room Service", icon: <Phone className="h-5 w-5" /> }
  ];

  const reviews = [
    {
      id: 1,
      name: "John D.",
      rating: 5,
      date: "April 2025",
      comment: "Great location and very friendly staff! The pod concept is innovative and comfortable.",
      type: "solo"
    },
    {
      id: 2,
      name: "Marie S.",
      rating: 4,
      date: "March 2025",
      comment: "Clean rooms and great amenities. The location is perfect for exploring Bandung.",
      type: "couple"
    },
    {
      id: 3,
      name: "Ahmad K.",
      rating: 5,
      date: "February 2025",
      comment: "Excellent value for money. Will definitely stay here again on my next trip to Bandung.",
      type: "family"
    },
    {
      id: 4,
      name: "Lisa T.",
      rating: 5,
      date: "January 2025",
      comment: "Very modern and comfortable. I love the smart features in the room!",
      type: "business"
    }
  ];

  const openModal = (index: any) => {
    setActiveSlide(index);
    setShowModal(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: any) => {
    setActiveSlide(index);
  };

  const incrementGuests = () => {
    if (guests < 10) setGuests(guests + 1);
  };

  const decrementGuests = () => {
    if (guests > 1) setGuests(guests - 1);
  };

  const filteredReviews = activeReviewsTab === 'all' 
    ? reviews 
    : reviews.filter(review => review.type === activeReviewsTab);
  
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get position where booking section should become sticky
      // Typically this would be the top of the main content section
      const stickyOffset = 100; // Adjust based on your layout
      
      if (window.scrollY > stickyOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
<>
    {/* Photo Modal */}
      {showModal && (
        <div id="modal-container" className="fixed inset-0 z-50 flex overflow-y-auto">
          <div className="fixed inset-0 bg-black" style={{ opacity: 0.8 }}></div>
          
          <div className="relative m-auto w-full overflow-hidden bg-transparent shadow-none">
            {/* Close button */}
            <svg 
              viewBox="0 0 16 16" 
              className="fixed right-6 top-4 z-10 h-5 w-5 fill-white stroke-neutral-400 cursor-pointer hover:opacity-100"
              onClick={closeModal}
            >
              <path d="M9.53329 8.12C9.51734 8.10503 9.50464 8.08696 9.49595 8.06689C9.48726 8.04683 9.48278 8.0252 9.48278 8.00333C9.48278 7.98146 9.48726 7.95983 9.49595 7.93976C9.50464 7.9197 9.51734 7.90163 9.53329 7.88666L15.7066 1.70666C15.8001 1.61427 15.8744 1.50423 15.9251 1.38293C15.9758 1.26162 16.0019 1.13146 16.0019 0.999997C16.0019 0.86853 15.9758 0.738371 15.9251 0.617065C15.8744 0.49576 15.8001 0.385722 15.7066 0.29333C15.5183 0.107676 15.2644 0.00360107 15 0.00360107C14.7355 0.00360107 14.4816 0.107676 14.2933 0.29333L8.11996 6.46666C8.10441 6.48279 8.08577 6.49562 8.06515 6.50439C8.04453 6.51315 8.02236 6.51767 7.99995 6.51767C7.97755 6.51767 7.95538 6.51315 7.93476 6.50439C7.91414 6.49562 7.8955 6.48279 7.87995 6.46666L1.70662 0.29333C1.51827 0.107676 1.26442 0.00360107 0.999954 0.00360107C0.735485 0.00360107 0.48164 0.107676 0.293288 0.29333C0.199761 0.385722 0.125505 0.49576 0.0748242 0.617065C0.0241436 0.738371 -0.00195312 0.86853 -0.00195312 0.999997C-0.00195312 1.13146 0.0241436 1.26162 0.0748242 1.38293C0.125505 1.50423 0.199761 1.61427 0.293288 1.70666L6.46662 7.88666C6.48256 7.90163 6.49527 7.9197 6.50396 7.93976C6.51265 7.95983 6.51713 7.98146 6.51713 8.00333C6.51713 8.0252 6.51265 8.04683 6.50396 8.06689C6.49527 8.08696 6.48256 8.10503 6.46662 8.12L0.293288 14.2933C0.199761 14.3857 0.125505 14.4958 0.0748242 14.6171C0.0241436 14.7384 -0.00195312 14.8685 -0.00195312 15C-0.00195312 15.1315 0.0241436 15.2616 0.0748242 15.3829C0.125505 15.5042 0.199761 15.6143 0.293288 15.7067C0.48164 15.8923 0.735485 15.9964 0.999954 15.9964C1.26442 15.9964 1.51827 15.8923 1.70662 15.7067L7.87995 9.53333C7.8955 9.5172 7.91414 9.50437 7.93476 9.49561C7.95538 9.48684 7.97755 9.48233 7.99995 9.48233C8.02236 9.48233 8.04453 9.48684 8.06515 9.49561C8.08577 9.50437 8.10441 9.5172 8.11996 9.53333L14.2933 15.7067C14.4816 15.8923 14.7355 15.9964 15 15.9964C15.2644 15.9964 15.5183 15.8923 15.7066 15.7067C15.8001 15.6143 15.8744 15.5042 15.9251 15.3829C15.9758 15.2616 16.0019 15.1315 16.0019 15C16.0019 14.8685 15.9758 14.7384 15.9251 14.6171C15.8744 14.4958 15.8001 14.3857 15.7066 14.2933L9.53329 8.12Z"></path>
            </svg>
            
            <section className="m-auto">
              {/* Main Image Slider */}
              <div className="relative">
                {photos.map((photo, index) => (
                  <div 
                    key={photo.id}
                    className={`${index === activeSlide ? 'block' : 'hidden'} relative m-auto min-h-[48px] w-full`}
                  >
                    <img 
                      className="m-auto max-h-[90vh] w-auto aspect-[3/2] object-contain"
                      src={photo.src}
                      alt={photo.alt}
                    />
                  </div>
                ))}
              </div>
              
              {/* Pagination Dots */}
              <div className="lightbox-pagination mt-4 flex justify-center gap-2">
                {photos.map((_, index) => (
                  <span
                    key={index}
                    className={`inline-block h-2 w-2 rounded-full cursor-pointer ${
                      activeSlide === index ? 'bg-white' : 'bg-gray-400'
                    }`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
              
              {/* Navigation Buttons */}
              <button 
                type="button" 
                className="fixed left-0 top-1/2 z-10 h-14 w-10 -translate-y-1/2 bg-black/20 flex items-center justify-center opacity-70 hover:opacity-100"
                onClick={goToPrevSlide}
              >
                <svg viewBox="0 0 16 24" className="h-6 w-6 fill-white stroke-2">
                  <path d="M0.5 12C0.5 11.3 0.8 10.7 1.3 10.3L12.5 0.499973C13.3 -0.200027 14.4 -0.100027 15.1 0.699973C15.7 1.49997 15.7 2.59997 14.9 3.19997L5.1 11.8C5 11.9 5 12 5.1 12.1L14.9 20.7C15.7 21.4 15.8 22.5 15.1 23.3C14.4 24.1 13.3 24.2 12.5 23.5C12.5 23.5 12.5 23.5 12.4 23.4L1.3 13.7C0.8 13.3 0.5 12.6 0.5 12Z"></path>
                </svg>
              </button>
              
              <button 
                type="button" 
                className="fixed right-0 top-1/2 z-10 h-14 w-10 -translate-y-1/2 bg-black/20 flex items-center justify-center opacity-70 hover:opacity-100"
                onClick={goToNextSlide}
              >
                <svg viewBox="0 0 16 24" className="h-6 w-6 rotate-180 fill-white stroke-2">
                  <path d="M0.5 12C0.5 11.3 0.8 10.7 1.3 10.3L12.5 0.499973C13.3 -0.200027 14.4 -0.100027 15.1 0.699973C15.7 1.49997 15.7 2.59997 14.9 3.19997L5.1 11.8C5 11.9 5 12 5.1 12.1L14.9 20.7C15.7 21.4 15.8 22.5 15.1 23.3C14.4 24.1 13.3 24.2 12.5 23.5C12.5 23.5 12.5 23.5 12.4 23.4L1.3 13.7C0.8 13.3 0.5 12.6 0.5 12Z"></path>
                </svg>
              </button>
            </section>
          </div>
        </div>
      )}

    <div className="bg-white-50 min-h-screen mx-auto max-w-7xl pt-30 px-4 sm:px-6 lg:px-8">
      {/* Header and Navigation */}
      <header className="bg-white ">
        <nav className=" py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-[var(--bg-color)] hover:text-[var(--button-color)] font-semibold">
              Home
            </a>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <a href="/product" className="text-[var(--bg-color)] hover:text-[var(--button-color)] font-semibold">
              Product
            </a>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-500 font-medium">Hubithat Alun-Alun</span>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="  py-2">
        {/* Hotel Title Section */}
        <section className="bg-white rounded-lg py-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Hubithat Alun-Alun, Bandung</h1>
              <div className="flex items-center mt-2">
                <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                <p className="text-sm text-gray-600">Jl. Kepatihan No.8, Balonggede, Kec. Regol, Kota Bandung, West Java 40251, Indonesia</p>
              </div>
              
              <div className="mt-4 flex items-center flex-wrap gap-4">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white bg-[var(--bg-color)]">Cozy</span>
                
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
                
                <div>
                  <span className="text-lg font-semibold">4.9</span>
                  <span className="text-xs font-semibold leading-none">/</span>
                  <span className="text-xs font-semibold leading-none">5</span>
                  <span className="mx-1">•</span>
                  <span className="text-sm">456 Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* Gallery */}
          <section className="bg-white rounded-lg py-6 w-full">
            <div className="flex justify-between gap-4">
              {/* Main large image */}
              <figure className="w-full md:basis-3/4 cursor-pointer overflow-hidden rounded-xl" onClick={() => openModal(0)}>
                <img 
                  className="w-full h-full aspect-video object-cover rounded-xl hover:scale-105 transition-transform duration-300" 
                  alt={photos[0].alt}
                  src={photos[0].src}
                />
              </figure>
              
              {/* Side column with smaller images */}
              <div className="hidden md:flex md:basis-1/4 flex-col space-y-4">
                {/* First small image */}
                <figure className="w-full cursor-pointer overflow-hidden rounded-xl" onClick={() => openModal(1)}>
                  <img 
                    className="w-full h-full aspect-[4/3] object-cover rounded-xl hover:scale-105 transition-transform duration-300" 
                    alt={photos[1].alt}
                    src={photos[1].src}
                  />
                </figure>
                
                {/* Second small image */}
                <figure className="w-full cursor-pointer overflow-hidden rounded-xl" onClick={() => openModal(2)}>
                  <img 
                    className="w-full h-full aspect-[4/3] object-cover rounded-xl hover:scale-105 transition-transform duration-300" 
                    alt={photos[2].alt}
                    src={photos[2].src}
                  />
                </figure>
                
                {/* "View more photos" button */}
                <div 
                  onClick={() => openModal(3)}
                  className="flex w-full items-center justify-center gap-4 text-center rounded-xl bg-blue-50 py-8 cursor-pointer hover:bg-emerald-100 transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-[var(--bg-color)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.67 18.95L7.6 15.64C8.39 15.11 9.53 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-base text-[var(--bg-color)] font-medium">+{photos.length - 3} Photos</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-lg flex flex-col md:flex-row gap-6 mb-6">
          {/* Main content section */}
          <section className="bg-white rounded-lg  py-6 w-full md:w-8/12">
            <div className="border-b border-gray-200">
                    <nav className={`hidden md:flex -mb-px border-b border-gray-200`}>
                      {tabs.map((tab) => (
                        <button 
                          key={tab.id}
                          onClick={() => setSelectedTab(tab.id)}
                          className={`py-4 px-6 font-medium text-sm border-b-2 ${
                            selectedTab === tab.id 
                              ? 'border-[var(--bg-color)] text-[var(--bg-color)]' 
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </nav>
                    
                    {/* Mobile Navigation with Scroll Buttons */}
                    <div className="relative md:hidden">
                      {/* Left scroll button */}
                      {canScroll('left') && (
                        <button 
                          onClick={() => scroll('left')}
                          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-1 shadow-md"
                        >
                          <ChevronLeft size={18} />
                        </button>
                      )}
                      
                      {/* Scrollable container */}
                      <div 
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto scrollbar-hide border-b border-gray-200"
                        onScroll={handleScroll}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {tabs.map((tab) => (
                          <button 
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id)}
                            className={`flex-shrink-0 py-3 px-4 font-medium text-sm border-b-2 whitespace-nowrap ${
                              selectedTab === tab.id 
                                ? 'border-[var(--bg-color)] text-[var(--bg-color)]' 
                                : 'border-transparent text-gray-500'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                      
                      {/* Right scroll button */}
                      {canScroll('right') && (
                        <button 
                          onClick={() => scroll('right')}
                          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-1 shadow-md"
                        >
                          <ChevronRight size={18} />
                        </button>
                      )}
                    </div>
            </div>
            
            {/* Tab Content */}
            {/* Tab Content */}
            <div className="p-6">
              {/* Overview Tab */}
              {selectedTab === 'overview' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">About Hubithat Alun-Alun</h2>
                  <p className="text-gray-700 mb-4">
                    Located in the heart of Bandung, Hubithat Alun-Alun offers a unique and modern pod-style accommodation experience. Just steps away from Bandung's famous Alun-Alun square, this hotel combines comfort, technology, and strategic location to provide an excellent stay for tourists and business travelers alike.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Each pod is equipped with smart features, including customizable lighting, climate control, and entertainment systems. The hotel prioritizes both privacy and community, with well-designed common spaces for socializing and working.
                  </p>
                  <p className="text-gray-700">
                    Whether you're visiting Bandung for its cool climate, shopping destinations, or culinary adventures, Hubithat Alun-Alun serves as the perfect base for exploring this vibrant city.
                  </p>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Hotel Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-[var(--bg-color)]">
                          <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-700">Prime location at Bandung's city center</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-[var(--bg-color)]">
                          <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-700">Modern pod-style accommodations</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-[var(--bg-color)]">
                          <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-700">Smart room technology</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-[var(--bg-color)]">
                          <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-700">High-speed Wi-Fi throughout the property</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-[var(--bg-color)]">
                          <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-700">24/7 guest support</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-[var(--bg-color)]">
                          <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-700">Modern communal spaces</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Rooms Tab */}
              {selectedTab === 'rooms' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Available Room Types</h2>
                  <div className="space-y-6">
                    {rooms.map((room) => (
                      <div key={room.id} className="border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                          <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6 md:w-2/3 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h3 className="text-lg font-semibold text-gray-900">{room.name}</h3>
                              <div className="text-right">
                                <p className="text-sm text-gray-500">per night</p>
                                <p className="text-gray-500 line-through">IDR {room.price.toLocaleString()}</p>
                                <p className="text-xl font-bold text-[var(--bg-color)]">IDR {room.discountPrice.toLocaleString()}</p>
                              </div>
                            </div>
                            
                            <div className="mt-2 grid grid-cols-2 gap-2">
                              <div className="flex items-center text-sm text-gray-600">
                                <LandPlot className="h-4 w-4 mr-1" />
                                <span>{room.size}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Users className="h-4 w-4 mr-1" />
                                <span>{room.occupancy}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600 col-span-2">
                                <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M4 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M20 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M4 12V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H18C18.5304 7 19.0391 7.21071 19.4142 7.58579C19.7893 7.96086 20 8.46957 20 9V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>{room.bed}</span>
                              </div>
                            </div>

                            <div className="mt-3">
                              <h4 className="text-sm font-medium text-gray-900 mb-1">Amenities:</h4>
                              <div className="flex flex-wrap gap-2">
                                {room.amenities.map((amenity, idx) => (
                                  <span key={idx} className="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                                    {amenity}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex justify-between items-center">
                            <div className="text-sm">
                              {room.available > 0 ? (
                                <span className="text-green-600 font-medium">
                                  {room.available} {room.available === 1 ? 'room' : 'rooms'} left at this price
                                </span>
                              ) : (
                                <span className="text-red-600 font-medium">
                                  No availability
                                </span>
                              )}
                            </div>
                            <button 
                              className={`px-4 py-2 rounded-md text-sm font-medium ${
                                room.available > 0 
                                  ? 'bg-[var(--bg-color)] hover:bg-[var(--bg-color)] text-white' 
                                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                              }`}
                              disabled={room.available === 0}
                            >
                              {room.available > 0 ? 'Select Room' : 'Sold Out'}
                            </button>
                          </div>
                          </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cancellation Policy</h3>
                    <p className="text-gray-700 text-sm">
                      • Free cancellation up to 24 hours before check-in<br />
                      • Cancellations made less than 24 hours before check-in are subject to a one-night charge<br />
                      • No-shows will be charged the full amount of the reservation
                    </p>
                  </div>
                </div>
              )}
              
              {/* Facilities Tab */}
              {selectedTab === 'facilities' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Hotel Facilities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="bg-emerald-100 p-3 rounded-lg text-[var(--bg-color)]">
                          {facility.icon}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">{facility.name}</h3>
                          {facility.name === "Free WiFi" && (
                            <p className="text-sm text-gray-600">High-speed internet throughout the property</p>
                          )}
                          {facility.name === "Restaurant" && (
                            <p className="text-sm text-gray-600">Serving breakfast, lunch and dinner daily</p>
                          )}
                          {facility.name === "Swimming Pool" && (
                            <p className="text-sm text-gray-600">Open from 7:00 AM to 8:00 PM</p>
                          )}
                          {facility.name === "Parking" && (
                            <p className="text-sm text-gray-600">Secure on-site parking available</p>
                          )}
                          {facility.name === "Air Conditioning" && (
                            <p className="text-sm text-gray-600">Individual control in all rooms</p>
                          )}
                          {facility.name === "24/7 Reception" && (
                            <p className="text-sm text-gray-600">Front desk services available all day</p>
                          )}
                          {facility.name === "Garden" && (
                            <p className="text-sm text-gray-600">Relaxing outdoor area with seating</p>
                          )}
                          {facility.name === "Room Service" && (
                            <p className="text-sm text-gray-600">Available from 7:00 AM to 10:00 PM</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Guest Services</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Luggage storage
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Tour desk
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Airport transfers (surcharge)
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Laundry service
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Wake-up calls
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Currency exchange
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Location Tab */}
              {selectedTab === 'location' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Location</h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <div className="bg-gray-100 rounded-lg overflow-hidden h-80">
                        {/* Google Maps would be integrated here */}
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <div className="text-center p-4">
                            <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                            <p className="font-medium text-gray-600">Google Maps View</p>
                            <p className="text-sm text-gray-500">Interactive map would appear here</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                        <p className="text-gray-700">
                          Jl. Kepatihan No.8, Balonggede, Kec. Regol,<br />
                          Kota Bandung, West Java 40251,<br />
                          Indonesia
                        </p>
                        <button className="mt-3 text-[var(--bg-color)] hover:text-[var(--button-color)] flex items-center text-sm font-medium">
                          <svg className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          Get directions
                        </button>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Nearby Attractions</h3>
                      <ul className="space-y-4">
                        <li className="flex">
                          <div className="flex-shrink-0 h-5 w-5 text-[var(--bg-color)]">
                            <svg viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 font-medium">Alun-Alun Bandung</p>
                            <p className="text-sm text-gray-600">0.1 km / 2 min walk</p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 h-5 w-5 text-[var(--bg-color)]">
                            <svg viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 font-medium">Bandung Grand Mosque</p>
                            <p className="text-sm text-gray-600">0.3 km / 5 min walk</p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 h-5 w-5 text-[var(--bg-color)]">
                            <svg viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 font-medium">Pasar Baru Trade Center</p>
                            <p className="text-sm text-gray-600">0.7 km / 10 min walk</p>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 h-5 w-5 text-[var(--bg-color)]">
                            <svg viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 font-medium">Braga Street</p>
                            <p className="text-sm text-gray-600">1.0 km / 15 min walk</p>
                          </div>
                        </li>
                      </ul>
                      
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Transportation</h3>
                        <ul className="space-y-3">
                          <li className="flex">
                            <div className="flex-shrink-0 h-5 w-5 text-[var(--bg-color)]">
                              <svg viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-4a.5.5 0 00-.053-.224l-1.5-3a.5.5 0 00-.448-.276H15V4a1 1 0 00-1-1H3zm11 3a1 1 0 00-1 1v2H9V8a1 1 0 00-1-1H4a1 1 0 00-1 1v7h1.05a2.5 2.5 0 014.9 0H14V7z" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 font-medium">Bandung Railway Station</p>
                              <p className="text-sm text-gray-600">1.2 km / 5 min by car</p>
                            </div>
                          </li>
                          <li className="flex">
                            <div className="flex-shrink-0 h-5 w-5 text-[var(--bg-color)]">
                              <svg viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 font-medium">Husein Sastranegara International Airport</p>
                              <p className="text-sm text-gray-600">5.5 km / 25 min by car</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Reviews Tab */}
              {selectedTab === 'reviews' && (
                <div>
                  <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2">Guest Reviews</h2>
                      <div className="flex items-center">
                        <div className="mr-2">
                          <span className="text-3xl font-bold text-gray-900">4.9</span>
                          <span className="text-sm text-gray-600">/5</span>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                          <Star className="h-5 w-5 text-gray-300" />
                        </div>
                        <span className="ml-2 text-sm text-gray-600">Based on 456 reviews</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0">
                      <div className="inline-flex rounded-md " role="group">
                        <button
                          type="button"
                          className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                            activeReviewsTab === 'all'
                              ? 'bg-[var(--bg-color)] text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setActiveReviewsTab('all')}
                        >
                          All
                        </button>
                        <button
                          type="button"
                          className={`px-4 py-2 text-sm font-medium ${
                            activeReviewsTab === 'solo'
                              ? 'bg-[var(--bg-color)] text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setActiveReviewsTab('solo')}
                        >
                          Solo
                        </button>
                        <button
                          type="button"
                          className={`px-4 py-2 text-sm font-medium ${
                            activeReviewsTab === 'couple'
                              ? 'bg-[var(--bg-color)] text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setActiveReviewsTab('couple')}
                        >
                          Couples
                        </button>
                        <button
                          type="button"
                          className={`px-4 py-2 text-sm font-medium ${
                            activeReviewsTab === 'family'
                              ? 'bg-[var(--bg-color)] text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setActiveReviewsTab('family')}
                        >
                          Families
                        </button>
                        <button
                          type="button"
                          className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                            activeReviewsTab === 'business'
                              ? 'bg-[var(--bg-color)] text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setActiveReviewsTab('business')}
                        >
                          Business
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {filteredReviews.map((review) => (
                      <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <div className="bg-emerald-100 rounded-full h-10 w-10 flex items-center justify-center text-[var(--bg-color)] font-bold">
                              {review.name.charAt(0)}
                            </div>
                            <div className="ml-3">
                              <h4 className="font-medium text-gray-900">{review.name}</h4>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                            ))}
                            {[...Array(5 - review.rating)].map((_, i) => (
                              <Star key={i + review.rating} className="h-5 w-5 text-gray-300" />
                            ))}
                          </div>
                        </div>
                        <p className="mt-3 text-gray-700">{review.comment}</p>
                        <div className="mt-3 flex items-center">
                          <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-[var(--button-color)]">
                            {review.type === 'solo' && 'Solo traveler'}
                            {review.type === 'couple' && 'Couple'}
                            {review.type === 'family' && 'Family'}
                            {review.type === 'business' && 'Business traveler'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <button className="px-4 py-2 text-sm font-medium text-[var(--bg-color)] hover:text-[var(--button-color)] flex items-center">
                      Load more reviews
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Booking Card - Sticky on scroll */}
          <div className="w-full md:w-4/12 relative">
            <section 
              className={`bg-white rounded-lg w-full ${
                isSticky ? 'md:sticky md:top-6 transition-all duration-300 ease-in-out transform translate-y-0' : ''
              }`}
            >
              <div className="border border-gray-200 rounded-lg p-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Book Your Stay</h2>
                <div className="text-sm text-gray-500 mb-4">
                  Starts from <span className="text-2xl font-bold text-[var(--bg-color)] ml-1">IDR 189,000</span> /night
                </div>
                
                <div className="space-y-4">
                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in & Check-out</label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <input 
                          type="date" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bg-color)]" 
                          value={checkInDate}
                          onChange={(e) => setCheckInDate(e.target.value)}
                        />
                        <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                      <div className="relative flex-1">
                        <input 
                          type="date" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bg-color)]" 
                          value={checkOutDate}
                          onChange={(e) => setCheckOutDate(e.target.value)}
                        />
                        <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Guest Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                      <button 
                        className="px-3 py-2 text-gray-500 hover:bg-gray-100" 
                        onClick={decrementGuests}
                      >
                        -
                      </button>
                      <div className="flex-1 text-center flex items-center justify-center">
                        <Users className="h-4 w-4 text-gray-500 mr-2" />
                        <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                      </div>
                      <button 
                        className="px-3 py-2 text-gray-500 hover:bg-gray-100" 
                        onClick={incrementGuests}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  {/* Total Price */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Base rate</span>
                      <span className="text-gray-900">IDR 189,000</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Taxes & fees</span>
                      <span className="text-gray-900">IDR 18,900</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span className="text-[var(--bg-color)]">IDR 207,900</span>
                    </div>
                  </div>
                  
                  {/* Book Now Button with animation on hover */}
                  <button 
                    className="w-full bg-[var(--bg-color)] hover:bg-[var(--button-color)] text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
                    onClick={() => navigate("/booking")}
                  >
                    Book Now
                  </button>
                  
                  {/* Contact Information */}
                  <div className="text-center text-sm text-gray-500">
                    <p>Need help? Call us at</p>
                    <p className="font-medium text-gray-700">+62 812-3456-7890</p>
                  </div>
                </div>

                {/* "Now viewing" indicator that appears only when sticky */}
                {isSticky && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-pulse">
                    <div className="text-sm text-gray-500 flex items-center justify-center">
                      <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      Now viewing: {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
</>

  );
}