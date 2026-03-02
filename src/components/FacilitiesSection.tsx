"use client";

const facilities = [
    { icon: "🔬", title: "Advanced Diagnostics", desc: "State-of-the-art diagnostic equipment for accurate results." },
    { icon: "🧪", title: "In-house Laboratory", desc: "Same-day test reports for blood, urine, and other analyses." },
    { icon: "💊", title: "In-house Pharmacy", desc: "Fully stocked pharmacy with prescribed medicines available on-site." },
    { icon: "🚑", title: "Emergency Care", desc: "24/7 emergency care with rapid response medical team." },
    { icon: "💻", title: "Online Consultation", desc: "Consult our doctors from the comfort of your home via video call." },
    { icon: "🛋️", title: "Comfortable Waiting", desc: "Modern, air-conditioned waiting area with amenities for families." },
    { icon: "🧹", title: "Sanitized Environment", desc: "Strict infection control protocols and daily deep sanitisation." },
];

export default function FacilitiesSection() {
    return (
        <section id="facilities" className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-sky-700 relative overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }}
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14 reveal">
                    <span className="inline-block px-4 py-1.5 bg-white/15 text-sky-200 text-xs font-semibold tracking-widest uppercase rounded-full mb-3 border border-white/20">
                        Our Facilities
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        Modern Infrastructure,{" "}
                        <span className="text-sky-300">Exceptional Care</span>
                    </h2>
                    <p className="text-blue-100 max-w-2xl mx-auto text-base">
                        We invest in the latest technology and infrastructure to ensure you receive the highest standard of medical care.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {facilities.map((f, i) => (
                        <div
                            key={f.title}
                            className={`group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-default reveal delay-${Math.min((i % 4 + 1) * 100, 400)}`}
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">{f.icon}</div>
                            <h3 className="font-bold text-white text-sm mb-2">{f.title}</h3>
                            <p className="text-sky-200 text-xs leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
