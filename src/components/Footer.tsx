"use client";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Doctors", href: "#doctors" },
    { label: "Services", href: "#diseases" },
    { label: "Facilities", href: "#facilities" },
    { label: "Book Appointment", href: "#appointment" },
    { label: "FAQ", href: "#faq" },
];

const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/lifecareclinic", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/lifecareclinic", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/lifecareclinic", label: "YouTube" },
    { icon: Twitter, href: "https://twitter.com/lifecareclinic", label: "Twitter" },
];

export default function Footer() {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id.slice(1));
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="bg-slate-900 text-slate-300">
            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-sky-500 py-10 px-4">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div>
                        <h3 className="text-white text-xl font-bold">Ready to book your appointment?</h3>
                        <p className="text-sky-100 text-sm mt-1">Our team is available Mon–Sat, 9AM–8PM</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => scrollTo("#appointment")}
                            className="px-6 py-2.5 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm"
                        >
                            Book Online
                        </button>
                        <a
                            href="tel:+919876543210"
                            className="px-6 py-2.5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-sm"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">LC</span>
                        </div>
                        <span className="font-bold text-white text-lg">LifeCare <span className="text-sky-400">Clinic</span></span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                        Your trusted healthcare partner since 2014. Providing compassionate, world-class medical care to thousands of families.
                    </p>
                    <div className="flex gap-3">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
                    <ul className="space-y-2.5">
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                                    className="text-slate-400 text-sm hover:text-sky-400 transition-colors"
                                >
                                    → {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Specialities</h4>
                    <ul className="space-y-2.5 text-slate-400 text-sm">
                        {["Diabetes & Endocrinology", "Gynaecology & OBG", "Dermatology", "Paediatrics", "General Medicine", "Allergy & Immunology", "Emergency Medicine"].map((s) => (
                            <li key={s} className="hover:text-sky-400 transition-colors cursor-default">→ {s}</li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
                    <ul className="space-y-4">
                        <li>
                            <a href="tel:+919876543210" className="flex items-start gap-3 group">
                                <Phone size={16} className="mt-0.5 text-sky-400 shrink-0" />
                                <div>
                                    <p className="text-sm text-slate-300 group-hover:text-sky-400 transition-colors">+91 98765 43210</p>
                                    <p className="text-xs text-slate-500">Receptionist</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@lifecareclinic.in" className="flex items-start gap-3 group">
                                <Mail size={16} className="mt-0.5 text-sky-400 shrink-0" />
                                <p className="text-sm text-slate-300 group-hover:text-sky-400 transition-colors">info@lifecareclinic.in</p>
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin size={16} className="mt-0.5 text-sky-400 shrink-0" />
                            <p className="text-sm text-slate-300 leading-relaxed">
                                123 Health Avenue, Near City Hospital,<br />Your City – 400001, India
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800 px-4 py-5">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} LifeCare Multispeciality Clinic. All rights reserved.</p>
                    <div className="flex gap-5">
                        <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-sky-400 transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
