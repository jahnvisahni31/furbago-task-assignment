/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Sidebar from './components/Sidebar';
import { siteData } from './components/index'; // Assuming siteData is an array of all the data
import SiteCard from './components/SiteCard';
import { useState } from 'react';

export default function Home() {
  const [filteredData, setFilteredData] = useState(siteData); // State for filtered data

  // Function to update the filtered data based on Sidebar filters
  const updateFilteredData = (newFilteredData: any[]) => {
    setFilteredData(newFilteredData);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Navigation */}
          <div className="flex items-center gap-4 sm:gap-8">
            <button className="text-fuchsia-600">
              <svg
                xmlns="/public/assets/pic.jpeg"
                fill="50"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </button>
            <div className="hidden sm:flex gap-4">
              <button className="text-black">Location</button>
              <button>Accommodation</button>
              <button>Rent</button>
              <button>Tour</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button>Help Center</button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <Sidebar updateFilteredData={updateFilteredData} /> {/* Passing updateFilteredData */}

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="text-xl font-semibold">Sites</h1>
              <div className="flex border rounded-md overflow-hidden">
                <button className="px-2 py-1 border-r">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  List
                </button>
                <button className="px-2 py-1 border-r bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                  Kanban
                </button>
                <button className="px-2 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125"
                    />
                  </svg>
                  Table
                </button>
              </div>
            </div>
            <div className="p-4 rounded-md">
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200">Sort by</button>
                <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200">Filter</button>
                <button className="px-4 py-2 border rounded-md text-white bg-fuchsia-500 hover:bg-fuchsia-600">
                  Find Menu
                </button>
              </div>
            </div>
            {/* Sort and Filter Buttons */}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredData.length === 0 ? (
              <p>No results found</p>
            ) : (
              filteredData.map((site, index) => (
                <SiteCard
                  key={index}
                  title={site.title}
                  image={site.image}
                  location={site.location}
                  duration={site.duration}
                  price={site.price}
                  rating={site.rating}
                  sector={site.sector}
                  points={site.points}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
