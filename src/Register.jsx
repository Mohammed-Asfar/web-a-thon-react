import React from "react";
import BackgroundComponent from "./components/background-snippets-noise-effect11";

export default function RegisterPage({ onNavigate }) {
  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 z-10">
        <BackgroundComponent
          borderColor="rgba(193,1,251,0.12)"
          hoverFillColor="rgba(193,1,251,0.03)"
          hoverStrokeColor="rgba(74,35,113,0.10)"
          hoverGlowColor="rgba(193,1,251,0.15)"
          className="opacity-30"
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/60 flex justify-between items-center py-2 md:py-4 z-50 backdrop-blur-sm px-3 md:px-4">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Web-a-thon Logo"
            className="h-6 md:h-8 lg:h-10 w-auto mr-2 md:mr-4 hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex gap-1 md:gap-5">
          <button
            onClick={() => onNavigate?.("home")}
            className="text-white text-xs md:text-sm px-2 md:px-3 py-1 md:py-2 hover:text-[#c101fb] transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer rounded-md"
          >
            Home
          </button>
        </div>
      </nav>

      {/* Registration Full Message */}
      <div className="max-w-2xl mx-auto mt-32 md:mt-40 lg:mt-48 mb-8 bg-black/70 p-6 md:p-10 rounded-xl shadow-lg relative z-20 text-center">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-[#c101fb] mb-4 animate-pulse">
          Registration Full
        </h1>
        <p className="text-white/80 text-sm md:text-base">
          Thank you for your interest in <span className="text-[#c101fb]">Web-a-thon 2025</span>.  
          Unfortunately, registrations are now closed. Stay tuned for updates on our upcoming events!
        </p>
      </div>
    </>
  );
}
