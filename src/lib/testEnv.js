export function testEnv() {
  const key = import.meta.env.VITE_OPENAI_API_KEY;
  if (!key) {
    console.error("❌ Missing OpenAI API Key in environment!");
    alert("کلید هوش مصنوعی تعریف نشده است.");
    return false;
  }
  console.log("✅ محیط تست موفق: OpenAI API Key شناسایی شد.");
  return true;
}
