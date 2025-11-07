import React from 'react'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Testimonials from './components/Testimonials'
import { About, Footer } from './components/AboutFooter'

function App() {
  return (
    <div className="font-inter antialiased">
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <About />
      <Footer />
    </div>
  )
}

export default App
