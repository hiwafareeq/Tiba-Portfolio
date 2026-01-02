import Line from '../assets/LandingPageLine.svg'
import { FaLinkedin, FaWhatsapp, FaArrowDown } from 'react-icons/fa'

function LandingPage() {
    return (
        <>
        <div className="flex items-center justify-between mt-10">
            <div className="flex-col justify-center items-center gap-5 mx-15">
                <img src={Line} alt="Line" className="m-auto my-5"/>
                    <FaLinkedin className="my-2 text-white text-2xl cursor-pointer hover:text-blue-500" />
                    <FaWhatsapp className="my-2 text-white text-2xl cursor-pointer hover:text-green-500" />
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                <h2 className="text-white text-2xl font-bold">Hi, I'm Tiba</h2>
                <h1 className="text-white text-4xl font-bold">Software Engineer & Data Analyst</h1>
                <div className="flex items-center justify-center gap-5">
                    <button className="bg-black border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black">Get My CV</button>
                    <button className="bg-black border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black">Contact Me</button>
                </div>
            </div>
            <p className="text-white text-sm rotate-[-90deg]">Tiba Jasim Mohammed</p>
        </div>
        <div className="flex items-center justify-center items-center gap-2">
        <h3 className="text-white font-bold">Scroll Down</h3>
        <FaArrowDown className="text-white" />
        </div>
        </>
    )
}

export default LandingPage