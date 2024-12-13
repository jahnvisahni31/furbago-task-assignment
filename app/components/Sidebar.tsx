"use client"
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State for sidebar visibility on small screens

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
          <button className="text-black text-sm md:text-base">Reset All</button>
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
                    defaultChecked={idx < 2}
                  />
                  <span className="text-sm md:text-base">{location}</span>
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
            <h3 className="font-medium mb-4 text-sm md:text-base">Durations</h3>
            <div className="space-y-2">
              {['1h', '2h', '3h', '4h'].map((duration, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded text-black w-4 h-4"
                    defaultChecked={idx < 2}
                  />
                  <span className="text-sm md:text-base">{duration}</span>
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
