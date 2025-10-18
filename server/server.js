// File: server/server.js
// FINAL VERSION – Secure Proxy Server for Sharif Gold AI Design
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ✅ تست اتصال و بررسی سلامت سرور
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Sharif Gold AI Proxy active" });
});

// ✅ مسیر اصلی: دریافت درخواست طراحی با prompt
app.post("/api/aiDesign", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({ error: "Prompt is missing." });
    }

    // حالت Mock برای تست بدون کلید واقعی
    const sampleDesigns = [
      {
        name: "طرح حلقه طلای انتزاعی",
        image: "/images/ai-placeholder.jpg",
      },
      {
        name: "گردن‌آویز نقره‌ای مینیمال",
        image: "/images/ai-placeholder2.jpg",
      },
      {
        name: "دست‌بند با الگوی هندسی",
        image: "/images/ai-placeholder3.jpg",
      },
    ];
    const randomItem = sampleDesigns[Math.floor(Math.random() * sampleDesigns.length)];

    // بازگشت الگوی نمونه (در نسخه واقعی اینجا فراخوانی OpenAI قرار می‌گیرد)
    res.json(randomItem);
  } catch (err) {
    console.error("AI Server Error:", err);
    res.status(500).json({ error: "AI module error." });
  }
});

// ✅ اجرای سرور در پورت امن
const PORT = 8080;
app.listen(PORT, () =>
  console.log(`✅ Sharif Gold AI Proxy running on http://localhost:${PORT}`)
);
