"use client";

const diseases = [
    {
        icon: "🩸",
        title: "Diabetes",
        desc: "Comprehensive diabetes management including blood sugar monitoring, diet counselling, and insulin therapy.",
    },
    {
        icon: "🦋",
        title: "Thyroid Disorders",
        desc: "Expert diagnosis and treatment of hypothyroidism, hyperthyroidism, and thyroid nodules.",
    },
    {
        icon: "❤️",
        title: "Blood Pressure",
        desc: "Evidence-based hypertension management with regular BP monitoring and lifestyle guidance.",
    },
    {
        icon: "🧴",
        title: "Skin Problems",
        desc: "Treatment for acne, eczema, psoriasis, fungal infections, and other dermatological conditions.",
    },
    {
        icon: "💆",
        title: "Hair Fall",
        desc: "Diagnosis and treatment of alopecia, pattern baldness, nutritional deficiencies causing hair loss.",
    },
    {
        icon: "🦴",
        title: "Joint Pain",
        desc: "Expert management of arthritis, osteoporosis, and musculoskeletal pain with modern therapies.",
    },
    {
        icon: "🫁",
        title: "Asthma",
        desc: "Comprehensive asthma care including inhaler therapy, breathing exercises, and trigger management.",
    },
    {
        icon: "🌿",
        title: "Allergy",
        desc: "Allergy testing, immunotherapy, and personalised treatment plans for seasonal and food allergies.",
    },
    {
        icon: "🤒",
        title: "Fever & Infection",
        desc: "Rapid diagnosis and treatment of viral, bacterial, and parasitic infections including typhoid and dengue.",
    },
    {
        icon: "👶",
        title: "Child Care",
        desc: "Paediatric care covering vaccinations, growth monitoring, common childhood illnesses, and nutrition.",
    },
];

export default function DiseasesSection() {
    return (
        <section id="diseases" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14 reveal">
                    <span className="section-badge">Conditions We Treat</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                        Comprehensive{" "}
                        <span className="gradient-text">Healthcare Services</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base">
                        From common illnesses to complex chronic conditions, our specialist team provides
                        expert care across a wide range of medical disciplines.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {diseases.map((d, i) => (
                        <div
                            key={d.title}
                            className={`group relative p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 cursor-default reveal delay-${Math.min((i % 5 + 1) * 100, 500)}`}
                        >
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">{d.icon}</div>
                            <h3 className="font-bold text-slate-800 text-sm mb-2 group-hover:text-blue-700 transition-colors">{d.title}</h3>
                            <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 group-hover:text-slate-600 transition-colors">{d.desc}</p>
                            {/* Hover accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
