// File Path: src/pages/ShopPage.jsx
// نسخهٔ کامل، استاندارد و هماهنگ با پالت لوکس Sharif Gold.

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCollections } from "../data/mockData";
import Spinner from "../components/Spinner";

const ShopPage = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی فراخوانی API برای دریافت مجموعه‌ها
    const fetchCollections = async () => {
      const data = await getAllCollections();
      setCollections(data);
      setLoading(false);
    };
    fetchCollections();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Spinner />
      </div>
    );
  }

  return (
    <section className="bg-surface text-text-on-dark min-h-screen py-16 px-6 md:px-12 font-vazirmatn">
      <div className="max-w-7xl mx-auto text-center mb-16 animate-fade-in-up">
        <h1
          className="text-6xl md:text-7xl font-bold mb-4"
          style={{
            color: "var(--color-accent-gold)",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          فروشگاه شریف‌ گلد
        </h1>
        <p
          className="text-lg md:text-xl mt-2"
          style={{
            color: "var(--color-off-white)",
            opacity: 0.85,
            fontWeight: 300,
          }}
        >
          انتخابی از مجموعه‌های ویژه‌ی طلا با طراحی هنرمندانه و اصالت ایرانی.
        </p>
      </div>

      {/* گرید نمایش مجموعه‌ها */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-fade-in-up"
      >
        {collections.map((collection, index) => (
          <Link
            key={collection.id}
            to={`/collections/${collection.id}`}
            className="group relative block overflow-hidden rounded-lg shadow-lg bg-stone-900/40"
            style={{
              animation: `fadeInUp 0.6s ${index * 0.2}s ease-out forwards`,
              opacity: 0,
            }}
          >
            {/* تصویر مجموعه */}
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* پوشش گرادیان جهت وضوح نام */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500"></div>

            {/* توضیحات مجموعه */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-center transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <h3
                className="text-2xl font-bold"
                style={{
                  color: "var(--color-accent-gold)",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {collection.name}
              </h3>
              <p
                className="text-sm mt-2 text-off-white opacity-90"
                style={{
                  color: "var(--color-off-white)",
                }}
              >
                {collection.description}
              </p>
              <span className="inline-block mt-4 px-6 py-2 rounded-sm bg-accent-gold text-background text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                مشاهده مجموعه
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopPage;
