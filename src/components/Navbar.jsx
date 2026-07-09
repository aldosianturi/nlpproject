import { User } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Dashboard", id: "dashboard" },
    { label: "Detection", id: "detector" },
    { label: "About", id: "about" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setActive(entry.target.id);
        }
        });
    },
    {
        rootMargin: "-120px 0px -60% 0px",
    }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">

      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">

         <img
  src="/newlogo.png"
  alt="HateGuardID Logo"
  className="w-15 h-36 object-contain"
/>

          <div>
            <h1 className="font-bold text-blue-700 text-xl leading-none">
              HateGuardID
            </h1>

            <p className="text-xs text-blue-400 tracking-wider mt-1">
              Natural Language Processing
            </p>
          </div>

        </div>

        {/* Navigation */}
        <div className="relative flex items-center bg-gray-100 rounded-2xl p-1">

          {navItems.map((item) => {
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-6 py-3 text-sm font-medium transition-all"
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-slider"
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-md"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}

                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}

        </div>

      </div>

    </nav>
  );
}