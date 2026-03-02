"use client";
import { useEffect, useState, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Doctors", href: "#doctors" },
    { label: "Diseases", href: "#diseases" },
    { label: "Facilities", href: "#facilities" },
    { label: "Contact", href: "#contact" },
    { label: "Book Appointment", href: "#appointment" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            // Determine active section
            const sections = NAV_LINKS.map((l) => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (href: string) => {
        setMenuOpen(false);
        const id = href.slice(1);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
                    className="flex items-center gap-2"
                >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center shadow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v5h-2zm0 7h2v2h-2z" fill="white" />
                            <path d="M11 7h2v5h3l-4 4-4-4h3z" fill="white" />
                        </svg>
                    </div>
                    <span className={`font-bold text-lg tracking-tight transition-colors ${scrolled ? "text-blue-700" : "text-white"}`}>
                        LifeCare <span className={scrolled ? "text-sky-500" : "text-sky-200"}>Clinic</span>
                    </span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {NAV_LINKS.slice(0, -1).map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active === link.href.slice(1)
                                    ? "text-blue-600 bg-blue-50"
                                    : scrolled
                                        ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                                        : "text-white/90 hover:text-white hover:bg-white/15"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#appointment"
                        onClick={(e) => { e.preventDefault(); handleNav("#appointment"); }}
                        className="ml-3 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:scale-105 transition-all duration-200"
                    >
                        Book Appointment
                    </a>
                </nav>

                {/* Mobile right actions */}
                <div className="flex lg:hidden items-center gap-3">
                    <a
                        href="tel:+919876543210"
                        className={`p-2 rounded-lg transition-colors ${scrolled ? "text-blue-600 bg-blue-50" : "text-white bg-white/15"}`}
                    >
                        <Phone size={18} />
                    </a>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`p-2 rounded-lg transition-colors ${scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/15"}`}
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-white/98 backdrop-blur-md border-t border-slate-100 px-4 py-3 space-y-1">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                            className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${active === link.href.slice(1)
                                    ? "text-blue-600 bg-blue-50"
                                    : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                                } ${link.label === "Book Appointment" ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white text-center mt-2" : ""}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
