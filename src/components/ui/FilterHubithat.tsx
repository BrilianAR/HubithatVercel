import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Search } from 'lucide-react';

export default function IntegratedHubithat() {
  // Product type selection
  
  // Date handling
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date(new Date().setMonth(new Date().getMonth() + 1)));
  const [duration, setDuration] = useState('1 Month(s)');
  const [showCalendar, setShowCalendar] = useState(false);
  
  // Location handling
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showLocations, setShowLocations] = useState(false);
  
  // Filter options
  const [selectedCity, setSelectedCity] = useState('All');
  const [rateType, setRateType] = useState('monthly');
  
  // Duration options - Changed to months
  const [showDurations, setShowDurations] = useState(false);
  const durationOptions = ['1 Month(s)', '2 Month(s)', '3 Month(s)', '6 Month(s)', '12 Month(s)', '24 Month(s)'];
  
  // Location data
  const locations = [
    { id: 1, name: 'Jakarta', area: 'Indonesia', city: 'Jakarta' },
    { id: 2, name: 'New York', area: 'United States', city: 'New York' },
    { id: 3, name: 'Bali', area: 'Denpasar', city: 'Bali' },
    { id: 4, name: 'Yogyakarta', area: 'Central Java', city: 'Yogyakarta' },
  ];
  
  // Filtered locations based on selected city
  const [filteredLocations, setFilteredLocations] = useState(locations);
  
  // Check if form is valid
  const [isFormValid, setIsFormValid] = useState(false);
  
  // Format dates for display
  const formatDate = (date) => {
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
  }, [duration, checkInDate]);
  
  // Validate form whenever dependencies change
  useEffect(() => {
    setIsFormValid(!!selectedLocation);
  }, [selectedLocation]);
  
  // Filter locations when city selection changes
  useEffect(() => {
    if (selectedCity === 'All') {
      setFilteredLocations(locations);
    } else {
      setFilteredLocations(locations.filter(location => location.city === selectedCity));
    }
  }, [selectedCity]);
  
  // Handle duration change
  const handleDurationChange = (newDuration) => {
    setDuration(newDuration);
    setShowDurations(false);
  };
  
  // Set check-in date and close calendar
  const setNewCheckInDate = (date) => {
    setCheckInDate(date);
    setShowCalendar(false);
  };
  
  // Get time of day for greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };
  
  // Filter change handler (for potential future use)
  const handleFilterChange = () => {
    // This function can be expanded for additional filter functionality
  };
  
  // Custom styles based on provided colors
  const styles = {
    bgColor: 'bg-[color:var(--bg-color)]',
    buttonColor: 'bg-[color:var(--button-color)]',
    buttonSecond: 'bg-[color:var(--button-second)]'
  };
  
  return (
    <div className="w-full max-w-7xl mx-auto mt-10">
      {/* Main Container */}
      <div className="rounded-lg shadow-lg bg-white mb-8">
        <div className="px-10 py-4 md:py-3 bg-white">
          {/* Header with logo and greeting */}
          <div className="flex items-center justify-between mb-2">
            {/* Logo and greeting */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">HT</div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-[var(--bg-color)]">Hubithat</h2>
                <p className="text-xs text-[var(--button-color)]">{getGreeting()}</p>
              </div>
            </div>
            
            {/* Title */}
            <div className="hidden md:block">
              <h3 className="text-lg font-semibold text-[var(--bg-color)]">Find Your Perfect Stay</h3>
            </div>
          </div>
        </div>
        
        {/* Main search form - Horizontal Layout */}
        <div className="bg-white p-4 md:px-10 md:py-4 flex flex-col md:flex-row md:items-end gap-4 border-t border-gray-200">
          {/* Location Selection */}
          <div className="w-full md:w-1/3 relative">
            <label className="block text-xs font-bold mb-1 text-[var(--bg-color)]">Location</label>
            <div>
              <button
                type="button"
                className="w-full flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2"
                onClick={() => setShowLocations(!showLocations)}
                style={{borderColor: showLocations ? styles.buttonColor : 'transparent', backgroundColor: 'white'}}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[var(--button-color)]" />
                  <span className="text-sm font-medium truncate">
                    {selectedLocation ? `${selectedLocation.name}, ${selectedLocation.area}` : 'Select destination'}
                  </span>
                </div>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{color: styles.buttonColor}}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              {/* Location Dropdown */}
              {showLocations && (
                <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-auto border border-gray-200">
                  <ul className="py-1">
                    {filteredLocations.map((location) => (
                      <li 
                          key={location.id}
                          className={`px-4 py-2 cursor-pointer ${
                              selectedLocation?.id === location.id ? "bg-green-500 text-white" : ""
                          } hover:bg-green-500 hover:text-white`}
                          onClick={() => {
                              setSelectedLocation(location);
                              setShowLocations(false);
                          }}
                          >

                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{location.name}</span>
                          <span className="text-xs opacity-75">{location.area}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          {/* Check-in Date */}
          <div className="w-full md:w-1/5 relative">
            <label className="block text-xs font-bold mb-1 text-[var(--bg-color)]">Start Date</label>
            <button
              type="button"
              className="w-full flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2"
              onClick={() => setShowCalendar(!showCalendar)}
              style={{borderColor: showCalendar ? styles.buttonColor : 'transparent', backgroundColor: 'white'}}
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[var(--button-color)]" />
                <span className="text-sm font-medium">{formatDate(checkInDate).split(',')[1]}</span>
              </div>
            </button>
            
            {/* Calendar Dropdown */}
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
                            color: isSelected ? 'white' : 'inherit'
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
          <div className="w-full md:w-1/5 relative">
            <label className="block text-xs font-bold mb-1 text-[var(--bg-color)]">Duration</label>
            <button
              type="button"
              className="w-full flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2"
              onClick={() => setShowDurations(!showDurations)}
              style={{borderColor: showDurations ? styles.buttonColor : 'transparent', backgroundColor: 'white'}}
            >
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--button-color)]" />
                <span className="text-sm font-medium">{duration}</span>
              </div>
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{color: styles.buttonColor}}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            
            {/* Duration Dropdown */}
            {showDurations && (
              <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200">
                <ul className="py-1">
                  {durationOptions.map((option) => (
                       <li 
                          key={option}
                          className={`px-4 py-2 cursor-pointer ${
                              duration === option ? "bg-green-500 text-white" : ""
                          } hover:bg-green-500 hover:text-white`}
                          onClick={() =>  handleDurationChange(option)}
                          >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Check-out Date */}
          <div className="w-full md:w-1/5">
            <label className="block text-xs font-bold mb-1 text-[var(--bg-color)]">End Date</label>
            <div className="flex items-center gap-2 rounded-lg px-4 py-2" 
              style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
              <Calendar className="h-4 w-4 text-[var(--button-color)]" />
              <span className="text-sm font-medium">{formatDate(checkOutDate).split(',')[1]}</span>
            </div>
          </div>
          
          {/* Search Button */}
          <div className="w-full md:w-1/8">
            <button
              type="button"
              disabled={!isFormValid}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-semibold text-white"
              style={{
                backgroundColor: isFormValid ? styles.buttonColor : 'rgb(57, 189, 154)',
                cursor: isFormValid ? 'pointer' : 'not-allowed'
              }}
              onClick={() => {
                if (isFormValid) {
                  alert(`Booking details:\nLocation: ${selectedLocation.name}, ${selectedLocation.area}\nStart Date: ${formatDate(checkInDate)}\nEnd Date: ${formatDate(checkOutDate)}\nDuration: ${duration}\nRate Type: ${rateType}`);
                }
                
              }}
            >
              <Search className="h-5 w-5" />
              <span className="hidden md:inline">Search</span>
            </button>
          </div>
        </div>
        
        {/* Bottom Banner */}
        <div className="px-6 py-3 rounded-b-lg bg-[var(--button-second)]">
          <p className="text-sm text-center font-medium text-[var(--bg-color)]">
            Find comfortable long term accommodation around the World with Hubithat
          </p>
        </div>
      </div>
      
      {/* Filter Component */}
      <LocationFilter
        locations={locations}
        onFilterChange={handleFilterChange}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        rateType={rateType}
        setRateType={setRateType}
      />
    </div>
  );
}

// LocationFilter Component
const LocationFilter = ({ 
  locations, 
  onFilterChange, 
  selectedCity, 
  setSelectedCity, 
  rateType, 
  setRateType 
}) => {
  // Get unique cities from location data
  const cities = [...new Set(locations.map(loc => loc.city))];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-2xl p-6 mb-8 border border-gray-100">
      <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filter Options
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Location filter */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Location
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                selectedCity === 'All' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
              onClick={() => setSelectedCity('All')}
            >
              All Locations
            </button>
            {cities.map(city => (
              <button
                key={city}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                  selectedCity === city 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
        
        {/* Rate type toggle */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Rate Type
          </label>
          <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-200">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input
                  type="radio"
                  name="rateType"
                  value="nightly"
                  checked={rateType === 'nightly'}
                  onChange={() => setRateType('nightly')}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 bg-white border border-gray-300 rounded-full peer-checked:border-indigo-600 peer-checked:border-4 transition-all"></div>
              </div>
              <span className="text-sm text-gray-700 group-hover:text-indigo-600 transition-colors">Nightly Rate</span>
            </label>
            
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input
                  type="radio"
                  name="rateType"
                  value="monthly"
                  checked={rateType === 'monthly'}
                  onChange={() => setRateType('monthly')}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 bg-white border border-gray-300 rounded-full peer-checked:border-indigo-600 peer-checked:border-4 transition-all"></div>
              </div>
              <span className="text-sm text-gray-700 group-hover:text-indigo-600 transition-colors">Monthly Rate</span>
            </label>
          </div>
        </div>
      </div>
      
      {/* Reset button */}
      <div className="flex justify-end">
        <button 
          onClick={() => {
            setSelectedCity('All');
            setRateType('monthly');
          }}
          className="px-4 text-xs font-medium text-gray-500 hover:text-indigo-600 flex items-center transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset Filters
        </button>
      </div>
    </div>
  );
};