"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            id="scroll-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className={`fixed bottom-24 right-6 z-40 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 hover:scale-110 transition-all duration-300 ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
        >
            <ArrowUp size={18} />
        </button>
    );
}
