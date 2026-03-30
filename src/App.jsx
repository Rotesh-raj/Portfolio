import { LazyMotion, domAnimation, m } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero3D from './components/Hero3D.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Goals from './components/Goals.jsx'
import Contact from './components/Contact.jsx'
import './index.css'

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative">
        <Navbar />
        
        <main className="pt-24 pb-12">
          <section id="home" className="min-h-screen flex items-center justify-center relative">
            <Hero3D />
            <m.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center glass p-12 rounded-3xl max-w-4xl mx-8 z-10 relative backdrop-blur-xl drop-shadow-2xl"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
                Ritesh Raj
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 drop-shadow-lg font-semibold">
                Full Stack Developer
              <br className="md:hidden" />
                <span className="text-blue-400"> | MERN + Java Backend</span>
              </p>
              <p className="opacity-80 mb-12 text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto leading-relaxed">
                Building scalable SaaS products with modern 3D UIs, smooth animations, and exceptional user experiences.
              </p>
              <div className="space-x-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="glass-dark px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all shadow-2xl text-center">
                  Get In Touch
                </a>
                <a 
                  href="/Ritesh.pdf" 
                  download 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all text-center"
                >
                  Download Resume
                </a>
              </div>
            </m.div>
          </section>
          
          <About />
          <Skills />
          <Projects />
          <Education />
          <Goals />
          <Contact />
        </main>
      </div>
    </LazyMotion>
  )
}

export default App

