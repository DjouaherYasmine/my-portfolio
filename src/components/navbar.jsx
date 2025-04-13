import { useState, useEffect, useRef } from "react";

const sections = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("About");
  const dotRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section) => {
    setActive(section);
    document.getElementById(section.toLowerCase()).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-6 px-12 py-4 rounded-xl bg-gradient-to-br from-[#0f0f23] to-[#15162e] border border-white/10 relative">
        {sections.map((item, idx) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className={`transition-all duration-300 text-sm font-medium ${
                active === item ? "text-white" : "text-[#C1C2D3]"
              }`}
          >
            {item}
          </button>
        ))}

        {/* Dot */}
        <div
          ref={dotRef}
          className={`absolute bottom-0 h-[6px] w-[6px] bg-white rounded-full transition-all duration-300`}
          style={{
            left: `${sections.indexOf(active) * 67 + 63}px`, // Adjust 90 based on spacing, 30 is half of button width
          }}
        />
      </div>
    </div>
  );
}

