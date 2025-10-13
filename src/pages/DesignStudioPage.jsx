// File: src/pages/DesignStudioPage.jsx
// FINAL VERSION – “Sharif Gold Metal Design Studio”
// Focus: Only gold & silver pieces (no gems), luxury UX, ISO/mm size standards.

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Spinner from '../components/Spinner';
import { useCart } from '../context/CartContext';
import { aiDesignSamples } from '../data/mockData';

// --- 3D Preview: appears only after confirmation ---
const ARPreview = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return (
    <Canvas style={{ height: 360 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 2]} intensity={1.1} />
      <primitive object={scene} scale={1.2} />
      <OrbitControls enablePan={false} />
    </Canvas>
  );
};

const DesignStudioPage = () => {
  const { addToCart } = useCart();
  const [material, setMaterial] = useState('gold');
  const [userDescription, setUserDescription] = useState('');
  const [pieceType, setPieceType] = useState('');
  const [design, setDesign] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [liveRate, setLiveRate] = useState({ gold: 3450000, silver: 65000 });
  const [finalPrice, setFinalPrice] = useState(null);

  // Live price fluctuation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRate(prev => {
        const fluctuate = v => v * (1 + (Math.random() * 0.05 - 0.025));
        return { gold: fluctuate(prev.gold), silver: fluctuate(prev.silver) };
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const generateAIDesign = () => {
    if (!userDescription || !pieceType) {
      return alert('لطفاً نوع قطعه و توصیف الهام خود را وارد کنید.');
    }
    setIsLoading(true);
    setTimeout(() => {
      const sample = aiDesignSamples[Math.floor(Math.random() * aiDesignSamples.length)];
      setDesign(sample);
      setIsLoading(false);
    }, 2500);
  };

  const calculateFinalPrice = () => {
    let referenceSize_mm = 56;
    let baseWeight_grams = 12;

    switch (pieceType) {
      case 'necklace':
        referenceSize_mm = 450; baseWeight_grams = 25; break;
      case 'bracelet':
        referenceSize_mm = 175; baseWeight_grams = 18; break;
      case 'earpiece':
        referenceSize_mm = 25; baseWeight_grams = 8; break;
      default:
        break;
    }

    const metalRate = liveRate[material];
    const sizeFactor = selectedSize / referenceSize_mm;
    const fluctuate = 1 + (Math.random() * 0.05 - 0.025);
    const price = metalRate * baseWeight_grams * sizeFactor * fluctuate;
    setFinalPrice(Math.round(price / 1000) * 1000);
  };

  const confirmAndAddToCart = () => {
    const productObj = {
      id: `ai-${Date.now()}`,
      name: design?.name || 'قطعه فلزی سفارشی شما',
      image: design?.image || '/images/ai-placeholder.jpg',
      description: userDescription,
      pieceType,
      material,
      size_mm: selectedSize,
      price: `${finalPrice.toLocaleString('fa-IR')} تومان`,
    };
    addToCart(productObj);
    setConfirmed(true);
  };

  return (
    <div
      className={`min-h-screen py-20 px-6 transition-colors duration-700 ${
        material === 'gold' ? 'bg-[#1A120B]' : 'bg-[#101010]'
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="font-cormorant text-4xl text-accent-gold mb-8">
          استودیوی طراحی فلز خالص
        </h1>
        <p className="text-gray-300 mb-10 leading-7 font-vazirmatn">
          توصیف خود را بنویسید تا هوش مصنوعی، قطعه‌ای منحصربه‌فرد بر اساس الهام شما خلق کند.
        </p>

        {/* Piece type selection */}
        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-2">نوع قطعه فلزی:</label>
          <select
            value={pieceType}
            onChange={(e) => setPieceType(e.target.value)}
            className="w-full sm:w-1/2 mx-auto rounded-md bg-surface border border-accent-gold px-3 py-2 text-gray-100"
          >
            <option value="">-- انتخاب نوع قطعه --</option>
            <option value="ring">حلقه</option>
            <option value="necklace">گردن‌آویز</option>
            <option value="bracelet">دست‌بند</option>
            <option value="earpiece">گوشواره فلزی</option>
          </select>
        </div>

        {/* Description */}
        <textarea
          className="w-full p-4 rounded-md bg-surface border border-accent-gold text-gray-100 mb-6 focus:ring-2 focus:ring-accent-gold"
          rows="4"
          placeholder="الهام یا احساس خود را برای طراحی قطعه بنویسید..."
          value={userDescription}
          onChange={(e) => setUserDescription(e.target.value)}
        />

        {/* Material Selection */}
        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-2">انتخاب فلز پایه:</label>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <button
              className={`px-6 py-2 border rounded-md font-semibold transition-all ${
                material === 'gold'
                  ? 'bg-accent-gold text-background border-accent-gold'
                  : 'border-gray-500 text-gray-300 hover:border-accent-gold'
              }`}
              onClick={() => setMaterial('gold')}
            >
              طلا
            </button>
            <button
              className={`px-6 py-2 border rounded-md font-semibold transition-all ${
                material === 'silver'
                  ? 'bg-gray-400 text-background border-gray-300'
                  : 'border-gray-500 text-gray-300 hover:border-gray-400'
              }`}
              onClick={() => setMaterial('silver')}
            >
              نقره
            </button>
          </div>
        </div>

        {/* Generate AI Design */}
        <button
          onClick={generateAIDesign}
          className="mt-4 px-8 py-3 font-bold border border-accent-gold text-accent-gold rounded-md hover:bg-accent-gold hover:text-background transition-all"
        >
          خلق طرح فلزی هوشمند
        </button>

        {/* Spinner */}
        {isLoading && (
          <div className="mt-8 flex justify-center">
            <Spinner />
          </div>
        )}

        {/* AI Output */}
        {design && !confirmed && (
          <div className="mt-12 text-center">
            <img
              src={design.image}
              alt={design.name}
              className="w-72 h-72 mx-auto object-cover rounded-lg shadow-lg"
            />
            <h3 className="font-cormorant text-2xl text-accent-gold mt-6">{design.name}</h3>

            {/* Size selection */}
            <div className="mt-10">
              <label className="block text-sm text-gray-300 mb-2">انتخاب سایز بر اساس استاندارد میلی‌متر:</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(Number(e.target.value))}
                className="w-full sm:w-1/2 mx-auto rounded-md bg-surface border border-accent-gold px-3 py-2 text-gray-100"
              >
                <option value="">-- انتخاب سایز --</option>
                {pieceType === 'ring' && (
                  <>
                    <option value="52">52 mm — سایز 6</option>
                    <option value="54">54 mm — سایز 7</option>
                    <option value="56">56 mm — سایز 8</option>
                    <option value="58">58 mm — سایز 9</option>
                    <option value="60">60 mm — سایز 10</option>
                  </>
                )}
                {pieceType === 'bracelet' && (
                  <>
                    <option value="160">160 mm — زنانه ظریف</option>
                    <option value="175">175 mm — کلاسیک</option>
                    <option value="200">200 mm — مردانه</option>
                  </>
                )}
                {pieceType === 'necklace' && (
                  <>
                    <option value="450">450 mm — پرنسس</option>
                    <option value="600">600 mm — اپرا</option>
                    <option value="900">900 mm — روپی</option>
                  </>
                )}
                {pieceType === 'earpiece' && (
                  <>
                    <option value="20">20 mm — کوچک</option>
                    <option value="30">30 mm — متوسط</option>
                    <option value="45">45 mm — بلند</option>
                  </>
                )}
              </select>
            </div>

            {/* Pricing */}
            {selectedSize && (
              <div className="mt-8">
                <button
                  onClick={calculateFinalPrice}
                  className="px-8 py-3 border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-background rounded-md transition-all"
                >
                  محاسبه قیمت لحظه‌ای
                </button>
              </div>
            )}

            {finalPrice && (
              <div className="mt-6 bg-black/40 text-gray-100 p-6 rounded-lg w-full sm:w-2/3 mx-auto border border-accent-gold">
                <p className="text-lg font-vazirmatn mb-3">قیمت نهایی بر اساس نوع، سایز و فلز پایه:</p>
                <p className="text-3xl font-cormorant text-accent-gold mb-4">
                  {finalPrice.toLocaleString('fa-IR')} تومان
                </p>
                <button
                  onClick={confirmAndAddToCart}
                  className="px-10 py-3 bg-accent-gold text-background font-bold rounded-md hover:scale-105 transition-all"
                >
                  تأیید و افزودن به سبد
                </button>
              </div>
            )}
          </div>
        )}

        {/* AR Preview */}
        {confirmed && design && (
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-cormorant text-accent-gold mb-4">پیش‌نمایش سه‌بعدی قطعه تأیید‌شده</h2>
            <ARPreview modelPath="/models/sample-ring.glb" />
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignStudioPage;
