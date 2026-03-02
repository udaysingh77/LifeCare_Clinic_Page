"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "How do I book an appointment at LifeCare Clinic?",
        a: "You can book an appointment by filling the form on this page, calling our receptionist at +91 98765 43210, or messaging us on WhatsApp. Our team will confirm your slot within 2 hours.",
    },
    {
        q: "Are walk-in patients accepted?",
        a: "Yes, we do accept walk-in patients depending on doctor availability. However, we strongly recommend booking in advance to avoid waiting times, especially for specialist consultants.",
    },
    {
        q: "What are the consultation fees?",
        a: "Consultation fees vary by specialist and range from ₹300–₹800. Please contact our reception for the exact fee structure for a specific doctor. Emergency consultations may have different pricing.",
    },
    {
        q: "Do you accept health insurance?",
        a: "Yes, we accept most major health insurance plans and TPA (Third Party Administrator) services. Please carry your insurance card and policy documents during your visit. Contact us in advance to verify coverage.",
    },
    {
        q: "Is 24/7 emergency care available?",
        a: "Yes. Our emergency care unit is open 24/7 for urgent medical needs. For life-threatening emergencies, please call 108 (ambulance) immediately or call our emergency line at +91 98765 43211.",
    },
    {
        q: "Can I consult a doctor online?",
        a: "Absolutely! We offer online video consultations for follow-up visits and non-emergency cases. Book an online consultation through our appointment form and select your preferred doctor and timing.",
    },
    {
        q: "How long does a typical consultation take?",
        a: "A first-time consultation typically lasts 20–30 minutes. Follow-up visits are usually 10–15 minutes. Specialist consultations may take longer depending on the complexity of your case.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 lg:py-28 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14 reveal">
                    <span className="section-badge">FAQ</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-base">
                        Find quick answers to the most common questions about our clinic, services, and appointments.
                    </p>
                </div>

                <div className="space-y-3 reveal">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${open === i ? "border-blue-200 shadow-md" : "border-slate-100 hover:border-blue-100"
                                }`}
                        >
                            <button
                                id={`faq-${i}`}
                                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                                onClick={() => setOpen(open === i ? null : i)}
                                aria-expanded={open === i}
                            >
                                <span className={`text-sm font-semibold leading-tight ${open === i ? "text-blue-700" : "text-slate-800"}`}>
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`shrink-0 text-blue-400 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                                />
                            </button>
                            <div className={`accordion-content ${open === i ? "open" : ""}`}>
                                <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
