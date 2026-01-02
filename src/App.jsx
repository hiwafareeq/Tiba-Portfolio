import './App.css'
import Navbar from './components/navbar'
import LandingPage from './pages/LandingPage'
import AboutMe from './pages/AboutMe'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutMe />
    </div>
  )
}

export default App
