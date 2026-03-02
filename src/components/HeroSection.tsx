"use client";
import Image from "next/image";
import { Phone, Calendar, ArrowRight } from "lucide-react";

export default function HeroSection() {
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500"
        >
            {/* Decorative blobs */}
            <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-blue-900/30 blur-3xl pointer-events-none" />
            {/* Dot grid pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text */}
                <div>
                    <span className="inline-block px-4 py-1.5 bg-white/15 text-sky-100 text-xs font-semibold tracking-widest uppercase rounded-full mb-5 border border-white/20">
                        🏥 Trusted since 2014
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
                        Best Multispeciality{" "}
                        <span className="text-sky-300">Clinic</span>{" "}
                        in Your City
                    </h1>
                    <p className="text-lg text-blue-100 leading-relaxed mb-4">
                        <span className="font-semibold text-white">LifeCare Multispeciality Clinic</span> — your complete healthcare partner.
                        Expert doctors, advanced diagnostics, and compassionate care under one roof.
                    </p>
                    <p className="text-sky-200 italic text-base mb-8">"Your Health, Our Priority"</p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 mb-10">
                        {[
                            { value: "10+", label: "Years Experience" },
                            { value: "5000+", label: "Happy Patients" },
                            { value: "15+", label: "Specialist Doctors" },
                        ].map((s) => (
                            <div key={s.label} className="flex flex-col">
                                <span className="text-3xl font-extrabold text-white">{s.value}</span>
                                <span className="text-sm text-sky-200">{s.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <button
                            id="hero-book-btn"
                            onClick={() => scrollTo("appointment")}
                            className="flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-bold rounded-2xl shadow-xl hover:bg-blue-50 hover:scale-105 transition-all duration-200"
                        >
                            <Calendar size={18} />
                            Book Appointment
                        </button>
                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-2 px-7 py-3.5 bg-transparent border-2 border-white/60 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white transition-all duration-200"
                        >
                            <Phone size={18} />
                            Call Now
                        </a>
                    </div>
                </div>

                {/* Hero image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-lg">
                        {/* Glow behind image */}
                        <div className="absolute inset-0 rounded-3xl bg-sky-300/20 blur-2xl scale-110" />
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 glass-card">
                            <Image
                                src="/hero.png"
                                alt="LifeCare Multispeciality Clinic — professional medical team"
                                width={600}
                                height={450}
                                priority
                                className="w-full h-auto object-cover"
                            />
                            {/* Floating badge */}
                            <div className="absolute bottom-4 left-4 right-4 glass-card rounded-2xl p-4 flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-white text-lg">✓</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">Available Today</p>
                                    <p className="text-xs text-slate-500">Mon–Sat · 9AM–8PM</p>
                                </div>
                                <button
                                    onClick={() => scrollTo("appointment")}
                                    className="ml-auto flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                                >
                                    Book <ArrowRight size={13} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center pt-1.5">
                    <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}
