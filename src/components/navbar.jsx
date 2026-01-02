import Logo from '../assets/images/TibaLogo.svg'

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 m-4">
        <img src={Logo} alt="Logo" className="w-15 h-15" />
        <ul className="flex gap-7">
            <li className="text-white text-lg">Home</li>
            <li className="text-white text-lg">About</li>
            <li className="text-white text-lg">Services</li>
            <li className="text-white text-lg">Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar