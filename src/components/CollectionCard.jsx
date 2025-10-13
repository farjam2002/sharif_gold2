// File: src/components/CollectionCard.jsx
// NEW COMPONENT - CREATE THIS FILE

import React from 'react';
import { Link } from 'react-router-dom';

const CollectionCard = ({ collection, delay }) => {
  // Defensive check in case collection data is not provided
  if (!collection) {
    return null;
  }

  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-2xl shadow-black/30"
      style={{ animation: `fadeInUp 0.8s ${delay}s ease-out forwards`, opacity: 0 }}
    >
      <Link to={`/collections/${collection.id}`} className="block">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        {/* Overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
          <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
            <h3 className="font-cormorant text-3xl lg:text-4xl font-bold text-white mb-2">
              {collection.name}
            </h3>
            <p className="font-vazirmatn text-base text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {collection.description}
            </p>
            <div className="mt-4 h-[2px] w-0 group-hover:w-20 bg-accent-gold transition-all duration-500 ease-out"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CollectionCard;
