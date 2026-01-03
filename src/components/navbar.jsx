import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/images/TibaLogo.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const target = document.querySelector(id);
    if (target && window.lenis) {
      window.lenis.scrollTo(target, {
        offset: 0,
        duration: 2.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-20">
      <div
        className="
          flex items-center
          px-5 py-3 md:px-10 md:py-5
          bg-gradient-to-b from-black/80 to-black/0
        "
      >
        {/* LOGO */}
        <img
          src={Logo}
          alt="Logo"
          className="w-7 ml-4 md:w-8 h-auto ml-4 cursor-pointer"
        />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-7 ml-auto">
          <li onClick={() => scrollTo("#home")} className="text-white text-lg cursor-pointer transition-opacity hover:opacity-80;">Home</li>
          <li onClick={() => scrollTo("#bio")} className="text-white text-lg cursor-pointer transition-opacity hover:opacity-80;">Bio</li>
          <li onClick={() => scrollTo("#about")} className="text-white text-lg cursor-pointer transition-opacity hover:opacity-80;">About</li>
          <li onClick={() => scrollTo("#skills")} className="text-white text-lg cursor-pointer transition-opacity hover:opacity-80;">Skills</li>
          <li onClick={() => scrollTo("#experience")} className="text-white text-lg cursor-pointer transition-opacity hover:opacity-80;">Experience</li>
          <li onClick={() => scrollTo("#contact")} className="text-white text-lg cursor-pointer transition-opacity hover:opacity-80;">Contact</li>
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto text-white text-xl"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur px-6 py-6">
          <ul className="flex flex-col gap-5 text-center">
            <li onClick={() => scrollTo("#home")} className="text-white text-lg cursor-pointer transition-opacity hover:opacity-80;">Home</li>
            <li onClick={() => scrollTo("#bio")} className="text-white text-lg cursor-pointer transition-opacity hover:opacity-80;">Bio</li>
            <li onClick={() => scrollTo("#about")} className="text-white text-lg cursor-pointer transition-opacity hover:opacity-80;">About</li>
            <li onClick={() => scrollTo("#skills")} className="text-white text-lg cursor-pointer transition-opacity hover:opacity-80;">Skills</li>
            <li onClick={() => scrollTo("#experience")} className="text-white text-lg cursor-pointer transition-opacity hover:opacity-80;">Experience</li>
            <li onClick={() => scrollTo("#contact")} className="text-white text-lg cursor-pointer transition-opacity hover:opacity-80;">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
