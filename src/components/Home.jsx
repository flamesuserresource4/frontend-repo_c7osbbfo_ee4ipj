import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import FeaturedProducts from './FeaturedProducts'
import Testimonials from './Testimonials'
import { About, Footer } from './AboutFooter'

const Home = () => {
  return (
    <div className="bg-neutral-950 text-white">
      {/* Hero with lighter performance: fixed height and masked gradients */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Infoprodutos premium, experiência impecável.
            </h1>
            <p className="mt-4 max-w-xl text-white/80">
              Loja moderna com checkout personalizado, área do cliente e painel administrativo.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="/produtos" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-white/20 transition hover:-translate-y-0.5 hover:shadow-xl">
                Ver produtos
              </a>
              <a href="#sobre" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10">
                Sobre nós
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FeaturedProducts />
      <Testimonials />
      <About />
      <Footer />
    </div>
  )
}

export default Home
