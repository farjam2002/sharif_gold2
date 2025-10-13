// File: src/pages/ContactPage.jsx
// FINAL VERSION with Background Image

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('درحال ارسال...');
    // Simulate API call
    setTimeout(() => {
      setStatus('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
      e.target.reset();
      setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
    }, 1500);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div
        className="h-[50vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/images/contact-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="font-cormorant text-5xl md:text-7xl text-white text-shadow-md">
            تماس با ما
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            ما برای شنیدن ایده‌ها و داستان‌های شما آماده‌ایم.
          </p>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <div className="bg-background-secondary p-8 rounded-lg border border-gray-800">
              <h2 className="text-3xl font-bold mb-6 text-text-primary font-cormorant">ارسال پیام</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">نام شما</label>
                  <input type="text" id="name" name="name" required className="w-full bg-background border border-gray-700 rounded-md py-2 px-4 text-text-primary focus:ring-accent-gold focus:border-accent-gold" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">ایمیل</label>
                  <input type="email" id="email" name="email" required className="w-full bg-background border border-gray-700 rounded-md py-2 px-4 text-text-primary focus:ring-accent-gold focus:border-accent-gold" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">پیام شما</label>
                  <textarea id="message" name="message" rows="5" required className="w-full bg-background border border-gray-700 rounded-md py-2 px-4 text-text-primary focus:ring-accent-gold focus:border-accent-gold"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-accent-gold text-background font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300">
                    ارسال
                  </button>
                </div>
              </form>
              {status && <p className="mt-4 text-center text-accent-gold">{status}</p>}
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-text-primary font-cormorant">اطلاعات تماس</h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <MapPin className="w-6 h-6 text-accent-gold" />
                    <span>تهران، خیابان شریعتی، برج طلا، طبقه پنجم، واحد شریف گلد</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Mail className="w-6 h-6 text-accent-gold" />
                    <a href="mailto:info@sharifgold.com" className="hover:text-accent-gold transition-colors">info@sharifgold.com</a>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Phone className="w-6 h-6 text-accent-gold" />
                    <a href="tel:+982122881234" className="hover:text-accent-gold transition-colors ltr-text">۰۲۱-۲۲۸۸۱۲۳۴</a>
                  </div>
                </div>
              </div>
              <div className="w-full h-80 rounded-lg overflow-hidden border border-gray-800">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.905978939226!2d51.42778331526017!3d35.7283799801833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e018d00000001%3A0x4a4b2b73e52701b!2sSharif%20University%20of%20Technology!5e0!3m2!1sen!2s!4v1672520000000" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقعیت مکانی شریف گلد">
                 </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
