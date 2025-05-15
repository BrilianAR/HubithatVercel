import { useState } from 'react';

export default function GallerySection() {
  const [showModal, setShowModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const photos = [
    {
      id: 1,
      main: true,
      src: "https://bobobox-production-assets.s3.ap-southeast-1.amazonaws.com/assets/hotels/bobobox-alun-alun/main-pictures/phpfIiBoB",
      alt: "exterior building Bobopod alun alun by Bobobox"
    },
    {
      id: 2,
      src: "https://bobobox-production-assets.s3.ap-southeast-1.amazonaws.com/assets/hotels/bobobox-alun-alun/main-pictures/phpoLahKG",
      alt: "lobby Bobopod alun alun by Bobobox"
    },
    {
      id: 3,
      src: "https://bobobox-production-assets.s3.ap-southeast-1.amazonaws.com/assets/hotels/bobobox-alun-alun/main-pictures/phpPgGGml",
      alt: "bpad Bobopod alun alun by Bobobox"
    },
    {
      id: 4,
      src: "https://bobobox-production-assets.s3.ap-southeast-1.amazonaws.com/assets/hotels/bobobox-alun-alun/main-pictures/phpfIiBoB",
      alt: "bedroom Bobopod alun alun by Bobobox"
    },
    {
      id: 5,
      src: "https://bobobox-production-assets.s3.ap-southeast-1.amazonaws.com/assets/hotels/bobobox-alun-alun/main-pictures/phpfIiBoB",
      alt: "bathroom Bobopod alun alun by Bobobox"
    },
    {
      id: 6,
      src: "https://bobobox-production-assets.s3.ap-southeast-1.amazonaws.com/assets/hotels/bobobox-alun-alun/main-pictures/phpfIiBoB",
      alt: "reception Bobopod alun alun by Bobobox"
    }
  ];

  const openModal = (index) => {
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

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
    <div>
        <nav 
        className="mx-auto flex max-w-6xl justify-between py-4 font-secondary text-sm text-carcoal-40 lg:px-10" 
        aria-label="Breadcrumb"
        >
        <div className="flex">
                <a 
                className={`capitalize hover:text-carcoal-50 pointer-events-none font-semibold text-carcoal-50`} 
                href='/home'
                >
                Home
                </a>
                {/* <ChevronRightIcon 
                    className="{mx-3 text-carcoal-50 h-4 w-4"
                /> */}
        </div>
        </nav>

        <section className="mt-5 max-w-7xl p lg:px-10 m-auto" id="price">
        <div className="mb-5 flex justify-between">
            <div>
            <h1 className="pt-4 md:pt-0 text-xl md:text-2xl font-bold">Bobopod Alun-Alun, Bandung</h1>
            <p className="text-sm text-gray-600">Jl. Kepatihan No.8, Balonggede, Kec. Regol, Kota Bandung, West Java 40251, Indonesia</p>
            
            <div className="mt-4 flex items-center">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white bg-blue-500">Hotel</span>
                
                <div className="flex ml-4">
                {[1, 2, 3, 4].map((star) => (
                    <span key={star} className="ml-1 first:ml-0 w-6">
                    <img src="/api/placeholder/24/24" alt="full star" />
                    </span>
                ))}
                <span className="ml-1 first:ml-0 w-6">
                    <img src="/api/placeholder/24/24" alt="empty star" />
                </span>
                </div>
                
                <div className="ml-2">
                <span className="text-base font-semibold">4.9</span>
                <span className="text-xs font-semibold leading-none">/</span>
                <span className="text-xs font-semibold leading-none">5</span>
                <span className="mx-1">•</span>
                <span className="text-xs font-semibold md:text-sm lg:text-base">(456 Reviews)</span>
                </div>
            </div>
            </div>
            
            <div className="text-right">
            <p className="text-xs text-gray-600">Starts from</p>
            <h6 className="text-sm text-gray-600">
                IDR<span className="md:text-xl ml-1 text-red-600 font-bold">210.000</span>
            </h6>
            <p className="text-xs text-gray-600">per night</p>
            <button 
                type="button" 
                className="inline-flex items-center justify-center px-4 py-2 font-semibold focus:outline-none focus:ring focus:ring-blue-400 shadow-sm transition-colors duration-75 bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:text-white active:bg-blue-400 disabled:border-none disabled:bg-blue-400/50 disabled:text-gray-100 h-12 disabled:cursor-not-allowed text-sm font-bold float-right mt-4 w-32 rounded-lg text-white"
            >
                See Rooms
            </button>
            </div>
        </div>
        </section>
      <section className="flex justify-between gap-4 lg:mt-10 max-w-7xl px-10 m-auto">
        {/* Main large image (3/4 width) */}
        <figure 
          className="w-full basis-3/4 cursor-pointer" 
          onClick={() => openModal(0)}
        >
          <img 
            className="w-full h-full aspect-video object-cover rounded-xl" 
            alt={photos[0].alt}
            src={photos[0].src}
          />
        </figure>
        
        {/* Side column with smaller images (1/4 width) */}
        <div className="basis-1/4 space-y-4">
          {/* First small image */}
          <figure 
            className="w-full cursor-pointer"
            onClick={() => openModal(1)}
          >
            <img 
              className="w-full h-full aspect-[4/3] object-cover rounded-xl" 
              alt={photos[1].alt}
              src={photos[1].src}
            />
          </figure>
          
          {/* Second small image */}
          <figure 
            className="w-full cursor-pointer"
            onClick={() => openModal(2)}
          >
            <img 
              className="w-full h-full aspect-[4/3] object-cover rounded-xl" 
              alt={photos[2].alt}
              src={photos[2].src}
            />
          </figure>
          
          {/* "View more photos" button */}
          <div 
            onClick={() => openModal(3)}
            className="flex w-full items-center justify-center gap-4 text-center rounded-md bg-blue-50 py-8 cursor-pointer"
          >
            <figure>
              <svg 
                className="w-6 h-6" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2.67 18.95L7.6 15.64C8.39 15.11 9.53 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </figure>
            <p className="text-base text-gray-700">+{photos.length - 3} Photos</p>
          </div>
        </div>
      </section>
    </div>

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
    </>
  );
}