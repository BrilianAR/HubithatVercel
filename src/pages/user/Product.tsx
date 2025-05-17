import { useState, useEffect, useMemo } from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import logo from "../../assets/hubithat-logo.png";
import { Link } from 'react-router-dom';

// LocationCard Component
const LocationCard = ({ location, rateType } : any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleButtonClick = (e : any) => {
    e.preventDefault();
    e.stopPropagation();
  };
  // Format price to IDR currency
  const formatPrice = (price: any) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Calculate display price
  const getDisplayPrice = () => {
    if (rateType === 'monthly') {
      return location.price * 25; // Monthly discount
    }
    return location.price;
  };

  // Image navigation
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === location.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? location.images.length - 1 : prevIndex - 1
    );
  };

  return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative overflow-hidden h-64">
          <div className="relative w-full h-full">
            {location.images.map((image : any, index : any) => (
              <img
                key={index}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                src={image}
                alt={`${location.name} - Image ${index + 1}`}
              />
            ))}
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {location.images.map((_ :any, index: any) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
                onClick={(e) => {
                  handleButtonClick(e);
                  setCurrentImageIndex(index);
                }}
              />
            ))}
          </div>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
            onClick={(e) => {
              handleButtonClick(e);
              prevImage();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
            onClick={(e) => {
              handleButtonClick(e);
              nextImage();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-gray-800 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {location.city}, {location.country}
          </div>
        </div>
          <Link to="/details-product" className="block">
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[var(--bg-color)] mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">NEARBY</h4>
                  <ul>
                    {location.nearbyAttractions.map((attraction : any, index : any) => (
                      <li key={index} className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                          {index === 0 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <p className="text-sm text-gray-700">{attraction}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5">
                    <section className="flex flex-col text-sm font-bold items-end px-4 pb-3">
                      <div className="flex flex-wrap items-baseline gap-1 text-[var(--button-color)]">
                        <div className="text-xs font-medium text-neutral-400">from</div>
                        <div>IDR</div>
                        <div className="font-black leading-none text-2xl">
                          {formatPrice(getDisplayPrice())}
                        </div>
                        <div>/ {rateType}</div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
          </Link>
      </div>
  );
};

// CheckHubithat Component with Unified Filters
const CheckHubithat = ({
  locations,
  selectedLocation,
  setSelectedLocation,
  checkInDate,
  setCheckInDate,
  duration,
  setDuration,
  checkOutDate,
  setCheckOutDate,
  // selectedCity,
  // setSelectedCity,
  rateType,
  setRateType,
  priceRange,
  setPriceRange,
  guestCount,
  setGuestCount,
  sortBy,
  setSortBy,
  // onClearFilters,
}: any) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [showDurations, setShowDurations] = useState(false);
  // const [showCities, setShowCities] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  // const [isFormValid, setIsFormValid] = useState(false);

  const durationOptions = ['1 Month(s)', '2 Month(s)', '3 Month(s)', '6 Month(s)', '12 Month(s)', '24 Month(s)'];
  // const cities = ['All', ...new Set(locations.map((loc) => loc.city))];
  const guestOptions = [1, 2, 3, 4, 5, '6+'];
  const sortOptions = [
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'name-desc', label: 'Name: Z to A' },
    ];

  type Location = {
    id: number;
    city: string;
    country: string;
  };

  const uniqueLocations = useMemo(() => {
    const uniqueMap = new Map<string, Location>();
    
    locations.forEach((loc: Location) => {
      const key = `${loc.city}-${loc.country}`;
      if (!uniqueMap.has(key)) {
        uniqueMap.set(key, {
          id: loc.id,
          city: loc.city,
          country: loc.country
        });
      }
    });
    
    return Array.from(uniqueMap.values());
  }, [locations]);


  // Format date for display
  const formatDate = (date : any) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  // Update checkout date when duration changes
  useEffect(() => {
    const months = parseInt(duration.split(' ')[0]);
    const newCheckOutDate = new Date(checkInDate);
    newCheckOutDate.setMonth(checkInDate.getMonth() + months);
    setCheckOutDate(newCheckOutDate);
  }, [duration, checkInDate, setCheckOutDate]);

  // Validate form
  useEffect(() => {
    // setIsFormValid(!!selectedLocation);
  }, [selectedLocation]);

  // Handle duration change
  const handleDurationChange = (newDuration : any) => {
    setDuration(newDuration);
    setShowDurations(false);
  };

  // Set check-in date
  const setNewCheckInDate = (date: any) => {
    setCheckInDate(date);
    setShowCalendar(false);
  };

  // Get greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const styles = {
    bgColor: 'bg-[color:var(--bg-color)]',
    buttonColor: 'bg-[color:var(--button-color)]',
    buttonSecond: 'bg-[color:var(--button-second)]',
  };

  return (
    <div className="w-full max-w-7xl mx-auto rounded-lg shadow-lg mb-8 bg-white">
      <div className="px-10 py-4 md:py-3 bg-white">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full">
              <img src={logo} alt="Logo" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[var(--bg-color)]">Hubithat</h2>
              <p className="text-xs text-[var(--button-color)]">{getGreeting()}</p>
            </div>
          </div>
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold text-[var(--bg-color)]">Find Your Perfect Stay</h3>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 md:px-10 md:py-4 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Location Selection */}
          <div className="relative">
            <label className="block text-xs font-bold mb-1 text-[var(--bg-color)]">Location</label>
            <button
              type="button"
              className="w-full flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2"
              onClick={() => setShowLocations(!showLocations)}
              style={{ borderColor: showLocations ? styles.buttonColor : 'transparent', backgroundColor: 'white' }}
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--button-color)]" />
                <span className="text-sm font-medium truncate">
                  {selectedLocation ? `${selectedLocation.city}, ${selectedLocation.country}` : 'Select destination'}
                </span>
              </div>
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: styles.buttonColor }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showLocations && (
              <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-auto border border-gray-200">
                <ul className="py-1">
                  {uniqueLocations.map((location) => (
                    <li
                      key={location.id}
                      className={`px-4 py-2 cursor-pointer ${
                        selectedLocation?.id === location.id ? 'bg-green-500 text-white' : ''
                      } hover:bg-green-500 hover:text-white`}
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowLocations(false);
                      }}
                    >
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{location.city}</span>
                        <span className="text-xs opacity-75">{location.country}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* City Selection */}
          {/* <div className="relative">
            <label className="block text-xs font-bold mb-1 text-[var(--bg-color)]">City</label>
            <button
              type="button"
              className="w-full flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2"
              onClick={() => setShowCities(!showCities)}
              style={{ borderColor: showCities ? styles.buttonColor : 'transparent', backgroundColor: 'white' }}
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--button-color)]" />
                <span className="text-sm font-medium truncate">{selectedCity}</span>
              </div>
              <svg
                className="h-->4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: styles.buttonColor }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showCities && (
              <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-auto border border-gray-200">
                <ul className="py-1">
                  {cities.map((city) => (
                    <li
                      key={city}
                      className={`px-4 py-2 cursor-pointer ${
                        selectedCity === city ? 'bg-green-500 text-white' : ''
                      } hover:bg-green-500 hover:text-white`}
                      onClick={() => {
                        setSelectedCity(city);
                        setShowCities(false);
                      }}
                    >
                      <span className="text-sm font-medium">{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div> */}
          {/* Check-in Date */}
          <div className="relative">
            <label className="block text-xs font-bold mb-1 text-[var(--bg-color)]">Start Date</label>
            <button
              type="button"
              className="w-full flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2"
              onClick={() => setShowCalendar(!showCalendar)}
              style={{ borderColor: showCalendar ? styles.buttonColor : 'transparent', backgroundColor: 'white' }}
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[var(--button-color)]" />
                <span className="text-sm font-medium">{formatDate(checkInDate).split(',')[1]}</span>
              </div>
            </button>
            {showCalendar && (
              <div className="absolute z-20 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="p-2">
                  <div className="flex justify-between border-b pb-2 mb-2">
                    <span className="font-bold text-[var(--bg-color)]">Select Date</span>
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => setShowCalendar(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {[0, 1, 2, 3, 4, 5, 6].map((dayOffset) => {
                      const date = new Date();
                      date.setDate(date.getDate() + dayOffset);
                      const isSelected = checkInDate.toDateString() === date.toDateString();
                      return (
                        <button
                          key={dayOffset}
                          type="button"
                          className="py-2 px-3 rounded-md text-left text-sm"
                          style={{
                            backgroundColor: isSelected ? styles.buttonColor : 'transparent',
                            color: isSelected ? 'white' : 'inherit',
                          }}
                          onClick={() => setNewCheckInDate(date)}
                        >
                          {formatDate(date)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Duration */}
          <div className="relative">
            <label className="block text-xs font-bold mb-1 text-[var(--bg-color)]">Duration</label>
            <button
              type="button"
              className="w-full flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2"
              onClick={() => setShowDurations(!showDurations)}
              style={{ borderColor: showDurations ? styles.buttonColor : 'transparent', backgroundColor: 'white' }}
            >
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--button-color)]" />
                <span className="text-sm font-medium">{duration}</span>
              </div>
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: styles.buttonColor }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showDurations && (
              <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200">
                <ul className="py-1">
                  {durationOptions.map((option) => (
                    <li
                      key={option}
                      className={`px-4 py-2 cursor-pointer ${
                        duration === option ? 'bg-green-500 text-white' : ''
                      } hover:bg-green-500 hover:text-white`}
                      onClick={() => handleDurationChange(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Check-out Date */}
          <div>
            <label className="block text-xs font-bold mb-1 text-[var(--bg-color)]">End Date</label>
            <div
              className="flex items-center gap-2 rounded-lg px-4 py-2"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
            >
              <Calendar className="h-4 w-4 text-[var(--button-color)]" />
              <span className="text-sm font-medium">{formatDate(checkOutDate).split(',')[1]}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Rate Type */}
          <div className="flex flex-col">
            <label className="block text-xs font-bold mb-1 text-[var(--bg-color)]">Rate Type</label>
            <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="rateType"
                  value="nightly"
                  checked={rateType === 'nightly'}
                  onChange={() => setRateType('nightly')}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 bg-white border border-gray-300 rounded-full peer-checked:border-[var(--bg-color)] peer-checked:border-4 transition-all"></div>
                <span className="text-sm text-gray-700 group-hover:text-[var(--bg-color)] transition-colors">
                  Nightly
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="rateType"
                  value="monthly"
                  checked={rateType === 'monthly'}
                  onChange={() => setRateType('monthly')}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 bg-white border border-gray-300 rounded-full peer-checked:border-[var(--bg-color)] peer-checked:border-4 transition-all"></div>
                <span className="text-sm text-gray-700 group-hover:text-[var(--bg-color)] transition-colors">
                  Monthly
                </span>
              </label>
            </div>
          </div>
          {/* Price Range */}
          <div className="flex flex-col">
            <label className="block text-xs font-bold mb-1 text-[var(--bg-color)]">Price Range (IDR)</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min || ''}
                onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value ? Number(e.target.value) : null })}
                className="w-1/2 rounded-lg border border-gray-200 px-4 py-2 text-sm"
                min="0"
              />
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max || ''}
                onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value ? Number(e.target.value) : null })}
                className="w-1/2 rounded-lg border border-gray-200 px-4 py-2 text-sm"
                min="0"
              />
            </div>
          </div>
          {/* Guest Count */}
          <div className="relative">
            <label className="block text-xs font-bold mb-1 text-[var(--bg-color)]">Guests</label>
            <button
              type="button"
              className="w-full flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2"
              onClick={() => setShowGuests(!showGuests)}
              style={{ borderColor: showGuests ? styles.buttonColor : 'transparent', backgroundColor: 'white' }}
            >
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[var(--button-color)]" />
                <span className="text-sm font-medium">{guestCount || 'Any'}</span>
              </div>
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: styles.buttonColor }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showGuests && (
              <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200">
                <ul className="py-1">
                  {guestOptions.map((option) => (
                    <li
                      key={option}
                      className={`px-4 py-2 cursor-pointer ${
                        guestCount === option ? 'bg-green-500 text-white' : ''
                      } hover:bg-green-500 hover:text-white`}
                      onClick={() => {
                        setGuestCount(option);
                        setShowGuests(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Sort By */}
          <div className="relative">
            <label className="block text-xs font-bold mb-1 text-[var(--bg-color)]">Sort By</label>
            <button
              type="button"
              className="w-full flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2"
              onClick={() => setShowSortOptions(!showSortOptions)}
              style={{ borderColor: showSortOptions ? styles.buttonColor : 'transparent', backgroundColor: 'white' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  {sortOptions.find((opt) => opt.value === sortBy)?.label || 'Sort By'}
                </span>
              </div>
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: styles.buttonColor }}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showSortOptions && (
              <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200">
                <ul className="py-1">
                  {sortOptions.map((option) => (
                    <li
                      key={option.value}
                      className={`px-4 py-2 cursor-pointer ${
                        sortBy === option.value ? 'bg-green-500 text-white' : ''
                      } hover:bg-green-500 hover:text-white`}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSortOptions(false);
                      }}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main ProductCards Component
export default function ProductCards() {
  // Generate location data with maxGuests
  const generateLocationData = () => {
    const baseImageUrl =
      'https://bobobox-production-assets.s3.ap-southeast-1.amazonaws.com/landing-page/v4/bobobox/branch-location';
    return [
      {
        id: 1,
        name: 'Hubithat Alun-Alun, Bandung',
        city: 'Bandung',
        country: 'Indonesia',
        description: 'Enjoy staying near the popular city square while overseeing the beautiful Bandung city lights.',
        price: 350000,
        maxGuests: 2,
        nearbyAttractions: ['2 min to Alun-Alun Kota Bandung', 'Near Braga and Asia Afrika Street'],
        images: [
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/1.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/2.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/3.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/4.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/5.webp`,
        ],
      },
      {
        id: 2,
        name: 'Hubithat Dago, Bandung',
        city: 'Bandung',
        country: 'Indonesia',
        description: "Stay in the heart of Bandung's upscale district with scenic mountain views and trendy cafes nearby.",
        price: 425000,
        maxGuests: 3,
        nearbyAttractions: ['5 min to Dago Street', 'Near ITB Campus and Cikapayang Park'],
        images: [
          `${baseImageUrl}/1.+Bandung/2.+Dago/1.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/2.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/3.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/4.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/5.webp`,
        ],
      },
      {
        id: 3,
        name: 'Hubithat Pasteur, Bandung',
        city: 'Bandung',
        country: 'Indonesia',
        description: "Conveniently located with easy access to Bandung's toll gate and transportation hub.",
        price: 375000,
        maxGuests: 2,
        nearbyAttractions: ['10 min to Pasteur Toll Gate', 'Near Husein Sastranegara Airport'],
        images: [
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/1.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/2.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/3.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/4.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/5.webp`,
        ],
      },
      {
        id: 4,
        name: 'Hubithat Kemang, Jakarta',
        city: 'Jakarta',
        country: 'Indonesia',
        description: "Modern accommodations in Jakarta's artsy district with boutique shops and international dining.",
        price: 550000,
        maxGuests: 4,
        nearbyAttractions: ['5 min to Kemang Village Mall', 'Near various art galleries and restaurants'],
        images: [
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/1.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/2.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/3.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/4.webp`,
        ],
      },
      {
        id: 5,
        name: 'Hubithat Sudirman, Jakarta',
        city: 'Jakarta',
        country: 'Indonesia',
        description: "Premium stay in Jakarta's central business district, perfect for business travelers.",
        price: 650000,
        maxGuests: 3,
        nearbyAttractions: ['2 min to Jakarta Stock Exchange', 'Near major corporate offices'],
        images: [
          `${baseImageUrl}/1.+Bandung/2.+Dago/1.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/2.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/3.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/4.webp`,
        ],
      },
      {
        id: 6,
        name: 'Hubithat Midtown, New York',
        city: 'New York',
        country: 'United States',
        description: 'Experience the heart of Manhattan with easy access to major landmarks and attractions.',
        price: 1250000,
        maxGuests: 4,
        nearbyAttractions: ['10 min to Times Square', 'Near Empire State Building'],
        images: [
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/1.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/2.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/3.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/4.webp`,
        ],
      },
      {
        id: 7,
        name: 'Hubithat Brooklyn, New York',
        city: 'New York',
        country: 'United States',
        description: 'Trendy accommodations in Brooklyn with stunning Manhattan skyline views and vibrant local culture.',
        price: 980000,
        maxGuests: 3,
        nearbyAttractions: ['5 min to Brooklyn Bridge Park', 'Near artisanal markets and cafes'],
        images: [
          `${baseImageUrl}/1.+Bandung/2.+Dago/1.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/2.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/3.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/4.webp`,
        ],
      },
      {
        id: 8,
        name: 'Hubithat Shibuya, Tokyo',
        city: 'Tokyo',
        country: 'Japan',
        description: "Stay in Tokyo's fashion and entertainment district with access to iconic landmarks.",
        price: 850000,
        maxGuests: 2,
        nearbyAttractions: ['3 min to Shibuya Crossing', 'Near Yoyogi Park and Meiji Shrine'],
        images: [
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/1.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/2.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/3.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/4.webp`,
        ],
      },
      {
        id: 9,
        name: 'Hubithat Shinjuku, Tokyo',
        city: 'Tokyo',
        country: 'Japan',
        description: "Modern accommodations in Tokyo's vibrant business and entertainment hub.",
        price: 900000,
        maxGuests: 3,
        nearbyAttractions: ['5 min to Shinjuku Station', 'Near Tokyo Metropolitan Government Building'],
        images: [
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/1.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/2.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/3.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/4.webp`,
        ],
      },
      {
        id: 10,
        name: 'Hubithat Gangnam, Seoul',
        city: 'Seoul',
        country: 'South Korea',
        description: "Luxurious stay in Seoul's upscale district known for fashion, tech, and entertainment.",
        price: 780000,
        maxGuests: 4,
        nearbyAttractions: ['5 min to COEX Mall', 'Near Bongeunsa Temple'],
        images: [
          `${baseImageUrl}/1.+Bandung/2.+Dago/1.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/2.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/3.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/4.webp`,
        ],
      },
      {
        id: 11,
        name: 'Hubithat Hongdae, Seoul',
        city: 'Seoul',
        country: 'South Korea',
        description: "Modern accommodations in Seoul's artistic university district with vibrant nightlife.",
        price: 680000,
        maxGuests: 2,
        nearbyAttractions: ['2 min to Hongik University Street', 'Near trendy cafes and indie music venues'],
        images: [
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/1.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/2.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/3.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/4.webp`,
        ],
      },
      {
        id: 12,
        name: 'Hubithat Menteng, Jakarta',
        city: 'Jakarta',
        country: 'Indonesia',
        description: "Colonial-style accommodation in Jakarta's historic and diplomatic district.",
        price: 520000,
        maxGuests: 3,
        nearbyAttractions: ['10 min to National Monument', 'Near Presidential Palace'],
        images: [
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/1.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/2.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/3.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/4.webp`,
        ],
      },
      {
        id: 13,
        name: 'Hubithat SoHo, New York',
        city: 'New York',
        country: 'United States',
        description: "Artistic loft-style accommodations in New York's trendy shopping and gallery district.",
        price: 1100000,
        maxGuests: 4,
        nearbyAttractions: ['Walking distance to boutique shops', 'Near Washington Square Park'],
        images: [
          `${baseImageUrl}/1.+Bandung/2.+Dago/1.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/2.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/3.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/4.webp`,
        ],
      },
      {
        id: 14,
        name: 'Hubithat Myeongdong, Seoul',
        city: 'Seoul',
        country: 'South Korea',
        description: 'Central Seoul location in the heart of shopping district with access to traditional markets.',
        price: 750000,
        maxGuests: 3,
        nearbyAttractions: ['5 min to Myeongdong Shopping Street', 'Near N Seoul Tower'],
        images: [
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/1.webp`,
          `${baseImageUrl}/1.+Bandung/2.+Dago/2.webp`,
          `${baseImageUrl}/1.+Bandung/3.+Pasteur/3.webp`,
          `${baseImageUrl}/1.+Bandung/1.+Alun-Alun/4.webp`,
        ],
      },
    ];
  };

  interface Location {
  id: number;
  name: string;
  city: string;
  country: string;
  price: number;
  maxGuests: number;
  // properti lain sesuai data kamu
}


  const locationData = generateLocationData();

  // State management
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCity, setSelectedCity] = useState('All');
  const [rateType, setRateType] = useState('nightly');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date(new Date().setMonth(new Date().getMonth() + 1)));
  const [duration, setDuration] = useState('1 Month(s)');
  const [priceRange, setPriceRange] = useState({ min: null, max: null });
  const [guestCount, setGuestCount] = useState(null);
  const [sortBy, setSortBy] = useState('price-asc');

  // Filter and sort locations
  const filteredLocations = locationData
    .filter((loc) => {
      // City filter
      const matchesCity = selectedCity === 'All' || loc.city === selectedCity;
      // Location filter
      const matchesLocation = !selectedLocation || loc.city === selectedLocation.city;
      // Price filter
      const displayPrice = rateType === 'monthly' ? loc.price * 25 : loc.price;
      const matchesPrice =
        (!priceRange.min || displayPrice >= priceRange.min) &&
        (!priceRange.max || displayPrice <= priceRange.max);
      // Guest filter
      const matchesGuests =
        !guestCount ||
        (guestCount === '6+' ? loc.maxGuests >= 6 : loc.maxGuests >= guestCount);
      // Date filter (assumed available for simplicity)
      return matchesCity && matchesLocation && matchesPrice && matchesGuests;
    })
    .sort((a, b) => {
      const priceA = rateType === 'monthly' ? a.price * 25 : a.price;
      const priceB = rateType === 'monthly' ? b.price * 25 : b.price;
      if (sortBy === 'price-asc') return priceA - priceB;
      if (sortBy === 'price-desc') return priceB - priceA;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return 0;
    });

  const displayedLocations = filteredLocations.slice(0, visibleCount);
  const hasMoreLocations = visibleCount < filteredLocations.length;

  // Handle pagination
  const handleSeeMore = () => {
    const newCount = Math.min(visibleCount + 6, filteredLocations.length);
    setVisibleCount(newCount);
  };

  const handleSeeLess = () => {
    const newCount = Math.max(6, visibleCount - 6);
    setVisibleCount(newCount);
  };

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(6);
  }, [selectedCity, selectedLocation, priceRange, guestCount, sortBy]);

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCity('All');
    setSelectedLocation(null);
    setRateType('nightly');
    setPriceRange({ min: null, max: null });
    setGuestCount(null);
    setSortBy('price-asc');
    setCheckInDate(new Date());
    setDuration('1 Month(s)');
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 py-12 mt-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:tracking-tight">Our Products</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover our comfortable and strategic accommodations across the world. Perfect for both business trips and leisure stays.
        </p>
      </div>

      <CheckHubithat
        locations={locationData}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        duration={duration}
        setDuration={setDuration}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        rateType={rateType}
        setRateType={setRateType}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        guestCount={guestCount}
        setGuestCount={setGuestCount}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onClearFilters={handleClearFilters}
      />

      <div className="mb-6 flex justify-between items-center">
        <div className="text-gray-700">
          Showing {displayedLocations.length} of {filteredLocations.length} locations
          {selectedCity !== 'All' && ` in ${selectedCity}`}
          {selectedLocation && ` (Filtered by ${selectedLocation.city}, ${selectedLocation.country})`}
        </div>
        {(selectedCity !== 'All' || selectedLocation || priceRange.min || priceRange.max || guestCount) && (
          <button
            onClick={handleClearFilters}
            className="text-[var(--button-color)] hover:underline flex items-center gap-1"
          >
            <span>Clear filters</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>

      {filteredLocations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedLocations.map((location) => (
            <LocationCard key={location.id} location={location} rateType={rateType} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-xl p-12 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No locations found</h3>
          <p className="text-gray-500">Try adjusting your filter criteria to find more options.</p>
          <button
            onClick={handleClearFilters}
            className="mt-4 px-5 py-2 bg-[var(--button-color)] text-white rounded-lg hover:bg-[var(--bg-color)] transition duration-300"
          >
            Show all locations
          </button>
        </div>
      )}

      {filteredLocations.length > 0 && (
        <div className="flex justify-center mt-12">
          {hasMoreLocations && (
            <button
              className="px-6 py-3 bg-[var(--button-color)] text-white rounded-lg hover:bg-[var(--bg-color)] transition duration-300 font-medium"
              onClick={handleSeeMore}
            >
              See More
            </button>
          )}
          {visibleCount > 6 && (
            <button
              className="px-6 py-3 ml-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300 font-medium"
              onClick={handleSeeLess}
            >
              See Less
            </button>
          )}
        </div>
      )}
    </div>
  );
}