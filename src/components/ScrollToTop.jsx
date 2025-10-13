// File: src/components/ScrollToTop.jsx
// ACTION: Create this new file and add this code.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // از هوک useLocation برای دسترسی به آدرس فعلی (pathname) استفاده می‌کنیم
  const { pathname } = useLocation();

  // از هوک useEffect استفاده می‌کنیم تا هر بار که آدرس (pathname) تغییر می‌کند،
  // یک عملیات را اجرا کنیم.
  useEffect(() => {
    // این دستور صفحه را به مختصات (0, 0) یعنی بالاترین نقطه اسکرول می‌کند.
    window.scrollTo(0, 0);
  }, [pathname]); // آرایه وابستگی: این افکت فقط زمانی اجرا می‌شود که pathname تغییر کند.

  // این کامپوننت هیچ چیزی را رندر نمی‌کند، فقط یک عملکرد را اجرا می‌کند.
  // بنابراین null برمی‌گردانیم.
  return null;
}

export default ScrollToTop;
