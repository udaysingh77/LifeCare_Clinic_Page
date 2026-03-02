"use client";
import { useState } from "react";
import { MessageCircle, X, ChevronRight, Calendar } from "lucide-react";

const QA = [
    {
        q: "How do I book an appointment?",
        a: "You can book an appointment online via our form below, or call us at +91 98765 43210. We confirm slots within 2 hours.",
        cta: true,
    },
    {
        q: "What are the consultation charges?",
        a: "Consultation fees range from ₹300–₹800 depending on the specialist. Please call reception for specific pricing.",
        cta: false,
    },
    {
        q: "What are the doctor timings?",
        a: "General physicians: Mon–Fri 10AM–1PM & 6PM–8PM. Specialists vary — please call +91 98765 43210 for exact timings.",
        cta: false,
    },
    {
        q: "What diseases are treated here?",
        a: "We treat Diabetes, Thyroid, Blood Pressure, Skin, Hair Fall, Joint Pain, Asthma, Allergy, Fever, Child Care, and much more.",
        cta: false,
    },
    {
        q: "Emergency contact number?",
        a: "Our 24/7 emergency line is +91 98765 43211. For life-threatening emergencies, always call 108 (Ambulance) first.",
        cta: false,
    },
];

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [answer, setAnswer] = useState<{ text: string; cta: boolean } | null>(null);

    const scrollToForm = () => {
        setOpen(false);
        document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Chat window */}
            {open && (
                <div className="w-80 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[520px]">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-white text-lg">🤖</span>
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">LifeCare Assistant</p>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                    <p className="text-sky-100 text-xs">Online</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {/* Greeting */}
                        <div className="bg-blue-50 rounded-2xl rounded-tl-none p-3">
                            <p className="text-slate-700 text-sm">
                                👋 Hi! I&apos;m the LifeCare virtual assistant. How can I help you today?
                            </p>
                        </div>

                        {/* Answer bubble */}
                        {answer && (
                            <div className="space-y-2">
                                <div className="bg-blue-50 rounded-2xl rounded-tl-none p-3">
                                    <p className="text-slate-700 text-sm leading-relaxed">{answer.text}</p>
                                </div>
                                {answer.cta && (
                                    <button
                                        onClick={scrollToForm}
                                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors"
                                    >
                                        <Calendar size={13} />
                                        Book Appointment Now
                                    </button>
                                )}
                            </div>
                        )}

                        {/* Questions */}
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wide pt-1">Select a question:</p>
                        {QA.map((item) => (
                            <button
                                key={item.q}
                                onClick={() => setAnswer({ text: item.a, cta: item.cta })}
                                className="w-full flex items-center gap-2 text-left px-3 py-2.5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 text-slate-700 text-xs font-medium transition-all group"
                            >
                                <ChevronRight size={13} className="shrink-0 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                {item.q}
                            </button>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="p-3 border-t border-slate-100 bg-slate-50">
                        <button
                            onClick={scrollToForm}
                            className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                            <Calendar size={13} />
                            Book Appointment
                        </button>
                    </div>
                </div>
            )}

            {/* FAB button */}
            <button
                id="chatbot-toggle"
                onClick={() => setOpen(!open)}
                className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-sky-500 rounded-full shadow-2xl shadow-blue-300 flex items-center justify-center text-white hover:scale-110 transition-all duration-200"
                aria-label="Open chat assistant"
            >
                <span className="pulse-ring absolute inset-0 rounded-full" />
                {open ? <X size={22} /> : <MessageCircle size={22} />}
            </button>
        </div>
    );
}
