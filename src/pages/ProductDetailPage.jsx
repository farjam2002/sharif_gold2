// File: src/pages/ProductDetailPage.jsx
// مسیر: src/pages/ProductDetailPage.jsx

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleryItems } from '../data/galleryData';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = galleryItems.find(item => item.slug === slug);

  // اسکرول به بالای صفحه هنگام باز شدن
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="text-center py-40 text-text-on-dark min-h-screen">
        <h1 className="font-cormorant text-4xl">محصول یافت نشد</h1>
        <p className="mt-4">متاسفانه محصولی با این مشخصات در گالری ما وجود ندارد.</p>
        <Link 
          to="/#gallery" 
          className="mt-8 inline-block bg-accent-gold text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all"
        >
          بازگشت به گالری
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-6xl py-20 px-6" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* بخش تصاویر محصول */}
          <div>
            <img src={product.images[0]} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-2xl aspect-square" />
            {/* می‌توانید یک گالری کوچک برای سایر تصاویر اینجا اضافه کنید */}
          </div>

          {/* بخش مشخصات و سفارش */}
          <div className="font-vazirmatn text-text-on-dark">
            <p className="text-sm text-accent-gold font-semibold tracking-wider">{product.collection}</p>
            <h1 className="font-cormorant text-4xl md:text-5xl font-bold mt-2">{product.name}</h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">{product.description}</p>

            <div className="my-8 border-t border-border-color"></div>

            <div className="space-y-4 text-gray-200">
              <div className="flex justify-between"><span>جنس:</span><span className="font-semibold">{product.material}</span></div>
              <div className="flex justify-between"><span>نگین:</span><span className="font-semibold">{product.stone}</span></div>
            </div>

            <div className="mt-10">
              <p className="text-3xl font-bold text-accent-gold text-left">
                {product.price.toLocaleString('fa-IR')} تومان
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="w-full bg-accent-gold text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all text-lg">
                  سفارش این طرح
                </button>
                <button className="w-full bg-transparent border-2 border-accent-gold text-accent-gold font-bold py-3 px-6 rounded-lg hover:bg-accent-gold hover:text-white transition-all text-lg">
                  شخصی‌سازی
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

