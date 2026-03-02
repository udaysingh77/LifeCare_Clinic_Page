"use client";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Priya Nair",
        review:
            "Absolutely brilliant service! Dr. Sharma diagnosed my thyroid issue that other clinics had missed. The staff is warm and professional. Highly recommended!",
        img: "/patient1.png",
        rating: 5,
        date: "January 2025",
    },
    {
        name: "Ramesh Gupta",
        review:
            "I've been visiting LifeCare for my diabetes management for 3 years. The doctors are knowledgeable and the in-house lab makes everything so convenient.",
        img: "/patient2.png",
        rating: 5,
        date: "February 2025",
    },
    {
        name: "Anita Desai",
        review:
            "Dr. Mehta is exceptional. Her patience and thorough explanation during my visit gave me so much confidence. The clinic is spotlessly clean.",
        img: "https://ui-avatars.com/api/?name=Anita+Desai&background=dbeafe&color=1d4ed8&size=200&rounded=true",
        rating: 5,
        date: "December 2024",
    },
    {
        name: "Suresh Patil",
        review:
            "My child's paediatric care has been outstanding here. Dr. Sunita is so gentle with kids. She explains everything clearly to parents too. We won't go anywhere else!",
        img: "https://ui-avatars.com/api/?name=Suresh+Patil&background=e0f2fe&color=0369a1&size=200&rounded=true",
        rating: 5,
        date: "November 2024",
    },
    {
        name: "Meena Krishnan",
        review:
            "I was suffering from severe skin allergies. Dr. Amit Verma prescribed the right treatment and my skin is now clear. The online consultation feature is a lifesaver!",
        img: "https://ui-avatars.com/api/?name=Meena+Krishnan&background=ede9fe&color=5b21b6&size=200&rounded=true",
        rating: 4,
        date: "March 2025",
    },
    {
        name: "Vikram Singh",
        review:
            "The emergency care team at LifeCare acted swiftly when I came in with severe chest pain. Prompt, professional, and genuinely caring. Forever grateful.",
        img: "https://ui-avatars.com/api/?name=Vikram+Singh&background=fce7f3&color=9d174d&size=200&rounded=true",
        rating: 5,
        date: "October 2024",
    },
];

function Stars({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className={i < count ? "fill-amber-400 text-amber-400" : "text-slate-200"} />
            ))}
        </div>
    );
}

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 lg:py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14 reveal">
                    <span className="section-badge">Patient Reviews</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                        What Our <span className="gradient-text">Patients Say</span>
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-base">
                        Real stories from real patients. We&apos;re proud of the trust thousands of families place in us.
                    </p>
                    {/* Aggregate rating */}
                    <div className="flex items-center justify-center gap-3 mt-5">
                        <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <span className="text-2xl font-extrabold text-slate-800">4.9</span>
                        <span className="text-slate-500 text-sm">from 500+ Google Reviews</span>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            className={`group bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col reveal delay-${Math.min((i % 3 + 1) * 100, 300)}`}
                        >
                            {/* Quote icon */}
                            <div className="text-4xl text-blue-100 font-serif leading-none mb-3 select-none">&ldquo;</div>
                            <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">{t.review}</p>
                            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-blue-100">
                                    <Image src={t.img} alt={`Patient ${t.name}`} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800 text-sm">{t.name}</p>
                                    <Stars count={t.rating} />
                                </div>
                                <span className="ml-auto text-xs text-slate-400">{t.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
