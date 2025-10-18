// مسیر صحیح: src/data/products.js (یا نام مشابه)

// ابتدا داده‌های ساختگی (mock data) خود را تعریف می‌کنیم.
// لطفاً مسیر ایمپورت تصاویر را مطابق با ساختار پروژه خودتان تنظیم کنید.
// من فرض می‌کنم تصاویر در public/assets/images/products/ هستند.
// اگر مسیر متفاوت است، آن را اصلاح کنید.
const _products = [
    {
      id: 'sharif-gold-ring-001',
      name: 'انگشتر سولاریس',
      category: 'انگشتر',
      price: 25_450_000,
      image: '/assets/images/products/product-1.png', // مسیر از ریشه public
      description: 'انگشتری با الهام از درخشش خورشید، ساخته شده از طلای ۱۸ عیار.'
    },
    {
        id: 'sharif-gold-necklace-002',
        name: 'گردنبند لونا',
        category: 'گردنبند',
        price: 32_800_000,
        image: '/assets/images/products/product-2.png',
        description: 'گردنبندی ظریف که زیبایی ماه را در شب به تصویر می‌کشد.'
    },
    {
        id: 'sharif-gold-earrings-003',
        name: 'گوشواره شفق',
        category: 'گوشواره',
        price: 18_200_000,
        image: '/assets/images/products/product-3.png',
        description: 'طراحی منحصربه‌فرد با الهام از رنگ‌های شفق قطبی.'
    },
    {
        id: 'sharif-gold-bracelet-004',
        name: 'دستبند جریان',
        category: 'دستبند',
        price: 41_500_000,
        image: '/assets/images/products/product-4.png',
        description: 'دستبندی روان و مدرن که نماد جریان زندگی است.'
    },
    {
      id: 'sharif-gold-ring-005',
      name: 'انگشتر میراث',
      category: 'انگشتر',
      price: 28_900_000,
      image: '/assets/images/products/product-5.png',
      description: 'طراحی کلاسیک و ماندگار برای انتقال به نسل‌های آینده.'
    },
    {
      id: 'sharif-gold-necklace-006',
      name: 'گردنبند کهکشان',
      category: 'گردنبند',
      price: 38_100_000,
      image: '/assets/images/products/product-6.png',
      description: 'گردنبندی خیره‌کننده با جزئیاتی که یادآور ستارگان است.'
    },
  ];

/**
 * همه محصولات را به صورت ناهمگام دریافت می‌کند. این تابع یک درخواست شبکه را شبیه‌سازی می‌کند.
 * @returns {Promise<Array<Object>>} یک پرامیس که با لیستی از محصولات resolve می‌شود.
 */
export const getAllProducts = () => {
  return new Promise((resolve) => {
    // شبیه‌سازی تاخیر شبکه
    setTimeout(() => {
      resolve(_products);
    }, 500); // تاخیر ۵۰۰ میلی‌ثانیه‌ای
  });
};

/**
 * یک محصول مشخص را بر اساس شناسه آن به صورت ناهمگام دریافت می‌کند.
 * @param {string} productId شناسه محصول مورد نظر.
 * @returns {Promise<Object|null>} یک پرامیس که با آبجکت محصول یا null (اگر پیدا نشود) resolve می‌شود.
 */
export const getProductById = (productId) => {
    return new Promise((resolve) => {
      // شبیه‌سازی تاخیر شبکه
      setTimeout(() => {
        const product = _products.find(p => p.id === productId);
        resolve(product || null);
      }, 300); // تاخیر ۳۰۰ میلی‌ثانیه‌ای
    });
};
