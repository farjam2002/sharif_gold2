// File: src/components/ProductCard.jsx
// ACTION: Replace the entire file content with this.

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A card component to display a summary of a product.
 * It links to the full product details page.
 * @param {object} product - The product data object.
 * @param {string} collectionId - The ID of the collection this product belongs to.
 * @param {number} delay - Animation delay in seconds.
 */
const ProductCard = ({ product, collectionId, delay }) => {
  // Defensive check: If for any reason product data is not available, render nothing.
  if (!product) {
    return null;
  }

  // Construct the dynamic URL for the product details page.
  const productUrl = `/collections/${collectionId}/${product.id}`;

  return (
    // The entire card is a Link component from react-router-dom.
    // This is great for accessibility and SEO.
    <Link
      to={productUrl}
      className="group relative block overflow-hidden rounded-lg bg-stone-900/40 shadow-lg"
      style={{ animation: `fadeInUp 0.6s ${delay}s ease-out forwards`, opacity: 0 }}
      aria-label={`View details for ${product.name}`}
    >
      {/* Aspect ratio container to maintain image shape */}
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          loading="lazy" // Improves performance by loading images only when they are near the viewport
        />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500"></div>

      {/* Product Name - Appears on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <h3 className="font-cormorant text-xl lg:text-2xl text-white font-semibold">{product.name}</h3>
            <p className="text-sm text-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">مشاهده جزئیات</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
