import Logo from "../assets/images/TibaLogo.svg";

function Navbar() {
  const scrollTo = (id) => {
    const target = document.querySelector(id);
    if (target && window.lenis) {
      window.lenis.scrollTo(target, {
        offset: 0,
        duration: 2.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <nav className="sticky top-0 z-20">
      <div
        className="
          flex justify-between items-center p-8
          bg-gradient-to-b from-black/80 to-black/0
        "
      >
        <img src={Logo} alt="Logo" className="w-19 h-13" />

        <ul className="flex gap-7">
          <li onClick={() => scrollTo("#home")} className="nav-link">Home</li>
          <li onClick={() => scrollTo("#about-me")} className="nav-link">About</li>
          <li onClick={() => scrollTo("#skills")} className="nav-link">Skills</li>
          <li onClick={() => scrollTo("#experience")} className="nav-link">Experience</li>
          <li onClick={() => scrollTo("#contact")} className="nav-link">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
