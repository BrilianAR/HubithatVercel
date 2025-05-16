const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12 pt-30 max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          About <span className="text-[var(--bg-color)]">Hubithat</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600">
          Transforming urban rooftops into sustainable sanctuaries for the modern traveler
        </p>
      </div>

      {/* Main Content */}
      <div className="">
        {/* Discover Section */}
        <section className="mb-16 bg-white rounded-2xl  py-8 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-emerald-200 pb-3">
            Discover Elevated Urban Sanctuaries
          </h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              Hubithat is a revolutionary hospitality concept that transforms underutilized rooftops into lush, 
              sustainable, and smart living spaces, providing a fresh perspective on urban accommodation.
            </p>
            <p>
              Our rooftop cabins offer an exceptional blend of modern comfort, natural serenity, and eco-conscious design, 
              making them the perfect choice for travelers seeking a unique stay.
            </p>
          </div>
        </section>

        {/* Our Story and Vision in Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <section className="bg-white rounded-2xl  py-8 transform hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-emerald-200 pb-3">
              Our Story
            </h2>
            <p className="text-gray-700">
              Hubithat was born from the idea of utilizing the often-overlooked spaces in bustling cities—the rooftops. 
              Our mission is to transform rooftops into vibrant, eco-friendly havens that connect people with nature 
              without sacrificing convenience.
            </p>
          </section>

          <section className="bg-white rounded-2xl  py-8 transform hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-emerald-200 pb-3">
              Our Vision
            </h2>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                </div>
                <span><span className="font-semibold">Green Oasis:</span> Serene rooftop gardens with breathtaking views.</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                </div>
                <span><span className="font-semibold">Smart Capsule Living:</span> Compact, sleek, and smart capsule rooms.</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 mt-1">
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                </div>
                <span><span className="font-semibold">Sustainability at Heart:</span> Renewable energy and eco-friendly practices.</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Why Choose Us Section */}
        <section className="mb-16 bg-white rounded-2xl  py-8 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-emerald-200 pb-3">
            Why Choose Hubithat?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-[var(--bg-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Prime Locations</h3>
                <p className="text-gray-700">Stunning views and easy city access.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-[var(--bg-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Affordable Comfort</h3>
                <p className="text-gray-700">Premium facilities without the premium price.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-[var(--bg-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Eco-Friendly Living</h3>
                <p className="text-gray-700">Minimal environmental impact.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-[var(--bg-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Modern Amenities</h3>
                <p className="text-gray-700">High-speed Wi-Fi, smart room controls, and more.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="bg-emerald-50 rounded-2xl py-8 border border-emerald-100 mb-8">
          <h2 className="text-2xl font-bold text-[var(--bg-color)] mb-4">
            Our Commitment
          </h2>
          <p className="text-lg text-black">
            We prioritize sustainable living with solar energy, water recycling, and continuous efforts to reduce our 
            carbon footprint while maintaining the highest standards of hospitality.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;