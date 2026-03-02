"use client";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Calendar, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const DOCTORS = [
    "Dr. Rajesh Sharma (General Physician)",
    "Dr. Priya Mehta (Gynaecologist)",
    "Dr. Amit Verma (Dermatologist)",
    "Dr. Sunita Joshi (Paediatrician)",
];

type FormState = { name: string; email: string; phone: string; doctor: string; date: string; message: string };
type Status = "idle" | "loading" | "success" | "error";

export default function AppointmentForm() {
    const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", doctor: "", date: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            await emailjs.send(
                "service_0lti1mk",     // replace with your EmailJS service ID
                "template_om4omug",    // replace with your EmailJS template ID
                {
                    from_name: form.name,
                    from_email: form.email,
                    phone: form.phone,
                    doctor: form.doctor,
                    date: form.date,
                    message: form.message,
                },
                "iVU1QKBalUiVRGyPg"      // replace with your EmailJS public key
            );
            setStatus("success");
            setForm({ name: "", email: "", phone: "", doctor: "", date: "", message: "" });
        } catch {
            setStatus("error");
        }
        setTimeout(() => setStatus("idle"), 6000);
    };

    const inputClass =
        "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all";

    return (
        <section id="appointment" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14 reveal">
                    <span className="section-badge">Book Appointment</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                        Schedule Your <span className="gradient-text">Consultation</span>
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-base">
                        Fill in the form below and our team will confirm your appointment within 2 hours.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden reveal">
                        {/* Top bar */}
                        <div className="bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-5 flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                <Calendar size={20} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-base">Appointment Request Form</h3>
                                <p className="text-sky-100 text-xs">Mon–Sat · 9AM–8PM</p>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-8 space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                                    <input required name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Email *</label>
                                    <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Phone Number *</label>
                                    <input required type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputClass} />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Preferred Date *</label>
                                    <input required type="date" name="date" value={form.date} onChange={handleChange} min={new Date().toISOString().split("T")[0]} className={inputClass} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Select Doctor *</label>
                                <select required name="doctor" value={form.doctor} onChange={handleChange} className={inputClass}>
                                    <option value="">Choose a doctor…</option>
                                    {DOCTORS.map((d) => <option key={d} value={d}>{d}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Message (Optional)</label>
                                <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Brief description of your concern…" className={`${inputClass} resize-none`} />
                            </div>

                            {/* Status messages */}
                            {status === "success" && (
                                <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-green-800 font-semibold text-sm">Appointment Request Sent!</p>
                                        <p className="text-green-700 text-xs mt-0.5">We&apos;ll confirm your slot within 2 hours via call or email.</p>
                                    </div>
                                </div>
                            )}
                            {status === "error" && (
                                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl">
                                    <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-red-800 font-semibold text-sm">Something went wrong!</p>
                                        <p className="text-red-700 text-xs mt-0.5">Please call us directly at +91 98765 43210 or try again later.</p>
                                    </div>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:opacity-90 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                            >
                                {status === "loading" ? (
                                    <><Loader2 size={18} className="animate-spin" /> Sending…</>
                                ) : status === "success" ? (
                                    <><CheckCircle size={18} /> Request Sent!</>
                                ) : (
                                    <><Calendar size={18} /> Confirm Appointment</>
                                )}
                            </button>

                            <p className="text-center text-xs text-slate-400">
                                By submitting, you agree to our{" "}
                                <a href="#" className="text-blue-500 underline">Privacy Policy</a>.
                                Your data is safe with us.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
