import Logo from "../assets/images/TibaLogo.svg";

function Navbar() {
  return (
    <nav className="sticky top-0 z-20">
      <div className="flex justify-between items-center p-8
        bg-gradient-to-b from-black/80 to-black/0
      ">
        <img src={Logo} alt="Logo" className="w-19 h-13" />

        <ul className="flex gap-7">
          <li className="text-white text-lg cursor-pointer hover:opacity-80">Home</li>
          <li className="text-white text-lg cursor-pointer hover:opacity-80">About</li>
          <li className="text-white text-lg cursor-pointer hover:opacity-80">Services</li>
          <li className="text-white text-lg cursor-pointer hover:opacity-80">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
