// File: src/components/GallerySection.jsx
// مسیر: src/components/GallerySection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../data/galleryData'; // وارد کردن داده‌ها از فایل جدید

const GallerySection = () => {
  return (
    <section id="gallery" dir="rtl" className="bg-off-white py-24 sm:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-text-primary">
            گالری هنر
          </h2>
          <p className="font-vazirmatn text-lg mt-4 text-text-secondary max-w-2xl mx-auto">
            سفری در میان دستاوردهای هنری ما. هر قطعه، داستانی برای الهام بخشیدن به شما دارد.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <Link to={`/gallery/${item.slug}`} className="block overflow-hidden aspect-square rounded-lg shadow-sm">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <span className="font-cormorant text-center text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-4">
                    {item.name}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
