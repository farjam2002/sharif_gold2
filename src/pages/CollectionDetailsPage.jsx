import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCollectionById } from '../data/mockData'; // CORRECTED: Was getCollectionDetails
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner'; // Assuming a Spinner component exists

const CollectionDetailsPage = () => {
  const { collectionId } = useParams();
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollection = async () => {
      setLoading(true);
      // CORRECTED: Using the correctly imported function
      const data = await getCollectionById(collectionId);
      setCollection(data);
      setLoading(false);
    };

    fetchCollection();
  }, [collectionId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl text-accent-gold">مجموعه مورد نظر یافت نشد.</h1>
        <Link to="/gallery" className="mt-4 inline-block text-accent-gold hover:underline">
          بازگشت به گالری
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen font-vazirmatn text-text-primary">
      {/* Hero Section for the Collection */}
      <div
        className="h-[50vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{ backgroundImage: `url(${collection.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center z-10 px-4">
          <h1 className="font-cormorant text-5xl md:text-7xl text-white font-bold tracking-wider">
            {collection.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            {collection.description}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {collection.products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              collectionId={collection.id} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionDetailsPage;