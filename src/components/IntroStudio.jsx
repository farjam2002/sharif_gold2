// File: src/components/IntroStudio.jsx
// FINAL REVISED VERSION - COPY AND REPLACE ALL CONTENT

import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline'; // Using Heroicons for consistency

const IntroStudio = () => {
  return (
    // CHANGE: Background is now dark, text is light, and vertical padding is increased.
    <section className="bg-background text-textPrimary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">

          {/* Text Content Column (Right) */}
          <div className="lg:pr-4 lg:pt-4 text-right">
            <div className="lg:max-w-lg">
              {/* CHANGE: Headline color is now the brand's accent gold. */}
              <h2 className="text-3xl font-bold tracking-tight text-accent-gold sm:text-4xl font-cormorant">
                استودیوی طراحی مولد
              </h2>
              {/* CHANGE: Paragraph text color is now a lighter gray for readability. */}
              <p className="mt-6 text-lg leading-8 text-gray-300 font-vazirmatn">
                اینجا جایی است که داستان شما به یک قطعه جواهر ابدی تبدیل می‌شود. با بهره‌گیری از هوش مصنوعی پیشرفته، می‌توانید ایده‌ها، کلمات و احساسات خود را به طرح‌های هنری منحصربه‌فرد تبدیل کنید. ما شما را به یک خالق تبدیل می‌کنیم.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none font-vazirmatn">
                {/* List items with icons */}
                <div className="relative pr-9">
                  <dt className="inline font-semibold text-white">
                    <CheckIcon className="absolute top-1 right-0 h-5 w-5 text-accent-gold" aria-hidden="true" />
                    ایده‌پردازی با هوش مصنوعی
                  </dt>
                  <dd className="inline">: خلق طرح‌های بی‌نظیر بر اساس داستان شما.</dd>
                </div>
                <div className="relative pr-9">
                  <dt className="inline font-semibold text-white">
                    <CheckIcon className="absolute top-1 right-0 h-5 w-5 text-accent-gold" aria-hidden="true" />
                    همکاری با مشاوران طراحی
                  </dt>
                  <dd className="inline">: نهایی کردن اثر هنری شما با کمک متخصصان.</dd>
                </div>
                <div className="relative pr-9">
                  <dt className="inline font-semibold text-white">
                    <CheckIcon className="absolute top-1 right-0 h-5 w-5 text-accent-gold" aria-hidden="true" />
                    آزمون با واقعیت افزوده
                  </dt>
                  <dd className="inline">: مشاهده مجازی طرح نهایی قبل از ساخت.</dd>
                </div>
              </dl>
               {/* CHANGE: Redesigned CTA Button to be an outline button */}
               <a
                href="/design-studio"
                className="inline-block mt-12 border border-accent-gold text-accent-gold font-bold py-3 px-8 transition-all duration-300 hover:bg-accent-gold hover:text-background"
               >
                طراحی را شروع کنید
              </a>
            </div>
          </div>

          {/* Image Placeholder Column (Left) */}
          {/* CHANGE: Placeholder is now a "glassmorphism" style box. */}
          <div className="flex items-start justify-end lg:order-first">
             <div className="w-full h-80 md:h-96 bg-white/5 rounded-xl shadow-2xl shadow-black/20 ring-1 ring-white/10 backdrop-blur-sm flex items-center justify-center">
              <span className="text-gray-400 font-cormorant text-2xl">Visual Placeholder</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default IntroStudio;
