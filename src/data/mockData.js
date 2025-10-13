// File: src/data/mockData.js
// FINAL VERSION with complete image paths

export const collections = [
  {
    id: 'aurora',
    name: 'مجموعه آرورا',
    description: 'الهام گرفته از رقص نورهای شمالی در آسمان شب، جایی که طلا با ظرافت مدرن می‌درخشد.',
    // مسیر تصویر برای کارت نمایش در گالری
    image: '/images/collection-aurora.jpg', 
    products: [
      { 
        id: 'aurora-n1', 
        name: 'گردنبند شفق قطبی', 
        price: 'تماس بگیرید', 
        // مسیر تصویر محصول
        image: '/images/product-aurora-n1.jpg', 
        description: 'یک گردنبند طلا با طراحی منحصربه‌فرد که درخشش آسمان شب را تداعی می‌کند. ساخته شده از طلای ۱۸ عیار و تزئین شده با سنگ‌های قیمتی درخشان.',
        details: { material: 'طلای ۱۸ عیار', stones: 'الماس، یاقوت کبود', weight: '۱۲.۵ گرم' }
      },
      // برای افزودن محصول دوم، این بلاک را کپی و اطلاعات را تغییر دهید
      // { 
      //   id: 'aurora-r1', 
      //   name: 'انگشتر سپیده‌دم', 
      //   price: 'تماس بگیرید', 
      //   image: '/images/product-aurora-r1.jpg',
      //   description: '...',
      //   details: { ... }
      // },
    ],
  },
  {
    id: 'heritage',
    name: 'مجموعه میراث',
    description: 'بازآفرینی طرح‌های کلاسیک ایرانی با نگاهی نو، برای آنان که به اصالت اهمیت می‌دهند.',
    image: '/images/collection-heritage.jpg',
    products: [
      { 
        id: 'heritage-r1', 
        name: 'انگشتر پادشاهی', 
        price: 'تماس بگیرید', 
        image: '/images/product-heritage-r1.jpg',
        description: 'انگشتری با شکوه که از نقوش معماری دوران هخامنشی الهام گرفته است. نمادی از قدرت و اصالت بر دستان شما.',
        details: { material: 'طلای ۲۱ عیار', stones: 'فیروزه نیشابور', weight: '۱۸.۲ گرم' }
      },
    ],
  },
  {
    id: 'minimal',
    name: 'مجموعه مینیمال',
    description: 'زیبایی در سادگی. طراحی‌های ظریف و امروزی برای استفاده روزمره.',
    image: '/images/collection-minimal.jpg',
    products: [], // فعلاً محصولی برای این مجموعه تعریف نشده است
  },
];

export const aiDesignSamples = [
    {
      id: 1,
      name: 'حلقه کهکشانی',
      // مسیر تصویر نمونه طراحی AI
      image: '/images/ai-design-1.jpg',
      prompt: 'یک حلقه طلا به سبک مدرن و ارگانیک، با الهام از یک سحابی در فضا، با الماس‌های کوچک به عنوان ستاره.'
    },
    {
      id: 2,
      name: 'گردنبند ریشه',
      image: '/images/ai-design-2.jpg',
      prompt: 'گردنبند طلا با طرحی شبیه به ریشه‌های در هم تنیده یک درخت باستانی، با یک زمرد در مرکز آن.'
    },
    {
      id: 3,
      name: 'گوشواره آبشار',
      image: '/images/ai-design-3.jpg',
      prompt: 'گوشواره‌های آویز طلا که حرکت و پویایی یک آبشار را با زنجیرهای ظریف و پولک‌های براق شبیه‌سازی می‌کند.'
    }
];

// --- API Simulation Functions ---

export const getAllCollections = async () => {
  await new Promise(resolve => setTimeout(resolve, 50)); // Simulate network delay
  return collections;
};

export const getCollectionById = async (collectionId) => {
  await new Promise(resolve => setTimeout(resolve, 50));
  const collection = collections.find(c => c.id === collectionId);
  return collection;
};

export const getProductDetails = async (collectionId, productId) => {
  await new Promise(resolve => setTimeout(resolve, 50));
  const collection = collections.find(c => c.id === collectionId);
  if (!collection) return null;
  const product = collection.products.find(p => p.id === productId);
  return product;
};

export const getAiDesigns = async () => {
    await new Promise(resolve => setTimeout(resolve, 50));
    return aiDesignSamples;
};
