import React, { useState } from "react";
import BackgroundComponent from "./components/background-snippets-noise-effect11";
import { Button } from "./components/ui/button";

export default function RegisterPage({ onNavigate }) {
  const [teamSize, setTeamSize] = useState("1");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ teamSize: "1" });

  const handleTeamSizeChange = (e) => {
    setTeamSize(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.teamName?.trim()) {
      newErrors.teamName = "Team name is required";
    } else if (formData.teamName.trim().length < 3) {
      newErrors.teamName = "Team name must be at least 3 characters";
    }

    if (!teamSize) {
      newErrors.teamSize = "Please select team size";
    }

    for (let i = 1; i <= parseInt(teamSize, 10); i++) {
      const name = formData[`memberName${i}`];
      const contact = formData[`memberContact${i}`];
      const email = formData[`memberEmail${i}`];
      const college = formData[`memberCollege${i}`];

      if (!name?.trim()) {
        newErrors[`memberName${i}`] = "Name is required";
      }
      if (!contact?.trim()) {
        newErrors[`memberContact${i}`] = "Contact number is required";
      } else if (!/^[6-9]\d{9}$/.test(contact.trim())) {
        newErrors[`memberContact${i}`] = "Enter valid 10-digit mobile number";
      }
      if (!email?.trim()) {
        newErrors[`memberEmail${i}`] = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        newErrors[`memberEmail${i}`] = "Enter valid email address";
      }
      if (!college?.trim()) {
        newErrors[`memberCollege${i}`] = "College name is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const renderMemberFields = () => {
    const members = [];
    for (let i = 1; i <= parseInt(teamSize, 10); i++) {
      members.push(
        <div
          key={i}
          className="member-section border border-dashed border-white p-2 md:p-3 lg:p-4 mb-3 md:mb-4 lg:mb-5 rounded-lg"
        >
          <h3 className="text-xs md:text-sm mb-2 md:mb-3 lg:mb-4 text-center text-pink-300">
            Team Member {i}
          </h3>

          {/* Name */}
          <label htmlFor={`memberName${i}`} className="block text-xs mb-2">
            Name
          </label>
          <input
            type="text"
            id={`memberName${i}`}
            name={`memberName${i}`}
            required
            value={formData[`memberName${i}`] || ""}
            onChange={handleInputChange}
            className={`w-full p-2 md:p-3 mb-2 bg-white/10 border rounded-lg text-xs md:text-sm text-white placeholder-white/60 outline-none transition-colors ${
              errors[`memberName${i}`]
                ? "border-red-500 focus:border-red-500"
                : "border-white/20 focus:border-[#c101fb] focus:ring-1 focus:ring-[#c101fb]"
            }`}
            placeholder="Enter full name"
          />
          {errors[`memberName${i}`] && (
            <p className="text-red-400 text-xs mb-4">
              {errors[`memberName${i}`]}
            </p>
          )}

          {/* Contact */}
          <label htmlFor={`memberContact${i}`} className="block text-xs mb-2">
            Contact Number
          </label>
          <input
            type="text"
            id={`memberContact${i}`}
            name={`memberContact${i}`}
            required
            value={formData[`memberContact${i}`] || ""}
            onChange={handleInputChange}
            className={`w-full p-2 md:p-3 mb-2 bg-white/10 border rounded-lg text-xs md:text-sm text-white placeholder-white/60 outline-none transition-colors ${
              errors[`memberContact${i}`]
                ? "border-red-500 focus:border-red-500"
                : "border-white/20 focus:border-[#c101fb] focus:ring-1 focus:ring-[#c101fb]"
            }`}
            placeholder="Enter contact number"
          />
          {errors[`memberContact${i}`] && (
            <p className="text-red-400 text-xs mb-4">
              {errors[`memberContact${i}`]}
            </p>
          )}

          {/* Email */}
          <label htmlFor={`memberEmail${i}`} className="block text-xs mb-2">
            Email ID
          </label>
          <input
            type="email"
            id={`memberEmail${i}`}
            name={`memberEmail${i}`}
            required
            value={formData[`memberEmail${i}`] || ""}
            onChange={handleInputChange}
            className={`w-full p-2 md:p-3 mb-2 bg-white/10 border rounded-lg text-xs md:text-sm text-white placeholder-white/60 outline-none transition-colors ${
              errors[`memberEmail${i}`]
                ? "border-red-500 focus:border-red-500"
                : "border-white/20 focus:border-[#c101fb] focus:ring-1 focus:ring-[#c101fb]"
            }`}
            placeholder="Enter email address"
          />
          {errors[`memberEmail${i}`] && (
            <p className="text-red-400 text-xs mb-4">
              {errors[`memberEmail${i}`]}
            </p>
          )}

          {/* College */}
          <label htmlFor={`memberCollege${i}`} className="block text-xs mb-2">
            College Name
          </label>
          <input
            type="text"
            id={`memberCollege${i}`}
            name={`memberCollege${i}`}
            required
            value={formData[`memberCollege${i}`] || ""}
            onChange={handleInputChange}
            className={`w-full p-2 md:p-3 mb-2 bg-white/10 border rounded-lg text-xs md:text-sm text-white placeholder-white/60 outline-none transition-colors ${
              errors[`memberCollege${i}`]
                ? "border-red-500 focus:border-red-500"
                : "border-white/20 focus:border-[#c101fb] focus:ring-1 focus:ring-[#c101fb]"
            }`}
            placeholder="Enter college name"
          />
          {errors[`memberCollege${i}`] && (
            <p className="text-red-400 text-xs mb-4">
              {errors[`memberCollege${i}`]}
            </p>
          )}
        </div>
      );
    }
    return members;
  };

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

      {/* Register Form */}
      <div
        className="form-container max-w-4xl mx-auto mt-20 md:mt-24 lg:mt-32 mb-8 md:mb-12 bg-black/70 p-3 md:p-6 lg:p-10 rounded-xl shadow-lg relative z-20 mx-3 md:mx-auto"
        id="register"
      >
        <h1 className="text-sm md:text-lg lg:text-2xl text-center mb-4 md:mb-6 lg:mb-8 text-shadow-lg animate-pulse px-2">
          Register for Web-a-thon 2025
        </h1>

        {/* REAL FORM (Netlify will process this) */}
        <form
          name="register"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success.html"  // <-- redirect after successful submit
          className="space-y-4 md:space-y-6"
          onSubmit={(e) => {
            if (!validateForm()) {
              e.preventDefault();
            }
          }}
        >
          {/* Required hidden fields */}
          <input type="hidden" name="form-name" value="register" />
          <input type="hidden" name="bot-field" />

          {/* Team Name */}
          <div>
            <label htmlFor="teamName" className="block text-xs mb-2">
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              required
              value={formData.teamName || ""}
              onChange={handleInputChange}
              className={`w-full p-3 md:p-4 bg-white/10 border rounded-lg text-xs md:text-sm text-white placeholder-white/60 outline-none transition-colors ${
                errors.teamName
                  ? "border-red-500 focus:border-red-500"
                  : "border-white/20 focus:border-[#c101fb] focus:ring-1 focus:ring-[#c101fb]"
              }`}
              placeholder="Enter team name"
            />
            {errors.teamName && (
              <p className="text-red-400 text-xs mt-1">{errors.teamName}</p>
            )}
          </div>

          {/* Team Size */}
          <div>
            <label htmlFor="teamSize" className="block text-xs mb-2">
              Team Size
            </label>
            <select
              id="teamSize"
              name="teamSize"
              required
              value={teamSize}
              onChange={(e) => {
                handleTeamSizeChange(e);
                handleInputChange(e);
              }}
              className={`w-full p-3 md:p-4 bg-white/10 border rounded-lg text-xs md:text-sm text-white outline-none transition-colors ${
                errors.teamSize
                  ? "border-red-500 focus:border-red-500"
                  : "border-white/20 focus:border-[#c101fb] focus:ring-1 focus:ring-[#c101fb]"
              }`}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            {errors.teamSize && (
              <p className="text-red-400 text-xs mt-1">{errors.teamSize}</p>
            )}
          </div>

          <div id="membersContainer">{renderMemberFields()}</div>

          <Button
            type="submit"
            className="w-full py-3 md:py-4 bg-[#c101fb] hover:bg-[#4a2371] text-white font-bold rounded-lg transition-colors text-xs md:text-sm"
          >
            Submit Registration
          </Button>
        </form>
      </div>
    </>
  );
}
