// File: src/pages/GalleryPage.jsx
// ACTION: Replace the content of this file with the code below.

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCollections } from '../data/mockData';
import Spinner from '../components/Spinner';

const GalleryPage = () => {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllCollections().then(data => {
      setCollections(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div dir="rtl" className="bg-background text-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-black">
        <img
          src="https://images.unsplash.com/photo-1588444837424-a4b9f0217a4a?q=80&w=2070&auto=format&fit=crop"
          alt="گالری مجموعه‌های شریف گلد"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-cormorant text-white mb-4 animate-fade-in-down">گالری الهام‌بخش</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl animate-fade-in-up">هر مجموعه، فصل جدیدی از یک داستان هنری است. داستان خود را بیابید.</p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="py-24 px-6 md:px-12">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Spinner />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <Link
                  to={`/collections/${collection.id}`}
                  key={collection.id}
                  className="group relative block overflow-hidden rounded-lg shadow-lg"
                  style={{ animation: `fadeInUp 0.5s ${index * 0.1}s ease-out forwards`, opacity: 0 }}
                >
                  <img
                    src={collection.coverImage}
                    alt={collection.name}
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 p-6 text-right">
                    <h2 className="text-3xl font-cormorant text-white">{collection.name}</h2>
                    <p className="text-gray-300 mt-1">{collection.description}</p>
                    <div className="mt-4 text-accent-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      مشاهده مجموعه &rarr;
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
