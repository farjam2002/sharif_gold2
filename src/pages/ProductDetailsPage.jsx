// File: src/pages/ProductDetailsPage.jsx
// ACTION: Replace the entire file content with this corrected version.

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductDetails } from '../data/mockData'; // CORRECTED: Was getProductById
import Spinner from '../components/Spinner';
import { useCart } from '../context/CartContext'; // Already imported, just checking

const ProductDetailsPage = () => {
  const { collectionId, productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const data = await getProductDetails(collectionId, productId); // CORRECTED: Using the correct function name
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [collectionId, productId]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setNotification(`${product.name} به سبد خرید اضافه شد!`);
      setTimeout(() => {
        setNotification('');
      }, 3000); // Notification disappears after 3 seconds
    }
  };


  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-5rem)]">
        <Spinner />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-cormorant text-accent-gold">محصول مورد نظر یافت نشد.</h1>
        <Link to={`/collections/${collectionId}`} className="mt-4 inline-block text-accent-gold hover:underline">
          بازگشت به مجموعه
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image Column */}
          <div className="w-full h-auto rounded-lg overflow-hidden shadow-2xl shadow-black/30">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Column */}
          <div className="flex flex-col h-full text-right">
            <h1 className="font-cormorant text-4xl lg:text-5xl font-bold text-white tracking-wide">
              {product.name}
            </h1>
            
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              {product.description}
            </p>

            <div className="my-8 border-t border-gray-700"></div>

            {/* Product Specifications */}
            <div className="space-y-4 text-md">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-200">{product.details.material}</span>
                <span className="text-gray-400">:جنس</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-200">{product.details.stones}</span>
                <span className="text-gray-400">:سنگ‌ها</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-200">{product.details.weight}</span>
                <span className="text-gray-400">:وزن حدودی</span>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-accent-gold text-background font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent-gold"
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-5 right-5 bg-gray-800 border border-accent-gold text-white py-2 px-4 rounded-lg shadow-lg animate-fadeIn">
          {notification}
        </div>
      )}
    </>
  );
};

export default ProductDetailsPage;
