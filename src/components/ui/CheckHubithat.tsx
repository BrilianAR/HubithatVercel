import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Search } from 'lucide-react';
import logo from "../../assets/hubithat-logo.png"

export default function HorizontalHubithat() {
  // Product type selection
  
  // Date handling
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date(new Date().setMonth(new Date().getMonth() + 1)));
  const [duration, setDuration] = useState('1 Month(s)');
  const [showCalendar, setShowCalendar] = useState(false);
  
  // Location handling
  const [selectedLocation, setSelectedLocation] = useState<{ id: number; name: string; area: string } | null>(null);
  const [showLocations, setShowLocations] = useState(false);
  
  
  // Duration options - Changed to months
  const [showDurations, setShowDurations] = useState(false);
  const durationOptions = ['1 Month(s)', '2 Month(s)', '3 Month(s)', '6 Month(s)', '12 Month(s)', '24 Month(s)'];
  
  // Location data
  const locations = [
    { id: 1, name: 'Jakarta', area: 'Indonesia' },
    { id: 2, name: 'New York', area: 'United States' },
    { id: 3, name: 'Bali', area: 'Denpasar' },
    { id: 4, name: 'Yogyakarta', area: 'Central Java' },
  ];
  
  // Check if form is valid
  const [isFormValid, setIsFormValid] = useState(false);
  
  // Format dates for display
  const formatDate = (date: any) => {
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
  
  
  // Handle duration change
  const handleDurationChange = (newDuration: any) => {
    setDuration(newDuration);
    setShowDurations(false);
  };
  
  // Set check-in date and close calendar
  const setNewCheckInDate = (date: any) => {
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
  
  // Custom styles based on provided colors
  const styles = {
    bgColor: 'bg-[color:var(--bg-color)]',
    buttonColor: 'bg-[color:var(--button-color)]',
    buttonSecond: 'bg-[color:var(--button-second)]'
  };
  
  return (
    <div className="w-full max-w-7xl mx-auto rounded-lg shadow-lg mt-10 bg-white">
      <div className="px-10 py-4 md:py-3 bg-white">
        {/* Header with logo and greeting */}
        <div className="flex items-center justify-between mb-2">
          {/* Logo and greeting */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full">
              <img src={logo} alt="Logo" />
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
                  {locations.map((location) => (
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
                alert(`Booking details:\nLocation: ${selectedLocation.name}, ${selectedLocation.area}\nStart Date: ${formatDate(checkInDate)}\nEnd Date: ${formatDate(checkOutDate)}\nDuration: ${duration}`);
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
  );
}