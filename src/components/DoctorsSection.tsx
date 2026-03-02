"use client";
import Image from "next/image";
import { Calendar, Clock, GraduationCap, Star } from "lucide-react";

const doctors = [
    {
        name: "Dr. Rajesh Sharma",
        specialization: "General Physician & Diabetologist",
        qualification: "MBBS, MD (Internal Medicine)",
        experience: "15 Years",
        timings: "Mon–Fri: 10AM–1PM, 6PM–8PM",
        img: "/doctor1.png",
        rating: 4.9,
    },
    {
        name: "Dr. Priya Mehta",
        specialization: "Gynaecologist & Obstetrician",
        qualification: "MBBS, MS (OBG)",
        experience: "12 Years",
        timings: "Mon–Sat: 11AM–2PM, 5PM–7PM",
        img: "/doctor2.png",
        rating: 4.8,
    },
    {
        name: "Dr. Amit Verma",
        specialization: "Dermatologist & Cosmetologist",
        qualification: "MBBS, DVD, DNB (Dermatology)",
        experience: "10 Years",
        timings: "Tue, Thu, Sat: 10AM–1PM",
        img: "/doctor3.png",
        rating: 4.9,
    },
    {
        name: "Dr. Sunita Joshi",
        specialization: "Paediatrician & Child Specialist",
        qualification: "MBBS, MD (Paediatrics)",
        experience: "14 Years",
        timings: "Mon–Sat: 9AM–12PM, 4PM–7PM",
        img: "https://ui-avatars.com/api/?name=Sunita+Joshi&background=dbeafe&color=1d4ed8&size=200",
        rating: 4.7,
    },
];

export default function DoctorsSection() {
    const scrollToAppointment = () =>
        document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });

    return (
        <section id="doctors" className="py-20 lg:py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14 reveal">
                    <span className="section-badge">Our Doctors</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                        Meet Our{" "}
                        <span className="gradient-text">Expert Specialists</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base">
                        Our panel of highly qualified, experienced doctors are dedicated to providing you
                        with the best possible care and treatment.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {doctors.map((doc, i) => (
                        <div
                            key={doc.name}
                            className={`group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:-translate-y-1 reveal delay-${(i + 1) * 100}`}
                        >
                            {/* Doctor photo */}
                            <div className="relative h-52 bg-gradient-to-br from-blue-50 to-sky-100 overflow-hidden">
                                <Image
                                    src={doc.img}
                                    alt={`${doc.name} - ${doc.specialization}`}
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Rating badge */}
                                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                                    <Star size={12} className="fill-amber-400 text-amber-400" />
                                    <span className="text-xs font-bold text-slate-700">{doc.rating}</span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-5 space-y-3">
                                <div>
                                    <h3 className="font-bold text-slate-900 text-base leading-tight">{doc.name}</h3>
                                    <p className="text-blue-600 text-xs font-semibold mt-0.5">{doc.specialization}</p>
                                </div>

                                <div className="space-y-1.5">
                                    <div className="flex items-start gap-2 text-xs text-slate-500">
                                        <GraduationCap size={13} className="shrink-0 mt-0.5 text-blue-400" />
                                        <span>{doc.qualification}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <Star size={13} className="shrink-0 text-blue-400" />
                                        <span>{doc.experience} Experience</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-xs text-slate-500">
                                        <Clock size={13} className="shrink-0 mt-0.5 text-blue-400" />
                                        <span>{doc.timings}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={scrollToAppointment}
                                    className="w-full mt-1 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-bold rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5"
                                >
                                    <Calendar size={13} />
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
