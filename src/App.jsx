import React, { useState } from "react";
import BackgroundComponent from "./components/background-snippets-noise-effect11";
import { HeroSection } from "./components/hero-section-dark";
import RegisterPage from "./Register";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  if (currentPage === "register") {
    return <RegisterPage onNavigate={navigateTo} />;
  }

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
      <nav className="fixed top-0 w-full bg-black/60 py-2 md:py-4 z-50 backdrop-blur-sm px-3 md:px-4">
        {/* Mobile Layout */}
        <div className="flex justify-between items-center md:hidden">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Web-a-thon Logo"
              className="h-6 w-auto mr-2 hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
            <button
              onClick={() => navigateTo("register")}
              className="inline-flex rounded-full text-center group items-center justify-center bg-gradient-to-tr from-[#c101fb]/20 via-[#4a2371]/30 to-transparent text-white border-[#c101fb]/50 border-[1px] hover:bg-gradient-to-tr hover:from-[#c101fb]/30 hover:via-[#4a2371]/40 hover:to-transparent transition-all py-1.5 px-4">
              Register
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Web-a-thon Logo"
              className="h-10 w-auto mr-4 hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-5 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#about"
              className="text-white text-sm hover:text-[#c101fb] transition-all duration-300 hover:scale-110 px-2 py-1"
            >
              About
            </a>
            <a
              href="#highlights"
              className="text-white text-sm hover:text-[#c101fb] transition-all duration-300 hover:scale-110 px-2 py-1"
            >
              Highlights
            </a>
            <a
              href="#rules"
              className="text-white text-sm hover:text-[#c101fb] transition-all duration-300 hover:scale-110 px-2 py-1"
            >
              Rules
            </a>
            <a
              href="#date"
              className="text-white text-sm hover:text-[#c101fb] transition-all duration-300 hover:scale-110 px-2 py-1"
            >
              Date
            </a>
            <a
              href="#rewards"
              className="text-white text-sm hover:text-[#c101fb] transition-all duration-300 hover:scale-110 px-2 py-1"
            >
              Rewards
            </a>
          </div>
          <div className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
            <button
              onClick={() => navigateTo("register")}
              className="inline-flex rounded-full text-center group items-center justify-center bg-gradient-to-tr from-[#c101fb]/20 via-[#4a2371]/30 to-transparent text-white border-[#c101fb]/50 border-[1px] hover:bg-gradient-to-tr hover:from-[#c101fb]/30 hover:via-[#4a2371]/40 hover:to-transparent transition-all py-3 px-8">
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-20">
        <HeroSection
          title="Welcome to Event"
          subtitle={{
            regular: "WEB-A-THON ",
            gradient: "Transform your ideas into reality",
          }}
          description='"Craft the Web. Conquer the Challenge."'
          ctaText="Register Now"
          ctaHref="#register"
          onCtaClick={() => navigateTo("register")}
          // bottomImage={{
          //   light: "/banner.png",
          //   dark: "/banner.png",
          // }}
          gridOptions={{
            angle: 65,
            opacity: 0.3,
            cellSize: 50,
            lightLineColor: "#c101fb",
            darkLineColor: "#4a2371",
          }}
        />
      </div>

      {/* About */}
      <section
        id="about"
        className="py-16 md:py-24 px-5 max-w-4xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <h2 className="text-xl md:text-2xl mb-6 hover:text-[#c101fb] transition-colors duration-300">
          About
        </h2>
        <p className="text-xs md:text-sm leading-relaxed hover:scale-105 transition-transform duration-300 px-4 md:px-0">
          {`Welcome to Web-a-thon – the ultimate website quest!`}
          <br className="hidden md:block" />
          {`You've got 2 hours on the clock, one topic, and a bunch of surprise quests waiting to crash your comfort zone.`}
          <br className="hidden md:block" />
          {`Every 15 minutes, a new twist appears. Complete it, level up, and keep building your site stronger and sharper. There's no "Round 2" or "next stage" – this is the one and only boss level.`}
          <br className="hidden md:block" />
          {`Your mission? Survive the twists, build your site, and conquer the Web-a-thon.`}
          <br className="hidden md:block" />
          {`Because here, it's not just about coding – it's about adaptation, creativity, and rising to every challenge.`}
        </p>
      </section>

      {/* Highlights */}
      <section
        id="highlights"
        className="py-24 px-5 max-w-4xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <h2 className="text-2xl mb-6 hover:text-[#c101fb] transition-colors duration-300">
          Highlights
        </h2>
        <ul className="text-sm leading-relaxed list-disc list-inside hover:scale-105 transition-transform duration-300">
          <li>FREE REGISTRATION</li>
          <li>Breakfast and Lunch will be provided</li>
          <li>Transport Facilities are available</li>
        </ul>
      </section>

      {/* Rules */}
      <section
        id="rules"
        className="py-24 px-5 max-w-4xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <h2 className="text-2xl mb-6 hover:text-[#c101fb] transition-colors duration-300">
          Rules / Quest Guidelines
        </h2>
        <ul className="text-sm leading-relaxed list-disc list-inside hover:scale-105 transition-transform duration-300">
          <li>1: Team or individual participation allowed.</li>
          <li>2: A team can have a maximum of 3 members</li>
          <li>3: Cross college and Cross year teams are allowed</li>
          <li>4: Only students from 1st, 2nd and 3rd year can participate</li>
          <li>5: Only one laptop is allowed per team</li>
        </ul>
      </section>

      {/* Date */}
      <section
        id="date"
        className="py-24 px-5 max-w-4xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <h2 className="text-2xl mb-6 hover:text-[#c101fb] transition-colors duration-300">
          Event Date
        </h2>
        <p className="text-sm mb-8 hover:scale-105 transition-transform duration-300">
          {" "}
          11th September 2025
        </p>
        <h2 className="text-2xl mb-6 hover:text-[#c101fb] transition-colors duration-300">
          Venue
        </h2>
        <p className="text-sm hover:scale-105 transition-transform duration-300">
          Elite Seminar Hall, Jeppiaar Engineering College
        </p>
      </section>

      {/* Rewards */}
      <section
        id="rewards"
        className="py-24 px-5 max-w-4xl mx-auto text-center animate-fade-in-up relative z-20"
      >
        <h2 className="text-2xl mb-6 hover:text-[#c101fb] transition-colors duration-300">
          Rewards
        </h2>
        <ul className="text-sm leading-relaxed list-disc list-inside hover:scale-105 transition-transform duration-300">
          <li>Certificates for all participants ⚡</li>
          <li>Special recognition for winners 🏅</li>
        </ul>
      </section>
    </>
  );

}
