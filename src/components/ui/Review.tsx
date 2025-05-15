import { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import image from '../../assets/image6.jpg';

const TestimonialSection = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      content: "Staying at HubiThat was an amazing experience! The rooftop garden was so peaceful, and the capsule hotel was surprisingly comfortable.",
      name: "Jessica",
      role: "Traveler",
      image: image
    },
    {
      id: 2,
      content: "We loved the community kitchen where we met other travelers. The staff went above and beyond to make our anniversary trip special.",
      name: "Mark",
      role: "Business Traveler",
      image: image
    },
    {
      id: 3,
      content: "The co-working space at HubiThat made my business trip productive and enjoyable. It's perfect for digital nomads looking for community.",
      name: "David",
      role: "Digital Nomad",
      image: image
    }
  ];

  // State for controlling which testimonial to display
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  // Functions to navigate testimonials
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <motion.div
      className="flex flex-col items-center w-full bg-white-100 py-10"
      initial={{ opacity: 0, y: 50 }} // Awal: Transparan dan bergeser ke bawah
      whileInView={{ opacity: 1, y: 0 }} // Akhir: Muncul di posisi semula
      viewport={{ once: true, amount: 0.2 }} // Animasi hanya terjadi sekali saat 20% elemen terlihat
      transition={{ duration: 0.8, ease: "easeOut" }} // Durasi dan jenis transisi
    >
      {/* Heading Section */}
      <div className="flex flex-warp items-center justify-center w-full max-w-7xl px-4">
        <h2 className="font-bold text-4xl mb-5 max-w-md text-gray-800 leading-tight">
          What Our Guests Are Saying
        </h2>
        <p className="text-lg leading-7 max-w-xs text-gray-800 mb-5">
          Explore firsthand experiences from guests who've discovered unique urban escapes with HubiThat. 
          See how we're redefining hospitality.
        </p>
      </div>

      {/* Testimonial Card */}
      <motion.div
        className="flex flex-col md:flex-row items-center max-w-5xl mx-auto bg-white bg-opacity-10 rounded-3xl p-12 md:p-12 gap-8 md:gap-24"
        initial={{ opacity: 0, y: 50 }} // Awal: Transparan dan bergeser ke bawah
        whileInView={{ opacity: 1, y: 0 }} // Akhir: Muncul di posisi semula
        viewport={{ once: true, amount: 0.2 }} // Animasi hanya terjadi sekali saat 20% elemen terlihat
        transition={{ duration: 0.8, ease: "easeOut" }} // Durasi dan jenis transisi
      >
        {/* Image */}
        <div className="w-full max-w-xs">
          <div className="h-96 w-full relative rounded-t-2xl overflow-hidden">
            <img 
              src={currentTestimonial.image} 
              alt="Guest testimonial" 
              className="w-full h-full object-cover rounded-t-2xl"
            />
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col justify-center w-full max-w-lg px-4 md:px-0">
          <p className="text-3xl leading-10 text-gray-800 mb-5">
            {currentTestimonial.content}
          </p>
          <div className="flex flex-col mt-12">
            <h4 className="text-xl font-bold text-gray-800 pb-1">{currentTestimonial.name}</h4>
            <p className="text-base font-bold text-gray-800">{currentTestimonial.role}</p>
          </div>
        </div>
      </motion.div>

      {/* Navigation Controls */}
      <motion.div
        className="flex justify-center gap-4 mt-8"
        initial={{ opacity: 0, y: 50 }} // Awal: Transparan dan bergeser ke bawah
        whileInView={{ opacity: 1, y: 0 }} // Akhir: Muncul di posisi semula
        viewport={{ once: true, amount: 0.2 }} // Animasi hanya terjadi sekali saat 20% elemen terlihat
        transition={{ duration: 0.8, ease: "easeOut" }} // Durasi dan jenis transisi
      >
        <button 
          onClick={goToPrevious}
          className="bg-gray-200 hover:bg-[var(--bg-color)] hover:text-white p-3 rounded-full"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Testimonial Indicators */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[var(--bg-color)] w-6' : 'bg-gray-300 w-2'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={goToNext}
          className="bg-[var(--bg-color)] hover:bg-black text-white p-3 rounded-full"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialSection;