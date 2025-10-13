// File: src/pages/CheckoutPage.jsx
// ACTION: Create this new file and paste the entire code below.

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useCart();
  const navigate = useNavigate();

  // Redirect to home if cart is empty
  React.useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/');
    }
  }, [cartItems, navigate]);

  const handleCheckoutSubmit = (event) => {
    event.preventDefault();
    // Here you would typically collect form data
    const formData = new FormData(event.target);
    const orderData = Object.fromEntries(formData.entries());
    console.log("Order Data Submitted:", orderData);
    
    // For now, we simulate redirection to a payment gateway
    navigate('/payment-simulation');
  };

  const formatPrice = (price) => new Intl.NumberFormat('fa-IR').format(price);

  return (
    <div className="bg-background font-vazirmatn">
      <main className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h1 className="sr-only">نهایی‌سازی خرید</h1>

          <form onSubmit={handleCheckoutSubmit} className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            {/* Contact Information & Shipping Details Column */}
            <div className="mt-10 lg:mt-0">
                <h2 className="text-2xl font-cormorant font-medium text-white">اطلاعات تماس و آدرس</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="full-name" className="block text-sm font-medium text-gray-300">نام و نام خانوادگی</label>
                        <div className="mt-1">
                            <input type="text" name="full-name" id="full-name" required className="block w-full rounded-md border-gray-600 bg-background shadow-sm focus:border-accent-gold focus:ring-accent-gold text-white" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">شماره تماس</label>
                        <div className="mt-1">
                            <input type="tel" name="phone" id="phone" required className="block w-full rounded-md border-gray-600 bg-background shadow-sm focus:border-accent-gold focus:ring-accent-gold text-white" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-300">آدرس دقیق</label>
                        <div className="mt-1">
                            <textarea name="address" id="address" rows={4} required className="block w-full rounded-md border-gray-600 bg-background shadow-sm focus:border-accent-gold focus:ring-accent-gold text-white" />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-300">شهر</label>
                        <div className="mt-1">
                            <input type="text" name="city" id="city" required className="block w-full rounded-md border-gray-600 bg-background shadow-sm focus:border-accent-gold focus:ring-accent-gold text-white" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-300">کد پستی</label>
                        <div className="mt-1">
                            <input type="text" name="postal-code" id="postal-code" required className="block w-full rounded-md border-gray-600 bg-background shadow-sm focus:border-accent-gold focus:ring-accent-gold text-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Summary Column */}
            <div className="mt-10 lg:mt-0">
              <h2 className="text-2xl font-cormorant font-medium text-white">خلاصه سفارش</h2>
              <div className="mt-4 rounded-lg border border-gray-700 bg-gray-900/50 shadow-sm">
                <h3 className="sr-only">محصولات در سبد خرید شما</h3>
                <ul role="list" className="divide-y divide-gray-700">
                  {cartItems.map((product) => (
                    <li key={product.id} className="flex py-6 px-4 sm:px-6">
                      <div className="flex-shrink-0">
                        <img src={product.imageSrc} alt={product.name} className="w-20 rounded-md" />
                      </div>
                      <div className="mr-6 flex flex-1 flex-col">
                        <div className="flex">
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm font-medium text-white">{product.name}</h4>
                            <p className="mt-1 text-sm text-gray-400">تعداد: {product.quantity}</p>
                          </div>
                        </div>
                      </div>
                       <p className="flex-shrink-0 w-24 text-right text-sm font-medium text-white">{formatPrice(product.price * product.quantity)} تومان</p>
                    </li>
                  ))}
                </ul>
                <dl className="space-y-6 border-t border-gray-700 py-6 px-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-300">جمع کل</dt>
                    <dd className="text-sm font-medium text-white">{formatPrice(cartTotal)} تومان</dd>
                  </div>
                   <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-300">هزینه ارسال</dt>
                    <dd className="text-sm font-medium text-white">رایگان</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-700 pt-6">
                    <dt className="text-base font-bold text-white">مبلغ نهایی</dt>
                    <dd className="text-base font-bold text-white">{formatPrice(cartTotal)} تومان</dd>
                  </div>
                </dl>
                
                <div className="border-t border-gray-700 py-6 px-4 sm:px-6">
                  <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-accent-gold py-3 px-4 text-base font-medium text-background shadow-sm hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    پرداخت و تکمیل سفارش
                  </button>
                </div>
              </div>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
