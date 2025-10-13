// File: src/components/Header.jsx
// نسخهٔ کامل و لوکس نهایی برای پروژه Sharif Gold — مسیر جدید «آثار شریف‌گلد»

import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAiButton, setShowAiButton] = useState(false);
  const { cartItemCount } = useCart();
  const location = useLocation();

  const leftNavLinks = [
    { name: "آثار شریف‌گلد", href: "/collections" },
    { name: "فلسفه ما", href: "/philosophy" },
  ];

  const rightNavLinks = [
    { name: "مشاهده فرایند", href: "/creation-process" },
    { name: "تماس", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowAiButton(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? "bg-background/90 backdrop-blur-xl shadow-2xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-24 items-center justify-between">
            {/* Left Navigation */}
            <nav className="hidden md:flex flex-1 justify-start items-center gap-x-8">
              {leftNavLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `font-vazirmatn text-sm tracking-wider uppercase transition-colors duration-300 ${
                      isActive
                        ? "text-accent-gold"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link
                to="/"
                className="text-4xl font-cormorant font-bold text-white hover:text-accent-gold transition-colors duration-300 tracking-widest"
              >
                SHARIF
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-x-6">
              <nav className="flex items-center gap-x-8">
                {rightNavLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `font-vazirmatn text-sm tracking-wider uppercase transition-colors duration-300 ${
                        isActive
                          ? "text-accent-gold"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>

              <div className="h-6 w-px bg-gray-600"></div>

              <div className="flex items-center gap-x-5">
                {/* AI Button */}
                <div className="w-28 text-center">
                  <Link
                    to="/design-studio"
                    className={`transition-all duration-500 rounded-full text-xs uppercase font-bold ${
                      showAiButton
                        ? "bg-accent-gold text-background py-2 px-4 shadow-lg hover:bg-yellow-400"
                        : "bg-transparent text-transparent pointer-events-none"
                    }`}
                  >
                    طراحی با AI
                  </Link>
                </div>

                {/* Cart icon */}
                <Link to="/cart" className="relative group" title="سبد خرید">
                  <ShoppingBagIcon className="h-7 w-7 text-gray-300 group-hover:text-white transition-colors" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-3 w-5 h-5 bg-accent-gold text-background text-xs font-bold rounded-full flex items-center justify-center animate-pulse-once">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="flex md:hidden flex-1 justify-end">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-300 hover:text-white"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-7 w-7" />
                ) : (
                  <Bars3Icon className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ direction: "rtl" }}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div className="relative w-80 h-full bg-background/80 shadow-2xl p-8 flex flex-col">
          <nav className="flex flex-col items-start gap-y-8 mt-16">
            {[...leftNavLinks, ...rightNavLinks].map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-cormorant text-3xl transition-colors duration-300 ${
                    isActive
                      ? "text-accent-gold"
                      : "text-gray-200 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="border-t border-gray-700 w-full my-4"></div>
            <Link
              to="/design-studio"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center bg-accent-gold text-background font-bold py-3 px-6 text-lg rounded-md shadow-lg hover:bg-yellow-400 duration-300"
            >
              طراحی با AI
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
