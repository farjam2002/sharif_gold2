// File: src/pages/DesignStudioPage.jsx
// FINAL VERSION – Stage 2 removed, AI creation merged with Stage 1
// Focus: full flow inside Stage 1 → preview (Stage 3)

import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import Spinner from '../components/Spinner';
import { useCart } from '../context/CartContext';
import { aiDesignSamples } from '../data/mockData';
import { generateAndDownloadSTL, generateAndDownloadDXF } from '../lib/convertToSTL';
import { preload, suspend } from '../lib/suspendCache';

// 🔁 پیش‌بارگذاری مدل موجود واقعی برای Test
preload(useGLTF, ['/models/sample-ring.glb']);

const ARPreview = ({ modelPath = '/models/sample-ring.glb' }) => {
  const { scene } = suspend(useGLTF, [modelPath]);
  return (
    <Canvas style={{ height: 420 }} camera={{ position: [0, 0.6, 2.2], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight intensity={1.2} position={[5, 5, 3]} />
      <Suspense fallback={<Spinner />}>
        <Environment preset="studio" />
        <primitive object={scene} scale={4.8} position={[0, -0.4, 0]} />
      </Suspense>
      <OrbitControls autoRotate enablePan={false} enableZoom autoRotateSpeed={0.6} />
    </Canvas>
  );
};

const DesignStudioPage = () => {
  const { addToCart } = useCart();
  const [step, setStep] = useState(1);
  const [material, setMaterial] = useState('gold');
  const [pieceType, setPieceType] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [design, setDesign] = useState(null);
  const [liveRate, setLiveRate] = useState({ gold: 3450000, silver: 65000, titanium: 220000 });
  const [selectedSize, setSelectedSize] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  // نرخ زنده فلزات
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRate(prev => {
        const fluctuate = v => v * (1 + (Math.random() * 0.04 - 0.02));
        return {
          gold: fluctuate(prev.gold),
          silver: fluctuate(prev.silver),
          titanium: fluctuate(prev.titanium)
        };
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // ✨ تولید خودکار طرح AI در مرحله ۱
  useEffect(() => {
    if (step === 1 && pieceType && userDescription && design === null) {
      const sample = aiDesignSamples[Math.floor(Math.random() * aiDesignSamples.length)];
      setDesign(sample);
      setStep(3); // مستقیماً به مرحله ۳ منتقل شود
    }
  }, [pieceType, userDescription]);

  const calculateFinalPrice = () => {
    if (!selectedSize) return alert('لطفاً ابعاد قطعه را وارد کنید.');
    let ref = 50, baseWeight = 10;
    switch (pieceType) {
      case 'panel': ref = 80; baseWeight = 15; break;
      case 'brace': ref = 180; baseWeight = 20; break;
      case 'ornament': ref = 40; baseWeight = 8; break;
    }
    const metalRate = liveRate[material];
    const price = metalRate * baseWeight * (selectedSize / ref) * (1 + (Math.random() * 0.04 - 0.02));
    setFinalPrice(Math.round(price / 1000) * 1000);
  };

  const confirmAndAddToCart = () => {
    if (!finalPrice) return alert('لطفاً ابتدا قیمت را محاسبه کنید.');
    const product = {
      id: `metal-${Date.now()}`,
      name: design?.name || 'طرح فلزی سفارشی',
      image: design?.image || '/images/ai-placeholder.jpg',
      material,
      pieceType,
      size: selectedSize,
      price: `${finalPrice.toLocaleString('fa-IR')} تومان`,
      description: userDescription
    };
    addToCart(product);
    setConfirmed(true);
  };

  return (
    <div className={`min-h-screen py-16 px-6 transition-colors duration-700 ${
      material === 'gold'
        ? 'bg-[#1A120B]'
        : material === 'silver'
        ? 'bg-[#101010]'
        : 'bg-[#0D0D0E]'
    }`}>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="font-cormorant text-4xl text-accent-gold mb-6">استودیوی طراحی فلز خالص</h1>

        {/* ----- مرحله ۱: ورودی ----- */}
        {step === 1 && (
          <>
            <p className="text-gray-400 mb-4 font-vazirmatn">انتخاب نوع فلز و توضیح الهام طراحی:</p>

            <div className="flex justify-center gap-3 mb-4">
              {['gold', 'silver', 'titanium'].map(met => (
                <button
                  key={met}
                  onClick={() => setMaterial(met)}
                  className={`px-5 py-2 rounded-md font-semibold border ${material === met ? 'bg-accent-gold text-black border-accent-gold' : 'border-gray-500 text-gray-300 hover:border-accent-gold'}`}
                >
                  {met === 'gold' ? 'طلا' : met === 'silver' ? 'نقره' : 'تیتانیوم'}
                </button>
              ))}
            </div>

            {/* نوع قطعه */}
            <select
              value={pieceType}
              onChange={e => setPieceType(e.target.value)}
              className="w-full sm:w-1/2 mx-auto rounded-md bg-surface border border-accent-gold text-gray-100 px-3 py-2 mb-4"
            >
              <option value="">-- نوع قطعه --</option>
              <option value="panel">صفحه</option>
              <option value="brace">بند فلزی</option>
              <option value="ornament">تزئینات فنی</option>
            </select>

            {/* توضیح */}
            <textarea
              className="w-full rounded-md bg-surface border border-accent-gold text-gray-100 p-4 mb-4"
              rows="3"
              placeholder="توضیح یا الهام طراحی..."
              value={userDescription}
              onChange={e => setUserDescription(e.target.value)}
            />
          </>
        )}

        {/* ----- مرحله ۳: نمایش سه‌بعدی ----- */}
        {step === 3 && design && (
          <>
            <p className="text-gray-300 mb-6 font-vazirmatn">نمای سه‌بعدی قطعه فلزی شما:</p>
            <ARPreview modelPath="/models/sample-ring.glb" />
            <button
              onClick={() => setStep(4)}
              className="mt-8 px-8 py-3 font-bold border border-accent-gold text-accent-gold rounded-md hover:bg-accent-gold hover:text-black transition-all"
            >
              ادامه به تعیین ابعاد
            </button>
          </>
        )}

        {/* ----- مرحله ۴: سایز و قیمت ----- */}
        {step === 4 && (
          <>
            <input
              type="number"
              className="rounded-md px-4 py-2 bg-surface border border-accent-gold text-gray-100 w-1/2 mx-auto mb-4"
              value={selectedSize}
              onChange={e => setSelectedSize(e.target.value)}
              placeholder="ابعاد (میلی‌متر)"
            />
            <button
              onClick={calculateFinalPrice}
              className="px-8 py-3 border border-accent-gold text-accent-gold rounded-md hover:bg-accent-gold hover:text-black transition-all"
            >
              محاسبه قیمت
            </button>
            {finalPrice && (
              <div className="mt-6 text-accent-gold text-lg font-semibold">
                قیمت نهایی: {finalPrice.toLocaleString('fa-IR')} تومان
              </div>
            )}
            <button
              onClick={() => setStep(5)}
              className="mt-6 px-8 py-3 border border-accent-gold text-accent-gold rounded-md hover:bg-accent-gold hover:text-black transition-all"
            >
              نهایی‌سازی سفارش
            </button>
          </>
        )}

        {/* ----- مرحله ۵: خروجی و تأیید ----- */}
        {step === 5 && (
          <>
            <ARPreview modelPath="/models/sample-ring.glb" />
            <div className="mt-6 space-x-4 rtl:space-x-reverse">
              <button
                onClick={() => generateAndDownloadSTL()}
                className="px-6 py-2 border border-accent-gold text-accent-gold rounded-md hover:bg-accent-gold hover:text-black"
              >
                خروجی STL
              </button>
              <button
                onClick={() => generateAndDownloadDXF()}
                className="px-6 py-2 border border-accent-gold text-accent-gold rounded-md hover:bg-accent-gold hover:text-black"
              >
                خروجی DXF
              </button>
            </div>
            <button
              onClick={confirmAndAddToCart}
              className="mt-6 px-8 py-3 border border-accent-gold text-accent-gold rounded-md hover:bg-accent-gold hover:text-black"
            >
              افزودن به سبد سفارش
            </button>
            {confirmed && (
              <p className="mt-6 text-green-400 font-vazirmatn">✅ طرح فلزی شما با موفقیت ثبت شد.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DesignStudioPage;
