// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface text-text-secondary">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="font-semibold text-text-primary uppercase tracking-wider mb-4">خدمات مشتریان</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-text-primary transition-colors">تماس با ما</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">راهنمای خرید</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">پیگیری سفارش</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary uppercase tracking-wider mb-4">درباره شریف گلد</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-text-primary transition-colors">داستان ما</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">مسئولیت اجتماعی</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">فرصت‌های شغلی</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary uppercase tracking-wider mb-4">با ما همراه باشید</h3>
            <p className="mb-4">برای دریافت آخرین اخبار و کالکشن‌ها در خبرنامه ما عضو شوید.</p>
            <form className="flex justify-center md:justify-start">
              <input type="email" placeholder="آدرس ایمیل شما" className="bg-white border border-border px-4 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-accent" />
              <button type="submit" className="bg-text-primary text-white px-4 py-2 mr-[-1px] hover:bg-black transition-colors">عضویت</button>
            </form>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-6 text-center text-xs">
          <p>© {new Date().getFullYear()} Sharif Gold. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
