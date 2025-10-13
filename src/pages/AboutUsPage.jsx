// src/pages/AboutUsPage.jsx

import React from 'react';
import { SparklesIcon, BeakerIcon, HeartIcon } from '@heroicons/react/24/outline';

// یک کامپوننت کوچک برای نمایش هر یک از ارزش های کلیدی
const ValueCard = ({ icon, title, children }) => (
  <div className="bg-background-light p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="font-cormorant text-2xl font-bold text-white mr-4">{title}</h3>
    </div>
    <p className="font-vazirmatn text-gray-400 text-justify leading-relaxed">
      {children}
    </p>
  </div>
);

const AboutUsPage = () => {
  return (
    <div className="bg-background text-gray-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">

        {/* --- بخش هیرو و چشم انداز --- */}
        <div className="text-center mb-20">
          <h1 className="font-cormorant text-5xl sm:text-7xl font-bold text-accent-gold tracking-wider">
            داستان ما، حک‌شده در طلا
          </h1>
          <p className="mt-6 font-vazirmatn text-lg sm:text-xl max-w-3xl mx-auto leading-8 text-gray-300">
            «شریف گلد» فراتر از یک برند جواهرات است؛ ما یک بوم دیجیتال برای بیان داستان‌های شخصی شما هستیم. چشم‌انداز ما، توانمندسازی شما برای تبدیل خاطرات و رویاهایتان به میراث‌های طلایی جاودان است.
          </p>
        </div>

        {/* --- بخش ارزش های کلیدی ما --- */}
        <div className="mb-20">
          <h2 className="font-cormorant text-4xl text-center font-semibold text-white mb-12">ارکان فلسفه ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard icon={<SparklesIcon className="w-8 h-8 text-accent-gold"/>} title="هنر مدرن ایرانی">
              ما میراث غنی طراحی ایرانی را با زیبایی‌شناسی مینیمال و معاصر تلفیق می‌کنیم تا قطعاتی خلق کنیم که هم ریشه‌دار و هم مدرن باشند و با هویت نسل امروز سخن بگویند.
            </ValueCard>
            <ValueCard icon={<BeakerIcon className="w-8 h-8 text-accent-gold"/>} title="نوآوری و فناوری">
              با بهره‌گیری از هوش مصنوعی مولد برای الهام‌بخشی و واقعیت افزوده برای تجسم، مرز بین دنیای دیجیتال و فیزیکی را از بین می‌بریم تا تجربه‌ای بی‌نظیر و اعتمادساز خلق کنیم.
            </ValueCard>
            <ValueCard icon={<HeartIcon className="w-8 h-8 text-accent-gold"/>} title="شفافیت و اعتماد">
              ما به شفافیت کامل در قیمت‌گذاری، منبع‌یابی مواد اولیه و فرآیند ساخت متعهدیم. اعتماد شما بزرگترین سرمایه ماست و ما برای ساختن آن تلاش می‌کنیم.
            </ValueCard>
          </div>
        </div>

        {/* --- بخش فرآیند هم آفرینی --- */}
        <div className="text-center">
            <h2 className="font-cormorant text-4xl font-semibold text-white mb-6">از ایده تا ابدیت</h2>
            <p className="font-vazirmatn text-lg max-w-4xl mx-auto leading-8 text-gray-300">
                در «شریف گلد»، شما فقط یک خریدار نیستید، بلکه یک هم‌آفرین هستید. پلتفرم ما به شما اجازه می‌دهد تا در فرآیند خلاقیت مشارکت کرده، قطعه‌ای کاملاً منحصربه‌فرد طراحی کنید و داستان خود را برای همیشه در دل طلا ثبت نمایید.
            </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUsPage;
