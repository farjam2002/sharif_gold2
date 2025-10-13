// File Path: src/components/FeaturesSection.jsx
// COMPLETE, REVISED CODE - Replace the entire file content with this.

import React from 'react';
import { SparklesIcon, CameraIcon, ScaleIcon, BeakerIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'طراحی با هوش مصنوعی',
    description: 'با کمک ابزارهای هوشمند ما، ایده‌های خود را به طرح‌های جواهر منحصربه‌فرد تبدیل کنید. شما طراح اصلی هستید.',
    icon: SparklesIcon,
  },
  {
    name: 'پرو مجازی با واقعیت افزوده',
    description: 'قبل از ساخت، هر قطعه را با دوربین گوشی خود به صورت مجازی امتحان کنید تا از انتخاب خود کاملاً مطمئن شوید.',
    icon: CameraIcon,
  },
  {
    name: 'قیمت‌گذاری شفاف و دقیق',
    description: 'بدون هیچ هزینه پنهانی. قیمت نهایی بر اساس وزن دقیق طلا، اجرت ساخت مشخص و سود شفاف محاسبه و به شما نمایش داده می‌شود.',
    icon: ScaleIcon,
  },
  {
    name: 'ساخت سفارشی برای شما',
    description: 'هر قطعه نه در کارخانه، بلکه در کارگاه و فقط برای شما ساخته می‌شود. این یک جواهر نیست، بلکه بخشی از هویت شماست.',
    icon: BeakerIcon, // Using BeakerIcon to represent crafting/lab process
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center animate-fade-in-up">
          <h2 className="text-base font-semibold leading-7 text-accent-gold font-vazirmatn">رویکرد نوین ما</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-cormorant">
            تجربه‌ای فراتر از یک خرید ساده
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300 font-vazirmatn">
            ما با ترکیب فناوری‌های پیشرفته و شفافیت کامل، فرآیند سنتی خرید طلا را متحول کرده‌ایم تا شما با اطمینان کامل، میراث مدرن خود را خلق کنید.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col p-8 rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 transition-all duration-300 hover:ring-accent-gold/50 hover:shadow-2xl hover:shadow-accent-gold/10">
                <dt className="flex items-center gap-x-3 text-2xl font-semibold leading-7 text-white font-cormorant">
                  <feature.icon className="h-8 w-8 flex-none text-accent-gold" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 font-vazirmatn">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
