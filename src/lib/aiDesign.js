// File: src/lib/aiDesign.js
// FINAL SAFE VERSION – Phase 2.4‑D (Sharif Gold AI Proxy Integration)

export async function fetchAIDesign(promptText) {
  try {
    // مسیر نسبی برای فعال شدن Proxy در Vite (نباید localhost یا پورت نوشته شود)
    const response = await fetch("/api/aiDesign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: promptText }),
    });

    // بررسی پاسخ و نمایش خطا در صورت عدم موفقیت
    if (!response.ok) {
      throw new Error(`Server response ${response.status}`);
    }

    const data = await response.json();
    return data; // باید شامل name و image باشد
  } catch (err) {
    console.error("❌ خطا در ارتباط با ماژول هوش مصنوعی:", err);
    alert("اشکال در ارتباط با ماژول هوش مصنوعی. لطفاً بعداً دوباره تلاش کنید.");
    return null;
  }
}
