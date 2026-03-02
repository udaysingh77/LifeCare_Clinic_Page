"use client";
import { Phone, MessageCircle, Clock, MapPin, Mail } from "lucide-react";

const hours = [
    { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "10:00 AM – 1:00 PM (Emergency only)" },
];

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 lg:py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14 reveal">
                    <span className="section-badge">Reception & Contact</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                        We&apos;re Here <span className="gradient-text">To Help You</span>
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-base">
                        Reach us by phone, WhatsApp, or visit us in person. Our friendly reception team is always ready to assist.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Contact Cards */}
                    <div className="space-y-5 reveal">
                        {/* Phone */}
                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group"
                        >
                            <div className="w-13 h-13 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                <Phone size={24} className="text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">Receptionist</p>
                                <p className="text-lg font-bold text-slate-800">+91 98765 43210</p>
                                <p className="text-xs text-blue-500 font-medium">Click to call now</p>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/919876543210?text=Hello%20LifeCare%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-green-200 transition-all group"
                        >
                            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                <MessageCircle size={24} className="text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">WhatsApp</p>
                                <p className="text-lg font-bold text-slate-800">+91 98765 43210</p>
                                <p className="text-xs text-green-500 font-medium">Chat with us instantly</p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:info@lifecareclinic.in"
                            className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group"
                        >
                            <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                                <Mail size={24} className="text-sky-600" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">Email</p>
                                <p className="text-lg font-bold text-slate-800">info@lifecareclinic.in</p>
                                <p className="text-xs text-sky-500 font-medium">We reply within 24 hours</p>
                            </div>
                        </a>

                        {/* Address */}
                        <div className="flex items-start gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                                <MapPin size={24} className="text-orange-500" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">Address</p>
                                <p className="font-bold text-slate-800">123 Health Avenue,</p>
                                <p className="text-slate-600 text-sm">Near City Hospital, Your City – 400001</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                                    <Clock size={18} className="text-blue-600" />
                                </div>
                                <h3 className="font-bold text-slate-800">Working Hours</h3>
                            </div>
                            <div className="space-y-2">
                                {hours.map((h) => (
                                    <div key={h.day} className="flex justify-between items-center text-sm">
                                        <span className="text-slate-600">{h.day}</span>
                                        <span className="font-semibold text-blue-700 bg-blue-50 px-3 py-0.5 rounded-full text-xs">{h.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="reveal delay-200">
                        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-full min-h-[450px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.785!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1700000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: 450 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="LifeCare Clinic Location"
                                aria-label="Google Map showing LifeCare Multispeciality Clinic location"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
