// File: src/pages/CreationProcessPage.jsx
// FINAL VERSION with Background Image

import React from 'react';
import { Lightbulb, Users, Box, Gem } from 'lucide-react';

const CreationProcessPage = () => {
    const steps = [
        {
            icon: <Lightbulb className="w-10 h-10 text-accent-gold" />,
            title: "۱. ایده‌پردازی با هوش مصنوعی",
            description: "سفر شما با یک ایده آغاز می‌شود. با استفاده از استودیوی طراحی ما، تخیل خود را به یک طرح اولیه دیجیتال تبدیل کنید یا از هوش مصنوعی برای خلق مفاهیم جدید الهام بگیرید."
        },
        {
            icon: <Users className="w-10 h-10 text-accent-gold" />,
            title: "۲. مشاوره و طراحی دقیق",
            description: "طراحان متخصص ما طرح اولیه شما را بررسی کرده و در یک جلسه مشاوره، جزئیات را با شما نهایی می‌کنند تا طرح شما هم زیبا و هم قابل ساخت باشد."
        },
        {
            icon: <Box className="w-10 h-10 text-accent-gold" />,
            title: "۳. مدل‌سازی سه‌بعدی و پیش‌نمایش AR",
            description: "ما یک مدل سه‌بعدی دقیق از جواهر شما می‌سازیم. شما می‌توانید این مدل را از تمام زوایا ببینید و حتی با استفاده از واقعیت افزوده (AR) آن را روی دست خود امتحان کنید."
        },
        {
            icon: <Gem className="w-10 h-10 text-accent-gold" />,
            title: "۴. ساخت توسط استادکاران",
            description: "پس از تأیید نهایی شما، مدل به کارگاه ما فرستاده می‌شود. در آنجا، استادکاران ما با ترکیب مهارت سنتی و ابزارهای دقیق، رویای شما را به یک قطعه طلای واقعی و ماندگار تبدیل می‌کنند."
        }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div
                className="h-[50vh] bg-cover bg-center flex items-center justify-center relative"
                style={{ backgroundImage: "url('/images/creation-process-background.jpg')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 text-center p-4">
                    <h1 className="font-cormorant text-5xl md:text-7xl text-white text-shadow-md">
                        فرآیند خلق اثر
                    </h1>
                    <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                        از ایده در ذهن شما تا جواهری در دستان شما
                    </p>
                </div>
            </div>

            {/* Steps Section */}
            <div className="bg-background py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-6 bg-background-secondary rounded-lg border border-gray-800 hover:border-accent-gold/50 transition-colors duration-300">
                                <div className="mb-4">{step.icon}</div>
                                <h3 className="text-xl font-bold text-text-primary mb-2 font-vazirmatn">{step.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreationProcessPage;
