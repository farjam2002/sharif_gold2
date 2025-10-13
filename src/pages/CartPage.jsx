// File: src/pages/CartPage.jsx
// ACTION: Create this new file and paste the entire code below.

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  // Helper to format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-center">
        <h1 className="text-4xl font-cormorant font-bold tracking-tight text-white sm:text-6xl">سبد خرید شما</h1>
        <p className="mt-6 text-lg text-gray-300">سبد خرید شما در حال حاضر خالی است.</p>
        <div className="mt-10">
          <Link
            to="/gallery"
            className="inline-block bg-accent-gold text-background font-bold py-3 px-8 text-base rounded-md shadow-lg hover:bg-yellow-400 transition-all duration-300"
          >
            بازگشت به گالری
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-cormorant font-bold tracking-tight text-white sm:text-6xl">سبد خرید</h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              محصولات در سبد خرید شما
            </h2>
            <ul role="list" className="divide-y divide-gray-700 border-b border-t border-gray-700">
              {cartItems.map((product) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="mr-4 flex flex-1 flex-col justify-between sm:mr-6">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-lg">
                          <Link to={`/collections/${product.collectionId}/${product.id}`} className="font-medium text-white hover:text-gray-300">
                            {product.name}
                          </Link>
                        </h3>
                        <p className="mr-4 text-lg font-medium text-white">{formatPrice(product.price)} تومان</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-400">{product.collectionName || 'کالکشن ویژه'}</p>
                    </div>

                    <div className="mt-4 flex flex-1 items-end justify-between">
                      <div className="flex items-center border border-gray-600 rounded-md">
                        <button type="button" onClick={() => updateQuantity(product.id, product.quantity + 1)} className="p-2 text-gray-400 hover:text-white">
                          <PlusIcon className="h-5 w-5" />
                        </button>
                        <span className="px-4 text-white">{product.quantity}</span>
                         <button type="button" onClick={() => updateQuantity(product.id, product.quantity - 1)} className="p-2 text-gray-400 hover:text-white" disabled={product.quantity <= 1}>
                          <MinusIcon className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="flex">
                        <button type="button" onClick={() => removeFromCart(product.id)} className="font-medium text-red-500 hover:text-red-400">
                          <TrashIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-16 rounded-lg bg-gray-900/50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 id="summary-heading" className="text-2xl font-cormorant font-medium text-white">
              جمع‌بندی سفارش
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-300">جمع کل</dt>
                <dd className="text-sm font-medium text-white">{formatPrice(cartTotal)} تومان</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                <dt className="text-base font-medium text-white">مبلغ قابل پرداخت</dt>
                <dd className="text-base font-medium text-white">{formatPrice(cartTotal)} تومان</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-accent-gold py-3 px-4 text-base font-medium text-background shadow-sm hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                نهایی‌سازی خرید
              </button>
            </div>
             <p className="mt-4 text-center text-xs text-gray-500">
                هزینه ارسال در مرحله بعد محاسبه خواهد شد.
             </p>
          </section>
        </form>
      </div>
    </div>
  );
};

export default CartPage;
