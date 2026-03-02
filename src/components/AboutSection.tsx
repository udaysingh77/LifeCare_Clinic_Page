"use client";
import { Target, Eye, Award, Users, Clock, HeartPulse } from "lucide-react";

const stats = [
    { icon: Clock, value: "10+", label: "Years of Excellence" },
    { icon: Users, value: "5000+", label: "Patients Served" },
    { icon: Award, value: "15+", label: "Expert Doctors" },
    { icon: HeartPulse, value: "20+", label: "Specialities" },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-14 reveal">
                    <span className="section-badge">About Us</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                        Committed to{" "}
                        <span className="gradient-text">World-Class Healthcare</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
                        LifeCare Multispeciality Clinic has been the healthcare destination of choice for thousands
                        of families since 2014. We deliver evidence-based, compassionate care across multiple disciplines.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    {/* Left: Description + mission/vision */}
                    <div className="space-y-8 reveal">
                        <p className="text-slate-600 leading-relaxed text-base">
                            Located in the heart of your city, LifeCare Multispeciality Clinic combines the expertise of
                            senior specialist doctors with state-of-the-art diagnostic technology. Whether you need a
                            routine check-up or complex specialist care, we&apos;re here for you and your whole family.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-5">
                            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-3">
                                    <Target size={20} className="text-white" />
                                </div>
                                <h3 className="font-bold text-slate-800 mb-1.5">Our Mission</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    To provide affordable, accessible, and high-quality healthcare that improves the lives
                                    of every patient we serve.
                                </p>
                            </div>
                            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center mb-3">
                                    <Eye size={20} className="text-white" />
                                </div>
                                <h3 className="font-bold text-slate-800 mb-1.5">Our Vision</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    To be the most trusted multispeciality clinic in the region, setting the gold standard
                                    in holistic patient care.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {["NABH Certified", "ISO 9001:2015", "24/7 Emergency", "Cashless Insurance"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 bg-white border border-blue-200 text-blue-700 text-xs font-semibold rounded-full shadow-sm"
                                >
                                    ✓ {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Stats grid */}
                    <div className="grid grid-cols-2 gap-5 reveal delay-200">
                        {stats.map(({ icon: Icon, value, label }) => (
                            <div
                                key={label}
                                className="group p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-200 hover:scale-105 hover:shadow-blue-300 transition-all duration-300"
                            >
                                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                                    <Icon size={22} />
                                </div>
                                <div className="text-3xl font-extrabold mb-1">{value}</div>
                                <div className="text-sky-100 text-sm font-medium">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
