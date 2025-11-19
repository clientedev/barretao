import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FreightCalculator from './components/FreightCalculator'
import Services from './components/Services'
import Consulting from './components/Consulting'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FreightCalculator />
      <Services />
      <Consulting />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
