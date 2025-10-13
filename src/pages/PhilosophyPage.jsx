// File: src/pages/PhilosophyPage.jsx
// FINAL VERSION with Background Image

import React from 'react';

const PhilosophyPage = () => {
  return (
    <div className="animate-fade-in">
      {/* بخش Hero با تصویر پس‌زمینه اختصاصی */}
      <div
        className="h-[50vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/images/philosophy-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="font-cormorant text-5xl md:text-7xl text-white text-shadow-md">
            فلسفه ما
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            ترکیب هنر باستانی و تکنولوژی آینده برای خلق زیبایی جاودان
          </p>
        </div>
      </div>
      
      {/* بخش محتوا */}
      <div className="bg-background">
        <div className="container mx-auto max-w-4xl py-20 px-6 prose prose-invert prose-lg lg:prose-xl text-text-secondary prose-headings:text-text-primary prose-headings:font-cormorant prose-strong:text-accent-gold">
          <p>
            در «شریف گلد»، ما به طلا نه به عنوان یک فلز گرانبها، بلکه به عنوان یک بوم برای روایت داستان‌ها نگاه می‌کنیم. فلسفه ما بر سه اصل استوار است: <strong>اصالت</strong>، <strong>نوآوری</strong>، و <strong>جاودانگی</strong>.
          </p>
          
          <h2>اصالت در ریشه‌ها</h2>
          <p>
            ما عمیقاً به هنر و صنعت طلاسازی کهن ایرانی احترام می‌گذاریم. هر قطعه، ادای دینی است به هزاران سال ذوق و مهارت که در رگ‌های فرهنگ ما جاری است. ما از همان دقت و وسواس استادکاران قدیمی بهره می‌بریم تا روح اصالت را در کالبد هر اثر بدمیم.
          </p>

          <h2>نوآوری در نگاه</h2>
          <p>
            ما باور داریم که سنت نباید در گذشته محبوس بماند. با استفاده از پیشرفته‌ترین تکنولوژی‌ها، از هوش مصنوعی برای ایده‌پردازی تا مدل‌سازی سه‌بعدی برای دقت بی‌نهایت، مرزهای طراحی جواهرات را جابجا می‌کنیم. نوآوری برای ما، پلی است میان آنچه بود و آنچه می‌تواند باشد.
          </p>

          <h2>جاودانگی در خلق</h2>
          <p>
            جواهرات ما صرفاً یک وسیله تزئینی نیستند؛ آن‌ها میراثی هستند که از نسلی به نسل دیگر منتقل می‌شوند. ما قطعاتی خلق می‌کنیم که نه تنها در برابر گذر زمان مقاوم‌اند، بلکه با هر لحظه، داستان و ارزش بیشتری پیدا می‌کنند. یک قطعه از «شریف گلد» سرمایه‌گذاری بر روی خاطراتی است که هرگز کهنه نمی‌شوند.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhilosophyPage;
