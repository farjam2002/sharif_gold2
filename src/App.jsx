// File: src/App.jsx
// نسخهٔ اصلاح‌شده برای حذف Router تکراری و سازگاری کامل با Vite/React Router v6

import React from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CollectionDetailsPage from "./pages/CollectionDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import DesignStudioPage from "./pages/DesignStudioPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutUsPage from "./pages/AboutUsPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<ShopPage />} /> {/* مسیر ادغام‌شده */}
          <Route path="/collections/:collectionId" element={<CollectionDetailsPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/design-studio" element={<DesignStudioPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
