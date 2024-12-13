/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from 'react';
import { siteData } from './index';

interface SidebarProps {
  updateFilteredData: (filteredData: any[]) => void;
}

export default function Sidebar({ updateFilteredData }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]); // Start with no location selected
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]); // Start with no duration selected

  const handleLocationChange = (location: string) => {
    setSelectedLocations((prevSelected) =>
      prevSelected.includes(location)
        ? prevSelected.filter((loc) => loc !== location)
        : [...prevSelected, location]
    );
  };

  const handleDurationChange = (duration: string) => {
    setSelectedDurations((prevSelected) =>
      prevSelected.includes(duration)
        ? prevSelected.filter((dur) => dur !== duration)
        : [...prevSelected, duration]
    );
  };

  const resetFilters = () => {
    setSelectedLocations([]); // Reset location filter
    setSelectedDurations([]); // Reset duration filter
  };

  const applyFilters = () => {
    // If no filter is selected, show all data
    if (selectedLocations.length === 0 && selectedDurations.length === 0) {
      updateFilteredData(siteData);
    } else {
      const filtered = siteData.filter(
        (item) =>
          (selectedLocations.length === 0 || selectedLocations.includes(item.location)) &&
          (selectedDurations.length === 0 || selectedDurations.includes(item.duration))
      );
      updateFilteredData(filtered);
    }
  };

  useEffect(() => {
    applyFilters(); // Apply filters whenever selected locations or durations change
  }, [selectedLocations, selectedDurations]);

  return (
    <div className="lg:w-64 flex-shrink-0">
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden px-4 py-2 text-white bg-black rounded mb-4"
      >
        {isOpen ? 'Close Filters' : 'Open Filters'}
      </button>

      {/* Sidebar content */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:block bg-white border lg:border-none p-4 rounded lg:rounded-none space-y-6`}
      >
        {/* Price Section */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium text-black text-sm md:text-base">Price</h2>
          <button className="text-fuchsia-500 text-sm md:text-base" onClick={resetFilters}>
            Reset All
          </button>
        </div>
        

        <div className="space-y-6 text-black">
          {/* Location Section */}
          <div>
            <h3 className="font-medium mb-4 text-black text-sm md:text-base">Location</h3>
            <div className="space-y-2">
              {['Dhaka', 'Rangpur', 'Cumilla', 'Khulna'].map((location, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded text-black w-4 h-4"
                    checked={selectedLocations.includes(location)}
                    onChange={() => handleLocationChange(location)}
                  />
                  {location}
                </label>
              ))}
            </div>
          </div>

          {/* Price Section */}
          <div>
            <h3 className="font-medium mb-4 text-black text-sm md:text-base">Price</h3>
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-xs text-gray-500 md:text-sm">From:</label>
                  <div className="border rounded px-2 py-1 text-sm">$10</div>
                </div>
                <div className="flex-1">
                  <label className="text-xs text-gray-500 md:text-sm">To:</label>
                  <div className="border rounded px-2 py-1 text-sm">$100</div>
                </div>
              </div>
              <input type="range" className="w-full" />
            </div>
          </div>    

          {/* Duration Section */}
          <div>
            <h3 className="font-medium mb-4 text-black text-sm md:text-base">Duration</h3>
            <div className="space-y-2">
              {['1h', '2h', '3h'].map((duration, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded text-black w-4 h-4"
                    checked={selectedDurations.includes(duration)}
                    onChange={() => handleDurationChange(duration)}
                  />
                  {duration}
                </label>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-medium mb-4 text-sm md:text-base">Services</h3>
            <div className="space-y-2">
              {['Hotels', 'Rent', 'Tour', 'Accommodation'].map((service, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded text-black w-4 h-4"
                    defaultChecked={idx !== 2}
                  />
                  <span className="text-sm md:text-base">{service}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
