// File Path: src/components/HeroSection.jsx
// نسخه نهایی هماهنگ با پالت لوکس اصلی شریف‌گلد (C4A484 برای طلایی شامپاینی)

import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden font-vazirmatn">

      {/* پس‌زمینه ویدیو */}
      <video
        autoPlay
        loop
        muted
        poster="/path/to/your/poster-image.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        مرورگر شما از ویدیو پشتیبانی نمی‌کند.
      </video>

      {/* لایه تاریک خوانایی */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      {/* محتوای اصلی */}
      <div className="relative z-10 text-center p-5 animate-fade-in-up">
        <h1
          className="text-6xl md:text-8xl font-bold mb-4 text-shadow-lg"
          style={{
            color: "var(--color-accent-gold)", // طلایی شامپاینی
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          شریف‌گلد
        </h1>

        <p
          className="text-lg md:text-2xl mb-8 font-light"
          style={{
            color: "var(--color-off-white)", // سفید عاجی پالت اصلی
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
            opacity: 0.9,
          }}
        >
          تجربه‌ای مدرن در بازاری به قدمت تاریخ
        </p>

        {/* دکمه لینک‌شده هماهنگ با پالت لوکس */}
        <Link
          to="/design-studio"
          className="group relative inline-block font-bold py-3 px-10 rounded-sm shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          style={{
            backgroundColor: "var(--color-accent-gold)",
            color: "var(--color-background)",
          }}
        >
          <span className="relative z-10">طراحی را شروع کنید</span>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: "#d6ba96" }} // روشن‌تر از طلایی شامپاینی برای hover
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
